const nubmerOfCake = 5;
let progress = document.getElementById("progress");
let ctlIcon = document.getElementById("ctlIcon");
let song = document.getElementById("thao-video");
let disk = document.getElementById("disk");
let lily = document.getElementById("lily");
let playStar = document.getElementById("play-star");
let step = 0;
let contentStep = 0;
let numbContent = 11;
let currentVideo = 0;
const defaultContentTop = 10;

let emotionalStep = 0;
let currentTop = defaultContentTop;
let emotionalText = document.getElementById("emotional");
let isPlaying = false;
let videos = [
  'diamond',
  '0430 (1)',
  '0518 (1)',
  'hpbd',
]
document.getElementById("full-wrapper").addEventListener("click", function () {
  this.classList.add("clicked");
});

song.onloadedmetadata = function() {
  progress.max = song.duration;
  progress.value = song.currentTime;
}

function playPause(step = -1) {
  if(step != -1){
    isPlaying = false;
  }

  if(isPlaying){
    song.pause();
    ctlIcon.src = "./assets/play.png";
    disk.classList.remove("play");
  }else{
    playMusic();
  }
  isPlaying = !isPlaying;
  toggleCake();
}

function playNextAndBack(isPlayNext) {
  currentVideo = isPlayNext ? currentVideo + 1 : currentVideo - 1;
  if(currentVideo > videos.length - 1){
    currentVideo = 0;
  }
  if(currentVideo < 0){
    currentVideo = videos.length - 1;
  }

  song.src = `./assets/thao-pic/${videos[currentVideo]}.mp4`;
  isPlaying = true;
  playPause(3);
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

function playMusic() {
  song.play();
  ctlIcon.src = "./assets/pause.png";
  disk.classList.add("play");
  song.classList.add("play");
  lily.classList.add("play");
}

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

document.getElementById("play-star").addEventListener("click", function () {
  this.classList.add("clicked");  
});



initCardColor();
function initCardColor(){
  for (let index = 1; index <= numbContent; index++) {
    document.querySelector(`.content-${index} .body`).style.backgroundColor = index % 2 ? "beige" : "var(--mau-pink)"; 
  }
}

function resizeTo() {
  step = 0;
  contentStep = 0;
  currentTop = defaultContentTop;

  for (var i = numbContent; i >= 1; i--) {
    var content = document.getElementById(`content-${i}`);
    content.classList.remove("clicked");
    content.style.top = (defaultContentTop - i) + 'px';
    content.style.transform = "";
  };
}

document.getElementById("wrapper").addEventListener("click", function () {
  this.classList.add("clicked");
  step += 1;

  if (step > 1) {
    contentStep += 1;
    let top = contentStep * 180;
    for (var i = numbContent; i >= 1; i--) {
      var content = document.getElementById(`content-${i}`);
      content.style.top = top + "px";
      top -= 170;
      if (top <= 0) {
        top = defaultContentTop;
      }

      if(step === 3){
        song.src = './assets/thao-pic/diamond.mp4';
        isPlaying = true;
        playPause(3);
      }

      if(step === 4){
        song.src = './assets/thao-pic/hpbd.mp4';
        isPlaying = true;
        playPause(5);
      }

      if(step === 8){
        song.src = './assets/thao-pic/0518 (1).mp4';
        isPlaying = true;
        playPause(5);
      }

      if(step === 10){
        song.src = './assets/thao-pic/0430 (1).mp4';
        isPlaying = true;
        playPause(5);
      }
    }
  } 

  if (step == numbContent + 1) {
    this.classList.remove("clicked");
    resizeTo();
  }
});

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}