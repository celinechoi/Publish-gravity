var bannerSel = 0;
var bannerCount = 2;

// 이벤트 배너 롤링
function rollBanner() {
  bannerSel++;
  if (bannerSel == bannerCount) {
    bannerSel = 0;
  }

  for (var i = 0; i < bannerCount; i++) {
    if (bannerSel == i) {
      document.getElementById('banner_' + i).style.display = 'block';
    } else {
      document.getElementById('banner_' + i).style.display = 'none';
    }
  }
}

function goUrl(url) {
  top.location.href = url;
}

function newWin(url, windowName) {
  window.open(url, windowName);
}

function GameList(type) {
  //document.getElementById("tr_Gnb").style.display = type;
  document.getElementById('Table_GameList').style.display = type;
}

function ChangeImage(imgId, changeImage) {
  document.getElementById(imgId).border = '0';
  document.getElementById(imgId).src = 'https://imgc.gnjoy.com/gnjoy/2012_gnjoy/images/gnb/' + changeImage + '.gif';
}

function goLogin(returnUrl) {
  var thisUrl = top.location.href;
  var thisDomain = document.domain;
  var loginDomain = 'https://login.gnjoy.com';
  if ('http://' + thisDomain != loginDomain.toLowerCase()) {
    top.location.href = 'https://login.gnjoy.com?rtnurl=' + encodeURIComponent(returnUrl);
  }
}

function goLogOut(returnUrl) {
  if (returnUrl != '') {
    top.document.location.href = 'https://login.gnjoy.com/Logout?rtnurl=' + encodeURIComponent(returnUrl);
  } else {
    top.location.href = 'https://login.gnjoy.com/Logout';
  }
}

function openCashPopUp(loggingParameter) {
  var f = document.frmPaymentGnb;
  f.nextPage.value = '';
  f.target = 'POPUP_GCASH_CHARGE';
  f.action = 'https://payment.gnjoy.com/bill/login.grv';
  WINDOW.open.popUp('', 'POPUP_GCASH_CHARGE', 555, 627);
  f.submit();

  if (typeof loggingParameter == 'undefined') {
    loggingParameter = '';
  }
  try {
    n_click_logging(GLB_DOMAIN_LOG + '/?' + loggingParameter);
  } catch (e) {}
}

function checkAlert() {
  alert('점검중입니다.');
}

document.write(
  '<script type="text/javascript" src="https://gnb.gnjoy.com/ResJs/Common/WINDOW.Class.js"></script><style type="text/css">html, body, thead, tbody, td {margin: 0; padding: 0;}</style>\
<form name="frmPaymentGnb" method="post"><input type="hidden" id="token" name="token" value="" /><input type="hidden" name="nextPage" value="" /></form>\
<table cellpadding="0" cellspacing="0" border="0" width="100%" style="position:relative;z-index:10000;height: 40px; background: url(https://imgc.gnjoy.com/gnjoy/2012_gnjoy/images/gnb/bg_gnb.gif) repeat-x 0 0;">\
    <tbody>\
        <tr>\
            \
            <td style="text-align: center; vertical-align: top;">\
            \
		\
		<table cellpadding="0" cellspacing="0" style="position: relative; z-index: 30000; width: 980px; height: 40px; margin: 0 auto; border: 0; vertical-align: top;">\
		<tbody>\
		\
                        <tr>\
                            <td style="width: 392px; height: 39px; vertical-align: top; text-align: left;"><a href="javascript:goUrl(\'https://www.gnjoy.com\');"><img src="https://imgc.gnjoy.com/gnjoy/2012_gnjoy/images/gnb/logo.gif" style="margin-top: 10px;" border="0" alt="지엔조이" /></a></td>\
                            <td style="width: 170px; vertical-align: top; text-align: right;">\
				                <div style="width: 170px; height: 39px; overflow: hidden;margin:0 18px 0 39px; vertical-align: top;">\
                            \
							<a id="banner_0" style="display: inline-block;" href="javascript:newWin(\'https://roz.gnjoy.com/event/2024/02/0207_roz_vipSupport_09R823GDF/\', \'NEWWIN_0\');"><img src="https://imgc.gnjoy.com/ufile/gnjoy/gnb/2024/02/07/061443_tM83J9Xa.png" border="0" alt="ROZ 2024 VIP" /></a>\
                            \
							<a id="banner_1" style="display: none;" href="javascript:newWin(\'https://ro.gnjoy.com/event/2024/02/0207_ro1_vipSupport_CN280934/\', \'NEWWIN_1\');"><img src="https://imgc.gnjoy.com/ufile/gnjoy/Event/2024/05/07/16590eafd57044e0b96bd646668945f8113113.png" border="0" alt="RO1_2024 VIP" /></a>\
                            \
								</div>\
                            </td>\
                            <td style="width: 65px; vertical-align: top;"><a href="javascript:goUrl(\'https://ro.gnjoy.com/\');" style="display: inline-block; width: 65px; height: 39px; overflow: hidden; vertical-align: top;"><img src="https://imgc.gnjoy.com/gnjoy/2012_gnjoy/images/gnb/nav_menu6_210601.gif?v=210621" border="0" alt="라그나로크" /></a></td><!-- 210621-2 수정 -->\
                            <td style="width: 90px; vertical-align: top;"><a href="javascript:goUrl(\'https://roz.gnjoy.com/\');" style="display: inline-block; width: 90px; height: 39px; overflow: hidden; vertical-align: top;"><img src="https://imgc.gnjoy.com/gnjoy/2012_gnjoy/images/gnb/nav_menu7_210621.gif?v=210621" border="0" alt="라그나로크제로" /></a></td><!-- 210621-2 수정 -->\
                            <td style="width: 69px; vertical-align: top;"><a href="javascript:goUrl(\'https://service.gnjoy.com/smartphone/index.asp\');" style="display: inline-block; width: 69px; height: 39px; overflow: hidden; vertical-align: top;"><img src="https://imgc.gnjoy.com/gnjoy/2012_gnjoy/images/gnb/nav_menu2_210601.gif?v=210621" border="0" alt="모바일 게임" /></a></td><!-- 210621-2 수정 -->\
                            <td style="width: 47px; vertical-align: top;"><a href="javascript:goUrl(\'https://service.gnjoy.com/news/event/list.asp\');" style="display: inline-block; width: 47px; height: 39px; overflow: hidden; vertical-align: top;"><img src="https://imgc.gnjoy.com/gnjoy/2012_gnjoy/images/gnb/nav_menu3_210601.gif?v=210621" id="Img_Gnb_Event" border="0" alt="이벤트" /></a></td><!-- 210621-2 수정 -->\
                            \
                            <td style="width: 44px; vertical-align: top;"><a href="javascript:goLogin(\'https://member.gnjoy.com/user/pay/chargeList.asp\');" style="display: inline-block; width: 44px; height: 39px; overflow: hidden; vertical-align: top;"><img src="https://imgc.gnjoy.com/gnjoy/2012_gnjoy/images/gnb/nav_menu4_210601.gif?v=210621" id="Img_Gnb_CashCharge" border="0" alt="G캐시" /></a></td><!-- 210621-2 수정 -->\
                            \
                            <td style="width: 51px; vertical-align: top;"><a href="javascript:goUrl(\'https://member.gnjoy.com/support/index.asp\');" style="display: inline-block; width: 51px; height: 39px; overflow: hidden; vertical-align: top;"><img src="https://imgc.gnjoy.com/gnjoy/2012_gnjoy/images/gnb/nav_menu5_210601.gif?v=210621" id="Img_Gnb_HelpDesk" border="0" alt="고객센터" /></a></td><!-- 210621-2 수정 -->\
							\
							<td style="width: 57px; vertical-align: top; text-align: right;"><a href="javascript:goLogin(top.location.href);"><img style="cursor:pointer;margin-top: 9px;" border="0" src="https://imgc.gnjoy.com/gnjoy/2012_gnjoy/images/gnb/btn_login.gif"  alt="로그인" /></a></td>\
							\
                        </tr>\
			</tbody>\
                </table>\
            </td>\
        </tr>\
    </tbody>\
</table>\
</table>'
);

// 5초마다 배너 롤링
setInterval(rollBanner, 5000);
