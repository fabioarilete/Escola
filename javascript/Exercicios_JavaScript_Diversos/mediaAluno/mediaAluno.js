function calcular() {
  let nome = document.getElementById('txtnome').value;
  let nota1 = document.getElementById('nota1').value;
  let nota2 = document.getElementById('nota2').value;
  let res = document.getElementById('res')
  let n1 = Number(nota1)
  let n2 = Number(nota2)
  let media = (n1 + n2) / 2

  res.innerHTML = `${nome}, sua média escolar foi de ${media}`
}