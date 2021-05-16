chrome.tabs.query({currentWindow: true, active:true}, function(tabs) {
    
    let switchBtn = document.querySelector(".switchBtn2");
    let switchValue = document.querySelector(".switchBtn2").value;

    switchBtn.addEventListener("click", function() {
        if (switchValue == "On") {
            switchValue = "Off";
            localStorage.setItem("logout", "Off");
        } else if (switchValue == "Off") {
            switchValue = "On";
            localStorage.setItem("logout", "On");
        }
    });
});