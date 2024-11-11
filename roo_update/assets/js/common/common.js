const $mediaResponsiveSize = 1024 + 0.02;

//네비게이션
function navClose() {
  $('.nav__dimmed').stop().fadeOut();
  $('.nav__toggle').stop().removeClass('on');
  $('.nav__toggle').attr('title', '네비게이션 열기');
  $('.header').stop().removeClass('active');
}
function navOpen() {
  $('.nav__dimmed').stop().fadeIn();
  $('.nav__toggle').stop().addClass('on');
  $('.nav__toggle').attr('title', '네비게이션 닫기');
  $('.header').stop().addClass('active');
}
if ($(window).width() <= $mediaResponsiveSize) {
  $('.nav-item .link').click(function () {
    navClose();
  });
}
$('.nav__toggle').click(function () {
  if ($(this).hasClass('on')) {
    navClose();
  } else {
    navOpen();
  }
});

//섹션별로 data-aos-delay='none' 항목에 순차적으로 delay 적용
$('.section').each(function () {
  //기본값 delayBasic, 간격 delay 로 딜레이 증분
  const delayBasic = 100,
    delay = 100;
  $(this)
    .find('[data-aos-delay="none"]')
    .each(function (index) {
      $(this).attr('data-aos-delay', index * delay + delayBasic);
    });
});

// ## scrollSpy function
function scrollSpy() {
  var sections = [
    'section-1', //
    'section-2', //
    'section-3', //
    'section-4', //
  ];
  var current = '';
  for (var i = 0; i < sections.length; i++) {
    if ($('#' + sections[i]).offset().top <= $(window).scrollTop() + 1) {
      //float 고려 +1 처리
      current = sections[i].split('section-')[1];
    }
  }
  // console.log(current);
  $('.nav .nav-item .link').removeClass('active');
  $(`.nav .nav-item a[href="#section-${current}"]`).addClass('active');
}

// ## 최상단으로 이동 버튼
$('.btnTop').click(function (e) {
  e.preventDefault();
  $('html,body').animate({ scrollTop: 0 }, 200);
});

// ## 이동버튼 부드러운 스크롤
// $('.').click(function (e) {
// const goto = $(this).attr('href');
// $('html,body').animate({ scrollTop: $(goto).offset().top + 1 }, 300);
// return false;
// });

// # 스크롤 이벤트 정의
$(document).scroll(function (e) {
  // if ($(window).width() >= $mediaResponsiveSize) {
  scrollSpy();
  // }
  if ($(window).scrollTop() > 500) {
    $('.btnTop').fadeIn(300);
  } else {
    $('.btnTop').fadeOut(300);
  }
  if ($(window).scrollTop() > $('body').outerHeight() - $('.common-footer').outerHeight() - $(window).height()) {
    $('.btnTop').addClass('fix');
  } else {
    $('.btnTop').removeClass('fix');
  }
});

$(document).ready(function () {
  // ## aos
  AOS.init();

  // 231016 주석
  // if ($(window).width() >= $mediaResponsiveSize) {
  //   navOpen();
  // }
});

// 231016 주석
// $(window).on('load', function () {
//   //## 전환효과
// });

//IOS 100VH지원 스크립트
function mobileVh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
  // console.log(vh);
}

$(window).on('load resize', function () {
  mobileVh();
});
