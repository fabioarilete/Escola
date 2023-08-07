//  objetos

// const pessoa1 = {
//   nome: "Luiz",
//   sobrenome: "Miranda",
//   idade: 25,
// };
// console.log(pessoa1.nome)
// console.log(pessoa1.sobrenome)
// console.log(pessoa1.idade)

// const pessoa2 = {
//   nome: "Fábio",
//   sobrenome: "Henrique",
//   idade: 41,
// };
// console.log(pessoa2.nome)
// console.log(pessoa2.sobrenome)
// console.log(pessoa2.idade)

/****************************************** */

// function criaPessoa(nome, sobrenome, idade) {
//   return {nome, sobrenome, idade};
// }
// const pessoa1 = criaPessoa('Luiz','Otávio', 25)
// const pessoa2 = criaPessoa('João','Silva', 32)
// const pessoa3 = criaPessoa('André','Oliveira', 14)
// const pessoa4 = criaPessoa('Maria','Santos', 67)
// const pessoa5 = criaPessoa('Antonio','Souza', 56)
// console.log(pessoa1.idade)

/****************************************** */

const pessoa1 = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 25,

  fala() {
    console.log(`${this.nome} ${this.sobrenome} está falando oi.... `);
    console.log(`A minha idade atual é ${this.idade}.`);
  },

  incrementaIdade() {
    this.idade++;
  },
};
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
