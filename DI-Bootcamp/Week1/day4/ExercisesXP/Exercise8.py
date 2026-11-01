toppings =[]

while True: 
    topping = input("Type in the toppings you want. type 'quit' when you're done.")
    if topping == "quit":
        break
    toppings.append(topping)
    print ("Adding", topping, "to your pizza")

price = 10 + len(toppings)*2.50
print("Your toppings are", toppings)
print("Your total is $", price,)