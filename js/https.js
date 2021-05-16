chrome.tabs.query({currentWindow: true, active:true}, function(tabs) {
    
    let switchBtn = document.querySelector(".switchBtn1");
    let switchValue = document.querySelector(".switchBtn1").value;

    switchBtn.addEventListener("click", function() {
        if (switchValue == "On") {
            switchValue = "Off";
            localStorage.setItem("https", "Off");
        } else if (switchValue == "Off") {
            switchValue = "On";
            localStorage.setItem("https", "On");
        }
    });
});