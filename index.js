btn=document.querySelectorAll("button");

let audios = ["sounds/crash.mp3", "sounds/kick-bass.mp3", "sounds/snare.mp3", "sounds/tom-1.mp3", "sounds/tom-2.mp3", "sounds/tom-3.mp3", "sounds/tom-4.mp3"];

for(let n=0; n<btn.length; n++)
{
    btn[n].addEventListener("click", function()
    {
        playsoudint(this.innerHTML);
    });
}

document.addEventListener("keydown", function(event){
    playsoud(event.key);
})

function playsoudint(key){
    switch(key){
    case "space":
        var audio = new Audio(audios[0]);
        audio.play();
        break;

    case "a":
        var audio = new Audio(audios[1]);
        audio.play();
        break;

    case "s":
        var audio = new Audio(audios[2]);
        audio.play();
        break;

    case "d":
        var audio = new Audio(audios[3]);
        audio.play();
        break;

    case "j":
        var audio = new Audio(audios[4]);
        audio.play();
        break;  

    case "k":
        var audio = new Audio(audios[5]);
        audio.play();
        break;

    case "l":
        var audio = new Audio(audios[6]);
        audio.play();
        break;
    }
}

function playsoud(key){
    switch(key){
    case " ":
        var audio = new Audio(audios[0]);
        audio.play();
        break;

    case "l":
        var audio = new Audio(audios[1]);
        audio.play();
        break;

    case "s":
        var audio = new Audio(audios[2]);
        audio.play();
        break;

    case "d":
        var audio = new Audio(audios[3]);
        audio.play();
        break;

    case "f":
        var audio = new Audio(audios[4]);
        audio.play();
        break;  

    case "j":
        var audio = new Audio(audios[5]);
        audio.play();
        break;

    case "k":
        var audio = new Audio(audios[6]);
        audio.play();
        break;
    }
}
