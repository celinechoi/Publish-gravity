// ##### 2차 스크립트 #####
// ##### 팝업 공통
//## 팝업열기
// $(document).on('click', '.popup-link', function () {
//   var targetPopupName = $(this).attr('data-popup');
//   open_blind();
//   $('.' + targetPopupName)
//     .fadeIn()
//     .css('display', 'flex');
//   return false;
// });

// 얼럿 팝업 열기
function preAlertCongratu() {
  // console.log('oooooooooo');
  open_blind();
  $('.popup__duplication, .congratu').fadeIn().css('display', 'flex');
}

// 사전 예약 팝업 열기
function preComing() {
  // console.log('book');
  open_blind();
  $('.coming').fadeIn().css('display', 'flex');
}

// ## 팝업 요청 시 블라인드 액션 함수
function open_blind() {
  $('.blind, .blind--btnClosed').fadeIn(300);
  $('body').addClass('none-scroll');
}
// ## 팝업 닫기 요청 시 액션 함수
function closed_popup() {
  $('.blind, .blind--btnClosed').fadeOut(300);
  $('body').removeClass('none-scroll');
  $('.popup').hide();
  return false;
}

// ##### main
// ## 동영상팝업 열기
$(document).ready(function () {
  $('body').on('click', '.popup-link--video', function () {
    $('.video-closed, .blind').fadeIn(300);
    $('.popup--video').addClass('open').fadeIn('300');
    SetYoutube($(this).attr('data-content'));
    return false;
  });
});

function SetYoutube() {
  var youtube = '';
  var youtubeUrl = arguments[0];
  if (youtubeUrl == '' || youtubeUrl == null) {
    closed_popup();
    $('.popup--video').removeClass('open');
    alert('Coming soon.');
  } else {
    youtube = '<iframe id="video" width="900" height="576" src="' + youtubeUrl + '" frameborder="0" allowfullscreen></iframe>';
    $('.you_tube').html(youtube);
  }
}

//## 동영상팝업 닫기 버튼
function closed_video() {
  $('.blind').fadeOut(300);
  // console.log('ddd');
  $('.popup--video').removeClass('open');
  $('.you_tube').empty();
  $('.video-closed, .popup').hide();
  return false;
}
