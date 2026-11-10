// 1. Change the id
document.getElementById("navBar").setAttribute("id", "socialNetworkNavigation");

// 2. Create a new li
let newLi = document.createElement("li");

// 3. Create the text node
let newTextNode = document.createTextNode("Logout");

// 4. Append the text to the li
newLi.appendChild(newTextNode);

// 5. Append the new li to the ul
document.querySelector("ul").appendChild(newLi);

// 6. Retrieve the first and last li
let firstLi = document.querySelector("ul").firstElementChild;
let lastLi = document.querySelector("ul").lastElementChild;

// 7. Display their text
console.log(firstLi.textContent);
console.log(lastLi.textContent);