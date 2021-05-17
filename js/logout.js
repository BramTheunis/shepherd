let switchBtnLogout = document.querySelector(".switchBtn2");
let switchValueLogout = document.querySelector(".switchBtn2").value;

switchBtnLogout.addEventListener("click", function() {
    if (switchValueLogout == "On") {
        switchValueLogout = "Off";
        localStorage.setItem("logout", "Off");
    } else if (switchValueLogout == "Off") {
        switchValueLogout = "On";
        localStorage.setItem("logout", "On");
    }
});
