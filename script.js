
const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const descricao = document.querySelector("#descricao").value;
    const valor = document.querySelector("#valor").value;
    const tipo = document.querySelector("#tipo").value;

    console.log("Descrição:", descricao);
    console.log("Valor:", valor);
    console.log("Tipo:", tipo);

});
