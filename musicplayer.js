document.addEventListener('play', function(checker){ //Event Listener function that listens for play events
    var audios = document.getElementsByTagName('audio'); //Get all Audio elements on page
    for(var i = 0, len = audios.length; i < len;i++){ //if audios length is greater than 0 add 1 to counter
        if(audios[i] != checker.target){ //If audio element in location 1 is not playing || target function finds the element that triggered the event
            audios[i].pause(); //pause audio element
            audios[i].currentTime = 0; //reset song to start
        }
    }
}, true);

function playSong(clicked){
    var song = document.querySelector('#song-'+String(clicked))
    var character = document.getElementById("rise-singing")
    var characterStill = document.getElementById("rise-singing-still")
    if (song.paused) {
        character.style.visibility = "visible";
        characterStill.style.visibility = "hidden";
        song.play();
    } 
    else 
    {
        characterStill.style.visibility = "visible";
        character.style.visibility = "hidden";
        song.pause();
    }
}



/*
function pauseSong(){
    var audios = document.getElementsByTagName('audio'); //Get all Audio elements on page
    for(var i = 0, len = audios.length; i < len;i++){ //if audios length is greater than 0 add 1 to counter
        if(audios[i] != pauseSong.target){ //If audio element in location 1 is not playing || target function finds the element that triggered the event
            audios[i].pause();
        }
    }
}
window.addEventListener("DOMContentLoaded", event =>{
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.pause();
});


function playSong(clicked){
    
    if(clicked=="btn-shadow-world"){
        const song = document.querySelector('#song'.concat(clicked));
        song.play();
        
    }

    else if (clicked=="btn-snowflakes"){
        const song = document.querySelector('#song'.concat(clicked));
        song.play();
    }

}
*/

