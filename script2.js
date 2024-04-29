const nubmerOfCake = 5;
let progress = document.getElementById("progress");
let ctlIcon = document.getElementById("ctlIcon");
let song = document.getElementById("song");
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
  let isPlaying = true;
}

function toggleCake(){
  for (let index = 1; index <= nubmerOfCake; index++) {
    const danceClass = index % 2 == 0 ? 'dance-1' : 'dance-2';
    document.getElementById("cake-" + index).classList.toggle(danceClass);    
  }
}