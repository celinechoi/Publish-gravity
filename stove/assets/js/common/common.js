const $mediaResponsiveSize = 1024 + 0.02;
$(window).on('load', function () {
  // ##### 전환효과
  $('body').attr('data-loading', 'done');
});

// ##### IOS 100VH지원 스크립트
function mobileVh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}

$(window).on('load resize', function () {
  mobileVh();
});

// ## window resize
let $windowW;
$windowW = $(window).outerWidth();

// ## 최상단으로 이동 버튼
$('#btnTop').click(function (e) {
  e.preventDefault();
  $('html,body').animate({ scrollTop: 0 }, 200);
});

// ## open window popup
function openWindowPop(url, name) {
  var options = 'top=10, left=10, width=935, height=1000, status=no, menubar=no, toolbar=no, resizable=no';
  window.open(url, name, options);
}

// # 스크롤 이벤트 정의
$(document).scroll(function (e) {
  // ### top button
  if ($(window).scrollTop() > 500) {
    $('#btnTop').fadeIn(300);
  } else {
    $('#btnTop').fadeOut(300);
  }
  if ($(window).scrollTop() > 10) {
    $('#header').addClass('top');
  } else {
    $('#header').removeClass('top');
  }
  if ($(window).scrollTop() > $('body').outerHeight() - $('.footer').outerHeight() - $(window).height()) {
    $('#btnTop').addClass('absolute');
  } else {
    $('#btnTop').removeClass('absolute');
  }
});

$(document).ready(function () {
  // ## aos
  AOS.init();
});

// ##### footer grade mark
$('.grade-frame').on('mouseenter', function () {
  $('.grade-arrow').addClass('open');
  $('.grade-frame__table').stop().fadeIn();
});

$('.grade-frame').on('mouseleave', function () {
  $('.grade-arrow').removeClass('open');
  $('.grade-frame__table').stop().fadeOut();
});

// ##### menu
$('.nav__list').on('mouseenter', function () {
  $('.header .nav__bg').stop().fadeIn(200);
  $('.nav__list--lnb').stop().fadeIn();
});
$('.nav__list').on('mouseleave', function () {
  $('.header .nav__bg').stop().fadeOut(200);
  $('.nav__list--lnb').stop().fadeOut();
});

// lnb에 active 붙이기
// var active = window.location.href.split('2024/')[1].split('#')[0];
// // console.log(active);
// $('.sidebar-list a').each(function () {
//   const href = $(this).attr('href');
//   if (active == href) {
//     $(this).parent().addClass('active');
//     $(this).closest('.depth2').addClass('active');
//   }
// });
// <!-- 240703 수정 -->
const wlhLastLength = window.location.href.split('/').length - 1;
const active = window.location.href.split('/')[wlhLastLength].split('#')[0];
$('.sidebar-list a').each(function () {
  const href = $(this).attr('href');
  if (href.toLowerCase().indexOf(active.toLowerCase()) != -1) {
    $(this).parent().addClass('active');
    $(this).closest('.depth2').addClass('active');
  }
});

// ##### sidebar
$('.sidebar-list .depth2 > a').on('click', function () {
  if (!$(this).parent().hasClass('active')) {
    $(this).parent().addClass('active');
  } else {
    $(this).parent().removeClass('active');
  }
  $(this).parent().find('.sidebar-sub-list').stop().slideToggle();
  return false;
});

$('.sidebar-list .depth2').each(function (i, v) {
  if ($(v).hasClass('active')) {
    $(v).find('.sidebar-sub-list').stop().slideDown();
  } else {
    $(v).find('.sidebar-sub-list').stop().slideUp();
  }
  // return false;
});

// ##### TAB
//탭흉내 제외..
$('.tab:not(.tabMimic)').each(function (e) {
  $(this)
    .find('.tab-link')
    .click(function (e) {
      var active = $(this).attr('data-hash');
      e.preventDefault();
      $(this).parent().parent().find('.tab-link').removeClass('active');
      $(this).parent().parent().parent().find('.tab-content').hide();
      $(this).addClass('active');
      $('#' + active).show();

      //위치조정, 히스토리 조정
      const hash = event.target.getAttribute('data-hash');
      history.pushState(null, null, `#${hash}`);
      $('body,html').animate({ scrollTop: $('#' + active).offset().top - 200 }, 0);
    });
});

// 라그시작하기 / 시스템소개에서 해쉬에 탭id값이 있을 경우 탭 보여주기.
$(window).on('load', function () {
  var active = window.location.href.split('#')[1];

  // console.log(active);
  if (active != null) {
    $('.tab .tab-link').removeClass('active');
    $('.tab .tab-content').hide();

    $(`.tab .tab-link[data-hash=${active}]`).addClass('active');
    $('#' + active).show();

    //위치조정
    $('body,html').animate({ scrollTop: $('#' + active).offset().top - 200 }, 0);
    return false;
  }
});

// ##### FAQ
$('.faq-box__list > li').each(function (i, v) {
  // console.log('i', i, 'v', v);
  if ($(v).hasClass('active')) {
    // console.log($(this), 'this');
    $(this).find('.faq-box__inner.a').slideDown();
  }
});

$('.faq-box__list > li').on('click', function () {
  // $('.faq-box__list > li').removeClass('active');
  // $('.faq-box__list > li').find('.faq-box__inner.q').removeClass('active');
  // $('.faq-box__list > li').find('.faq-box__inner.a').stop().slideUp();
  if (!$(this).hasClass('active')) {
    $(this).addClass('active');
    $(this).find('.faq-box__inner.q').addClass('active');
    $(this).find('.faq-box__inner.a').stop().slideDown();
  } else {
    $(this).removeClass('active');
    $(this).find('.faq-box__inner.q').removeClass('active');
    $(this).find('.faq-box__inner.a').stop().slideUp();
  }
});

// ##### iFrame
// function getIframe(selector) {
//   var obj = $(selector).get(0);
//   var objDoc = obj.contentWindow || obj.contentDocument;
//   return objDoc;
// }
// var ifrm = getIframe('#basicSysFirst');
// console.log(ifrm);
// $('#basicSysFirst').contents().find('#content').html();
// console.log('iuiui');
