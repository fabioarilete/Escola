// Escreva uma função que recebe dois números e
//retorne o maior deles

function maiorMenor(a, b) {
  if (a > b) {
    console.log(`O número ${a} é maior que o número ${b}`);
  } else if (b > a) {
    console.log(`O número ${b} é maior que o número ${a}`);
  } else if (a === b) {
    console.log(`O número ${a} é igual ao número ${b}`);
  }
}
maiorMenor(10, 5);

console.log("########################");

function max(x, y) {
  if (x > y) return x;
  return y;
}
console.log(max(10, 5));

console.log("########################");

function max(x, y) {
  return x > y ? x : y;
}
console.log(max(10, 5));

console.log("########################");

const max2 = (x, y) => {
  return x > y ? x : y;
};
console.log(max2(15, 5));

console.log("########################");

const max3 = (x, y) => (x > y ? x : y);
console.log(max3(15, 5));
