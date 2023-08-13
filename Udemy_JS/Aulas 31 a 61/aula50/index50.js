// variavel especial 'arguments' que sustenta todos os argumentos enviados
//só funciona com funções dednominadas 'function'

// function funcao() {
//   let total = 0;
//   for (let argumento of arguments) {
//     total += argumento;
//   }
//   console.log(total);
// }
// funcao(1, 2, 3, 4, 5, 6, 7, 8, 9);

//***************************************** */
//              argumentos
function funcao(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
}
funcao(1, 2, 3); //argumentos

//***************************************** */

function soma(a = 0, b = 2, c = 4) {
  console.log(a + b + c);
}
soma(2, undefined, 20);

//***************************************** */
//com Objetos

function pessoa({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}
pessoa({ nome: "Fábio", sobrenome: "Silva", idade: 40 });

/******************************************* */
// com arrays

function pessoa2([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3);
}

pessoa2(["Fábio", "Silva", 40]);

/*********************************************** */

// function conta(operador, acumulador, ...numeros) {
//   for (let numero of numeros) {
//     if (operador === "+") acumulador += numero;
//     if (operador === "-") acumulador -= numero;
//     if (operador === "/") acumulador /= numero;
//     if (operador === "*") acumulador *= numero;
//   }
//   console.log(acumulador);
// }
// conta("+", 1, 20, 30, 40, 50);

/*********************************************** */
//function expression
const conta = function (operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "/") acumulador /= numero;
    if (operador === "*") acumulador *= numero;
  }
  console.log(acumulador);
};
conta("+", 1, 20, 30, 40, 50);

/*************************************************** */
