var buttonList = document.querySelectorAll(".drum");
var snare = new Audio("./sounds/snare.mp3");
var crash = new Audio("./sounds/crash.mp3");
var kick = new Audio("./sounds/kick-bass.mp3");
var tom1 = new Audio("./sounds/tom-1.mp3");
var tom2 = new Audio("./sounds/tom-2.mp3");
var tom3 = new Audio("./sounds/tom-3.mp3");
var tom4 = new Audio("./sounds/tom-4.mp3");


for (var i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener("click", function () {
        playSound(this.innerHTML);
    });
}

document.addEventListener("keydown", function (event) {
    playSound(event.key);
})

function playSound(key) {
    switch(key){
        case "w":
            kick.play()
            break;
        case "a":
            snare.play()
            break;
        case "s":
            crash.play()
            break;
        case "d":
            tom1.play()
            break;
        case "j":
            tom2.play()
            break;
        case "k":
            tom3.play()
            break;
        case "l":
            tom4.play()
            break;
        default: console.log(this);
    }
}