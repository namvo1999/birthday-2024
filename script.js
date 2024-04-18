let step = 0;
const defaultContentTop = '25px';
document.getElementById("wrapper").addEventListener("click", function() {
    var content = document.getElementById("content");
    var content2 = document.getElementById("content-2");
    this.classList.add("clicked");
    step += 1;
    
    if(step == 3){
        content.classList.add("clicked");
        content2.style.top = '900px';
    }

    if(step == 2){
        content2.classList.add("clicked");
        content2.style.top = '475px';
        content.style.top = '475px';
    }

    if(step == 4) {
        this.classList.remove("clicked");
        content.classList.remove("clicked");
        content2.classList.remove("clicked");
        content2.style.top = defaultContentTop;
        content.style.top = defaultContentTop;

        step = 0;
    }
});