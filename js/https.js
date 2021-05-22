// START SWITCH FUNCTION */
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
// END OF SWITCH FUNCTION

// START OF HTTPS DETECTION FUNCTION
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){

// Variabelen definiëren voor protocol bepaling
    let protoc = tabs[0].url.split(":")[0]

    // Wat moet er gebeuren bij veilige website, wat bij onveilige website
    if (protoc === "https") {
        console.log('safe');
    } else if (protoc ===  "http") {
        console.log("not safe");
    }
});
// END OF FUNCTION