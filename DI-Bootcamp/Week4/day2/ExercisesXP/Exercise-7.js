const navBar = document.querySelector("nav");

(function userHello(user) {

    const greeting = document.createElement("div");

    const profilePicture = document.createElement("img");

    profilePicture.src = "https://i.pinimg.com/736x/3d/77/fb/3d77fb4f17ffc752d0ba04359edf36c4.jpg";

    profilePicture.style.width = "100px";
    profilePicture.style.height = "100px";

    greeting.textContent = `Hello ${user}`;

    greeting.appendChild(profilePicture);

    navBar.appendChild(greeting);

})("John");
