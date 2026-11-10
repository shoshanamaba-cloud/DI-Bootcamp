function displayNumbersDivisible(){
    let sum = 0
    for (let x = 0; x<=500; x++){
    if (x % 23 === 0){
        console.log(x);
        sum += x;
    }
}
    console.log("Sum:", sum);
}

displayNumbersDivisible();


function displayNumbersDivisibleBonus(divisor) {
    let sum = 0;
    for (let x = 0; x <= 500; x++) {
        if (x % divisor === 0) {
            console.log(x);
            sum += x;
        }
    }
    console.log(`The sum of numbers divisible by ${divisor} is:`, sum);
}

displayNumbersDivisibleBonus(7);