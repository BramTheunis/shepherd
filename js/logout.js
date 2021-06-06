// START LOGOUT FEATURE

let logoutBtn = document.querySelector(".logoutBtn");

logoutBtn.addEventListener("click", function() {
    let confirmationCookies = confirm("Je gaat je uitloggen op Facebook, ben je hier zeker van?");
	if (confirmationCookies == true) {
        // console.log("test1");
        chrome.runtime.sendMessage({logout: "facebook"}, function(response) {
            // message gets sent to background script where the logout happens
            // console.log(" test2");
        });
    }
})


// END LOGOUT FEATURE