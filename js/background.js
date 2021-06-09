// Listen to message for deletion of cookies everywhere feature
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.cookies == "cookiesDelete")
        chrome.cookies.getAll({}, function(cookies) {
			for(let i=0; i<cookies.length;i++) {
				chrome.cookies.remove({url: "https://" + cookies[i].domain  + cookies[i].path, name: cookies[i].name});
			}
        })
    }
);



// START HTTPS FEATURE
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

    let httpsValue = localStorage.getItem("https");

    if (httpsValue == "On") {
        if (changeInfo.status == "complete") {
            chrome.tabs.query({currentWindow: true, active: true}, function(tabs){

                // Variabelen definiëren voor protocol bepaling
                let protoc = tabs[0].url.split(":")[0]
            
                // Wat moet er gebeuren bij veilige website, wat bij onveilige website
                if (protoc === "http") {
                    chrome.notifications.create("", {
                        title: "HTTPS alert",
                        message: "Deze website maakt GEEN gebruik van HTTPS. Verzonden gegevens zijn daarom mogelijk niet goed beveiligd.",
                        iconUrl: "img/logo128.png",
                        type: "basic",
                        priority: 2
                    });
                }
            });
        }
    }
});
// END HTTPS FEATURE



// START LOGOUT FEATURE
chrome.windows.onRemoved.addListener(function(windowId) {

    let logoutValue = localStorage.getItem("logout");

    if (logoutValue == "On") {
        chrome.cookies.remove({url: "https://www.facebook.com", name: "c_user"});
        chrome.cookies.remove({url: "https://www.instagram.com", name:"sessionid"});
        chrome.cookies.remove({url: "https://www.google.be", name: "SAPISID"});
        chrome.cookies.remove({url: "https://www.google.com", name: "SAPISID"});
    }
});
// END LOGOUT FEATURE