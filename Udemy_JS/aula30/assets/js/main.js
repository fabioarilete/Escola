// Meu jeito... rsrsrs

// const h1Data = document.querySelector(".textoData");
// const data = new Date();

// function zeroAEsquerda(num) {
//   return num >= 10 ? num : `0${num}`;
// }

// const diaSemana = data.getDay();
// const dia = zeroAEsquerda(data.getDate());
// const mes = data.getMonth();
// const ano = data.getFullYear();
// const hora = zeroAEsquerda(data.getHours());
// const min = zeroAEsquerda(data.getMinutes());

// let diaSemanaTexto;
// if (diaSemana === 0) {
//   diaSemanaTexto = "domingo";
// } else if (diaSemana === 1) {
//   diaSemanaTexto = "segunda-feira";
// } else if (diaSemana === 2) {
//   diaSemanaTexto = "terça-feira";
// } else if (diaSemana === 3) {
//   diaSemanaTexto = "quarta-feira";
// } else if (diaSemana === 4) {
//   diaSemanaTexto = "quinta-feira";
// } else if (diaSemana === 5) {
//   diaSemanaTexto = "sexta-feira";
// } else if (diaSemana === 6) {
//   diaSemanaTexto = "sábado";
// }

// let mesTexto;
// if (mes === 0) {
//   mesTexto = "janeiro";
// } else if (mes === 1) {
//   mesTexto = "fevereiro";
// } else if (mes === 2) {
//   mesTexto = "março";
// } else if (mes === 3) {
//   mesTexto = "abril";
// } else if (mes === 4) {
//   mesTexto = "maio";
// } else if (mes === 5) {
//   mesTexto = "junho";
// } else if (mes === 6) {
//   mesTexto = "julho";
// } else if (mes === 7) {
//   mesTexto = "agosto";
// } else if (mes === 8) {
//   mesTexto = "setembro";
// } else if (mes === 9) {
//   mesTexto = "outubro";
// } else if (mes === 10) {
//   mesTexto = "novembro";
// } else if (mes === 11) {
//   mesTexto = "dezembro";
// }

// h1Data.innerHTML = `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano} ${hora}:${min}`;

// método mais fácil ....rsrsrs

// const h1Data = document.querySelector(".textoData");
// const data = new Date();
// const locale = "pt-br";
// const option = {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
//   hour: "numeric",
//   minute: "numeric",
// };
// h1Data.innerHTML = data.toLocaleDateString(locale, option);

// Outra opção, com menos código ....rsrsrsr

const h1Data = document.querySelector(".textoData");
const data = new Date();

function getDiaSemanaTexto(numeroDiaSemana) {
  const diaSemanaTexto = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado",
  ];
  return diaSemanaTexto[numeroDiaSemana];
}

function getNomeMes(numeroMes) {
  const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  return meses[numeroMes];
}

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
  const diaSemana = data.getDay();
  const mes = data.getMonth();

  const dia = zeroAEsquerda(data.getDate());
  const ano = data.getFullYear();

  const nomeDia = getDiaSemanaTexto(diaSemana);
  const nomeMes = getNomeMes(mes);

  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  return `${nomeDia}, ${dia} de ${nomeMes} de ${ano}  ${hora}:${min}`;
}

console.log(criaData(data));

h1Data.innerHTML = criaData(data);
