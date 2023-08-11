/* Extruturas condicionais

IF, ELSE IF, ELSE

*/

// entre 0 - 11 horas - Bom Dia!
// entre 12 - 17 horas - Boa Tarde!
// entre 18 - 24 horas - Boa Noite!

// if pode ser usado sozinho
// else - precisa de um if para inicializar
//posso ter vários else if's na condição
// só posso ter um else na checagem
// podemos usar condições sem else if

const hora = 50

if(hora>=0 && hora <= 12){
  console.log('Bom dia!')
}else if(hora > 12 && hora <= 18){
  console.log('Boa tarde!')
}else if(hora > 18 && hora <= 24){
  console.log('Boa noite!')
}else{
  console.log('Olá, tenha um bom dia!')
}