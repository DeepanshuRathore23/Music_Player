let player = document.getElementById("player");
let progress = document.getElementById("progress");
let ctrlIcon = document.getElementById("ctrl-icon");

if (isFinite(player.duration)) {
    progress.max = player.duration;
    let duration = player.duration;
    console.log(duration);
} else {
    console.log("Duration is not yet available.");
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
// progress.max=player.duration;

setInterval(()=>{
    if(play){
        progress.value=player.currentTime;
    }
},100);


ctrlIcon.addEventListener("click",playPause);

