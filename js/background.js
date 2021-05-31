// Listen to message for HTTP/HTTPS feature
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.protocol == "http")
        chrome.notifications.create("", {
            title: "HTTPS alert",
            message: "Deze website maakt GEEN gebruik van HTTPS. Verzonden gegevens zijn daarom mogelijk niet goed beveiligd.",
            iconUrl: "img/logo128.png",
            type: "basic",
            priority: 2
        });
    }
);

// Listen to message for logout everywhere feature
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.logout == "logoutAll")
        chrome.cookies.getAll({}, function(cookies) {
			for(let i=0; i<cookies.length;i++) {
				chrome.cookies.remove({url: "https://" + cookies[i].domain  + cookies[i].path, name: cookies[i].name});
			}
        })
    }
);