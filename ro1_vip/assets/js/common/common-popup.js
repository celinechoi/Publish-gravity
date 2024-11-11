//## 팝업열기
$(document).on('click', '.popup-link', function () {
  var targetPopupName = $(this).attr('data-popup');
  $('#' + targetPopupName)
    .fadeIn()
    .css('display', 'flex');
  return false;
});

// ## 팝업 닫기 요청 시 액션 함수.
function closed_popup() {
  $('.popup').hide();
  return false;
}

$(document).keyup(function (e) {
  if (e.key === 'Escape') {
    closed_popup();
  }
});
