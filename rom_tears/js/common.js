// ## fullpage
$('#fullpage').fullpage({
  licenseKey: '831K9-MRXP9-2OKA8-JF0NH-TGXPM',
  anchors: ['section-main', 'section-update1', 'section-update2', 'section-update3', 'section-update4', 'section-event1', 'section-event2', 'section-footer'],
  menu: '.nav__list',
  autoScrolling: true,
  scrollingSpeed: 600,
  fixedElements: '#header, .btnTop',
  normalScrollElements: '.nav',
  responsiveWidth: 1200, // 미만

  beforeLeave: function (origin, destination, direction, trigger) {
    if (direction == 'down') {
      if (destination.anchor == 'section-footer') {
      } else {
        setTimeout(function () {
          $('[data-aos]').removeClass('aos-init aos-animate');
        }, 400);
      }
    } else {
      if (destination.anchor == 'section-event4') {
        //footer 전 섹션
      } else {
        $('[data-aos]').removeClass('aos-init aos-animate');
      }
    }
  },
  afterLoad: function (section, origin, destination, direction, trigger) {
    $('.' + origin.anchor)
      .find('[data-aos]')
      .addClass('aos-init aos-animate');
  },

  afterResponsive: function (isResponsive) {
    // S: 230525 수정
    if (isResponsive == true) {
      $('.nav__list .nav-item .link').on('click', function () {
        var target = $(this).attr('data-href');
        var targetTop = $(target).offset().top;
        $('html,body').animate({ scrollTop: targetTop }, 300);
        navClose();
        return false;
      });
    } else {
      location.reload();
    }
  },
});

function adjustSectionAndNavigation() {
  var s = 1,
    e = $(window).width(),
    o = $(window).height();

  function scaleElements(element, scale) {
    if (scale <= 1) {
      $(element).css({
        transform: 'scale(' + scale + ')',
      });
    } else {
      $(element).css({
        transform: 'scale(1)',
      });
    }
  }

  function updateScaling(element, useTransform) {
    s = e / 1920;
    s = Math.max(s, o / 970);
    document.documentElement.style.setProperty('--scale', s);
    let vh = window.innerHeight;
    document.documentElement.style.setProperty('--vh', vh);

    if (useTransform) {
      scaleElements(element, s);
    } else {
      $(element).css('zoom', s);
    }
  }

  function handleResize() {
    e = $(window).width();
    o = $(window).height();
    updateScaling('.section-update1 .section-container, .section-update3 .section-container, .section-update4 .section-container, .section-event1 .section-container, .section-event2 .section-container', true);
    updateScaling('.popup.popup--video', true);
  }

  $(window).on('resize', function () {
    if ($(window).width() > 1200) {
      handleResize();
    }
  });

  function initialize() {
    updateScaling('.section-update1 .section-container, .section-update3 .section-container, .section-update4 .section-container, .section-event1 .section-container, .section-event2 .section-container', true);
    updateScaling('.popup.popup--video', true);
  }

  return {
    initialize: initialize,
    handleResize: handleResize,
  };
}

var scaler = adjustSectionAndNavigation();
scaler.initialize();

function navClose() {
  $('.dimmed').stop().fadeOut();
  $('.nav__toggle').stop().removeClass('on');
  $('.nav__toggle').attr('title', '네비게이션 열기');
  $('.header').stop().removeClass('active');
}
function navOpen() {
  $('.dimmed').stop().fadeIn();
  $('.nav__toggle').stop().addClass('on');
  $('.nav__toggle').attr('title', '네비게이션 닫기');
  $('.header').stop().addClass('active');
}
$('.nav__toggle').click(function () {
  if ($(this).hasClass('on')) {
    navClose();
  } else {
    navOpen();
  }
});

$('.section-sub').each(function () {
  $(this)
    .find('[data-aos-delay="none"]')
    .each(function (index) {
      $(this).attr('data-aos-delay', index * 100 + 100);
    });
});

$(document).ready(function () {
  // ## aos
  AOS.init();

  if ($(window).width() >= 1200) {
    // pc
    navOpen();
  } else {
    // mo : 모바일에서 닫힘 상태로 유지
    navClose();
  }

  // ## window resize
  let $windowW;
  $windowW = $(window).outerWidth();
  $(window).on('resize', function () {
    $windowW = $(window).outerWidth();
    if ($windowW >= 1200) {
      // pc
      navOpen();
    } else {
      // mo : 모바일에서 닫힘 상태로 유지
      navClose();
    }
  });

  if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
    var video = document.getElementsByTagName('video')[0];
    video.style.display = 'none';
  }
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    var videos = document.getElementsByTagName('video');
    for (var i = 0; i < videos.length; i++) {
      videos[i].parentNode.removeChild(videos[i]);
    }
  }
  // E: 230526 수정 : 추가
});

// 팝업 요청 시 블라인드 액션 함수.
function open_blind() {
  $('.blind, .blind--btnClosed').fadeIn(300);
}
// 팝업 닫기 요청 시 액션 함수.
function closed_popup() {
  $('.blind, .blind--btnClosed').fadeOut(300);
  $('.popup--video').removeClass('open');
  $('.you_tube').empty();
  $('[class^=pop_]').hide();
  return false;
}

// esc 닫기
$(document).keyup(function (e) {
  if (e.key === 'Escape') {
    closed_popup();
  }
});

// 게임영상 부분 유튜브 url 설정
function SetYoutube() {
  var youtube = '';
  var youtubeUrl = arguments[0];
  if (youtubeUrl == '' || youtubeUrl == null) {
    closed_popup();
    $('.popup--video').removeClass('open');
    alert('Coming soon.'); // 220221 수정
  } else {
    youtube = '<iframe id="video" width="900" height="576" src="' + youtubeUrl + '" frameborder="0" allowfullscreen></iframe>';
    $('.you_tube').html(youtube);
  }
}

// 동영상팝업 열기
$(document).ready(function () {
  $('body').on('click', '.popup-link--video', function () {
    open_blind();
    $('.popup--video').addClass('open');
    $('.popup--video').fadeIn('slow').css('display', 'flex');
    SetYoutube($(this).attr('data-content'));
    return false;
  });
});

var update3swiper = new Swiper('.update3-swiper .swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.update3-swiper .swiper-button--next',
    prevEl: '.update3-swiper .swiper-button--prev',
  },
  centeredSlides: true,
  slidesPerView: 'auto',
  effect: 'coverflow',

  coverflowEffect: {
    rotate: 0,
    depth: 200,
    stretch: 550,
    modifier: 1,
    slideShadows: false,
  },
});
var update3swiperM = new Swiper('.update3-swiper-m .swiper-container', {
  loop: true,
  effect: 'slide',
  slidesPerView: 1.1,
  spaceBetween: 0,
  freeMode: true,
  on: {
    sliderMove: function () {
      $('.update3-swiper-m').removeClass('initial');
    },
  },
});
$('.update3-swiper-m').addClass('initial');

// ##### 가루 효과 PC
$(window).on('resize', function () {
  if ($(window).outerWidth() >= 1200) {
    // pc
    fireflyFn();
  } else if ($(window).outerWidth() < 1200) {
    $('.firefly__wrap').empty();
  }
});

function fireflyFn() {
  //firefly
  let fireflies = 20;
  let $container = $('.firefly__wrap');
  let $containerWidth;
  let $containerHeight;
  let master = new TimelineMax();

  $($container).each(function (index, value) {
    for (let i = 0; i < fireflies; i++) {
      let firefly = $('<div class="firefly"></div>');
      $containerWidth = $(value).width();
      $containerHeight = $(value).height();
      if (firefly) {
        TweenLite.set(firefly, {
          x: Math.random() * $containerWidth,
          y: Math.random() * $containerHeight,
        });
        $(value).append(firefly);
        flyTheFirefly(firefly);
      }
    }
  });

  function flyTheFirefly(elm) {
    var flyTl = new TimelineMax();
    var fadeTl = new TimelineMax({
      delay: Math.floor(Math.random() * 2) + 1,
      repeatDelay: Math.floor(Math.random() * 6) + 1,
      repeat: -1,
    });

    fadeTl.to([elm], 0.25, { opacity: 0.25, yoyo: true, repeat: 1, repeatDelay: 0.2, yoyo: true }, Math.floor(Math.random() * 6) + 1);

    flyTl.set(elm, { scale: Math.random() * 0.75 + 0.5 }).to(elm, Math.random() * 100 + 100, {
      bezier: {
        values: [
          {
            x: Math.random() * $containerWidth,
            y: Math.random() * $containerHeight,
          },
          {
            x: Math.random() * $containerWidth,
            y: Math.random() * $containerHeight,
          },
        ],
      },
      onComplete: flyTheFirefly,
      onCompleteParams: [elm],
    });
  }
}

if ($(window).outerWidth() >= 1200) {
  fireflyFn();
} else if ($(window).outerWidth() < 1200) {
  $('.firefly__wrap').empty();
}
