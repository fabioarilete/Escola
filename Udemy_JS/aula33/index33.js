// Atribuição via desestruturação (Objetos)

const pessoa = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 30,
  endereco: {
    rua: "Av. Brasil,",
    numero: 320,
  },
}; // posso alterar o nome da variavel e colocar um valor padrao
const { nome: teste = "Não existe", sobrenome, idade, ...resto } = pessoa;
const {
  endereco: { rua: r = 12345, numero },
} = pessoa;
console.log(teste, sobrenome);
console.log(r, numero);
console.log(resto);
