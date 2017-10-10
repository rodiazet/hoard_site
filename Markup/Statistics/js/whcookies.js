/*
 * Skrypt wyĹ›wietlajÄ…cy okienko z informacjÄ… o wykorzystaniu ciasteczek (cookies)
 * 
 * WiÄ™cej informacji: http://webhelp.pl/artykuly/okienko-z-informacja-o-ciasteczkach-cookies/
 * 
 */

function WHCreateCookie(name, value, days) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    var expires = "; expires=" + date.toGMTString();
	document.cookie = name+"="+value+expires+"; path=/";
}
function WHReadCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
    console.log("ca = ", ca)
	for(var i=0; i < ca.length; i++) {
		var c = ca[i];
        console.log("c = ",c)
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

window.onload = WHCheckCookies;

function WHCheckCookies() {
    if(WHReadCookie('hoard_accepted') != 'T') {
        var message_container = document.createElement('div');
        message_container.id = 'cookies-message-container';
        var html_code = '<div id="cookies-message" style="padding: 10px 0px; font-size: 12px; line-height: 14px; border-bottom: 1px solid rgb(211, 208, 208); text-align: center; position: fixed; bottom: 0px;color: black; background-color: #efefef; width: 100%; z-index: 999;">Our website uses cookies and other similar technologies to improve our site and your online experience. By continuing to use our website you consent to cookies being used.<a href="javascript:WHCloseCookiesWindow();" id="accept-cookies-checkbox" name="accept-cookies" style="background-color: #af1920; padding: 5px 10px; color: #FFF; border-radius: 4px; -moz-border-radius: 4px; -webkit-border-radius: 4px; display: inline-block; margin-left: 10px; text-decoration: none; cursor: pointer;">Accept</a></div>';
        message_container.innerHTML = html_code;
        document.body.appendChild(message_container);
        var c = WHReadCookie('hoard_accepted')
    }
}

function WHCloseCookiesWindow() {
    WHCreateCookie('hoard_accepted', 'T', 365)
    document.getElementById('cookies-message-container').removeChild(document.getElementById('cookies-message'));
}