// ##### 2차 스크립트 #####
// ##### MAIN PIN
// let mainPin = () => {
//   gsap.timeline({
//     y: 0,
//     top: 0,
//     ease: 'none',
//     scrollTrigger: {
//       trigger: '#main',
//       start: 'top top',
//       // end: 'bottom bottom',
//       end: document.querySelector('#main').offsetHeight,
//       scrub: 0,
//       pinSpacing: false,
//       pin: true,
//       markers: false,
//     },
//   });
// };
// mainPin();
// ##### bg 공유 : 페럴렉스
// let bgShare = () => {
//   gsap.timeline({
//     y: 0,
//     top: 0,
//     ease: 'none',
//     scrollTrigger: {
//       trigger: '#bgShareBg',
//       start: 'top -120px',
//       // end: 'bottom bottom',
//       end: document.querySelector('#bgShareWrap').offsetHeight,
//       scrub: 0,
//       pinSpacing: false,
//       pin: true,
//       markers: false,
//     },
//   });
// };
let bgShare = () => {
  gsap.to('#bgShareBg', {
    // y: document.querySelector('#bgShareWrap').offsetHeight - window.innerHeight,
    ease: 'none',
    scrollTrigger: {
      trigger: '#bgShareWrap',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      pin: '#bgShareBg',
    },
  });
  // gsap.timeline({
  //   y: 0,
  //   top: 0,
  //   ease: 'none',
  //   scrollTrigger: {
  //     trigger: '#bgShareBg',
  //     start: 'top -120px',
  //     // end: 'bottom bottom',
  //     end: document.querySelector('#bgShareWrap').offsetHeight,
  //     scrub: 0,
  //     pinSpacing: false,
  //     pin: true,
  //     markers: false,
  //   },
  // });
};
if ($('#bgShareBg').length > 0) {
  bgShare();
}

// ##### section2 card flip
function cardFlip() {
  const items = document.querySelectorAll('.reward-list > li');
  const delay = 0.3;

  for (let i = 0; i < 4; i++) {
    gsap.to(items[i], {
      duration: 0.5,
      delay: i * delay,
      rotateY: 0,
    });
  }
}
const ST_event3 = gsap.timeline({
  scrollTrigger: {
    trigger: '#section2',
    start: 'top center',
    end: 'bottom',
    //markers: true,
    scrub: 0,
    onEnter: () => {
      // cardFlip();
    },
  },
});

// ##### section3 PIN
// let sec3Pin = () => {
//   gsap.timeline({
//     y: 0,
//     top: 0,
//     ease: 'none',
//     scrollTrigger: {
//       trigger: '#section3',
//       start: 'top top',
//       end: 'bottom bottom',
//       // end: document.querySelector('#section3').offsetHeight,
//       scrub: 0,
//       pinSpacing: false,
//       pin: true,
//       markers: true,
//     },
//   });
// };
// sec3Pin();
// ##### section4 PIN
// let sec4Pin = () => {
//   gsap.timeline({
//     y: 0,
//     top: 0,
//     ease: 'none',
//     scrollTrigger: {
//       trigger: '#section4',
//       start: 'top top',
//       end: 'bottom bottom',
//       // end: document.querySelector('#section4').offsetHeight,
//       scrub: 0,
//       pinSpacing: false,
//       pin: true,
//       markers: true,
//     },
//   });
// };
// sec4Pin();

// ##### PIN !
// let anchors = gsap.utils.toArray('.anchor');
// anchors.forEach((anchor, i) => {
//   console.log($(i));
//   gsap.timeline({
//     y: 0,
//     top: 0,
//     ease: 'none',
//     scrollTrigger: {
//       // pin: $(anchor).find('section'),
//       pin: true,
//       trigger: anchor,
//       endTrigger: '.footer',
//       // start: anchor.offsetTop,
//       start: 'top top',
//       end: '+=' + anchor.offsetHeight,
//       // end: 'bottom bottom',
//       pin: true,
//       scrub: 0,
//       pinSpacing: false,
//       markers: true,
//     },
//   });
// });
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
// ##### : game charcter
if ($('#cardSwiper .swiper-container').length > 0) {
  var cardSwiper = new Swiper('#cardSwiper .swiper-container', {
    autoplay: {
      delay: 2000,
    },
    // autoplay: false,
    speed: 1400,
    effect: 'slide',
    loop: true,
    centeredSlides: true,
    // direction: 'horizontal',
    // needUpdate: true,
    // slidesPerView: 1,
    // coverflowEffect: {
    //   rotate: 0,
    //   depth: 0,
    //   stretch: 0,
    //   modifier: 1.8,
    //   slideShadows: false,
    // },
    spaceBetween: 0,
    allowTouchMove: true,
    navigation: {
      prevEl: '#cardSwiper .swiper-control .swiper-button-prev',
      nextEl: '#cardSwiper .swiper-control .swiper-button-next',
    },
    breakpoints: {
      // when window width is >= 767
      1025: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 1,
      },
    },
  });
  cardSwiper.changeDirection('horizontal', false);
  console.log('***');
  let currentName;
  currentName = document.querySelector('.swiper-slide-active').getAttribute('title');
  document.querySelector('.swiper-btn').innerHTML = currentName;

  cardSwiper.on('slideChangeTransitionStart', function () {
    currentName = document.querySelector('.swiper-slide-active').getAttribute('title');
    document.querySelector('.swiper-btn').innerHTML = currentName;
  });
}

// ##### section4 : game info
if ($('#infoSwiper .swiper-container').length > 0) {
  var infoSwiper = new Swiper('#infoSwiper .swiper-container', {
    autoplay: {
      delay: 1800,
    },
    autoplay: false,
    speed: 700,
    effect: 'coverflow',
    loop: true,
    centeredSlides: true,
    slidesPerView: 2,
    // coverflowEffect: {
    //   rotate: 0,
    //   depth: 140,
    //   stretch: 87,
    //   modifier: 1.8,
    //   slideShadows: true,
    // },
    navigation: {
      prevEl: '#infoSwiper .swiper-control .swiper-button-prev',
      nextEl: '#infoSwiper .swiper-control .swiper-button-next',
    },
    on: {
      setTransition: function () {
        $('#infoSwiper .swiper-slide').removeClass('now');
        $('#infoSwiper .swiper-slide.swiper-slide-active').addClass('now');
      },
    },
    breakpoints: {
      971: {
        coverflowEffect: {
          rotate: 0,
          // depth: 140,
          depth: 140,
          // stretch: 87,
          stretch: 78,
          modifier: 1.57,
          slideShadows: false, //
        },
      },
      767: {
        coverflowEffect: {
          rotate: 0,
          depth: 160,
          stretch: 90,
          modifier: 1.09,
          slideShadows: false, //
        },
      },
      320: {
        coverflowEffect: {
          rotate: 0,
          depth: 155,
          stretch: 46,
          modifier: 1.09,
          slideShadows: false, //
        },
      },
    },
  });

  $(document).on('mouseenter', '.swiper-container', function (e) {
    // console.log('stop autoplay');
    // infoSwiper.autoplay.stop();
  });
  $(document).on('mouseleave', '.swiper-container', function (e) {
    // console.log('start autoplay');
    // infoSwiper.autoplay.start();
  });
}
