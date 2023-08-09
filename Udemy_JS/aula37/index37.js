// FOR OF - estrutura de repetição

// const nome = ["Fábio", "Henrique", "Arilete", "Gonçalves"];

// //for clássico
// for (let i = 0; i < nome.length; i++) {
//   console.log(nome[i]);
// }

// console.log("##########");

// //for in (retorna o indice)
// for (let i in nome) {
//   console.log(nome[i]);
// }

// console.log("##########");

// //for of (retorna o valor)
// for (let valor of nome) {
//   console.log(valor);
// }

// console.log("##########");

// // forEach
// nome.forEach(function (valor, indice, array) {
//   console.log(valor, indice, array);
// });

const pessoa = {
  nome: "Fábio",
  sobrenome: "Silva",
};

//for clássico  -geralmente com iteraveis (array ou strings)
//for in - Retorna o indice ou chave (array ou strings ou objetos)
//for of - Retorna o valor em si (iteraveis, array ou strings)
for (let i in pessoa) {
  console.log(i, pessoa[i]);
}
for (let valor of pessoa) {
}
