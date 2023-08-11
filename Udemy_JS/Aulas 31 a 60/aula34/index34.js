// Estruturas de repetição - FOR clássico

// i = index
// for (let i = 0; i <= 5; i++) {
//   const nome = "Linha";
//   console.log(`${nome} ${i}`);
// }

// tabuada
// for (let i = 1; i <= 10; i++) {
//   const tabuada = 3;
//   const resposta = tabuada * i
//   console.log(`${tabuada} x ${i} = ${resposta}`);
// }

// verificar se é par ou impar
// for (let i = 0; i <= 10; i++) {
//   const par = i % 2 === 0 ? 'Par' : 'Impar'
//   console.log(i, par);
// }

//percorrer um array

const frutas = [
  "Maçã",
  "Pera",
  "Uva",
  "Morango",
  "Manga",
  "Melão",
  "Limão",
  "Laranja",
];
for (let i = 0; i < frutas.length; i++) {
  console.log(`Índice ${i}`, frutas[i]);
}
