// FOR IN - estrutura de repetição
// for in lê os indices ou chaves do objeto

const pessoa = {
  nome: "Luiz",
  sobrenome: "Otávio",
  idade: 30,
};
// console.log(pessoa.nome);
// console.log(pessoa["nome"]);

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}

// const frutas = ["melão", "laranja", "uva"];

// for (let i in frutas){
//   console.log(frutas[i])

// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }
// }
