const formulario = document.querySelector("form");
const listaLancamentos = document.querySelector("#lista-lancamentos");
const saldoElemento = document.querySelector("#saldo");

let saldo = 0;

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const descricao = document.querySelector("#descricao").value.trim();
    const valor = Number(document.querySelector("#valor").value);
    const tipo = document.querySelector("#tipo").value;

    if (descricao === "" || valor <= 0) {
        alert("Preencha a descrição e informe um valor maior que zero.");
        return;
    }

    const novoLancamento = document.createElement("li");

    novoLancamento.textContent =
        descricao + " - R$ " + valor.toFixed(2) + " - " + tipo;

    if (tipo === "receita") {
        novoLancamento.style.color = "green";
        novoLancamento.style.backgroundColor = "#e8f5e9";
    } else {
        novoLancamento.style.color = "red";
        novoLancamento.style.backgroundColor = "#ffebee";
    }

    const botaoExcluir = document.createElement("button");

    botaoExcluir.textContent = "🗑️ Excluir";

    botaoExcluir.addEventListener("click", function() {

        if (tipo === "receita") {
            saldo -= valor;
        } else {
            saldo += valor;
        }

        saldoElemento.textContent =
            "Saldo: R$ " + saldo.toFixed(2);

        novoLancamento.remove();

    });

    novoLancamento.appendChild(botaoExcluir);

    listaLancamentos.appendChild(novoLancamento);

    if (tipo === "receita") {
        saldo += valor;
    } else {
        saldo -= valor;
    }

    saldoElemento.textContent =
        "Saldo: R$ " + saldo.toFixed(2);

    formulario.reset();

});
