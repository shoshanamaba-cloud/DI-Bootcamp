const menu = [
  {
    type : "starter",
    name : "Houmous with Pita"
  },
  {
    type : "starter",
    name : "Vegetable Soup with Houmous peas"
  },
  {
    type : "dessert",
    name : "Chocolate Cake"
  }
]

console.log(menu.some((obj) => { return obj.type == "dessert"; }));

console.log (menu.every((obj) => { return obj.type == "starter"}));

if (!menu.some(obj => obj.type == "main course")) {
    menu.push({
        type: "main course",
        name: "Fried Chicken"
    });
}

const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes"];

menu.map(obj => {
    obj.vegetarian = vegetarian.some(word =>
        obj.name.toLowerCase().includes(word)
    );
});

console.log(menu);
