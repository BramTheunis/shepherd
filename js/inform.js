// START SWITCH FUNCTION
let switchBtnInform = document.querySelector(".switchBtn3");
let sliderInform = document.querySelector(".sliderInform");
let informValue = localStorage.getItem("inform");

if (informValue == "Off") {
    sliderInform.classList.add("sliderOff");
    sliderInform.classList.remove("slider");
}

switchBtnInform.addEventListener("click", function() {
    if (informValue == "Off") {
        informValue = "On";
        localStorage.setItem("inform", "On");
        chrome.storage.local.set({inform: "On"}, function() {

        });
    } else {
        informValue = "Off";
        localStorage.setItem("inform", "Off");
        chrome.storage.local.set({inform: "Off"}, function() {

        });
    }
});
// END OF SWITCH FUNCTION