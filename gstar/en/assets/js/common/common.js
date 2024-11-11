// ##### aos 호출
document.addEventListener('DOMContentLoaded', function () {
  var titleFrames = document.querySelectorAll('.lineup-box, .program-box, .influencer-list, .event-list li, .info-txt, h2.title-frame, .btn-booth');
  // console.log('$$$');
  titleFrames.forEach(function (element) {
    element.setAttribute('data-aos', 'fade-up');
    element.setAttribute('data-aos-duration', '500');
    element.setAttribute('data-aos-delay', '0');
    element.setAttribute('data-aos-offset', '0');
  });

  // AOS 초기화
  setTimeout(function () {
    AOS.init();
  }, 500);
  $('.influencer').find('h2.title-frame').attr('data-aos-delay', '200');
  $('.influencer-list').attr('data-aos-delay', '200');
});
$(document).ready(function () {
  // 가로 모드
  let angle;
  // 모바일 브라우저에서만 실행
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    if (window.screen && window.screen.orientation) {
      angle = window.screen.orientation.angle;
      if (angle === 90) {
        $('.dim-tag').show();
      } else {
        $('.dim-tag').hide();
      }
    }

    screen.orientation.addEventListener('change', (event) => {
      angle = event.target.angle;
      if (angle === 90) {
        $('.dim-tag').show();
      } else {
        $('.dim-tag').hide();
      }
    });
  }
});

// anchor
//scrollSpy function
function scrollSpy() {
  // console.log('###');
  var sections = ['main', 'lineup', 'program', 'event'];
  var current = '';
  var headerHeight = $('header').height();
  for (var i = 0; i < sections.length; i++) {
    if ($('#' + sections[i]).offset().top - headerHeight <= $(window).scrollTop()) {
      current = sections[i];
    }
  }
  $('nav a[href*="#"]').removeClass('on');
  $('nav a[href="#' + current + '"]').addClass('on');
}

// 스크롤 이벤트 정의
$(window).scroll(function (e) {
  scrollSpy();
});

// header 스크롤 픽스
let thisTop;
$(window).on('scroll', function () {
  thisTop = $(this).scrollTop();
  let $header = $('header');
  // let $liveBtn = $('.btn-live__ele');
  if (thisTop > 66) {
    if (!$header.hasClass('bg')) {
      $header.addClass('bg');
      // $liveBtn.addClass('colored');
    }
  } else {
    if ($header.hasClass('bg')) {
      $header.removeClass('bg');
      // $liveBtn.removeClass('colored');
    }
  }
});

// ## window resize
let $windowW;
$windowW = $(window).outerWidth();

if ($windowW > 1024) {
  // pc
  $('.mo-gnb-bg').fadeIn();
} else {
  // mo
  if ($('.btn-gnb').length > 0 && !$('.btn-gnb').hasClass('on')) {
    $('.mo-gnb-bg').fadeOut();
  } else {
    $('.mo-gnb-bg').fadeIn();
  }
}

$(window).on('resize', function () {
  $windowW = $(window).outerWidth();
  if ($windowW > 1024) {
    // pc
    $('.mo-gnb-bg').fadeIn();
  } else {
    // mo
    if (!$('.btn-gnb').hasClass('on')) {
      $('.mo-gnb-bg').fadeOut();
    } else {
      $('.mo-gnb-bg').fadeIn();
    }
  }
});

// ## mobile menu
$('.btn-gnb').on('click', function () {
  if (!$(this).hasClass('on')) {
    $(this).addClass('on');
    $('.mo-gnb-bg').fadeIn();
    return false;
  } else {
    $(this).removeClass('on');
    $('.mo-gnb-bg').fadeOut();
    return false;
  }
});

// ## header language
$('.lang-box').on('mouseenter', function () {
  if ($windowW > 1024) {
    //pc
    $(this).addClass('on');
    $('.lang-list').stop().slideDown();
  } else {
    // mo
    return false;
  }
  $(window).on('resize', function () {
    $windowW = $(window).outerWidth();
    if ($windowW > 1024) {
      //pc
      $(this).addClass('on');
      $('.lang-list').stop().slideDown();
    } else {
      // mo
      return false;
    }
  });
});

$('.lang-box').on('mouseleave', function () {
  if ($windowW > 1024) {
    //pc
    $(this).removeClass('on');
    $('.lang-list').stop().slideUp();
  } else {
    // mo
    return false;
  }
  $(window).on('resize', function () {
    $windowW = $(window).outerWidth();
    if ($windowW > 1024) {
      //pc
      $(this).removeClass('on');
      $('.lang-list').stop().slideUp();
    } else {
      // mo
      return false;
    }
  });
});

// ## header menu anchor
$('.logo').on('click', function () {
  $('nav a[href="#main"]').addClass('on');
});
$('nav a[href*="#"]').click(function () {
  // console.log('#');
  let elmHash = $(this).attr('href');
  let navH = $('nav').outerHeight(true);
  let pos = Math.round($(elmHash).offset().top + 130 - navH);
  $('body,html').animate({ scrollTop: pos }, 100);
  // $('nav a[href*="#"]').removeClass('on');
  // $(this).addClass('on');

  // ### mobile
  if ($windowW <= 1024) {
    $('.btn-gnb').removeClass('on');
    $('.mo-gnb-bg').fadeOut();
  } else {
    return false;
  }
  $(window).on('resize', function () {
    $windowW = $(window).outerWidth();
    if ($windowW <= 1024) {
      $('.btn-gnb').removeClass('on');
      $('.mo-gnb-bg').fadeOut();
    } else {
      return false;
    }
  });
  return false;
});

// ## 최상단으로 이동 버튼
$('.btnTop').click(function (e) {
  e.preventDefault();
  $('html,body').animate({ scrollTop: 0 }, 200);
});

// ## 탑 버튼 스크롤 이벤트 정의
$(document).scroll(function (e) {
  if ($(window).scrollTop() > 500) {
    $('.btnTop').fadeIn(300);
  } else {
    $('.btnTop').fadeOut(300);
  }
  if ($(window).scrollTop() > $('body').outerHeight() - $('footer').outerHeight() - $(window).height()) {
    $('.btnTop').addClass('fix');
  } else {
    $('.btnTop').removeClass('fix');
  }
});
