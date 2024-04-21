let step = 0;
let contentStep = 0;
let numbContent = 3;
const defaultContentTop = 25;

let emotionalStep = 0;
let emotionals = ["Buồn 😞", "vui 😊", "tìm người nói chuyện 🙄"]
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

  //   if (step == 3) {
  //     content.classList.add("clicked");
  //     content.style.top = "475px";
  //     content2.style.top = "925px";
  //     content.style.transform = "";
  //   }

  //   if (step == 2) {
  //     content2.classList.add("clicked");
  //     content2.style.top = "480px";
  //     content.style.top = defaultContentTop;
  //     content2.style.transform = "";
  //   }

  if (step > 1) {
    contentStep += 1;
    let top = contentStep * 270;
    for (var i = numbContent; i >= 1; i--) {
      var content = document.getElementById(`content-${i}`);
      content.style.top = top + "px";
      top -= 270;
      if (top <= 0) {
        top = defaultContentTop;
      }
    }
  } 

  if (step == 4) {
    this.classList.remove("clicked");
    resizeTo();
  }
});

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}