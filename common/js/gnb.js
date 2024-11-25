function GetGameCode() {
  var nDom, gameCode;
  nDom = location.href;
  nDom = nDom.split('//');
  nDom = 'http://' + nDom[1].substr(0, nDom[1].indexOf('/'));

  var arrURL = Array('ro.game.gnjoy.com', 'rq.game.gnjoy.com', 'canaan.game.gnjoy.com', 'ro2.game.gnjoy.com', 'kw.gnjoy.com');
  var arrGameCode = Array('0011', '0010', '0020', '0007', '0024');

  for (var i = 0; i < arrURL.length; i++) {
    if (nDom.indexOf(arrURL[i]) > 0) {
      gameCode = arrGameCode[i];
      break;
    }
  }

  return gameCode;
}
function setTopMenu() {}

var url = 'http://gnb.gnjoy.com/ResJs/gnb/gnb_game.js.asp?gameCode=' + GetGameCode();

document.write('<script type="text/javascript"  src="' + url + '" charset="utf-8"></script>');
