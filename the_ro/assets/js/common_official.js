const $mediaResponsiveSize = 1080 + 0.02;

// bgm audio
const audio = document.getElementById('bgmAudio');
function bgmPlay() {
  $('.bgmBtn').addClass('active');
  audio.muted = false;
  audio.play();
  $('.bgmBtn').attr('title', 'BGM 음소거');
}
function bgmPause() {
  $('.bgmBtn').removeClass('active');
  audio.muted = true;
  audio.pause();
  $('.bgmBtn').attr('title', 'BGM 듣기');
}

$('.bgmBtn').click(function () {
  if ($(this).hasClass('active')) {
    bgmPause();
  } else {
    bgmPlay();
  }
});

//네비게이션
function navClose() {
  if ($(window).width() <= 1440) {
    // tm
    $('.header').stop().removeClass('active');
  }
  $('.nav__toggle').stop().removeClass('on');
  $('.nav__toggle').attr('title', '네비게이션 열기');
}
function navOpen() {
  if ($(window).width() <= 1440) {
    // tm
    $('.header').stop().addClass('active');
  }
  $('.nav__toggle').stop().addClass('on');
  $('.nav__toggle').attr('title', '네비게이션 닫기');
}
if ($(window).width() <= 1440) {
  $('.nav-item .link:not(.link--disabled)').click(function () {
    navClose();
  });
}

$(window).on('resize', function () {
  $('.nav__wrap').css('max-height', $(window).outerHeight() - 20);
  if ($(window).width() <= 1440) {
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

$('.nav__list .nav-item .link').on('click', function () {
  const href = $(this).attr('href');
  // console.log('스크립트로 이동하기' + href);
  if ($(window).width() <= $mediaResponsiveSize) {
  } else {
    if (href == '#section-reservation') {
      $('html,body').animate({ scrollTop: $(href).offset().top + 250 }, 500);
    } else if (href == '#section-intro') {
      $('html,body').animate({ scrollTop: $(href).offset().top + 300 }, 500);
    } else {
      $('html,body').animate({ scrollTop: $(href).offset().top + 80 }, 500);
    }
    return false;
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

$('.nav__wrap').css('max-height', $(window).outerHeight() - 20);

function scrollSpy2() {
  const sections = [
    'sectionMain', //
    'section-intro', //
    'section-feature',
  ];
  const gauges = ['LV.1', 'LV.5', 'LV.10'];

  let current = '';
  for (let i = 0; i < sections.length; i++) {
    if ($('#' + sections[i]).offset().top <= $(window).scrollTop() + 300) {
      // float 고려 +1 처리
      current = sections[i].split('section-')[1];
      $('.progress-bar__level').html(gauges[i]);

      let widthPercentage = (i / (sections.length - 1)) * 100;
      $('.progress-list').css('width', `${widthPercentage}%`);
    }
  }

  $('.nav .nav-item .link').removeClass('active');
  if ($(`.nav .nav-item a[href="#section-${current}"]`).length > 0) {
    $(`.nav .nav-item a[href="#section-${current}"]`).addClass('active');
  }
  $('.char-frame').attr('data-nowsection', `${current}`);
  $('body').attr('data-section', `${current}`);
}

// ## 최상단으로 이동 버튼
$('.btnTop').click(function (e) {
  e.preventDefault();
  $('html,body').animate({ scrollTop: 0 }, 500);
});

// # 스크롤 이벤트 정의

// ##### 트리거 요소 정의
const $charItem = $('#charItem');
const $anchors = $('.anchor');

$(window).scroll(function (e) {
  scrollSpy2();
  let nowScroll = $(this).scrollTop();
  // ##### 트리거 섹션 구현
  $('.trigger-section').each(function () {
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

  //마지막섹션 도달
  let offsetScroll;
  if (window.outerWidth > 1080) {
    // pc
    offsetScroll = $('.section--feature').offset().top - 67 - 102 - 180;
    if (nowScroll > offsetScroll) {
      $charItem.addClass('arrivalFinal');
      $('.section--feature .char-wrap').addClass('init');
    } else {
      $charItem.removeClass('arrivalFinal');
      $('.section--feature .char-wrap').removeClass('init');
    }
  } else {
    if ($('body').outerHeight() - $('.section--feature').outerHeight() - $(window).height() - 180 <= nowScroll) {
      $charItem.addClass('arrivalFinal');
      // console.log('innnn');
      $('.char1-mo').stop().fadeIn('fast');
    } else {
      // console.log('reset');
      $charItem.removeClass('arrivalFinal');
      $('.char1-mo').stop().fadeOut('fast');
    }
  }

  if ($(window).scrollTop() > 500) {
    $('.btnTop').fadeIn(300);
    $('.header .nav').addClass('sub');
  } else {
    $('.btnTop').fadeOut(300);
    $('.header .nav').removeClass('sub');
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
  if ($(window).width() > 1440) {
    navOpen();
  } else {
    //모바일브금정지
    bgmPause();
    audio.currentTime = 0;
  }
});

//SCROLL 플러그인
$('html').easeScroll({
  frameRate: 100, //기본 60
  animationTime: 500, //속도. 기본 1000
  stepSize: 100, //기본 120
  pulseAlgorithm: !0,
  pulseScale: 3, //기본 8
  pulseNormalize: 1,
  accelerationDelta: 20,
  accelerationMax: 1,
  keyboardSupport: !0,
  arrowScroll: 50,
});

$(window).on('load', function () {
  //## 전환효과
  $('body').attr('data-loading', 'done');
});

//IOS 100VH지원 스크립트
function mobileVh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}

$(window).on('load resize', function () {
  mobileVh();
});

// ##### 직업소개
var infoSwiper = new Swiper('#infoSwiper .swiper-container', {
  autoplay: {
    delay: 1800,
  },
  autoplay: false,
  speed: 300,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  loop: false,
  // loop: true,
  touchRatio: 0,
  centeredSlides: true,
  slidesPerView: 'auto',

  navigation: {
    nextEl: '#infoSwiper .swiper-button--next',
    prevEl: '#infoSwiper .swiper-button--prev',
  },
  pagination: {
    el: '#infoSwiper .swiper-paging',
    clickable: true,
    bulletActiveClass: 'swiper-paging-item-active',
    bulletClass: 'swiper-paging-item',

    renderBullet: function (index, className) {
      if (index === 0) {
        return '<span class="' + className + '">' + '검사' + '</span>';
      } else if (index === 1) {
        return '<span class="' + className + '">' + '법사' + '</span>';
      } else if (index === 2) {
        return '<span class="' + className + '">' + '도둑' + '</span>';
      } else if (index === 3) {
        return '<span class="' + className + '">' + '복사' + '</span>';
      } else if (index === 4) {
        return '<span class="' + className + '">' + '상인' + '</span>';
      } else {
        return '<span class="' + className + '">' + '궁수' + '</span>';
      }
    },
  },
  on: {
    setTransition: function () {
      $('#infoSwiper .swiper-slide').removeClass('now');
      $('#infoSwiper .swiper-slide.swiper-slide-active').addClass('now');
    },
  },
});

$('.js-tab').each(function (i, v) {
  $(v)
    .find('.js-tab-link')
    .click(function (e) {
      var active = $(this).attr('data-hash');
      e.preventDefault();
      $(this).parent().parent().find('.js-tab-link').removeClass('active');
      $(v).find('.js-tab-content').hide();
      $(this).addClass('active');
      $('#' + active).show();

      return false;
    });
});

// ##### 게임 특징
const featureSwiper = new Swiper('.section--feature #featureSwiper .swiper-container', {
  speed: 500,
  loop: true,
  autoplay: true,
  pagination: {
    el: '.section--feature #featureSwiper .swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.section--feature .swiper-button--next',
    prevEl: '.section--feature .swiper-button--prev',
  },
});

// ##### 가로모드
$(window).on('load', function () {
  goToPortraitMode();
});

$(window).on('resize', function () {
  goToPortraitMode();
});

function goToPortraitMode() {
  const windowW = window.innerWidth;
  const windowH = window.innerHeight;
  if (windowH <= windowW) {
    // console.log(`${windowW}, ${windowH} 넌 지금 가로다 `);
    $('.goToPortraitMode').addClass('show');
    setTimeout(function () {
      $('.goToPortraitMode').removeClass('show');
    }, 6000);
  } else {
    $('.goToPortraitMode').removeClass('show');
  }
  // if (windowH <= windowW) {
  //   // console.log(`${windowW}, ${windowH} 넌 지금 가로다 `);
  //   $('.goToPortraitMode').stop().fadeIn(300); //addClass('show');
  //   setTimeout(function () {
  //     $('.goToPortraitMode').stop().fadeOut(300); //removeClass('show');
  //   }, 6000);
  // } else {
  //   $('.goToPortraitMode').stop().fadeOut(300); //removeClass('show');
  // }
}
