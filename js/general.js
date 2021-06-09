let helpBtn = document.querySelector("#btn1");

helpBtn.addEventListener("click", function() {
    chrome.runtime.openOptionsPage();
});