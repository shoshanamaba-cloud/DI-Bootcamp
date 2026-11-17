let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = ()=> {
    groceries.fruits.forEach(element => console.log(element))
}

displayGroceries();

const cloneGroceries = () => {
    let user = client;
    client = "Betty";  /* changes the value of user since they're sharing the same reference */
    const shopping = groceries;
    groceries.totalPrice = "35$";
    groceries.other.paid = false;
    
    console.log(groceries);
    console.log(shopping);
} /*both objects values changed because the used the same reference form some keys*/

cloneGroceries();
