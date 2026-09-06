
const formulario = document.querySelector("form");
const listaLancamentos = document.querySelector("#lista-lancamentos");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const descricao = document.querySelector("#descricao").value;
    const valor = document.querySelector("#valor").value;
    const tipo = document.querySelector("#tipo").value;

    const novoLancamento = document.createElement("li");

    novoLancamento.textContent =
        descricao + " - R$ " + valor + " - " + tipo;

    listaLancamentos.appendChild(novoLancamento);

    formulario.reset();

});
