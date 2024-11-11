// ##### Main
// ios에서 영상 재생
var utils = {
  checkOS: (os) => {
    return new RegExp(os, 'i').test(navigator.userAgent);
  },
};

// 페이지 로드시 실행
// adjustVideoSources();

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

// ##### UPDATE
// 페럴렉싱
var innerPosition = $('.paral_wrap__inner').height() * 0.5;
gsap.set('.paral_wrap__inner', { y: -innerPosition });

var paral = function () {
  // console.log('paral start~');
  // : tab
  $('.js-tab').each(function (e) {
    $(this)
      .find('.tab-link')
      .click(function (e) {
        // console.log('click');
        $('.tab-content').hide();
        $('.paral_wrap__bg').removeClass('tabContent1, tabContent2');
        var active = $(this).attr('data-hash');
        e.preventDefault();
        $(this).parent().find('.tab-link').removeClass('active');
        $(this).parent().parent().parent().find('.tab-content').find('.stone').removeClass('on');
        $(this).addClass('active');
        $('#' + active).show();
        $('#' + active)
          .find('.stone')
          .addClass('on');
        $('.paral_wrap__bg').addClass(active);
        return false;
      });
  });
  gsap.to('.paral_wrap__inner', {
    y: '+=60%',
    ease: 'none',
    scrollTrigger: {
      trigger: '#section2',
      scrub: 1, // 부드러운 스크러빙, 스크롤바를 잡는데 1초 소요
      markers: false, // 기점 처리
      // start: '0% 100%',
      // end: '100% 0%',
    },
  });
};
paral();
