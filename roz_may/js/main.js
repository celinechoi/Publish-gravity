// 팝업 요청 시 블라인드 액션 함수.
function open_blind() {
  $height = $(document).height();
  $('.blind').height($height);
  $('.blind').css('display', 'block');
}
// 팝업 닫기 요청 시 액션 함수.
function closed_popup() {
  $('.blind').css('display', 'none');
  $('[class^=pop_]').hide();
}

$(function () {
  //팝업 버튼클릭 close
  $('.btn_close').click(function () {
    closed_popup();
    return false;
  });

  // 애니메이트될 주사위 앨리먼트
  var dice = document.querySelector('.animateDice');

  // 실제로 주사위가 굴러가면서 어떤 주사위의 숫자 면 을 보여줄지를 정함.
  var rollDice = (number) => {
    switch (number) {
      case 1:
        dice.style.animation = 'rolling1 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards';
        break;
      case 2:
        dice.style.animation = 'rolling2 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards';
        break;
      case 3:
        dice.style.animation = 'rolling3 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards';
        break;
      case 4:
        dice.style.animation = 'rolling4 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards';
        break;
      case 5:
        dice.style.animation = 'rolling5 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards';
        break;
      case 6:
        dice.style.animation = 'rolling6 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards';
        break;
      default:
        break;
    }
  };

  // 주사위 굴리기 버튼 클릭 시 액션.
  // $('.btn_gameStart').click(function () {
  //   dice.style.animation = 'unset';
  //   setTimeout(function () {
  //     rollDice(3);
  //   }, 100);

  //   return false;
  // });
  // 230511 수정 : 주석
});
