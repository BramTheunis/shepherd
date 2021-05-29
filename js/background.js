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

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.cookies == "deleteCookies")
        // delete cookies
    }
);