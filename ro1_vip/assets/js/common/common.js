﻿const $mediaResponsiveSize = 1024 + 0.02;

$(window).on('load', function () {
  // ##### 전환효과
  $('body').attr('data-loading', 'done');
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
particlesJS('particles-js-1', particlesSetting);
particlesJS('particles-js-2', particlesSetting);

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
