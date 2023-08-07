function carregar() {
let nome = document.getElementById('txtnome').value
let idade = document.getElementById('txtidade').value
let res = document.getElementById('res')

res.innerHTML = `Seja muito bem-vindo <strong>${nome}</strong>`
}