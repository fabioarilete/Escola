// Estrutura de repetição WHILE AND DO WHILE
// usamos quando não sabemos a quantidade de vezes será repetido

// const nome = "Luiz";

// let i = 0;
// while (i < nome.length) {
//   console.log(nome[i]);
//   i++;
// }
// console.log("Segue a vida...");

// sortear numero aleatório - while
// while verifica primeiro a condição para depois executar
function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}

/********************************* */
console.log("############");

//do while executa primeiro e depois checa a condição

do {
  rand = random(min, max);
  console.log(rand);
} while (rand !== 10);
