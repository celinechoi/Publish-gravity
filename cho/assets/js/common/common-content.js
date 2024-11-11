// ##### 2차 스크립트 #####
let windowW = $(window).outerWidth();
// console.log(windowW);
if (windowW > 1024) {
  // console.log('w');
  // bgShare();
} else {
  // return false;
}

$(window).on('resize', function () {
  windowW = $(window).outerWidth();
  if (windowW > 1024) {
    // console.log('모바일아님err');
    // bgShare();
  } else {
    // return false;
  }
});

// ##### section3 slider
var infoSwiper = new Swiper('#infoSwiper .swiper-container', {
  autoplay: {
    delay: 1800,
  },
  autoplay: false,
  speed: 700,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  loop: false,
  touchRatio: 0,
  centeredSlides: true,
  slidesPerView: 'auto',
  // coverflowEffect: {
  //   rotate: 0,
  //   depth: 140,
  //   stretch: 87,
  //   modifier: 1.8,
  //   slideShadows: false,
  // },
  // navigation: {
  //   prevEl: '#infoSwiper .swiper-control .swiper-button-prev',
  //   nextEl: '#infoSwiper .swiper-control .swiper-button-next',
  // },
  pagination: {
    el: '#infoSwiper .swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      if (index === 0) {
        return '<span class="' + className + '">' + '劍士系列' + '</span>';
      } else if (index === 1) {
        return '<span class="' + className + '">' + '魔法師系列' + '</span>';
      } else if (index === 2) {
        return '<span class="' + className + '">' + '盜賊系列' + '</span>';
      } else if (index === 3) {
        return '<span class="' + className + '">' + '服事系列' + '</span>';
      } else if (index === 4) {
        return '<span class="' + className + '">' + '商人系列' + '</span>';
      } else {
        return '<span class="' + className + '">' + '弓箭手系列' + '</span>';
      }
      // return '<span class="' + className + '">' + (index + 1) + '</span>';
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
      // console.log(v);
      // console.log(this, 'this');
      var active = $(this).attr('data-hash');
      e.preventDefault();
      // window.location.hash = `#${active}`;

      // console.log(active);

      $(this).parent().parent().find('.js-tab-link').removeClass('active');
      $(v).find('.js-tab-content').hide();

      // $('.tab-link img').each(function () {
      //   $(this).attr('src', $(this).attr('src').replace('_on.png', '_off.png'));
      // });

      // $(this).find('img').attr('src', $(this).find('img').attr('src').replace('_off.png', '_on.png'));
      $(this).addClass('active');
      $('#' + active).show();
      // console.log(active, 'active');
      return false;
    });
});

// ##### section4 slider
var lastSwiper = new Swiper('#lastSwiper .swiper-container', {
  autoplay: {
    delay: 2000,
  },
  autoplay: false,
  speed: 900,
  effect: 'slide',
  // fadeEffect: {
  //   crossFade: true,
  // },
  loop: true,
  touchRatio: 1,
  centeredSlides: true,
  slidesPerView: 'auto',
  // coverflowEffect: {
  //   rotate: 0,
  //   depth: 140,
  //   stretch: 87,
  //   modifier: 1.8,
  //   slideShadows: false,
  // },
  navigation: {
    prevEl: '#lastSwiper .swiper-control .swiper-button-prev',
    nextEl: '#lastSwiper .swiper-control .swiper-button-next',
  },
  pagination: {
    el: '#lastSwiper .swiper-pagination',
    clickable: true,
  },
  on: {
    setTransition: function () {
      $('#lastSwiper .swiper-slide').removeClass('now');
      $('#lastSwiper .swiper-slide.swiper-slide-active').addClass('now');
    },
  },
});

// $(document).on('mouseenter', '.swiper-container', function (e) {
//   // console.log('stop autoplay');
//   infoSwiper.autoplay.stop();
// });
// $(document).on('mouseleave', '.swiper-container', function (e) {
//   // console.log('start autoplay');
//   infoSwiper.autoplay.start();
// });
