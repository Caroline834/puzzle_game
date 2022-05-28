var audio=document.getElementById("bgAudio");
var playPauseBtn=document.getElementById("playPausebtn");
var count = 0;

function playPause(){
    if(count == 0)
    {
        count = 1;
        audio.play();
        playPauseBtn.innerHTML ="<i class='fa-solid fa-play'></i>";
        playPauseBtn.style.fontSize = "30px";
    }else{
        count =0 ;
        audio.pause();
        playPauseBtn.innerHTML ="<i class='fa-solid fa-pause'></i>";
        playPauseBtn.style.fontSize = "30px";
    }
}
