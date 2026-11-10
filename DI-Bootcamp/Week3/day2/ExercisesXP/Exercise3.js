function changeEnough(itemPrice, amountOfChange){
    amountOfChange[0] *= 0.25;
    amountOfChange[1] *= 0.10;
    amountOfChange[2] *= 0.05;
    amountOfChange[3] *= 0.01;
    let sum = 0;
    
    for (let number of amountOfChange){
    sum += number;
    }
    
    return(sum >= itemPrice)
    
}

console.log(changeEnough(4.25, [25, 20, 5, 0]))