function func1(a){
    let result = a*1000;
    return result;
}

console.log (func1(1));

const func2 = function(a){
    let result = a*1000;
    return result;
};

console.log (func2(2));

//function declaration doesnt store in a variable, function expression does//

const func3 = a => a*1000

console.log (func3(3))
