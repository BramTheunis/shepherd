// START COOKIE FUNCTION
let logoutButton = document.querySelector(".cookiesBtn");

logoutButton.addEventListener("click", function() {
    let confirmationLogout = confirm("Je gaat alle cookies verwijderen, ben je hier zeker van?");
	if (confirmationLogout == true) {
        chrome.runtime.sendMessage({cookies: "cookiesDelete"}, function(response) {
            // message gets sent to background script where the logout happens
        });
    }
});
// END COOKIE FUNCTION