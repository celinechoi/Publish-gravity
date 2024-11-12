// ##### Popup Script #####
// ## Open Popup
$(document).on('click', '.popup-link', function () {
  var targetPopupName = $(this).attr('data-popup');
  open_blind();
  // console.log('?');
  $('.' + targetPopupName)
    .fadeIn()
    .css('display', 'flex');
  return false;
});

$('.popup--rule .popup__nav .link').on('click', function () {
  var active = $(this).attr('data-nav');
  // console.log(active, 'active');
  $('.popup__nav .link').removeClass('active');
  $(this).addClass('active');
  $('.popup--rule .popup__content').hide();
  $('.popup--rule .popup__content--' + active).show();
  return false;
});

// ## blind action
function open_blind() {
  $('.blind, .dungeon-closed').fadeIn(300);
  $('body').addClass('none-scroll');
}
// ## popup close
function closed_popup() {
  $('.blind, .dungeon-closed').fadeOut(300);
  $('body').removeClass('none-scroll');
  $('.popup--video').removeClass('open');
  $('.you_tube').empty();
  $('.popup').hide();
  return false;
}

// ##### main
// ## video popup
$(document).ready(function () {
  $('body').on('click', '.popup-link--video', function () {
    $('body').addClass('none-scroll');
    $('.video-closed, .blind').fadeIn(300);
    $('.popup--video').addClass('open').fadeIn('300');
    SetYoutube($(this).attr('data-content'), $(this).attr('data-msg'));
    return false;
  });
});

function SetYoutube() {
  var youtube = '';
  var youtubeUrl = arguments[0];

  // if (youtubeUrl == '' || youtubeUrl == null) {
  //   closed_popup();
  //   $('.popup--video').removeClass('open');
  //   // if (msg === '') {
  //   // alert('Coming soon.'); <!-- 240927 수정 --> 지정메시지 노출 이슈로 삭제
  //   // } else {
  //   //   alert(msg); //
  //   // }
  // } else {
  youtube = '<iframe id="video" width="900" height="576" src="' + youtubeUrl + '" frameborder="0" allowfullscreen></iframe>';
  $('.you_tube').html(youtube);
  // }
}

//## close video popup
function closed_video() {
  $('body').removeClass('none-scroll');
  $('.blind').fadeOut(300);
  // console.log('ddd');
  $('.popup--video').removeClass('open');
  $('.you_tube').empty();
  $('.video-closed, .popup').hide();
  return false;
}
