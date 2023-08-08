/* Operadores Lógicos

&& -> AND -> E (todas as expressões precisam ser verdadeiras para retornar true)
|| -> OR -> OU (uma expressão ou outra precisa ser verdadeira pra retornar true)
! -> NOT -> NÃO (inverte o resultado)
*/

const and = true && true && true;
const or = true || false;
const not = !true;

console.log(and);
console.log(or);
console.log("Exibindo negação - operador NOT !");
console.log(not);

/****************************** */
const usuario = "Luiz"; // form usuario digitou
const senha = "123456"; // form usuario digitou

//                       true                true
const vaiLogar = usuario === "Luiz" && senha === "123456";

console.log("Usuário vai logar?");
console.log(vaiLogar);
/****************************** */
