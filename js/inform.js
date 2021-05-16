chrome.tabs.query({currentWindow: true, active:true}, function(tabs) {
    
    let switchBtn = document.querySelector(".switchBtn3");
    let switchValue = document.querySelector(".switchBtn3").value;

    switchBtn.addEventListener("click", function() {
        if (switchValue == "On") {
            switchValue = "Off";
            localStorage.setItem("inform", "Off");
        } else if (switchValue == "Off") {
            switchValue = "On";
            localStorage.setItem("inform", "On");
        }
    });
});