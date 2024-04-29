let step = 0;
let contentStep = 0;
let numbContent = 4;
const defaultContentTop = 10;

let emotionalStep = 0;
let currentTop = defaultContentTop;
let emotionalText = document.getElementById("emotional");

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