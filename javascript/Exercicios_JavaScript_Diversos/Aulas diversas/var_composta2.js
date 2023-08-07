let num = [5, 8, 2, 9, 3];
num.sort();
num.push(1);

console.log(num)
console.log(`O vetor tem ${num.length} posições.`);
console.log(`O primeiro valor do vetor é ${num[0]}`);
num.sort();
console.log(num);
let n = 4;
let pos = num.indexOf(n);
if (pos == -1) {
  console.log(`O valor ${n} não foi encontrado!`);
} else {
  console.log(`O valor ${n} está na posição ${pos}`);
}
