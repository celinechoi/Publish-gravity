// ##### 캐릭터 움직이기 #####

let lastScrollY = 0;

window.addEventListener('scroll', (e) => {
  let currentScrollY = window.scrollY;
  if (lastScrollY < currentScrollY) {
    if ($('.char-frame').length > 0) {
      $('.char-frame__item').removeClass('back');
    }
  } else if (lastScrollY >= currentScrollY) {
    if ($('.char-frame').length > 0) {
      $('.char-frame__item').addClass('back');
    }
    if (currentScrollY == 0) {
      if ($('.char-frame').length > 0) {
        $('.char-frame__item').removeClass('back');
      }
    }
  } else {
    if ($('.char-frame').length > 0) {
      $('.char-frame__item').removeClass('back');
    }
  }

  lastScrollY = currentScrollY;

  // ##### 메인에서 언제고정할건지
  let whenIFix; //(메인에서의 offset과 npc의 위치)
  if (window.outerWidth > 1080) {
    // pc
    whenIFix = 810 - 250 - 180; //(메인에서의 offset과 npc의 위치)

    if (currentScrollY > whenIFix) {
      $('.char-frame').addClass('active');
    } else {
      $('.char-frame').removeClass('active');
    }
  } else {
    // mo
    // 미디어 비율이 50/75 이하일 때
    var mediaQuery = window.matchMedia('(min-aspect-ratio: 50/75)');

    if (mediaQuery.matches) {
      // 가로에 대비해서 50% 스크롤 했을 경우의 값을 얻기
      window.addEventListener('scroll', function () {
        // var currentScrollY = window.scrollY || window.pageYOffset;

        if (currentScrollY >= window.innerWidth) {
          $('.char-frame').addClass('active');
        } else {
          $('.char-frame').removeClass('active');
        }
      });
    } else {
      // console.log('보통모바일');

      // whenIFix = 50;
      whenIFix = 280;
      if (currentScrollY > whenIFix) {
        $('.char-frame').addClass('active');
      } else {
        $('.char-frame').removeClass('active');
      }
    }
  }

  // if (currentScrollY > whenIFix) {
  //   $('.char-frame').addClass('active');
  // } else {
  //   $('.char-frame').removeClass('active');
  // }
});

//스크롤액션있을때만 걷는모습
$(document).ready(function () {
  var scrollTimeout;
  var delay = 100; // Delay time in milliseconds

  $(window).on('scroll', function () {
    clearTimeout(scrollTimeout);

    $('.char-frame__item').removeClass('pause');
    scrollTimeout = setTimeout(function () {
      $('.char-frame__item').addClass('pause');
    }, delay);
  });
});
