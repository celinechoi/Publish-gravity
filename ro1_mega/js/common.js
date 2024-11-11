$(document).ready(function () {
  AOS.init({
    offset: 120,
  });
});

$(window).on('load', function () {
  //## 전환효과
  $('body').attr('data-loading', 'done');
  $('html,body').animate({ scrollTop: 0 });
});

$(document).on('scroll', function (e) {
  var nowScroll = $(this).scrollTop();
  if (nowScroll > 500) {
    $('.topBtn').stop().fadeIn();
  } else {
    $('.topBtn').stop().fadeOut();
  }
});
