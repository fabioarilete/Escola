// Luiz Otávio Miranda tem 30 anos, pesa 84 kg
// tem 1.8 m de altura e seu IMC é de 25.925925925925924
// Luiz Otávio nasceu em 1993


const nome = 'Luiz Otávio'
const sobrenome = 'Miranda'
const idade = 30
const peso = 84
const alturaEmMt = 1.80

let imc = peso / (alturaEmMt*alturaEmMt)
let anoNascimento = 2023 - idade

// template strings `${}`

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`)
console.log(`tem ${alturaEmMt.toFixed(2)} m de altura e seu IMC é de ${imc.toFixed(2)}`)
console.log(`${nome} nasceu em ${anoNascimento}.`)