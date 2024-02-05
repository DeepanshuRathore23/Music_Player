let player = document.getElementById("player");
let progress = document.getElementById("progress");
let ctrlIcon = document.getElementById("ctrl-icon");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}
let play = false;

function playPause(){
    if(ctrlIcon.className=="play-icon"){      
        player.play(); 
        play=true;
        ctrlIcon.innerHTML = `<img src=pause-icon.png  height=${40}px width=${40}px>`;
        ctrlIcon.className="pause-icon";
    }
    else{        
        player.pause();
        play=false;
        ctrlIcon.innerHTML = `<img src=play-icon.png  height=${40}px width=${40}px>`;
        ctrlIcon.className="play-icon";
    }
}
progress.max=player.duration;
console.log(progress.max)
// if(song.play())
function check(){
    if(play){
        console.log("chl rha hai chicha");
    }
    else{
        console.log("ni clra bhai")
    }
}
setInterval(()=>{
    if(play){
        progress.value=player.currentTime;
    }
},500);


ctrlIcon.addEventListener("click",playPause);

