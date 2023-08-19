// Map - Mapeando o array

//* dobre os numeros
// indices       0   1   2  3  4  5  6  7  8  9 .............
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numerosDobrados = numeros.map((valor) => {
//   return `O dobro de ${valor} é ${valor * 2}`;
// });
// console.log(numerosDobrados);

//Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const nomes = pessoas.map((obj) => {
  return obj.nome;
});

const idades = pessoas.map((obj) => {
  return { idade: obj.idade };
});

//não alterando o objeto original
const ids = pessoas.map((obj, indice) => {
  const newObj = { ...obj };
  newObj.id = indice + 1;
  return newObj;
});

console.log(pessoas);
console.log(ids);
console.log(idades);
console.log(nomes);
