// youtube
// $('.you-tube').each(function (e) {
//   $(this)
//     .find('.you-tube__cover')
//     .click(function (e) {
//       console.log('ddd');
//       $(this).next('.pv-iframe').attr('src', '');
//       // e.preventDefault();
//       $(this).parent().find('.tab-link').removeClass('active');
//       $(this).parent().parent().parent().find('.tab-content').find('.stone').removeClass('on');
//       $(this).addClass('active');
//       $('#' + active).show();
//       $('#' + active)
//         .find('.stone')
//         .addClass('on');
//       $('.paral_wrap__bg').addClass(active);
//       return false;
//     });
//   $(this)
//     .find('.you_tube-cover')
//     .on('click', function () {
//       $(this).hide();
//       var $src = $(this).data('src');
//       console.log($src);
//       $(this).next('.pv-iframe').attr('src', $src);
//       // let videoEle = $(this).next('.pv-iframe');
//       // $(videoEle).play();
//     });
// });
// ##### yyuoutube 영상 준비되면 활성화
// $('.you-tube__cover').on('click', function () {
//   var $src = $(this).data('src');
//   $('.you-tube__cover').show();
//   $('.you-tube__cover').next('.pv-iframe').attr('src', '');
//   $(this).hide();
//   $(this).next('.pv-iframe').attr('src', $src);
// });

// ### 티켓
$('#app2').on('click', function () {
  $(this).find('.packaging').fadeOut('slow');
  // $(this).find('.wrapper').fadeIn('fast');
});
