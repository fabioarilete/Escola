// Operador Ternário -   ? :

const pontuacaoUsuario = 999;

const nivelUsuario =
  pontuacaoUsuario >= 1000 ? "Usuário Vip!" : "Usuário Normal!";

const corUsuario = "Pink";
const corPadrao = corUsuario || "Preta";

console.log(nivelUsuario, corPadrao);

// if(pontuacaoUsuario>=1000){
//   console.log('Usuário Vip!')
// }else{
//   console.log('Usuário Normal!')
// }
