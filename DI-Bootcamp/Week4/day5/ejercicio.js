const myObj = {
    name :"John",
    lastname: "Doe",
    age: 25,
    friends: ["Mark", "Lucie", "Ana"]
}

let keysObject = Object.keys(myObj);

console.log(keysObject);

const {name, lastname, age, friends} = myObj;

for (let i = 0; i < keysObject.length; i++) {
    const key = keysObject[i];
    console.log(`The #${i + 1} key is ${key}, the ${i + 1} value is ${myObj[key]}`);
};


console.log(now.getTime());