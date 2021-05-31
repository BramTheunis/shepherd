// START LOGOUT FUNCTION
let logoutButton = document.querySelector(".logoutBtn");

logoutButton.addEventListener("click", function() {
    let confirmationLogout = confirm("Je gaat je overal uitloggen, ben je hier zeker van?");
	if (confirmationLogout == true) {
        chrome.runtime.sendMessage({logout: "logoutAll"}, function(response) {
            // message gets sent to background script where the logout happens
        });
    }
});
// END LOGOUT FUNCTION