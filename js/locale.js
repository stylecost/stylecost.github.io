function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}
function createCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

if(!getCookie('locale')) {
	var endPoint = 'https://stylecost.github.io/ru';
	var ruCountryCodes = ['RU', 'UA', 'BY', 'LV', 'EE', 'BG', 'KZ'];
	$.get("http://ipinfo.io", function(response) {
    	var client_ip = response.ip;
    	$.get('http://ip-api.com/json/' + client_ip, function(response) {
    		if (!response) return;

			currentCountryCode = response.countryCode;
			if (currentCountryCode.hasOwnProperty(ruCountryCodes))
				location.href = 'Location: ' + endPoint;
		}, "jsonp");
	}, "jsonp");
}