function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");
  if (fano.value.length == 0 || fano.value > ano) {
    alert("[ERRO] Verifique os dados informados. Tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "fotomenino.png");
      } else if (idade < 21) {
        // jovem
        img.setAttribute("src", "fotogaroto.png");
      } else if (idade < 50) {
        // adulto
        img.setAttribute("src", "fotohomem.png");
      } else {
        // idoso
        img.setAttribute("src", "fotoidoso.png");
      }
    } else {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "fotomenina.png");
      } else if (idade < 21) {
        // jovem
        img.setAttribute("src", "fotogarota.png");
      } else if (idade < 50) {
        // adulto
        img.setAttribute("src", "fotomulher.png");
      } else {
        // idoso
        img.setAttribute("src", "fotoidosa.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} de ${idade} anos de idade!`;
    res.appendChild(img);
  }
}
