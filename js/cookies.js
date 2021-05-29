let deleteCookies = document.querySelector(".cookiesBtn");

deleteCookies.addEventListener("click", function() {
    let confirmationCookies = confirm("Je gaat al je cookies verwijderen, ben je hier zeker van?");
	if (confirmationCookies == true) {
        chrome.runtime.sendMessage({cookies: "deleteCookies"}, function(response) {
            // message gets sent to background script
        });
    }
});