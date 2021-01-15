/*Script for TV Player*/
function swapVideo() {
    player.src = this.getAttribute("data-video-url");
    tvGuide.style.visibility = "hidden";
    player.load();
    player.play();
}
var tvGuide = document.getElementsByClassName("tv-guide")[0];
var videoPlayButtons = document.getElementsByClassName("play-button"),
    player = document.getElementById("player");

for (var i=0; i<videoPlayButtons.length; i++){
    videoPlayButtons[i].addEventListener('click', swapVideo);
}

function stopVid()
{
    tvGuide.style.visibility = "visible";
    player.pause();
    player.currentTime = 0;
}

