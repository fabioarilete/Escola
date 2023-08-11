// let num1 = 1500.5689
// let num2 = 2.5

//apenas transforma variavel para impressão no console.log
// console.log(num1.toString() + num2)

// muda uma variavel do tipo numero para string
// num1 = num1.toString()

// console.log(typeof num1)

// converter para numero binario
// console.log(num1.toString(2))

// regular casas decimais
// console.log(num1.toFixed(2))

let num1 = 9.34578;

//arredonda para baixo
// let num2 = Math.floor(num1)

// arredonda para cima
// let num2 = Math.ceil(num1)

//arredonda para o numero mais próximo
// let num2 = Math.round(num1)

//pegar o maior numero de uma sequencia
// console.log(Math.max(1,2,3,4,5,6,12,13,45,56,951,287,265))

//pegar o menor numero de uma sequencia
// console.log(Math.min(1,2,3,4,5,6,12,13,45,56,-951,287,265))

// gerar um número aleatório
const aleatorio = Math.random() * (100 - 1) + 5;
console.log(Math.round(aleatorio));

// raiz quadrada
let num3 = 220;
console.log(Math.sqrt(num3));
console.log(num3 ** 0.5); //mais facil

// exibir PI
console.log(Math.PI.toFixed(4));

// potenciação
console.log(Math.pow(2, 10));
console.log(2 ** 10); // mais facil

console.log(100 / 0); // infinity
