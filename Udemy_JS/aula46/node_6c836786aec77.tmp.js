// setInterval e setTimeout

function mostraHora() {
  let data = new Date();
  return data.toLocaleTimeString("pt-BR");
}

setInterval(function () {
  console.log(mostraHora());
}, 1000);
