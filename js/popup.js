chrome.tabs.query({currentWindow: true, active:true}, function(tabs) {

    let currentValue = document.querySelector(".switchBtn").value;
    let valueBtn = document.querySelector(".switchBtn");
    
    valueBtn.addEventListener("click", function() {
        if (this.value == "Off") {
            this.value == "On";
            console.log(currentValue);
        } else {
            this.value = "Off";
            console.log(currentValue);
        }
    });
});

document.getElementById("btn1").addEventListener("click", switchVisible);
document.getElementById("btn2").addEventListener("click", switchVisible);

function switchVisible() {
    if (document.getElementById('div1')) {

        if (document.getElementById('div1').style.display == 'none') {
            document.getElementById('div1').style.display = 'block';
            document.getElementById('div2').style.display = 'none';
        }
        else {
            document.getElementById('div1').style.display = 'none';
            document.getElementById('div2').style.display = 'block';
        }
    }
}