// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive (Letrar maiusculas e minusculas fazem diferença)
// Não podemos redeclarar constantes com let
// Não pode modificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE CONST !

// let nome = 'João';
// nome = 'Otávio'
// console.log(nome)

// + = Adição
// - = Subtração
// * = Multiplicação
// / = Divisão

// String = Text (entre aspas)
// Number = Número

const primeiroNumero = '5'
const segundoNumero = 10
const resultado = primeiroNumero * segundoNumero
const resultadoDuplicado = resultado * 2

let resultadoTriplicado = resultado * 3
resultadoTriplicado = resultadoTriplicado + 5



console.log(resultado)
console.log(resultadoDuplicado)

console.log(resultadoTriplicado)

console.log(primeiroNumero)

console.log(primeiroNumero + segundoNumero)

console.log(typeof (primeiroNumero + segundoNumero))