const array = [[1],[2],[3],[[[4]]],[[[5]]]]

const newArray = array.flat(2);

console.log(newArray);

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

const newGreeting = greeting.map((str)=>{
    return str.join(" ");
});

console.log(newGreeting);

console.log(newGreeting.join(" "));

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]

const free = trapped.flat(Infinity);

console.log(free);