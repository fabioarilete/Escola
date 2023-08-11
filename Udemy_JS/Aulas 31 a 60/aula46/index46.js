// setInterval e setTimeout

function mostraHora() {
  let data = new Date(0);
  return data.toLocaleTimeString("pt-BR");
}

const timer = setInterval(function () {
  console.log(mostraHora());
}, 1000);

setTimeout(function () {
  clearInterval(timer);
}, 5000);

setTimeout(function () {
  console.log("Olá Mundo!");
}, 5000);
