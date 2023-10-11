window.addEventListener('DOMContentLoaded',init,false);
            
function init() {
    alert('The page loaded!');
}

var buttons = document.getElementsByTagName("button")

        window.addEventListener('DOMContentLoaded',init,false);
function init() {
    alert ('Hi there! Looks like the page loaded! Yay!');
    var buttons = document.getElementsByTagName("button")
buttons[0].addEventListener('click', changeColor,false)
buttons[1].addEventListener('click', newFunction, false)
}

function changeColor() {
var colorMe1 = document.getElementById("colorToggle") 
{colorMe1.style.backgroundColor = "skyblue";
}}

var originalBackground;
function toggleHighlight() {
    var pos = this.getAttribute('value');
    var color;
    switch (pos) {
        case '1':
        color = 'yellow';
        break;
        case '2':
        color = 'orange';
        break;
        case '3':
        color = 'teal';
        break;
        case '4':
        color = 'red';
        break;
        case '5':
        color = 'sandybrown';
        break;
        case '6':
        color = 'lightgreen';
        break;
        case '7':
        color = 'violet';
        break;
        case '8':
        color = 'lightblue';
        break;
        case '9':
        color = 'green';
        break;
    }
    var status = this.checked;
    // the status to which you've just changed the checkbox
    var spans = document.getElementsByClassName(pos);
    for (var i = 0; i < spans.length; i++) {
        if (status == true) {
            spans[i].style.backgroundColor = color;
        } else {
            spans[i].style.backgroundColor = originalBackground;
        }
    }
}
function init() {
    originalBackground = document.body.style.backgroundColor;
    var checkboxes = document.getElementsByTagName('input');
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('click', toggleHighlight, false);
    }
}
window.addEventListener('DOMContentLoaded', init, false);