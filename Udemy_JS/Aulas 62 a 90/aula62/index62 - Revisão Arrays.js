// Revisão do básico em Arrays
// //                  0        1        2  indexado.....
// const nomes = ["Eduardo", "Maria", "Joana"];  // criando array
// nomes[2] = "João"; // alterando o valor de um elemento do array
// delete nomes[2]; // deletando um elemento do array
// console.log(nomes);

// Valores por referencia
// const nomes = ["Eduardo", "Maria", "Joana"];
// const novo = nomes;

// novo.pop() // exclui o ultimo elemento do array
// console.log(nomes) // dessa forma, oque for alterado em um altera o outro
// console.log(novo)

//compiando o array - para que não seja alterado a cópia
// const nomes = ["Eduardo", "Maria", "Joana"];
// const novo = [...nomes]; // usando o spread operator

// novo.pop() // exclui o ultimo elemento do array
// console.log(nomes) // dessa forma, oque for alterado não altera o outro
// console.log(novo)

//saber quantos elementos tem um array
// indices         0         1        2
// const nomes = ["Eduardo", "Maria", "Joana"];
// nomes.pop()// remove o ultimo elemento do array
// nomes.shift()// remove o primeiro elemento do array
// nomes.push('Fábio')// adiciona um elemento ao final do array
// nomes.unshift('Alfredo') // adiciona um elemento no inicio do array

// console.log(nomes)
// console.log(nomes.length) // quantos elementos tem
// console.log(nomes.indexOf('Joana')) // posicção do indice do elemento mencionado

//fatiar os elementos do array - slice
// const nomes = ["Eduardo", "Maria", "Joana", "Wallace", "Rosana"];
// const novo = nomes.slice(0, -1); // fatiar meu array
// console.log(novo);

// converter uma string em um array - split
// const nome = 'Luiz Otávio Miranda'
// const nomes = nome.split(' ')
// console.log(nomes)

// converter um array em uma string
const nomes = ["Luiz", "Otávio", "Miranda"];
const nome = nomes.join(" "); // usando um separador - nesse caso foi usado o espaço
console.log(nome);
