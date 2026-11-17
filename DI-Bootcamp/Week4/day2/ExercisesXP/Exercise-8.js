/* part 1
function makeJuice (sizeJuice){
    function addIngredients(ingr1, ingr2, ingr3){

        let order = document.createElement("p");
        order.textContent = `The client wants a ${sizeJuice} juice, containing ${ingr1}, ${ingr2}, ${ingr3}`;
        document.body.append(order);
    
    }addIngredients("pineapple", "lime", "mango");

};

makeJuice("large"); */


/* part 2 */
function makeJuice (sizeJuice){
    let ingredients =[]
    function addIngredients(ingr1, ingr2, ingr3){

        ingredients.push(ingr1, ingr2, ingr3)
    }    
    
    function displayJuice(){
        let order = document.createElement("p");
        order.textContent = `The client wants a ${sizeJuice} juice, containing ${ingredients.join(", ")}.`;
        document.body.append(order);
        
    }

    addIngredients("pineapple", "lime", "mango");
    addIngredients("banana", "strawberry", "kiwi");
    displayJuice();
};

makeJuice("large");