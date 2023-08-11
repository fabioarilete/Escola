// Arrays (Básico)
//     indices:    0       1        2
const alunos = ['Luiz', 'Maria', 'Fábio'];
console.log(alunos)

alunos[0] = 'Eduardo'  // editar array
console.log(alunos)
alunos[3] = 'Luiza' // acrescentar array
console.log(alunos)

alunos.push('Otávio')  // adicionar elementos ao final do array
alunos.push('Roberto')
alunos.push('Carlos')
console.log(alunos)

alunos.unshift('Mateus') // Adiciona no incio do Array
alunos.unshift('Henrique')
console.log(alunos)

const removido = alunos.pop() // remover o ultimo elemento do array e tambem colocar numa variavel para salva-lo
console.log(removido)

console.log(alunos.length) // saber quantos elementos tem o array
console.log(alunos)
console.log(alunos[1])
console.log(alunos[2])

const removidoInicio = alunos.shift() // remove elemento do inicio do Array e tambem colocar numa variavel para salva-lo
console.log(removidoInicio)
console.log(alunos)

delete alunos[1] // exclui o elemento mas seu indice permanece como undefined
console.log(alunos)

console.log(alunos[50]) // mesmo sem existir um elemento o Javascript atribui um tipo de dado (Undefined)
console.log(alunos.slice(0,-1))
console.log(typeof alunos)
console.log(alunos instanceof Array)


