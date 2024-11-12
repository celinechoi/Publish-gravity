// // S: PV Iframe 제어
// /* let player;
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('pvIframe', {
//     events: {
//       onReady: onPlayerReady,
//       onStateChange: onPlayerStateChange,
//     },
//   });
// }
// function onPlayerReady(event) {
//   // console.log('준비됨');
// }
// function onPlayerStateChange(event) {
//   //재생중이면 bg 정지
//   if (event.data == YT.PlayerState.PLAYING) {
//     // console.log('브금정지');
//     bgmPause();
//   }
// } */
// E: PV Iframe 제어

// S: PV팝업
$(document).ready(function () {
  // ## 동영상 팝업 열기
  $('body').on('click', ' button[data-popup="popup__pv"]', function () {
    // console.log('팝업열면 자동재생');
    bgmPause(); //브금정지

    SetYoutubePV($(this).attr('data-content'));

    $('#popup__pv .btn-bx .btn').removeClass('on');
    $('#popup__pv .btn-bx #pv-1').addClass('on');

    // setTimeout(() => {
    //   player.playVideo();
    // }, 50);
  });
});

// 뱃지 팝업
$(document).ready(function () {
  // ## 뱃지 팝업 열기
  // $('body').on('click', ' button[data-popup="popup__thero-open"]', function () {
  //   console.log('팝업열면 나오게');
  // });
});

// 탭버튼에 맞는 영상 아이프레임 주소에 삽입
$('#popup__pv .btn-bx .btn').click(function () {
  var $src = $(this).data('src');
  $('#pvIframe').attr('src', $src);
  $(this).addClass('on');
  $(this).siblings().removeClass('on');
});
// E: PV팝업

//## 팝업열기
$(document).on('click', '.popup-link', function () {
  var targetPopupName = $(this).attr('data-popup');
  $('#' + targetPopupName)
    .fadeIn()
    .css('display', 'flex');
  return false;
});

// ## 팝업 닫기 함수.
function closed_popup() {
  $('.popup--video').removeClass('open');
  $('.popup--video .you_tube').empty();
  $('.popup .you_tube').empty();

  // player.stopVideo(); // youtube player api 정지

  $('.popup').hide();
  return false;
}

$(document).keyup(function (e) {
  if (e.key === 'Escape') {
    closed_popup();
  }
});

// 팝업 영역 외 클릭시 닫기
// $('.popup').on('click', function (e) {
//   if (!$(e.target).closest('.popup__wrap').length) {
//     closed_popup();
//   }
// });

$(document).ready(function () {
  // ## 동영상 팝업 열기
  $('body').on('click', '.popup-link--video', function () {
    bgmPause();

    $('.popup--video').addClass('open').fadeIn('300');
    SetYoutube($(this).attr('data-content'));
    return false;
  });
});

// ## 동영상 세팅
function SetYoutube() {
  var youtube = '';
  var youtubeUrl = arguments[0];
  if (youtubeUrl == '' || youtubeUrl == null) {
    closed_popup();
    $('.popup--video').removeClass('open');
    alert('Coming soon.');
  } else {
    youtube = '<iframe id="video" width="900" height="576" src="' + youtubeUrl + '?autoplay=1" allow="autoplay; encrypted-media" frameborder="0" allowfullscreen></iframe>';
    $('.popup--video .you_tube').html(youtube);
  }
}
function SetYoutubePV() {
  var youtube = '';
  var youtubeUrl = arguments[0];
  youtube = '<iframe id="pvIframe" width="900" height="576" src="' + youtubeUrl + '?autoplay=1" allow="autoplay; encrypted-media" frameborder="0" allowfullscreen></iframe>';
  $('#popup__pv .you_tube').html(youtube);
}
