const isString = (b) => {
    if (typeof(b) === "string") {
        return true;
    } else {
        return false;
    }
};

console.log(isString('hello')); 
console.log(isString([1, 2, 4, 0]));