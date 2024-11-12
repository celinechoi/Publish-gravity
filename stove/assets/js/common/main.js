// ##### visual slider
if ($('#visualSlider').length > 0) {
  var visualSlider = new Swiper('#visualSlider', {
    effect: 'slide',
    autoplay: {
      delay: 3000,
    },
    // autoplay: false,
    speed: 500,
    loop: true,
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    pagination: {
      el: '#visualSlider .custom-remote__pagination',
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        const swipper = swiper;
        const fillPer = (current / total) * 100;
        const fillWidth = fillPer + '%;';
        return '<div class="fraction-box"><strong><span class="current">' + current + '</span></strong><span class="total"> <span class="slash">/</span> ' + total + '</span></div><div class="progress__bar"><span class="progress__fill" style="width:' + fillWidth + '"></span></div>';
      },
    },
  });
  $('#visualSlider .btn-pause').on('click', function () {
    if (!$(this).hasClass('on')) {
      $('#visualSlider .btn-pause').addClass('on');
      visualSlider.autoplay.stop();
    } else {
      $('#visualSlider .btn-pause').removeClass('on');
      visualSlider.autoplay.start();
    }
  });
}
