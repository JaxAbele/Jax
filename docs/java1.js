function showPopup() {
alert('This Self Portrait is digital art that was made in Adobe Photoshop using several shape layers!');
  }

function showPopup2() {
alert('This poster was created to convey the message that animals deserve respect and should not be abused by humans!');
  }
  
function showPopup3() {
alert('This logo was created in an effort to redesign and improve an already existing logo of a local business. In this case, the logo was made for a restaurant in Erie, Pa called The Cove.');
  }
  



window.addEventListener('DOMContentLoaded',init,false);
function init() {
    var buttons = document.getElementsByTagName("button")
    buttons[0].addEventListener('click',false)
    buttons[1].addEventListener('click',false)
}

var originalBackground;
function highlightinfo() {
    var pos = this.getAttribute('value');
    var color;
    switch (pos) {
        case 'date':
        color = 'yellow';
        break;
        case 'info':
        color = 'orange';
        break;
        case 'work':
        color = 'teal';
        break;
        case 'head':
        color = 'red';
        break;
        case 'edu':
        color = 'sandybrown';
        break;
        case 'proj':
        color = 'lightgreen';
        break;
    }
    var status = this.checked;

    var typeofinfo = document.getElementsByClassName(pos);
    for (var i = 0; i < typeofinfo.length; i++) {
        if (status == true) {
            typeofinfo[i].style.backgroundColor = color;
        } else {
            typeofinfo[i].style.backgroundColor = originalBackground;
        }
    }
}
function init() {
    originalBackground = document.body.style.backgroundColor;
    var boxeschecked = document.getElementsByTagName('input');
    for (var i = 0; i < boxeschecked.length; i++) {
        boxeschecked[i].addEventListener('click', highlightinfo, false);
    }
}