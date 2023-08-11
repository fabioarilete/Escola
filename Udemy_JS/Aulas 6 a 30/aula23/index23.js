// Avaliação de curto-circuito (Short-Circuit)

/* 

&& -> false && true -> false 'o valor mesmo'
|| -> true || false -> vai retornar 'o valor verdadeiro'

FALSY
* false
0
'' "" ``
null / undefined
NaN

*/
// quando utilizado &&
// function falaOi() {
//   return "Oi";
// }
// const vaiExecutar = '';
// console.log(vaiExecutar && falaOi());

//quando utilizado ||
// console.log(0 || false || null || "Luiz Otávio" || true);

// const corUsuario = 'vermelho';
// const corPadrao = corUsuario || 'preto';

// console.log(corPadrao)

const a = 0;
const b = null;
const c = "false"; // pegadinha, pois isso é verdadeiro
const d = false;
const e = NaN;
console.log(a || b || c || d || e);
