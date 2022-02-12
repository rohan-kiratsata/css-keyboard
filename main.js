let elem = document.querySelector('.key');


function playS(){
    var aud = new Audio('keyboard.mp3');
    aud.play();
}
elem.onclick = playS();