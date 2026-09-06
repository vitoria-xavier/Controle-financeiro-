const formulario = document.querySelector("form");
const listaLancamentos = document.querySelector("#lista-lancamentos");
const saldoElemento = document.querySelector("#saldo");

let lancamentos = JSON.parse(localStorage.getItem("lancamentos")) || [];

function atualizarTela() {

    listaLancamentos.innerHTML = "";

    let saldo = 0;

    lancamentos.forEach(function(lancamento, index) {

        const novoLancamento = document.createElement("li");

        novoLancamento.textContent =
            lancamento.descricao +
            " - R$ " +
            lancamento.valor.toFixed(2) +
            " - " +
            lancamento.tipo;

        if (lancamento.tipo === "receita") {
            novoLancamento.style.color = "green";
            novoLancamento.style.backgroundColor = "#e8f5e9";
            saldo += lancamento.valor;
        } else {
            novoLancamento.style.color = "red";
            novoLancamento.style.backgroundColor = "#ffebee";
            saldo -= lancamento.valor;
        }

        const botaoExcluir = document.createElement("button");

        botaoExcluir.textContent = "🗑️ Excluir";

        botaoExcluir.addEventListener("click", function() {

            lancamentos.splice(index, 1);

            localStorage.setItem(
                "lancamentos",
                JSON.stringify(lancamentos)
            );

            atualizarTela();

        });

        novoLancamento.appendChild(botaoExcluir);

        listaLancamentos.appendChild(novoLancamento);

    });

    saldoElemento.textContent =
        "Saldo: R$ " + saldo.toFixed(2);
}

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const descricao =
        document.querySelector("#descricao").value.trim();

    const valor =
        Number(document.querySelector("#valor").value);

    const tipo =
        document.querySelector("#tipo").value;

    if (descricao === "" || valor <= 0) {
        alert("Preencha a descrição e informe um valor maior que zero.");
        return;
    }

    const novoLancamento = {
        descricao: descricao,
        valor: valor,
        tipo: tipo
    };

    lancamentos.push(novoLancamento);

    localStorage.setItem(
        "lancamentos",
        JSON.stringify(lancamentos)
    );

    atualizarTela();

    formulario.reset();

});

atualizarTela();
