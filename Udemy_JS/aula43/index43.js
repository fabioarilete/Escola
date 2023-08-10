/*Escreva uma função que recebe um número e retorne
o seguinte:
- Numero é divisivel por 3 = Fizz
- Numero é divisivel por 5 = Buzz
- Numero é divisivel por 3 e 5 = FizzBuzz
- Numero não é divisivel por 3 e 5 = Retorna o próprio numero
- Checar se o numero é realmente um numero
- Use a função com numeros de 0 a 100 
 */

function fizzBuzz(numero) {
  if (typeof numero !== "number") return numero;
  if (numero % 5 === 0 && numero % 3 === 0) return "fizzBuzz";
  if (numero % 3 === 0) return "Fizz";
  if (numero % 5 === 0) return "Buzz";
  return `O número ${numero} não é divisivel por 3 e nem por 5.`;
}
for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i));
}
