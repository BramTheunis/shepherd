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