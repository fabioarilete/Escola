// Tratando e lançando erros (try, catch, throw)

// try {
//   console.log(naoExisto)
// } catch(err){
//   console.log('naoExisto não existe')
//   console.log(err)
// }

function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("x e y precisam ser numeros!");
  }
  return x + y;
}

try {
  console.log(soma(1, 6));
  console.log(soma(1, "4"));
} catch (error) {
  // console.log(error);
  console.log("Alguma coisa mais amigavel pro usuario.");
}
