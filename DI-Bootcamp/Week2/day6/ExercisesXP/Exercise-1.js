const people = ["Greg", "Mary", "Devon", "James"];
people.splice (0,1);
people.splice(2,1,"Jason");
let yourName = prompt("What is your name?")
people.push(yourName)

console.log(people);

console.log(people.indexOf("Mary"));

let newPeople = people.slice(1,3);
console.log(newPeople);
console.log(people.indexOf("Foo"));
let last = people[people.length - 1];
console.log(last);

for(let person of people){
    console.log(person)
}

for(let person of people){
    if (person === "Devon"){
    break}
    console.log(person)
}
