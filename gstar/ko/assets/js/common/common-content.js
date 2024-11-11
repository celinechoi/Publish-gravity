// ##### Main
const onPageLoad = new Promise((resolve) => {
  window.addEventListener('load', resolve);
});

// onPageLoaded 함수 정의
const onPageLoaded = () => {
  utils.init();
  utils.mainTitleAnimation();
};
setTimeout(() => {
  utils.mainTitleAnimation();
}, 200);

// utils 객체
var utils = {
  init: () => {
    gsap.set('.title-frame__first', { opacity: 0 });
    gsap.set('.title-frame__star', { scale: 0 });

    gsap.set('.mask-pc', { width: '10%', opacity: 0 });
    gsap.set('.mask-mo', { width: '10%', opacity: 0 });
    gsap.set('.title-frame__txt--img', { opacity: 0 });

    gsap.set('.scroll-motion', { opacity: 0, y: 50 });
  },

  mainTitleAnimation: () => {
    gsap.to('.title-frame__first', { opacity: 1, duration: 7, delay: 0.22, ease: 'elastic.out' });
    // gsap.set('.title-frame__ment', { opacity: 1, delay: 2 });
    gsap.to('.title-frame__star', { scale: 1, duration: 2, delay: 0.42, ease: 'elastic.out' });

    gsap.to('.mask-pc', { width: '100%', opacity: 1, delay: 0.7 });
    gsap.to('.mask-mo', { width: '95%', opacity: 1, delay: 0.7 });
    gsap.to('.title-frame__txt--img', { opacity: 1, delay: 1.02 });

    gsap.to('.scroll-motion', { opacity: 1, delay: 1.22, y: 0 });
  },
};
// onPageLoaded 함수를 Promise로 감싸기
const onPageLoadPromise = new Promise((resolve, reject) => {
  onPageLoaded();
  resolve();
});

// Promise 체인을 사용하여 순차적으로 실행
onPageLoadPromise
  .then(() => {
    // console.log('loading complete.');
  })
  .catch((error) => {
    console.error('error!:', error);
  });

// ##### lineup more function
$(document).ready(function () {
  moreFn('.more-frame', '6');
  $('.btn-more').on('click', function () {
    AOS.refresh();
    moreFn('.more-frame', '6', '.btn-more');
  });
});
function moreFn(ele, cnt, btn) {
  var moreList = ele + ' .item:not(.active)';
  var listLength = $(moreList).length;
  var listTotalCount;
  if (cnt < listLength) {
    listTotalCount = cnt;
  } else {
    listTotalCount = listLength;
    $(btn).hide();
  }
  $(moreList + ':lt(' + listTotalCount + ')').addClass('active');
}
