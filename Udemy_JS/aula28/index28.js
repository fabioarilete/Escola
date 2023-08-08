// Objeto Date
// Função Construtora sempre começa com a palavra new
//e a palavra seguinte é com letra Maiuscula
// pesquisar no MDN Mozila a função Date e ler a documentação para entender melhor
// const tresHoras = 60 * 60 * 3 * 1000
// const umDia = 60 * 60 * 24 * 1000
// const data = new Date(0 + tresHoras + umDia); // 01/01/1970 TimeStamp unix ou época Unix

// mes começa do zero
// ano, mes, dia, hora, min, seg, milesimo de seg
// const data = new Date(2023, 7, 8, 15, 14, 27)

// o mais utilizado
// const data = new Date()
// console.log('Dia', data.getDate())
// console.log('Mês', data.getMonth()+1) // Começa com 0
// console.log('Ano', data.getFullYear())
// console.log('Hora', data.getHours())
// console.log('Minuto', data.getMinutes())
// console.log('Segundo', data.getSeconds())
// console.log('MilSeg', data.getMilliseconds())
// console.log('Dia Semana', data.getDay()+1) // Começa com 0
// console.log(data.toString())
// console.log(Date.now())

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());
  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
