function carregar() {
  let nome = document.getElementById('txtnome').value;
  let salario = document.getElementById('salario').value;
  let res = document.getElementById('res')

  //salario.toLocaleString('pt-BR')
  let sal = Number(salario)
  

  res.innerHTML = `Bem vindo ${nome} o seu salário é de ${(new Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(sal))} `
}