import random

won = 0
lost = 0

while True:
    user_number = input("Choose a number from 1 to 9, or type 'quit' to exit: ")

    if user_number == "quit":
        break

    user_number = int(user_number)
    random_number = random.randint(1, 9)

    if user_number == random_number:
        print("Winner!")
        won = won + 1
    else:
        print("Better luck next time!")
        lost = lost + 1

print("Games won:", won)
print("Games lost:", lost)