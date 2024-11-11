// ##### 2차 스크립트 #####
// console.log('2차 페이지');

// ##### menu
function navClose() {
  $('.nav__dimmed').stop().fadeOut();
  $('.nav__toggle').stop().removeClass('on');
  $('.nav__toggle').attr('title', '네비게이션 열기');
  $('.header').stop().removeClass('active');
}
function navOpen() {
  $('.nav__dimmed').stop().fadeIn();
  $('.nav__toggle').stop().addClass('on');
  $('.nav__toggle').attr('title', '네비게이션 닫기');
  $('.header').stop().addClass('active');
}
if ($(window).width() <= $mediaResponsiveSize) {
  $('.nav-item .link:not(.link--disabled)').click(function () {
    navClose();
  });
}
$('.nav__toggle').click(function () {
  if ($(this).hasClass('on')) {
    navClose();
  } else {
    navOpen();
  }
});
$('.lang-box').on('click', function () {
  $('.lang-box__arrow').toggleClass('open');
  $('.lang-list').slideToggle();
});

//섹션별로 data-aos-delay='none' 항목에 순차적으로 delay 적용
$('.sec-delay').each(function () {
  //기본값 delayBasic, 간격 delay 로 딜레이 증분
  const delayBasic = 100,
    delay = 100;
  $(this)
    .find('[data-aos-delay="none"]')
    .each(function (index) {
      $(this).attr('data-aos-delay', index * delay + delayBasic);
    });
});

// ##### Anchor
// function menuFunc(e) {
//   let thisOffsetTop = $(e).offset().top + 1000;
//   $(window).scrollTop(thisOffsetTop);
// }

// $('.header .mo-gnb-bg .inner').css('max-height', $(window).outerHeight() - 20);

//scrollSpy function
function scrollSpy() {
  let sections = [
    'section1',
    // FIXME:
    // CBT 0927삭제예정
    'section5',
    'section2',
    'section3',
    'section4',
  ];
  let current = '';
  let indexNum = '';
  let headerHeight = $('.header').height();
  let navH = $('nav').outerHeight(true);
  for (let i = 0; i < sections.length; i++) {
    if ($windowW <= 1024) {
      //mo
      if ($('#' + sections[i]).offset().top - 180 <= $(window).scrollTop()) {
        current = sections[i];
      }
    } else {
      //pc
      // if (i === 1) {
      //   if ($('#' + sections[i]).offset().top - headerHeight - navH + 710 <= $(window).scrollTop()) {
      //     console.log($('#' + sections[i]).offset().top - headerHeight - navH + 710);
      //     // $(window).scrollTop($('#' + sections[i]).offset().top - headerHeight - navH + 710);
      //   }
      // } else if (i === 2) {
      //   if ($('#' + sections[i]).offset().top - headerHeight - navH + 387 <= $(window).scrollTop()) {
      //     current = sections[i];
      //   }
      // } else {
      //   if ($('#' + sections[i]).offset().top - headerHeight - navH <= $(window).scrollTop()) {
      //     current = sections[i];
      //   }
      // }
      if ($('#' + sections[i]).offset().top - headerHeight - navH <= $(window).scrollTop()) {
        indexNum = i;
        current = sections[i];
      }
    }
  }
  // let nowOffset = $(e).offset();
  // console.log(indexNum, current, nowOffset);
  // $(window).scrollTop($(e).offset().top);

  $('nav a[href*="#"]').removeClass('on');
  $('nav a[href="#' + current + '"]').addClass('on');
  $('#bgShareBg').removeClass('fix');
  // console.log(current, 'currentT');
  if (current === 'section1' || current === 'section2') {
    $('#bgShareBg').addClass('fix');
  } else {
    return false;
  }
}

// 스크롤 이벤트 정의
$(window).scroll(function (e) {
  if ($('.header.present').length !== 0) {
    scrollSpy();
  }
});

$('nav .gnb li a:not(a[href$="#"]), .scroll-icon, .main__con--btn, .mo-box__anchor, .cbt-btn-list__btn, .cbt-btn-list__btn.btn2').click(function () {
  const elmHash = $(this).attr('href');
  let navH;
  let pos;

  // ### mobile
  if ($windowW <= 1024) {
    navH = $('nav').outerHeight(true);
    // pos = Math.round($(elmHash).offset().top - 90);

    if (elmHash == '#main') {
      pos = 0;
    } else {
      pos = $(elmHash).find('.section-txt--tit').offset().top - 100; //모바일에서 제목위치로 이동
    }

    // console.log('모바일메뉴 클릭', pos);

    $('.btn-gnb').removeClass('on');
    $('.mo-gnb-bg').fadeOut();
  } else {
    navH = $('nav').outerHeight(true);
    pos = Math.round($(elmHash).offset().top - navH);
  }
  // $(window).on('resize', function () {
  //   $windowW = $(window).outerWidth();
  //   if ($windowW <= 1024) {
  //     navH = $('nav').outerHeight(true);
  //     pos = Math.round($(elmHash).offset().top - 90);
  //     $('.btn-gnb').removeClass('on');
  //     $('.mo-gnb-bg').fadeOut();
  //   } else {
  //     navH = $('nav').outerHeight(true);
  //     pos = Math.round($(elmHash).offset().top - navH);
  //   }
  // });
  $('body,html').animate({ scrollTop: pos }, 100);
  return false;
});

// ##### header 스크롤 픽스
let thisTop;
$(window).on('scroll', function () {
  thisTop = $(this).scrollTop();
  let $header = $('header');
  if (thisTop > 66) {
    if (!$header.hasClass('bg')) {
      $header.addClass('bg');
    }
  } else {
    if ($header.hasClass('bg')) {
      $header.removeClass('bg');
    }
  }
});

// ##### mobile menu
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
  // $('.header .mo-gnb-bg .inner').css('max-height', $(window).outerHeight() - 20);
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

// ## 최상단으로 이동 버튼
$('#btnTop').click(function (e) {
  e.preventDefault();
  $('html,body').animate({ scrollTop: 0 }, 200);
});

// # 스크롤 이벤트 정의
$(document).scroll(function (e) {
  // ### top button
  if ($(window).scrollTop() > 500) {
    $('#btnTop').fadeIn(300);
  } else {
    $('#btnTop').fadeOut(300);
  }
  if ($(window).scrollTop() > $('body').outerHeight() - $('.footer').outerHeight() - $(window).height()) {
    $('#btnTop').addClass('absolute');
  } else {
    $('#btnTop').removeClass('absolute');
  }
});

$(document).ready(function () {
  // ## aos
  AOS.init();

  if ($(window).width() >= $mediaResponsiveSize) {
    // navOpen();
  }
});

// ##### 가로모드
$(window).on('load', function () {
  goToPortraitMode();
});

$(window).on('resize', function () {
  goToPortraitMode();
});

function goToPortraitMode() {
  const windowW = window.innerWidth;
  const windowH = window.innerHeight;
  if (windowH <= windowW) {
    // console.log(`${windowW}, ${windowH} 넌 지금 가로다 `);
    $('.goToPortraitMode').addClass('show');
    setTimeout(function () {
      $('.goToPortraitMode').removeClass('show');
    }, 6000);
  } else {
    $('.goToPortraitMode').removeClass('show');
  }
  // if (windowH <= windowW) {
  //   // console.log(`${windowW}, ${windowH} 넌 지금 가로다 `);
  //   $('.goToPortraitMode').stop().fadeIn(300); //addClass('show');
  //   setTimeout(function () {
  //     $('.goToPortraitMode').stop().fadeOut(300); //removeClass('show');
  //   }, 6000);
  // } else {
  //   $('.goToPortraitMode').stop().fadeOut(300); //removeClass('show');
  // }
}

if ($('.info-frame'.length > 0)) {
  $('.info-frame').css({ minHeight: $(window).outerHeight() - $('.footer').outerHeight() - 4 });

  $(window).on('resize', function () {
    $('.info-frame').css({ minHeight: $(window).outerHeight() - $('.footer').outerHeight() - 4 });
  });
}

// dom 수정
const elements = document.querySelectorAll('.discord-event .title--sub');

elements.forEach((element) => {
  const text = element.textContent;

  const span = document.createElement('span');
  span.textContent = text;

  element.textContent = '';
  element.appendChild(span);
});
