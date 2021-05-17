let switchBtnInform = document.querySelector(".switchBtn3");
let sliderInform = document.querySelector(".sliderInform");
let informValue = localStorage.getItem("inform");

if (informValue == "Off") {
    sliderInform.classList.add("sliderOff");
    sliderInform.classList.remove("slider");
}

switchBtnInform.addEventListener("click", function() {
    if (informValue == "On") {
        informValue = "Off";
        localStorage.setItem("inform", "Off");
    } else if (informValue == "Off") {
        informValue = "On";
        localStorage.setItem("inform", "On");
    }
});