// ##### UPDATE
// 페럴렉싱
var innerPosition = $('.paral_wrap__inner').height() * 0.5;
gsap.set('.paral_wrap__inner', { y: -innerPosition });

var paral = function () {
  // : tab
  $('.js-tab').each(function (e) {
    $(this)
      .find('.tab-link')
      .click(function (e) {
        console.log('ddd');
        var active = $(this).attr('data-hash');
        $('.you_tube-cover').next('.pv-iframe').attr('src', '');
        $('#' + active)
          .find('.you_tube-cover')
          .show();
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
        $('.tab-content').hide();
        $('.paral_wrap__bg').removeClass('tabContent1, tabContent2');
        e.preventDefault();
        $(this).parent().find('.tab-link').removeClass('active');
        $(this).parent().parent().parent().find('.tab-content').find('.stone').removeClass('on');
        $(this).addClass('active');
        $('#' + active).show();
        $('#' + active)
          .find('.stone')
          .addClass('on');
        $('.paral_wrap__bg').addClass(active);
        return false;
      });
    $(this)
      .find('.you_tube-cover')
      .on('click', function () {
        $(this).hide();
        var $src = $(this).data('src');
        console.log($src);
        $(this).next('.pv-iframe').attr('src', $src);
        // let videoEle = $(this).next('.pv-iframe');
        // $(videoEle).play();
      });
  });
  gsap.to('.paral_wrap__inner', {
    // y: '+=60%',
    y: '+=40%',
    ease: 'none',
    scrollTrigger: {
      trigger: '#section2',
      scrub: 1, // 부드러운 스크러빙, 스크롤바를 잡는데 1초 소요
      markers: false, // 기점 처리
      // start: '0% 100%',
      // end: '100% 0%',
    },
  });
};
paral();

$('#app2').on('click', function () {
  $(this).find('.packaging').fadeOut('slow');
  // $(this).find('.wrapper').fadeIn('fast');
});
