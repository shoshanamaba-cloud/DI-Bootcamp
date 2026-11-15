const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

const ul = document.getElementById("list-tasks");
const tasks = [];

function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const task = formData.get("task");

    if (task.trim() !== "") {
        tasks.push(task);
        renderTasks(tasks);
        form.reset();
    }
}

function renderTasks(tasks) {
    ul.innerHTML = "";

    for (const task of tasks) {
        const li = document.createElement("li");

        const xMark = document.createElement("img");
        xMark.src = "x-png-22.png";
        xMark.className = "x";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const span = document.createElement("span");
        span.innerText = task;

        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                span.classList.add("completed");
            } else {
                span.classList.remove("completed");
            }
        });

        li.append(xMark);
        li.append(checkbox);
        li.append(span);

        ul.append(li);
    }
}

const clear = document.getElementById("clear");
clear.addEventListener("click", clearTasks);

function clearTasks() {
    tasks.length = 0;
    renderTasks(tasks);
}