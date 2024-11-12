$(document).ready(function () {
  AOS.init({
    offset: 120,
  });

  // 페이지 진입 시 메뉴에 on 클래스 추가
  var pageName = $('html').data('page');
  $(`.nav .link[data-page="${pageName}"]`).addClass('active');
});

// 페이지 리사이즈처리
window.addEventListener('resize', function () {
  // AOS refresh
  setTimeout(function () {
    AOS.refresh();
  }, 500);
});

$(window).on('load', function () {
  //## 전환효과
  $('body').attr('data-loading', 'done');
});

$(document).on('scroll', function (e) {
  var nowScroll = $(this).scrollTop();
  // background fixed effect
  $('.section-content').each(function () {
    const thisArea = $(this).outerHeight();
    const thisAreaTop = $(this).offset().top - 100;
    if (nowScroll > thisAreaTop) {
      $(this).addClass('fix');
      if (nowScroll > thisAreaTop + thisArea) {
        $(this).addClass('bottom');
      } else {
        $(this).removeClass('bottom');
      }
    } else {
      $(this).removeClass('fix');
    }
  });
  // top button
  if (nowScroll > 500) {
    $('.topBtn').stop().fadeIn();
  } else {
    $('.topBtn').stop().fadeOut();
  }
});

// 블라인드 활성화 함수.
function open_blind() {
  $('.blind, .blind--btnClosed').fadeIn(300);
}
// 블라인드 비 활성화 함수.
function closed_blind() {
  $('.blind, .blind--btnClosed').fadeOut(300);
}

// 팝업 닫기
function closed_popup() {
  $('html').css('overflow-y', 'auto');
  closed_blind();
  $('.popup').fadeOut(300);
}
// ESC 추가
$(document).keyup(function (e) {
  if (e.key === 'Escape') {
    closed_popup();
  }
});

// 팝업 열기
$(document).on('click', '.popup-link', function () {
  var targetPopupName = $(this).attr('data-popup');
  open_blind();
  $('html').css('overflow-y', 'hidden');
  $('.' + targetPopupName).fadeIn();
  return false;
});
