let switchBtnLogout = document.querySelector(".switchBtn2");
let sliderLogout = document.querySelector(".sliderLogout");
let logoutValue = localStorage.getItem("logout");

if (logoutValue == "Off") {
    sliderLogout.classList.add("sliderOff");
    sliderLogout.classList.remove("slider");
}

switchBtnLogout.addEventListener("click", function() {
    if (logoutValue == "On") {
        logoutValue = "Off";
        localStorage.setItem("logout", "Off");
    } else if (logoutValue == "Off") {
        logoutValue = "On";
        localStorage.setItem("logout", "On");
    }
});