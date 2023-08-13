// Declaração de funcção (Function hoisting)

falaOi();
function falaOi() {
  console.log("Oie");
}

// First-class objects (Objetos de primeira classe)
// Function Expression

const souUmDado = function () {
  console.log("Sou um dado.");
};
souUmDado();

function executaFuncao(funcao) {
  console.log("Vou executar sua função abaixo");
  funcao();
}
executaFuncao(souUmDado);

//Arrow function

const arrowFunction = () => {
  console.log("Sou uma arrow function");
};
arrowFunction();

// Dentro de um objeto posso ter uma função

const obj = {
  falar() {
    console.log("Estou falando...");
  },
};
obj.falar();
