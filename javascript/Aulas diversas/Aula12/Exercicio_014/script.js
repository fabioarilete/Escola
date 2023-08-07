function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();

  msg.innerHTML = `<strong>Agora são ${hora} horas.</strong>`;
  if (hora >= 0 && hora < 12) {
    // Bom dia
    img.src = "fotomanha.png";
    document.body.style.background = "#B8C5BE";
  } else if (hora >= 12 && hora < 18) {
    //Boa tarde
    img.src = "fototarde.png";
    document.body.style.background = "#FAAF92";
  } else {
    //Boa noite
    img.src = "fotonoite.png";
    document.body.style.background = "#285574";
  }
}
