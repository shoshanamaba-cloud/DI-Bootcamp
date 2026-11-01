Favorite_Fruits = input("What are your favorite fruits?").split()
Chosen_fruit = input("Choose a Fruit")

if Chosen_fruit in Favorite_Fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")

