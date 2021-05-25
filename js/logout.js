// START SWITCH FUNCTION
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
// END OF SWITCH FUNCTION

// START LOGOUT FUNCTION
let logoutBtn = document.querySelector(".logoutBtn");

logoutBtn.addEventListener("click", function() {
    
});
// END LOGOUT FUNCTION