$('.cadastros').click(function(){
  $('.menuLateral ul .itensCadastros').toggleClass('mostra');
});

$('.gestao').click(function(){
  $('.menuLateral ul .itensGestao').toggleClass('mostra');
});

$('.configuracoes').click(function(){
  $('.menuLateral ul .itensConfiguracoes').toggleClass('mostra');
});

$('.btnAbre').click(function(){
  $('.menuLateral').toggleClass('mostra');
});

$('.btnFecha').click(function(){
  $('.menuLateral').toggleClass('mostra');
});

$('.cadastros').mouseover(function(){
  $('.menuLateral ul .seta1').toggleClass('gira');
});

$('.cadastros').mouseout(function(){
  $('.menuLateral ul .seta1').toggleClass('gira');
});

$('.gestao').mouseover(function(){
  $('.menuLateral ul .seta2').toggleClass('gira');
});

$('.gestao').mouseout(function(){
  $('.menuLateral ul .seta2').toggleClass('gira');
});

$('.configuracoes').mouseover(function(){
  $('.menuLateral ul .seta3').toggleClass('gira');
});

$('.configuracoes').mouseout(function(){
  $('.menuLateral ul .seta3').toggleClass('gira');
});

const $menuLateral = $('.menuLateral');
$(document).mouseup(e=>{
  if(!$menuLateral.is(e.target)
  && $menuLateral.has(e.target).length === 0)
{
  $menuLateral.removeClass('mostra');
}
});

const aba_home = document.querySelector('.home')
const aba_cadastroMp = document.querySelector('.cadastroMp')
const aba_cadastroMo = document.querySelector('.cadastroMo')
const aba_novo = document.querySelector('.novo')
const aba_pesquisar = document.querySelector('.pesquisar')
const aba_editar = document.querySelector('.editar')
const aba_relatorios = document.querySelector('.relatorios')
const aba_imprimir = document.querySelector('.imprimir')
const aba_markup = document.querySelector('.markup')
const aba_unidades = document.querySelector('.unidades')
const aba_geral = document.querySelector('.geral')
const if_principal = document.querySelector('.if_principal')

aba_home.addEventListener('click', (evt)=>{
  abrirPagina(evt.target,"../html/home.html")
})

aba_cadastroMp.addEventListener('click', (evt)=>{
  abrirPagina(evt.target,"../html/cadastroMp.html")
})

aba_cadastroMo.addEventListener('click', (evt)=>{
  abrirPagina(evt.target,"../html/cadastroMo.html")
})

aba_novo.addEventListener('click', (evt)=>{
  abrirPagina(evt.target,"../html/novo.html")
})

aba_pesquisar.addEventListener('click', (evt)=>{
  abrirPagina(evt.target,"../html/pesquisar.html")
})

aba_editar.addEventListener('click', (evt)=>{
  abrirPagina(evt.target,"../html/editar.html")
})

aba_relatorios.addEventListener('click', (evt)=>{
  abrirPagina(evt.target,"../html/relatorios.html")
})

aba_imprimir.addEventListener('click', (evt)=>{
  abrirPagina(evt.target,"../html/imprimir.html")
})

aba_markup.addEventListener('click', (evt)=>{
  abrirPagina(evt.target,"../html/markup.html")
})

aba_unidades.addEventListener('click', (evt)=>{
  abrirPagina(evt.target,"../html/unidades.html")
})

aba_geral.addEventListener('click', (evt)=>{
  abrirPagina(evt.target,"../html/geral.html")
})


const abrirPagina = (el,url)=>{
  const abas = [...document.querySelectorAll('.aba')]
  abas.forEach(e=>{
    e.classList.remove("abaSelecionada")
  })
    el.classList.add("abaSelecionada")
    window.open(url, "if_principal")
}