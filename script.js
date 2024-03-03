let player = document.getElementById("player");
let progress = document.getElementById("progress");
let ctrlIcon = document.getElementById("ctrl-icon");
let menu = document.getElementById("menu");
let songList = document.getElementById("song-list");
let songName =  document.getElementById("song-name");
let singerName = document.getElementById("singer-name");
let songThumbnail = document.getElementById("song-icon");
let backward = document.getElementById("backward");
let forward = document.getElementById("forward");

songList.style.display = "none";

let songs = [
    {songName:"Diary", filePath:"Diary.mp3", imgSource:"diary_thumbnail.jpg",singerName:"Amrinder Gill"},
    {songName:"Off Roading", filePath:"Off_Roading.mp3", imgSource:"offRoading_thumbnail.jpeg",singerName:"Bhaini khan"},
    {songName:"12 Saal", filePath:"12_Saal.mp3", imgSource:"12_Saal_thumbnail.jpeg",singerName:"Bilal"}    
]


let songNum = document.querySelectorAll(".song-num");


function getDetails() {
    if (isFinite(player.duration)) {
        progress.max = player.duration;
        let duration = player.duration;
        console.log(duration);
    } else {
        console.log("Duration is not yet available.");
    }
}

// Wait for the loadedmetadata event before calling getDetails
player.addEventListener("loadedmetadata", getDetails);

let play = false;

function playPause() {
    if (ctrlIcon.className == "play-icon") {
        player.play();
        play = true;
        ctrlIcon.innerHTML = `<img src=pause-icon.png  height=${40}px width=${40}px>`;
        ctrlIcon.className = "pause-icon";
    } else {
        player.pause();
        play = false;
        ctrlIcon.innerHTML = `<img src=play-icon.png  height=${40}px width=${40}px>`;
        ctrlIcon.className = "play-icon";
    }
}

setInterval(() => {
    if (play) {
        progress.value = player.currentTime;
    }
}, 100);

ctrlIcon.addEventListener("click", playPause);

progress.addEventListener("click",function(){
    console.log(progress.value);
    console.log("clicked");
})


progress.onchange = function(){    
    player.currentTime = progress.value;
    if(play){
        player.play();
    }
}



menu.addEventListener("click",function(){
    if(songList.style.display=="none"){
        document.querySelector("#main").style.display = "none";
        songList.style.display = "block";
    }else{
        document.querySelector("#main").style.display = "block";
        songList.style.display = "none";
    }
    

})

songNum.forEach(song => {
    song.addEventListener("click", function() {
        console.log(this.id);
        console.log("clicked");        
        player.innerHTML = `<source src="${songs[this.id].filePath}" type="audio/mpeg">`
        player.load();
        player.play();      
        playPause();


        songName.innerHTML = `${songs[this.id].songName}`
        singerName.innerHTML = `${songs[this.id].singerName}`
        songThumbnail.querySelector('img').src = songs[this.id].imgSource;
    });
});

backward.addEventListener("click",function(){
    
})

