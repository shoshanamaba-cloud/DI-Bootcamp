let planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"];

for (let planet of planets) {

    let planetDiv = document.createElement("div");

    planetDiv.classList.add("planet");
    planetDiv.classList.add(planet);

    document.querySelector(".listPlanets").appendChild(planetDiv);
}

document.querySelector(".mercury").style.backgroundColor = "#4169E1";
document.querySelector(".venus").style.backgroundColor = "#FFB52E";
document.querySelector(".earth").style.backgroundColor = "white";
document.querySelector(".mars").style.backgroundColor = "#DC143C";
document.querySelector(".jupiter").style.backgroundColor = "#32A852";
document.querySelector(".saturn").style.backgroundColor = "#9370DB";
document.querySelector(".uranus").style.backgroundColor = "#40E0D0";
document.querySelector(".neptune").style.backgroundColor = "#008B8B";
document.querySelector(".pluto").style.backgroundColor = "#006400";