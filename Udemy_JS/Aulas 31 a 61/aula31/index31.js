// Diferenças entre LET e VAR
const verdadeira = true

// let tem escopo de bloco {...bloco}
// var só tem escopo de função

let nome = 'Luiz' // criando
var nome2 = 'Luiz'

// let nome2 = 'Otávio'

if(verdadeira){
  let nome = 'João'
  let nome3 = 'Otávio'// criando
  console.log(nome, nome3)

  if(verdadeira){
    let nome = 'Fábio'
    console.log(nome, nome3)
  }
}