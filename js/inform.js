let switchBtnInform = document.querySelector(".switchBtn3");
let switchValueInform = document.querySelector(".switchBtn3").value;

switchBtnInform.addEventListener("click", function() {
    if (switchValueInform == "On") {
        switchValueInform = "Off";
        localStorage.setItem("inform", "Off");
    } else if (switchValueInform == "Off") {
        switchValueInform = "On";
        localStorage.setItem("inform", "On");
    }
});