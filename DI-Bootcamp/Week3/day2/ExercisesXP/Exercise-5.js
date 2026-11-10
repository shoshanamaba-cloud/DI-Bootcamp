let container = document.getElementById("container");
console.log(container);

let firstList = document.querySelectorAll(".list")[0];
firstList.children[1].textContent = "Richard";

let secondList = document.querySelectorAll(".list")[1];
secondList.children[1].remove();

let lists = document.querySelectorAll(".list");

for (let list of lists) {
    list.children[0].textContent = "Shoshana";
}

lists = document.querySelectorAll(".list");

for (let list of lists) {
    list.classList.add("student_list");
}

lists[0].classList.add("university", "attendance");

container = document.getElementById("container");

container.style.backgroundColor = "lightblue";
container.style.padding = "10px";

document.querySelectorAll(".list")[1].children[2].style.display = "none";

document.querySelectorAll(".list")[0].children[1].style.border = "1px solid black";

document.body.style.fontSize = "20px";

container = document.getElementById("container");

if (container.style.backgroundColor === "lightblue") {
    let lists = document.querySelectorAll(".list");

    let x = lists[0].children[0].textContent;
    let y = lists[0].children[1].textContent;

    alert("Hello " + x + " and " + y);
}