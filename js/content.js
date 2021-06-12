
let link = document.createElement("link");
link.href = chrome.extension.getURL("css/content.css");
link.type = "text/css";
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);

let forms = document.getElementsByTagName("form");
// console.log(forms);

if (document.readyState !== "loading") {
    chrome.storage.local.get("inform", function(value) {
        let informValue = value.inform;
        if (informValue == "On") {
            addBanner();
            removeBanner();
        }  
    });
     
} else {
    document.addEventListener("DOMContentLoaded", function() {
        chrome.storage.local.get("inform", function(value) {
            let informValue = value.inform;
            if (informValue == "On") {
                addBanner();
                removeBanner();
            }
        });
    });
}


function addBanner() {
    document.addEventListener("focusin", function() {    
        if (document.activeElement.tagName === "INPUT") {
            // console.log("now only input focus hopefully: ", document.activeElement);
            let warnText = document.createElement("div");
            warnText.style.width = "100%";
            warnText.style.position = "fixed";
            warnText.style.display = "flex";
            warnText.style.alignItems = "center";
            warnText.style.color = "white";
            warnText.style.zIndex = "9999";
            warnText.style.backgroundColor = "#4bb6b6";
            warnText.style.textAlign = "center";
            warnText.style.bottom = "0";
            warnText.style.overflow = "hidden";
            warnText.style.marginTop = "5rem";
            warnText.setAttribute("id", "shepherdIcon");
            warnText.innerHTML = `<img style="display: inline-block; height: 2rem; margin-left: 20%; margin-right: 1rem;"  src="https://www.shepherd-extension.be/images/logoShepherd.png" alt="Logo Shepherd"> <p style="margin-right: 20%; font-size: 1rem; font-family: sans-serif;">Controleer zeker of u op de juiste website zit en de gegevens verzonden worden naar het juiste bedrijf of de juiste persoon. Denk ook na of deze persoon/bedrijf uw gegevens wel nodig heeft.</p>`;
            // document.activeElement.parentNode.insertBefore(warnText, document.activeElement.previousSibling);
            document.body.insertBefore(warnText, document.body.firstChild);
        }
    })
}


function removeBanner() {
    document.addEventListener("focusout", function() {
        // console.log("geen focus meer", event.target);
        document.querySelector("#shepherdIcon").remove();
    });
}


/*
forms.addEventListener("click", function() {
    alert("focus op form input");
})
*/

/*
document.addEventListener("click", function() {
    if (document.activeElement.tagName === "INPUT") {

        // alert(this);
        /*
        let warning = document.createElement("p");
        warning.innerHTML = "Let goed op als u gaat";
        alert(warning.innerHTML);
        this.parentNode.insertBefore(warning, this.nextSibling);
        */
/*
        for (let i = 0; i < forms.length; i++) {
            // console.log(i);
            let form = forms[i];
            let inputs = form.querySelectorAll("input[type=text], input[type=password]");
            for (let j = 0; j < inputs.length; j++) {
                // console.log(j);
                let input = inputs[j];
        
                /*
                if (input === document.activeElement) {
                    alert("actief ergens");
                }
                */
/*               
                let icon = document.createElement("a");
                // icon.innerHTML = `<span data-hide="" title="Testing this a bit"></span>`;
                icon.classList.add("testClass");
                icon.style.display = "block";
                input.parentNode.insertBefore(icon, input.nextSibling);
            }
        }

        /*
        chrome.runtime.sendMessage({inform: "forms"}, function() {
            // send message to background script
        });
        */
/*    } else {
        // document.getElementsByClassName("testClass").classList.remove("testClass");
        let icon = document.getElementsByClassName("testClass");
        icon.style.display = "none";
        // console.log(icon);
    }
});

*/