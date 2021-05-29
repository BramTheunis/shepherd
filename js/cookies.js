let deleteCookies = document.querySelector(".cookiesBtn");

deleteCookies.addEventListener("click", function() {
    chrome.runtime.sendMessage({cookies: "deleteCookies"}, function(response) {
        // message gets sent to background script
    });
});