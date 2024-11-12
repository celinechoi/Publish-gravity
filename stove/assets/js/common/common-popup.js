// ##### Popup Script #####
// ## Open Popup
$(document).on('click', '.popup-link', function () {
  var targetPopupName = $(this).attr('data-popup');
  open_blind();
  $('.' + targetPopupName).fadeIn();
  return false;
});

// ## blind action
function open_blind() {
  $('.blind, .blind--btnClosed').fadeIn(300);
  $('body').addClass('none-scroll');
}
// ## popup close
function closed_popup() {
  $('.blind, .blind--btnClosed').fadeOut(300);
  $('body').removeClass('none-scroll');
  $('.popup').hide();
  return false;
}
