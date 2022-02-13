var audioElem = new Audio('/keyboard.mp3');
audioElem.playbackRate = 1.5;
$(".key").click(function(){
    audioElem.play();
});