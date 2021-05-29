// START SWITCH FUNCTION
/*
let switchBtnLogout = document.querySelector(".switchBtn2");
let sliderLogout = document.querySelector(".sliderLogout");
let logoutValue = localStorage.getItem("logout");

if (logoutValue == "Off") {
    sliderLogout.classList.add("sliderOff");
    sliderLogout.classList.remove("slider");
}

switchBtnLogout.addEventListener("click", function() {
    if (logoutValue == "Off") {
        logoutValue = "On";
        localStorage.setItem("logout", "On");
    } else {
        logoutValue = "Off";
        localStorage.setItem("logout", "Off");
    }
});
*/
// END OF SWITCH FUNCTION

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