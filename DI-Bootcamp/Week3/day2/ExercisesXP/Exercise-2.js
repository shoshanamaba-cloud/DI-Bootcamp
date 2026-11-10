const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = ["banana", "orange", "apple"]

function myBill(myList) {
    let price = 0;
    for (let x of myList){
        if (x in stock && stock[x] > 0) {
            price += prices[x];
            stock[x] -= 1;
        }
    }
    console.log (`The price is ${price}`)
}

myBill(shoppingList)