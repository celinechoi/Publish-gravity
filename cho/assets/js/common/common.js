// ##### 2차 스크립트 #####
// console.log('2차 페이지');

// ##### menu
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
$('.nav__toggle').click(function () {
  if ($(this).hasClass('on')) {
    navClose();
  } else {
    navOpen();
  }
});

// ##### Anchor
//scrollSpy function
function scrollSpy() {
  let scrollGo = ['scrollGo1', 'scrollGo2'];
  let current = '';
  // let headerHeight = $('.header').height();
  // let navH = $('nav').outerHeight(true);
  // console.log(scrollGo.length, 'l');
  for (let i = 0; i < scrollGo.length; i++) {
    if ($windowW <= 1024) {
      //mo
      if ($('#' + scrollGo[i]).offset().top - 180 <= $(window).scrollTop()) {
        current = scrollGo[i];
      }
    } else {
      //pc
      if ($('#' + scrollGo[i]).offset().top - 200 <= $(window).scrollTop()) {
        current = scrollGo[i];
        // console.log('current', current);
      }
    }
  }
  // for (let i = 0; i < scrollGo.length; i++) {
  //   if ($windowW <= 1024) {
  //     //mo
  //     if ($('#' + scrollGo[i]).offset().top - 180 <= $(window).scrollTop()) {
  //       current = scrollGo[i];
  //     }
  //   } else {
  //     //pc
  //     if ($('#' + scrollGo[i]).offset().top - headerHeight - navH <= $(window).scrollTop()) {
  //       current = scrollGo[i];
  //     }
  //   }
  // }
  // console.log(current, 'v');
  $('.menu-list li a[href*="#"]').removeClass('on');
  $('.menu-list li a[href="#' + current + '"]').addClass('on');
  // console.log($('.menu-list li a[href="#' + current + '"]'), 'e');
  // $('#bgShareBg').removeClass('fix');
  // if (current === 'section1' || current === 'section2') {
  //   $('#bgShareBg').addClass('fix');
  // } else {
  //   return false;
  // }
}

// 스크롤 이벤트 정의
$(window).scroll(function (e) {
  scrollSpy();
});

$('.main__con--btn, .scroll-icon').click(function () {
  let elmHash = $(this).attr('href');
  let navH;
  let pos;
  // console.log('click', elmHash);
  navH = 0;
  pos = Math.round($(elmHash).offset().top + navH);
  $('body,html').animate({ scrollTop: pos }, 100);
  return false;
});

$('.menu-list li a').click(function () {
  let elmHash = $(this).attr('href');
  let navH;
  let pos;
  // console.log('click', elmHash);
  navH = 200;
  pos = Math.round($(elmHash).offset().top + navH);
  $('body,html').animate({ scrollTop: pos }, 100);
  return false;
});

// ##### menu 스크롤 픽스
let thisTop;
$(window).on('scroll', function () {
  thisTop = $(this).scrollTop();
  let $menu = $('.menu');
  if (thisTop > 35) {
    if (!$menu.hasClass('movement')) {
      $menu.addClass('movement');
    }
  } else {
    if ($menu.hasClass('movement')) {
      $menu.removeClass('movement');
    }
  }
  if (thisTop > 400) {
    if (!$menu.hasClass('on')) {
      $menu.addClass('on');
    }
  } else {
    if ($menu.hasClass('on')) {
      $menu.removeClass('on');
    }
  }
});

// ##### mobile menu
// ## window resize
let $windowW;
$windowW = $(window).outerWidth();

// if ($windowW > 1024) {
//   // pc
//   $('.mo-gnb-bg').fadeIn();
// } else {
//   // mo
//   if ($('.btn-gnb').length > 0 && !$('.btn-gnb').hasClass('on')) {
//     $('.mo-gnb-bg').fadeOut();
//   } else {
//     $('.mo-gnb-bg').fadeIn();
//   }
// }

// $(window).on('resize', function () {
//   $windowW = $(window).outerWidth();
//   if ($windowW > 1024) {
//     // pc
//     $('.mo-gnb-bg').fadeIn();
//   } else {
//     // mo
//     if (!$('.btn-gnb').hasClass('on')) {
//       $('.mo-gnb-bg').fadeOut();
//     } else {
//       $('.mo-gnb-bg').fadeIn();
//     }
//   }
// });

$('.btn-gnb').on('click', function () {
  if (!$(this).hasClass('on')) {
    $(this).addClass('on');
    $('.mo-gnb-bg').fadeIn();
    return false;
  } else {
    $(this).removeClass('on');
    $('.mo-gnb-bg').fadeOut();
    return false;
  }
});

// ## 최상단으로 이동 버튼
$('#btnTop').click(function (e) {
  e.preventDefault();
  $('html,body').animate({ scrollTop: 0 }, 200);
});

// # 스크롤 이벤트 정의
$(document).scroll(function (e) {
  // ### top button
  if ($(window).scrollTop() > 500) {
    $('#btnTop').fadeIn(300);
  } else {
    $('#btnTop').fadeOut(300);
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

  if ($(window).width() >= $mediaResponsiveSize) {
    // navOpen();
  }
});

//가루
var particlesSetting = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: !1,
        value_area: 0,
      },
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'circle',
      // stroke: {
      //   width: 0,
      //   color: '#ffffff',
      // },

      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 10,
      },
    },
    // opacity: {
    //   value: 0.5,
    //   random: !1,
    //   anim: {
    //     enable: !1,
    //     speed: 1,
    //     opacity_min: 0.1,
    //     sync: !1,
    //   },
    // },

    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 3,
        size_min: 0.1,
        sync: !1,
      },
    },
    line_linked: {
      enable: !0,
      distance: 0,
      color: '#ffffff',
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: !0,
      speed: 3,
      // direction: 'left',
      // direction: 'top-right',
      random: !0,
      straight: !1,
      out_mode: 'out',
      bounce: !1,
      attract: {
        enable: !1,
        rotateX: 1,
        rotateY: 1,
      },
    },
  },

  interactivity: {
    detect_on: 'window',
    events: {
      onhover: {
        enable: !1,
        mode: 'repulse',
      },
      onclick: {
        enable: !1,
        mode: 'push',
      },
      resize: !0,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
};
// 황금색
var particlesSetting2 = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: !1,
        value_area: 0,
      },
    },
    color: {
      value: '#ebe98f',
    },
    shape: {
      type: 'circle',
      // stroke: {
      //   width: 0,
      //   color: '#ffffff',
      // },

      stroke: {
        width: 0,
        color: '#e74d2a',
      },
      polygon: {
        nb_sides: 10,
      },
    },
    // opacity: {
    //   value: 0.5,
    //   random: !1,
    //   anim: {
    //     enable: !1,
    //     speed: 1,
    //     opacity_min: 0.1,
    //     sync: !1,
    //   },
    // },

    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 3,
        size_min: 0.1,
        sync: !1,
      },
    },
    line_linked: {
      enable: !0,
      distance: 0,
      color: '#ffffff',
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: !0,
      speed: 3,
      // direction: 'left',
      // direction: 'top-right',
      random: !0,
      straight: !1,
      out_mode: 'out',
      bounce: !1,
      attract: {
        enable: !1,
        rotateX: 1,
        rotateY: 1,
      },
    },
  },

  interactivity: {
    detect_on: 'window',
    events: {
      onhover: {
        enable: !1,
        mode: 'repulse',
      },
      onclick: {
        enable: !1,
        mode: 'push',
      },
      resize: !0,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
};
particlesJS('particles-js-1', particlesSetting);
particlesJS('particles-js-2', particlesSetting2);
particlesJS('particles-js-3', particlesSetting2);
