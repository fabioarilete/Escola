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