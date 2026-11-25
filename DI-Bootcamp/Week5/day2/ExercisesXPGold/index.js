const form = document.getElementById("myform");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const dataObject = Object.fromEntries(formData);

    localStorage.setItem("userData", JSON.stringify(dataObject));

    window.location.href = "Receivedata.html";
});