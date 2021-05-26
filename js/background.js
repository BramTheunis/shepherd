chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.protocol == "http")
        chrome.notifications.create("", {
            title: "titeltje",
            message: "bericht zelf",
            iconUrl: "img/lock.png",
            type: "basic",
            priority: 2
        });
    }
);