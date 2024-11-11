var css = '<link rel="stylesheet" href="https://event.gnjoy.com.tw/loadTemplate/troSideBtn/css/style.css">';
var html = '<!-- topBar -->\n<span id="troCloseBtn"><i></i>close</span>\n<a id="troIndex" href="https://tro.gnjoy.com.tw/" target="_blank" title="更多RO遊戲">RO仙境傳說樂園(RO LAND)</a>';

var troSideBtn = document.createElement('div');
troSideBtn.setAttribute('id', 'troSideBtn');
troSideBtn.setAttribute('class', 'troclose');
troSideBtn.innerHTML = css + html;
var target = document.body.firstChild;
target.parentNode.insertBefore(troSideBtn, target);

var troCloseBtn = document.getElementById('troCloseBtn');
var troIndex = document.getElementById('troIndex');
var _close = true;

function addClass(e, className) {
  if (e.classList) e.classList.add(className);
  else if (!hasClass(e, className)) e.className += ' ' + className;
}

function removeClass(e, className) {
  if (e.classList) e.classList.remove(className);
  else if (hasClass(e, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
    e.className = e.className.replace(reg, ' ');
  }
}

troCloseBtn.onmouseover = function () {
  troCloseBtn.className = 'troon';
};
troCloseBtn.onmouseout = function () {
  troCloseBtn.className = '';
};
troCloseBtn.onclick = function () {
  if (_close) {
    troSideBtn.className = '';
    _close = false;
  } else {
    troSideBtn.className = 'troclose';
    _close = true;
  }
};
window.onscroll = function (ev) {
  if (window.scrollY >= document.body.scrollHeight - window.innerHeight - 400) {
    addClass(troSideBtn, 'trobottom');
  } else {
    removeClass(troSideBtn, 'trobottom');
  }
};
window.scroll;
