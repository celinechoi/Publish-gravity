$(document).ready(function () {
  $('#fireworks').fireworks();

  // AOS.init({
  //   offset: 120,
  // });

  // 페이지 진입 시 메뉴에 on 클래스 추가
  var pageName = $('html').data('page');
  //   console.log(pageName);
  $(`.nav .link[data-page="${pageName}"]`).addClass('active');
});

$(window).on('load', function () {
  //## 전환효과
  $('body').attr('data-loading', 'done');
});

$(document).on('scroll', function (e) {
  var nowScroll = $(this).scrollTop();
  if (nowScroll > 500) {
    $('.topBtn').stop().fadeIn();
  } else {
    $('.topBtn').stop().fadeOut();
  }
});

$(function () {
  particlesJS(
    'particles-js',

    {
      particles: {
        number: {
          value: 30,
          density: {
            enable: !1,
            value_area: 0,
          },
        },
        color: {
          value: '#ffffff',
        },
        shape: {
          type: 'image',
          stroke: {
            width: 0,
            color: '#ffffff',
          },
          polygon: {
            nb_sides: 3,
          },
          image: {
            src: $('#particles-js').attr('data-content'),
            width: 30,
            height: 30,
          },
        },
        opacity: {
          value: 0.5,
          random: !1,
          anim: {
            enable: !1,
            speed: 1,
            opacity_min: 0.1,
            sync: !1,
          },
        },
        size: {
          value: 6,
          random: true, //false,
          anim: {
            enable: false,
            speed: 50,
            size_min: 0.5,
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
          direction: 'top',
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
            speed: 3,
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
    }
  );
});
