// Strings

 //              01234567 
let umaString = 'O rato roeu a roupa do rei de roma.';
console.log(umaString[4]) // pegar um indice de uma string
console.log(umaString.charAt(6)) // pegar um indice de uma string
console.log(umaString.indexOf('texto'))
console.log(umaString.lastIndexOf('texto'))
console.log(umaString.match(/[a-z]/g)) //expressões regulares
console.log(umaString.search(/[x]/g))
console.log(umaString.replace(/r/, '#')) //substituir
console.log(umaString.replace(/r/g, '#')) //substituir
console.log(umaString.length) //tamanho da string em indices
console.log(umaString.slice(2, 6)) // recortar 
console.log(umaString.split(' ', 4)) //dividir as strings
console.log(umaString.toUpperCase()) //transformar string em letras maiusculas
console.log(umaString.toLocaleLowerCase()) //transformar string em letras minusculas

//ler documentações do Javascript = site MDN mozila