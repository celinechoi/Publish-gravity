const $mediaResponsiveSize = 1024 + 0.02;
let $windowW;
$windowW = $(window).outerWidth();

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

$(window).on('load', function () {
  // ##### 전환효과
  $('body').attr('data-loading', 'done');
  // 윈도우 폭을 기준으로 navOpen을 호출하는 함수.
  if ($(window).width() >= $mediaResponsiveSize) {
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
    'section1', //도람 왕국 소개
    'section2', //도람족 소개
    'section3', //도람 왕국 컨텐츠
    'section4', //도람족의 선물
    'section5', //업데이트 기념 쿠폰
  ];
  var current = '';
  for (let i = 0; i < sections.length; i++) {
    if ($windowW <= 1024) {
      // MO
      if ($('#' + sections[i]).offset().top - 180 <= $(window).scrollTop()) {
        current = sections[i];
      }
    } else {
      // PC
      if ($('#' + sections[i]).offset().top - 200 <= $(window).scrollTop()) {
        //float 고려 +1 처리
        current = sections[i];
      }
    }
  }
  $('.nav .nav-item > a.link').removeClass('active');
  $('.nav .nav-item > a[href="#' + current + '"]').addClass('active');
  // if (current == 'section1') {
  //   if (!$(this).find('#tabContent1').find('.bg .stone').hasClass('on')) {
  //     $(this).find('#tabContent1').find('.bg .stone').addClass('on');
  //   }
  // } else {
  //   return false;
  // }
}

function scrollToSection(offset, diff) {
  $('html,body')
    .stop()
    .animate({ scrollTop: $(offset).offset().top + diff }, 100);
  return false;
}
$('.nav__list .nav-item .link, .scroll-down').each(function () {
  $(this).on('click', function () {
    // console.log('^^^^');
    // if ($(window).width() > $mediaResponsiveSize) {
    //   if ($(this).attr('href') == '#section1') {
    //     scrollToSection('#section1', 210);
    //   } else if ($(this).attr('href') == '#section3') {
    //     scrollToSection('#section3', 170);
    //   } else if ($(this).attr('href') == '#section4') {
    //     scrollToSection('#section4', 50);
    //   } else if ($(this).attr('href') == '#section5') {
    //     scrollToSection('#section5', 50);
    //   }
    // } else {
    //   // mo
    // }
  });
});

// ## 최상단으로 이동 버튼
$('.btnTop').click(function (e) {
  e.preventDefault();
  $('html,body').animate({ scrollTop: 0 }, 200);
});

// # 스크롤 이벤트 정의
$(document).scroll(function (e) {
  scrollSpy();
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
  // 현재 섹션에 들어와 있는지 확인
  var nowScroll = $(this).scrollTop();
  $('.update--1').each(function () {
    const thisArea = $(this).outerHeight();
    const thisAreaTop = $(this).offset().top;
    if (nowScroll >= thisAreaTop) {
      // on
      $(this).addClass('fix');
      if (nowScroll > thisAreaTop + thisArea - 500) {
        // on 했다가 아래로 내릴 때 bottom 추가
        $(this).addClass('bottom');
      } else {
        // on 했다가 위로 올릴 때 bottom 삭제
        $(this).removeClass('bottom');
      }
    } else {
      // off
      $(this).removeClass('fix');
    }
  });
});

//IOS 100VH지원 스크립트
function mobileVh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}

$(window).on('load resize', function () {
  mobileVh();
});

$(document).ready(function () {
  // ## aos
  AOS.init();
});
