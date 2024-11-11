// ## fullpage
$('#fullpage').fullpage({
  licenseKey: '831K9-MRXP9-2OKA8-JF0NH-TGXPM',
  anchors: [
    'section-main', //
    'section-update1', //
    'section-update2', //
    'section-event1', //
    'section-event2', //
    'section-event3', //
    'section-footer',
  ],
  menu: '.nav__list',
  autoScrolling: true,
  scrollingSpeed: 600,
  fixedElements: '#header, .btnTop',
  normalScrollElements: '.nav',
  responsiveWidth: 1200,
  // responsiveHeight: 800, // 230526 수정 : 삭제

  //S: 230526 수정 : 삭제
  // parallax: true,
  // parallaxOptions: {
  //   type: 'reveal', //'cover'
  //   percentage: 62,
  //   property: 'background', //'translate',
  // },
  // parallaxKey: 'bHBRVTVaQzRfQTNFY0dGeVlXeHNZWGc9UXJR',
  //E: 230526 수정 : 삭제
  // scrollOverflow: true,
  // scrollOverflowReset: true,
  // scrollOverflowResetKey: 'UzJRVTVaTzFfT0U2YzJOeWIyeHNUM1psY21ac2IzZFNaWE5sZEE9PTNsZg==',

  beforeLeave: function (origin, destination, direction, trigger) {
    if (direction == 'down') {
      if (destination.anchor == 'section-footer') {
      } else {
        setTimeout(function () {
          $('[data-aos]').removeClass('aos-init aos-animate');
        }, 400);
      }
    } else {
      if (destination.anchor == 'section-event3') {
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
    // console.log('$$$$++');
    // $('.nav-item').each(function (i, v) {
    //   // $('.nav-item').removeClass('on');
    //   // if (!$(this).hasClass('hidden')) {
    //   //   if ($(this).hasClass('active')) {
    //   //     $(this).siblings().removeClass('on');
    //   //   }
    //   // } else {

    //   // }
    //   if ($(this).hasClass('active')) {
    //     console.log(i);
    //     $(this).parent('.nav-package').addClass('on');
    //   } else {
    //     $(this).parent('.nav-package').removeClass('on');
    //   }
    // });
    // console.log(origin.anchor, 'origin.anchor');

    // if (origin.anchor === 'section-main') {
    //   $('.nav-item[data-menuanchor="section-main"]').addClass('active');
    // } else if (origin.anchor === 'section-update1') {
    //   console.log(origin.anchor, ' | on');
    //   $('.nav-item[data-menuanchor="section-update1"]').addClass('active');
    // } else if (origin.anchor === 'section-update2') {
    //   console.log(origin.anchor, ' | on');
    //   $('.nav-item[data-menuanchor="section-update1"]').addClass('active');
    // } else if (origin.anchor === 'section-event1') {
    //   console.log(origin.anchor, ' | on');
    //   $('.nav-item[data-menuanchor="section-event1"]').addClass('active');
    // } else if (origin.anchor === 'section-event2') {
    //   console.log(origin.anchor, ' | on');
    //   $('.nav-item[data-menuanchor="section-event1"]').addClass('active');
    // } else {
    //   console.log(origin.anchor, ' | on');
    //   $('.nav-item[data-menuanchor="section-event1"]').addClass('active');
    // }
    // if (origin.anchor === 'section-update2') {
    //   console.log('**?*');
    //   $('.nav-item[data-menuanchor="section-update1"], .nav-item[data-menuanchor="section-update2"]').addClass('on');
    // } else {
    //   // $('.nav-item[data-menuanchor="section-update1"]').removeClass('on');
    // }
    // console.log(origin.anchor);
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
      // console.log('$$$$');
      // navItemHidden();
    } else {
      location.reload();
    }
    // E: 230525 수정
  },
});

// S: 230526 수정 : 추가
function adjustSectionAndNavigation() {
  var s = 1,
    e = $(window).width(),
    o = $(window).height();

  function scaleElements(element, scale) {
    if (scale <= 1) {
      // console.log('<= 1');
      // if ($(element).parent().hasClass('section-update2')) {
      //   console.log(this);
      //   $(this).find(element).css({
      //     transform: 'scale(1)',
      //     backgroundColor: 'skyblue',
      //   });
      // }
      $(element)
        .not('.section-main .section-container')
        .css({
          transform: 'scale(' + scale + ') translateY(calc(-48% - ' + 2 + scale + '%))',
        });
      $('.section-main').find(element).css({
        transform: 'scale(0.75)',
      });
      // $('.section-update1')
      //   .find(element)
      //   .css({
      //     transform: 'scale(0.8) translateY(calc(-48% - ' + 2 + scale + '%)',
      //   });
      $('.section-update2').find(element).css({
        transform: 'scale(1)',
      });
    } else {
      // console.log('>1');
      $(element).not('.section-main .section-container').css({
        transform: 'scale(1) translateY(-50%)',
      });
      $('.section-main').find(element).css({
        transform: 'scale(0.75)',
      });
      $('.section-update2').find(element).css({
        transform: 'scale(1)',
      });
    }
  }

  function updateScaling(element, useTransform) {
    // s = e / 1920;
    s = e / 2560;
    // s = Math.max(s, o / 970);
    s = Math.max(s, o / 1920);
    document.documentElement.style.setProperty('--scale', s);
    let vh = window.innerHeight;
    document.documentElement.style.setProperty('--vh', vh);

    if (useTransform) {
      // scaleElements(element, s);
      scaleElements(element, 0.75);
    } else {
      $(element).css('zoom', s);
    }
  }

  function handleResize() {
    e = $(window).width();
    o = $(window).height();
    updateScaling('.section-container', true);
    updateScaling('.popup.popup--video', true);
  }

  $(window).on('resize', function () {
    if ($(window).width() > 1200) {
      handleResize();
    }
  });

  function initialize() {
    updateScaling('.section-container', true);
    updateScaling('.popup.popup--video', true);
  }

  return {
    initialize: initialize,
    handleResize: handleResize,
  };
}

var scaler = adjustSectionAndNavigation();
scaler.initialize();

// E: 230526 수정 : 추가

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
    navOpen();
  }

  // S: 230526 수정 : 추가(모바일에서 비디오 태그 삭제)
  // if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
  //   var video = document.getElementsByTagName('video')[0];
  //   video.style.display = 'none';
  // }
  // if (/Mobi|Android/i.test(navigator.userAgent)) {
  //   var videos = document.getElementsByTagName('video');
  //   for (var i = 0; i < videos.length; i++) {
  //     videos[i].parentNode.removeChild(videos[i]);
  //   }
  // }
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
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: '.update3-swiper-m .swiper-button--next',
    prevEl: '.update3-swiper-m .swiper-button--prev',
  },
});

var swiper = new Swiper('.mySwiper', {
  loop: true,
  // spaceBetween: 7,
  slidesPerView: 3,
  freeMode: true,
  centeredSlides: true,
  watchSlidesProgress: true,
  allowTouchMove: false,
  autoplay: {
    delay: 3000,
  },
  autoplay: false,
});
var swiper2 = new Swiper('.mySwiper2', {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  autoplay: false,
  spaceBetween: 0,
  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: '.mySwiper2 .swiper-button-next',
    prevEl: '.mySwiper2 .swiper-button-prev',
  },
  pagination: {
    el: '.mySwiper2 .swiper-pagination',
  },
  thumbs: {
    swiper: swiper,
  },
});

$('#app2').on('click', function () {
  // console.log('^');
  $(this).find('.packaging').fadeOut('slow');
});
