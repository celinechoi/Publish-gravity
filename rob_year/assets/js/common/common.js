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
  $('.nav-item .link:not(.link--disabled)').click(function () {
    navClose();
  });
}

$(window).on('resize', function () {
  if ($(window).width() <= $mediaResponsiveSize) {
    navClose();
    $('.nav-item .link:not(.link--disabled)').click(function () {
      navClose();
    });
  }
});

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
    'section-11', //1주년 감사 쿠폰
    'section-12', //출석 이벤트
    'section-13', //특별 혜택
    'section-14', //대환장 파티 이벤트
    'section-15', //뽑기 이벤트
    'section-16', //제니 복권 이벤트
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
  $('body').attr('data-section', `${current}`);
}

// ## 최상단으로 이동 버튼
$('.btnTop__img').click(function (e) {
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
  scrollSpy(); //TODO:
  // }

  $(document).on('scroll', function (e) {
    var nowScroll = $(this).scrollTop();
    $('.section').each(function () {
      const thisArea = $(this).outerHeight();
      const thisAreaTop = $(this).offset().top;
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
  });

  if ($(window).scrollTop() > 500) {
    $('.btnTop__img').fadeIn(300);
  } else {
    $('.btnTop__img').fadeOut(300);
  }
  if ($(window).scrollTop() > $('body').outerHeight() - $('.common-footer').outerHeight() - $(window).height()) {
    $('.btnTop__img').addClass('fix');
  } else {
    $('.btnTop__img').removeClass('fix');
  }
});

$(document).ready(function () {
  // ## aos
  AOS.init();

  if ($(window).width() >= $mediaResponsiveSize) {
    navOpen();
  }
});

$(window).on('load', function () {
  //## 전환효과
  $('body').attr('data-loading', 'done');
});

//IOS 100VH지원 스크립트
function mobileVh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
  // console.log(vh);
}

$(window).on('load resize', function () {
  mobileVh();
});
