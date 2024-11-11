// ##### Main
const onPageLoad = new Promise((resolve) => {
  window.addEventListener('load', resolve);
});

// onPageLoaded 함수 정의
const onPageLoaded = () => {
  utils.init();
  // console.log('로딩완료');
  gsap.to('body', { opacity: 1, duration: 0.5, ease: 'none' }); // body -> opacity -> 1
};

// utils 객체
var utils = {
  init: () => {
    gsap.set('.main-title', { scale: 0 });
    gsap.set('.section-main .logo', { opacity: 0 });
    gsap.set('.app-download', { opacity: 0, y: 50 });
    gsap.set('.scroll-down.anchorBtn', { opacity: 0, y: 50 });
  },

  // 메인 그레이 클래스 삭제 함수.
  mainGrayDelete: () => {
    setTimeout(() => {
      $('.main-bg').removeClass('gray');

      utils.mainTitleAnimation();
    }, 700);
  },
  // 윈도우 폭을 기준으로 navOpen을 호출하는 함수.
  callNavOpenBasedOnWindowWidth: ($mediaResponsiveSize) => {
    if ($(window).width() >= $mediaResponsiveSize) {
      navOpen();
    }
  },

  // 메인 로고 애니메이션.
  mainTitleAnimation: () => {
    gsap.to('.main-title', { scale: 1, duration: 2, ease: 'elastic.out' });
    // gsap.to('.main-title', { scale: 1 });
    gsap.to('.section-main .logo', { opacity: 1, delay: 1 });
    gsap.to('.app-download', { opacity: 1, delay: 1.1, y: 0 });
    gsap.to('.scroll-down.anchorBtn', { opacity: 1, delay: 1.3, y: 0 });
  },

  // 메인 로고 애니메이션 후 다른 요소들 애니메이션.
  mainTitleAnimationAfterStep: () => {
    setTimeout(() => {
      utils.callNavOpenBasedOnWindowWidth($mediaResponsiveSize);
    }, 1500);
  },
};

// onPageLoaded 함수를 Promise로 감싸기
const onPageLoadPromise = new Promise((resolve, reject) => {
  onPageLoaded();
  resolve();
});

// Promise 체인을 사용하여 순차적으로 실행
onPageLoadPromise
  .then(() => utils.mainGrayDelete())
  .then(() => utils.mainTitleAnimationAfterStep())
  .then(() => {
    console.log('loading complete.');
  })
  .catch((error) => {
    console.error('error!:', error);
  });

// https://v8.swiperjs.com/swiper-api
var sampleSwiper = new Swiper('#sampleSwiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true,
  },
  keyboard: {
    enabled: true,
  },
  loop: true,
  initialSlide: 1,
  loopedSlides: 3,
});
