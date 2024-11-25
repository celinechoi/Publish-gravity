// ##### 라인업 팝업
// ## 팝업 안 슬라이드 설정
let popupSlide;
let videoId;
let sliderSetting;

// ## 라인업 팝업 닫기
function closed_linepopup(ele, videoEle) {
  if (String(videoEle).indexOf('Video') == -1) {
    // youtube
    if (videoEle === null) {
      // 동영상 없을 때
      return false;
    } else {
      // 동영상 있을 때
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
