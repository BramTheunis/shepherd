let switchBtnHTTPS = document.querySelector(".switchBtn1");
let sliderHTTPS = document.querySelector(".sliderHTTPS");
let httpsValue = localStorage.getItem("https");

if (httpsValue == "Off") {
    sliderHTTPS.classList.add("sliderOff");
    sliderHTTPS.classList.remove("slider");
}

switchBtnHTTPS.addEventListener("click", function() {
    if (httpsValue == "On") {
        httpsValue = "Off";
        localStorage.setItem("https", "Off");
    } else if (httpsValue == "Off") {
        httpsValue = "On";
        localStorage.setItem("https", "On");
    }
});