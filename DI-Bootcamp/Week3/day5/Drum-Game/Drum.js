let container = document.querySelector(".container");

let keyTitles = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];

let nameEffects = ["Boom", "Clap", "HiHat", "Kick", "OpenHat", "Ride", "Snare", "Tink", "Tom"];

for (let i = 0; i < keyTitles.length; i++) {

    let drum = document.createElement("div");
    drum.classList.add("drum");

    let keyName = document.createElement("h1");
    keyName.textContent = keyTitles[i];

    let effectName = document.createElement("h2");
    effectName.textContent = nameEffects[i];

    drum.appendChild(keyName);
    drum.appendChild(effectName);

    container.appendChild(drum);
}

let drums = document.querySelectorAll(".drum");
let audios = document.querySelectorAll("audio");

for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function() {
        audios[i].currentTime = 0;
        audios[i].play();

        drums[i].classList.add("playing");

        setTimeout(function() {
            drums[i].classList.remove("playing");
        }, 150);
    });
}

document.addEventListener("keydown", function(event) {

    for (let i = 0; i < drums.length; i++) {

        if (event.key.toUpperCase() === drums[i].querySelector("h1").textContent) {
            audios[i].currentTime = 0;
            audios[i].play();
        }

    }

});