var css = '<link rel="stylesheet" href="https://static.gnjoy.com.tw/css/gnjoy_topBar.css">';

var html = '<!-- GVtopBar -->\n' + '<div id="gnjoy_topBar">\n' + '<div class="wrap">\n' + '<a href="http://www.gnjoy.com.tw/" class="gnjoy_logo" title="GNJOY平台">GNJOY</a>\n' + '<ul>\n' + '<li><a href="https://www.gnjoy.com.tw/Member/Signin" target="_parent" title="會員專區">會員專區</a></li>\n' + '<li><a href="https://www.gnjoy.com.tw/Game" target="_parent" title="遊戲中心">遊戲中心</a></li>\n' + '<li><a href="https://www.gnjoy.com.tw/Billing" target="_parent" title="儲值專區">儲值專區</a></li>\n' + '<li><a href="https://www.gnjoy.com.tw/Cs" target="_parent" title="客服中心">客服中心</a></li>\n\n' + '<li><a href="https://www.gnjoy.com.tw/Coupon/Zone" target="_parent" title="序號兌換">序號兌換</a></li>\n' + '<li><a href="https://www.gnjoy.com.tw/Store" target="_parent" title="線上商城">線上商城</a></li>\n' + '<li><a href="https://tro.gnjoy.com.tw/" target="_parent" title="RO仙境傳說樂園">RO仙境傳說樂園</a></li>\n' + '</ul>\n' + '<div class="btn_box">\n' + '<a href="https://www.gnjoy.com.tw/Member/Signin" class="btn_signin" target="_parent" title="註冊"><i></i>註冊</a>\n';
'</div>\n' + '</div>\n' + '</div>';

var GVtopBar = document.createElement('div');
GVtopBar.setAttribute('id', 'GVtopBar');
GVtopBar.innerHTML = css + html;

var target = document.body.firstChild;
target.parentNode.insertBefore(GVtopBar, target);
