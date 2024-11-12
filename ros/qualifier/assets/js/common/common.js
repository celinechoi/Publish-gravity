const $mediaResponsiveSize = 1024 + 0.02;
$(window).on('load', function () {
  // ##### 전환효과
  $('body').attr('data-loading', 'done');
});

// ##### IOS 100VH지원 스크립트
function mobileVh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
  // console.log(vh);
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

// # 스크롤 이벤트 정의
$(document).scroll(function (e) {
  // ### top button
  if ($(window).scrollTop() > 500) {
    $('#btnTop').fadeIn(300);
    if (!$('#floatingBanner').hasClass('fixed')) {
      $('#floatingBanner').addClass('fixed');
    }
  } else {
    $('#btnTop').fadeOut(300);
    if ($('#floatingBanner').hasClass('fixed')) {
      $('#floatingBanner').removeClass('fixed');
    }
  }
  if ($(window).scrollTop() > $('body').outerHeight() - $('.footer').outerHeight() - $(window).height()) {
    $('#btnTop').addClass('absolute');
  } else {
    $('#btnTop').removeClass('absolute');
  }
});

$('.js-scroll').on('click', function () {
  let elmHash = $(this).attr('href');
  let navH;
  let pos;
  // console.log('click', elmHash);
  navH = 0;
  pos = Math.round($(elmHash).offset().top + navH);
  $('body,html').animate({ scrollTop: pos }, 100);
  return false;
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
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 10,
      },
    },

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
// particlesJS('particles-js-1', particlesSetting);

// TAB
$('.tab').each(function (e) {
  $(this)
    .find('.tab-link')
    .click(function (e) {
      var active = $(this).attr('data-hash');
      e.preventDefault();
      // window.location.hash = `#${active}`;

      // console.log(active);

      $(this).parent().parent().find('.tab-link').removeClass('active');
      $(this).parent().parent().parent().find('.tab-content').hide();

      // $('.tab-link img').each(function () {
      //   $(this).attr('src', $(this).attr('src').replace('_on.png', '_off.png'));
      // });

      // $(this).find('img').attr('src', $(this).find('img').attr('src').replace('_off.png', '_on.png'));

      // ##### 대진표
      if ($(this).attr('data-hash') === 'tabContent2') {
        $(this).addClass('active');
        $('#' + active).show();
        var subTab = $('#' + active)
          .find('.tab-link.active')
          .attr('data-hash');
        // console.log('subTab2', subTab);
        $('#' + subTab).show();
      }

      // ##### 이벤트
      if ($(this).attr('data-hash') === 'tabContent3') {
        $(this).addClass('active');
        $('#' + active).show();
        var subTab = $('#' + active)
          .find('.tab-link.active')
          .attr('data-hash');
        // console.log('subTab', subTab);
        $('#' + subTab).show();
      }

      $(this).addClass('active');
      $('#' + active).show();
      // else if ($(this).attr('data-hash') === 'tabContent5') {
      //   console.log('xxx');
      //   // alert('준비중입니다.');
      //   // $('.tab-link[data-hash="tabContent4"]').addClass('active');
      //   // $('#tabContent4').show();
      // } else {
      //   $(this).addClass('active');
      //   $('#' + active).show();
      // }
      return false;
    });
});
