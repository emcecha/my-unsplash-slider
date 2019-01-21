var slides = document.querySelectorAll(".slider__img");
var button = document.querySelectorAll("button");

var imgInterval = setInterval(getPrevNextImg, 5000);

for (var i = 0; i < button.length; i++) {
    button[i].addEventListener("click", getPrevNextImg);
    button[i].addEventListener("mouseover", btnOnMouseover);
    button[i].addEventListener("mouseout", btnOnMouseout);
    button[i].addEventListener("mousedown", btnOnMousedown);
    button[i].addEventListener("mouseup", btnOnMouseup);
}

function getPrevNextImg(event) {

    for (var i = 0; i < slides.length; i++) {

        var src = slides[i].getAttribute("src").split("/");

        if (this.id === "prevPicture") {

            clearInterval(imgInterval);
            src[3]--;
            src[4]--;

        } else if (this.id === "nextPicture") {

            clearInterval(imgInterval);
            src[3]++;
            src[4]++;

        } else if (this.id === "stop") {

            clearInterval(imgInterval);

        } else if (this.id === "play") {

            clearInterval(imgInterval);
            imgInterval = setInterval(getPrevNextImg, 5000);

        } else {

            src[3]++;
            src[4]++;
        }

        var newSrc = src.join("/");
        slides[i].setAttribute("src", newSrc);
    }

}

function btnOnMouseover(event) {
    this.classList.add("button-mouseover");
}

function btnOnMouseout(event) {
    this.classList.remove("button-mouseover");
}

function btnOnMousedown(event) {
    this.classList.add("button-mousedown");
}

function btnOnMouseup() {
    this.classList.remove("button-mousedown");
}
