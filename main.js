var audioElem = new Audio('keyboard.mp3');

$(".key").click(function(){
    audioElem.play();
})