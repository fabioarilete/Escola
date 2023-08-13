// Break e Continue
//funciona em todas estruturas de repetição :
//FOR IN - FOR OF - FOR CLÁSSICO - WHILE - DO WHILE

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let numero of numeros) {
  if (numero === 2 || numero === 4) {
    console.log(`Pulei o número ${numero}`);
    continue;
  } else if (numero === 5) {
    console.log(`Fiz o break no número ${numero}`);
    break;
  }
  console.log(numero);
}
