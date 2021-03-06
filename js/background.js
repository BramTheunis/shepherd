chrome.runtime.onInstalled.addListener(function() {
    let httpsValue = localStorage.getItem("logout");
    let informValue = localStorage.getItem("inform");
    let logoutValue = localStorage.getItem("logout");

    if (httpsValue = "null") {
        localStorage.setItem("https", "On");
        
    }

    if (informValue = "null") {
        localStorage.setItem("inform", "On");
        chrome.storage.local.set({inform: "On"}, function() {

        });
    }

    if (logoutValue = "null") {
        localStorage.setItem("logout", "On");
    }
});


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
                    
                    // alert("Deze website maakt GEEN gebruik van HTTPS. Verzonden gegevens zijn daarom mogelijk niet goed beveiligd.");
                }
            });
        }
    }
});
// END HTTPS FEATURE



// START LOGOUT FEATURE
window.onbeforeunload = logoutCode();

function logoutCode() {
    let logoutValue = localStorage.getItem("logout");

    if (logoutValue == "On") {
        chrome.cookies.remove({url: "https://www.facebook.com", name: "c_user"});
        chrome.cookies.remove({url: "https://www.instagram.com", name:"sessionid"});
        chrome.cookies.remove({url: "https://www.google.be", name: "SAPISID"});
        chrome.cookies.remove({url: "https://www.google.com", name: "SAPISID"});
    }
    return null;
}
// END LOGOUT FEATURE

/*
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.inform == "forms")
        chrome.notifications.create("", {
            title: "Input controle",
            message: "Zorg ervoor dat je zeker weet dat blabla",
            iconUrl: "img/logo128.png",
            type: "basic",
            priority: 2
        });
    }
)
*/