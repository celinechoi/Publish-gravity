//## 팝업열기
$(document).on('click', '.popup-link', function () {
  var targetPopupName = $(this).attr('data-popup');
  open_blind();
  $('.' + targetPopupName)
    .fadeIn()
    .css('display', 'flex');
  return false;
});

// ## 팝업 요청 시 블라인드 액션 함수.
function open_blind() {
  $('.blind, .blind--btnClosed').fadeIn(300);
}
// ## 팝업 닫기 요청 시 액션 함수.
function closed_popup() {
  $('.blind, .blind--btnClosed').fadeOut(300);
  $('.popup--video').removeClass('open');
  $('.you_tube').empty();
  $('.popup').hide();
  return false;
}