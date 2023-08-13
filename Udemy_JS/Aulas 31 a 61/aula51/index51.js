// retorno de funções - return
// termina a função

// function soma(a, b) {
//   return a + b;
// }

// console.log(soma(213,45))

// document.addEventListener("click", function () {
//   document.body.style.backgroundColor = "red";
// });

/***************************************** */

// function criaPessoa(nome, sobrenome) {
//   return {
//     nome,
//     sobrenome,
//   };
// }
// const p1 = criaPessoa('Luiz', 'Otávio')
// const p2 = criaPessoa('Fábio', 'Silva')
// const p3 = criaPessoa('Henrique', 'Gonçalves')

// console.log(typeof p3)
// console.log(typeof p2)

/**************************************** */

// function falaFrase(comeco) {
//   function falaResto(resto) {
//     return comeco + " " + resto;
//   }
//   return falaResto;
// }

// const olaMundo = falaFrase("Olá");
// console.log(olaMundo("mundo"));

//***************************** */

// function duplica(n) {
//   return n * 2;
// }

// function triplica(n) {
//   return n * 3;
// }

// function quadriplica(n) {
//   return n * 4;
// }

// console.log(duplica(2))
// console.log(triplica(2))
// console.log(quadriplica(2))

//***************************** */

function criaMultiplicador(multiplicador) {
  // multiplicador
  return function (n) {
    return n * multiplicador;
  };
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);
console.log(duplica(5));
console.log(triplica(3));
console.log(quadriplica(7));
