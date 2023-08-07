function tabuada() {
  /*var tab = 7;
for (var c = 1; c <= 10; c++) {
  var res = c * tab;
  console.log(`${tab} x ${c} = ${res}`);*/

  let num = document.getElementById("txtnum");
  let tab = document.getElementById("seltab");
  if (num.value.length == 0) {
    alert("Por favor, digite um número!");
  } else {
    let n = Number(num.value);
    tab.innerHTML = "";
    for (let c = 1; c <= 10; c++) {
      let item = document.createElement("option");
      item.text = `${n} x ${c} = ${n * c}`;
      item.value = `tab${c}`; // para outras linguagens isso é importante, pois identifica o item escolhido
      tab.appendChild(item);
    }
  }
}
