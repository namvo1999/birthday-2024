const nubmerOfCake = 5;
let progress = document.getElementById("progress");
let ctlIcon = document.getElementById("ctlIcon");
let song = document.getElementById("thao-video");
let disk = document.getElementById("disk");
let isPlaying = false;
document.getElementById("full-wrapper").addEventListener("click", function () {
  this.classList.add("clicked");
  
});

song.onloadedmetadata = function() {
  progress.max = song.duration;
  progress.value = song.currentTime;
}

function playPause() {
  if(isPlaying){
    song.pause();
    ctlIcon.src = "./assets/play.png";
    disk.classList.remove("play");
  }else{
    song.play();
    ctlIcon.src = "./assets/pause.png";
    disk.classList.add("play");
  }
  isPlaying = !isPlaying;
  toggleCake();
}

if(song.play()){
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500)
}

progress.onchange = function() {
  song.play();
  song.currentTime = progress.value;
  ctlIcon.src = "./assets/pause.png";
  isPlaying = true;
  toggleCake();
}

song.addEventListener("ended", function() {
  progress.value = 0;
  song.currentTime = 0;
  playPause();
});

function toggleCake(){
  for (let index = 1; index <= nubmerOfCake; index++) {
    const danceClass = index % 2 == 0 ? 'dance-1' : 'dance-2';
    const cake = document.getElementById("cake-" + index).classList;
    if(isPlaying){
      cake.add(danceClass);
    }
    else{
      cake.remove(danceClass);
    }
  }
}