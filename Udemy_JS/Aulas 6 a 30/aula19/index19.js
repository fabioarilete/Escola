// valor primitivo e valor por referencia

/* Tipos de dados primitivos: (Imutáveis) 
String, Number, Boolean, Undefined, Null, (Bigint, Symbol)
Valores copiados
*/
//          0123
// let nome = 'Luiz'
// nome[0] = 'R'
// console.log(nome[0])

// let a = 'A'
// let b = a // cópia
// console.log(a, b)
// a = 'Outra Coisa'
// console.log(a, b)

// Referência - (mutável)
// Array, Object, function
// Valores passados por referencia

// let a = [1,2,3]
// let b = [...a]
// let c = b
// console.log(a,b)

// a.push(4)
// console.log(a,b)

// b.pop()
// console.log(a,b)

// c.push('Luiz')
// console.log(a,b,c)

const a = {
  nome: "Luiz",
  sobrenome: "Otávio",
};
const b = { ...a };
a.nome = "João";
console.log(a);
console.log(b);
