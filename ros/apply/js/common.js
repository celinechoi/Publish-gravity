(function(){  
  $('.term-bx').mCustomScrollbar({
    axis: 'y', // vertical and horizontal scrollbar
    // theme: 'minimal-dark',
    theme: 'dark',
    scrollInertia: 1000,
  });
  
})();

function movePrevStep() {
  if (!confirm('작성하신 정보를 삭제하고 이전으로 이동하시나요?')) {
    // 취소
  } else {
    // window.location.href = 'step1.html';
    window.history.go(-1);
  }
}