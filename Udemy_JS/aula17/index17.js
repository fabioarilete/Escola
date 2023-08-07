/**************************** */
// function saudacao(nome) {
//   return `Bom dia ${nome}!`
// }

// const variavel = saudacao("Fábio");
// console.log(variavel)
/*********************************** */

/********************************* */
// function soma(x, y) {
//   const resultado = x + y;
//   return resultado;
// }
// console.log(soma(2,2))
// console.log(soma(4,6))
// console.log(soma(12,48))
// console.log(soma(57,53))

/********************************* */

// function soma(x=0, y=0) {
//   const resultado = x + y;
//   return resultado;
// }

// console.log(soma(2,2))
//console.log(resultado) // não consigo acessar alguma variavel de dentro de funções
// const resultado = soma('Fábio',' Henrique')
// console.log(resultado)

/********************************* */
// Função anonima
// const raiz = function (n) {
//   return n ** 0.5;
// };

// console.log(raiz(9))
// console.log(raiz(16))
// console.log(raiz(25))
// console.log(raiz(30))
// console.log(raiz(100))
/*************************** */

// Arrow function
// const raiz = (n)=> {
//   return n ** 0.5;
// };

// console.log(raiz(9))
// console.log(raiz(16))

/************************** */

// Arrow function - simplificada (com uma operação e parametro só)
const raiz = (n) => n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
