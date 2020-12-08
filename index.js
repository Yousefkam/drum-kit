var i;
var h = document.querySelectorAll("button").length;
for(i=0; i < h; i++){
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

function handleClick(){

    var buttonText = this.innerHTML;

    makeSound(buttonText);

    
}

document.addEventListener("keydown", handleKey);

function handleKey(event){
    var keyKey = event.key;
    makeSound(keyKey);
}

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;
        case "a":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "s":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "d":
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        case "l":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        default:
            break;
    }
}