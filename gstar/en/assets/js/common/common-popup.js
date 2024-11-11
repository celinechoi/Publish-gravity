// ##### 라인업 팝업
// ## 팝업 안 슬라이드 설정
let popupSlide;
let videoId;
let sliderSetting;

// ## 라인업 팝업 닫기
function closed_linepopup(ele, videoEle) {
  if (String(videoEle).indexOf('Video') !== -1) {
    //mp4
    // # 해당 팝업 동영상 멈춤
    document.getElementById(videoEle).pause();
    // console.log(videoEle, 'videoEle');
    // # 해당 팝업 슬라이드 해제
    ele.destroy(true, true);
    var videos = document.querySelectorAll('video');
    Array.prototype.forEach.call(videos, function (video) {
      video.pause();
    });
  } else if (String(videoEle).indexOf('Video') == -1) {
    // youtube
    // console.log(videoEle, 'el');
    if (videoEle === null) {
      // console.log('null?');
      return false;
    } else {
      videoEle.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    }
  }
  return false;
}

//## 라인업 팝업 열기
$(document).on('click', '.popup-link', function () {
  // # 팝업 내용 오픈
  let targetPopupName = $(this).attr('data-popup');
  open_blind();
  $('.' + targetPopupName)
    .fadeIn()
    .css('display', 'flex');
  let sliderN = targetPopupName;
  $('.' + targetPopupName)
    .find('.swiper-container')
    .attr('id', sliderN);
  let sliderId = '#' + sliderN;
  if (sliderN === targetPopupName) {
    if ($(sliderId).find('iframe').length > 0) {
      // 유튜브 있는 경우
      let lineupYoutube;
      lineupYoutube = $('#' + sliderN)
        .find('iframe')
        .get(0);
      if (lineupYoutube) {
        lineupYoutube.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
      }
      // # 해당 팝업 슬라이드 생성
      sliderSetting = {
        // # 팝업 안 동영상 설정
        on: {
          slideChange: function () {
            // youtube
            lineupYoutube = $('#' + sliderN)
              .find('iframe')
              .get(0);
            if (lineupYoutube) {
              lineupYoutube.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
            }
          },
        },
        loop: false,
        navigation: {
          prevEl: '.lineup-arrow-prev.swiper-button-prev',
          nextEl: '.lineup-arrow-next.swiper-button-next',
        },
        pagination: {
          el: '.lineup-pagination.swiper-pagination',
          type: 'fraction',
          clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
        },
        observer: true,
        observeParents: true,
      };
      popupSlide = new Swiper(sliderId, sliderSetting);

      // # 닫기
      $('.blind--btnClosed').on('click', function () {
        closed_linepopup(popupSlide, lineupYoutube);
        closed_popup();
      });
      $(document).keyup(function (e) {
        // console.log('youtube esc');
        if (e.key === 'Escape') {
          // 유튜브 영상
          lineupYoutube = $('#' + sliderN)
            .find('iframe')
            .get(0);
          closed_linepopup(popupSlide, lineupYoutube);
          closed_popup();
        }
      });
    } else {
      // 없는 경우
      videoId = null;
      // # 해당 팝업 슬라이드 생성
      sliderSetting = {
        loop: false,
        navigation: {
          prevEl: '.lineup-arrow-prev.swiper-button-prev',
          nextEl: '.lineup-arrow-next.swiper-button-next',
        },
        pagination: {
          el: '.lineup-pagination.swiper-pagination',
          type: 'fraction',
          clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
        },
        observer: true,
        observeParents: true,
      };
      popupSlide = new Swiper(sliderId, sliderSetting);
      // # 닫기
      $('.blind--btnClosed').on('click', function () {
        closed_linepopup(popupSlide, videoId);
        closed_popup();
      });
      $(document).keyup(function (e) {
        // console.log('mp4 esc');
        if (e.key === 'Escape') {
          closed_linepopup(popupSlide, videoId);
          closed_popup();
        }
      });
      return false;
    }
  }
});

// ##### 부스 위치 확인 팝업
$(document).ready(function () {
  $('body').on('click', '.btn-booth', function () {
    open_blind();
    $('.popup--booth').fadeIn('300');
    return false;
  });
});
// 부스 팝업 닫기
$('.booth-blind--btnClosed').on('click', function () {
  $('.booth-blind, .booth-blind--btnClosed').fadeOut(300);
  $('body').removeClass('none-scroll');
  $('.popup').hide();
});

// ##### 유튜브 라이브 팝업
// # open
$('.js-live').click(function () {
  // SetYoutube($('.youtube-frame').attr('data-youtubeURL'));
  open_blind();
  $('.popup--live').fadeIn('300');
  return false;
});
// 유튜브 url 설정
// function SetYoutube(youtubeUrl) {
//   // var youtubeFrame = '';
//   // var youtubeUrl = arguments[0];
//   // if (youtubeUrl == '' || youtubeUrl == null) {
//   //   // console.log('유튜브없음');
//   //   youtubeFrame = '<a href="javascript:;" class="youtube-off"><img src="assets/images/popup/live_end_bg..webp"></a>';
//   //   $('.youtube-frame').html(youtubeFrame);
//   // } else {
//   //   // console.log('유튜브있음');
//   //   youtubeFrame = '<div class="youtube-on"><img src="'+ BASE_URL +'assets/images/popup/live_bg..webp"><iframe id="video" width="750" height="551" src="' + youtubeUrl + '" frameborder="0" allowfullscreen></iframe></div>';
//   //   $('.youtube-frame').html(youtubeFrame);
//   // }
// }

// ##### 웹툰 팝업
$('.btn-webtoon').on('click', function () {
  open_blind();
  $('.popup--webtoon').css('display', 'flex');
  return false;
});

// ##### 팝업 공통
// ## 팝업 요청 시 블라인드 액션 함수.
function open_blind() {
  $('.blind, .blind--btnClosed').fadeIn(300);
  // $('body').addClass('none-scroll');
}

// ## 팝업 닫기 요청 시 액션 함수.
function closed_popup() {
  $('.blind, .blind--btnClosed').fadeOut(300);
  // $('body').removeClass('none-scroll');
  $('.popup').hide();
  return false;
}

// ## 팝업 닫기 버튼
// $(document).on('click', 'youtube-frame', function(){});
$('.blind--btnClosed').on('click', function (e) {
  closed_popup();
  if ($('.youtube-frame').find('iframe').length >= 1) {
    // console.log('있음');
    $('.youtube-frame').empty();
  } else {
    // console.log('없음');
  }
});

// ## 팝업 esc 버튼
$(document).keyup(function (e) {
  if (e.key === 'Escape') {
    closed_popup();
  }
});
