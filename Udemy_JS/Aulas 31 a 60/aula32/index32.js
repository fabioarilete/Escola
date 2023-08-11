// Atribuição via desestruturação (Arrays)

// let a = "A"; // B
// let b = "B"; // C
// let c = "C"; // A

// const numeros = [b, c, a];
// [a, b, c] = numeros;

// console.log(a, b, c);

/********************************************** */

// ...Rest Operator  nessa estrutura.
// .. Spread em outras estruturas
// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

// const [um, dois, tres, ...resto] = numeros

// console.log(um, dois, tres)
// console.log(resto)

/********************************************* */

// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [um, , tres, , cinco, , sete] = numeros;

// console.log(um, tres, cinco);

/**************************************** */
//  indices:         0          1          2
//    ||          0  1  2    0  1  2    0  1  2
const numeros = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// const [,[,,seis]] = numeros
// console.log(seis);

const [lista1, lista2, lista3] = numeros;
console.log(lista2[2]);
