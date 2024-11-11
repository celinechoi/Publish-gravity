// ##### 1, 2, 3 차 공통 스크립트 #####
// console.log('공통 페이지');
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

// ##### ios에서 영상 재생
var utils = {
  checkOS: (os) => {
    return new RegExp(os, 'i').test(navigator.userAgent);
  },
};

// 페이지 로드시 실행
adjustVideoSources();

// 비디오 태그 재생
const videoElements = document.querySelectorAll('video');
videoElements.forEach((videoElement) => {
  // 'preload' 속성이 'none'이 아닌 경우에만 재생
  if (videoElement.paused) {
    videoElement.play();
  }
});

// ##### 아이폰,아이패드, 매킨토시로 접속 시 HTML안에 모든 비디오 태그 확장자 webm 으로 변경
function adjustVideoSources() {
  var videoElements = document.querySelectorAll('video');

  // 기기가 iPad, iPhone 또는 Mac인 경우에만 실행
  if (utils.checkOS('iPhone') || utils.checkOS('Macintosh') || utils.checkOS('iPad')) {
    // 모든 비디오 태그의 소스를 디폴트 webm에서 mp4로 변경
    for (var i = 0; i < videoElements.length; i++) {
      // console.log(videoElements.length);
      videoElements[i].src = videoElements[i].src.replace('.webm', '.mp4');
    }
  }
}
