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

// 사전예약 팝업 열기
function preBook() {
  // console.log('oooooooooo');
  open_blind();
  $('.popup__duplication').fadeIn().css('display', 'flex');
}

// 유의사항 팝업 열기
function cautionFunc() {
  console.log('ㅇㅇㅇ');
  open_blind();
  $('.popup__caution').fadeIn().css('display', 'flex');
}
function noticePopupFunc() {
  // console.log('ㅇㅇㅇ');
  open_blind();
  $('.popup__event-notice').fadeIn().css('display', 'flex');
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
  $('.popup:not(.popup__cookie)').hide();
  return false;
}

// ## 팝업 닫기 버튼
// $('.blind--btnClosed').on('click', function (e) {
//   closed_popup();
// });
