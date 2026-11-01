price = []

while True:
    age = input("What is your age? type 'quit' to quit")
    if age == "quit":
        break
    age = int(age)
    if 3 <= age < 12:
        price.append(10)
    elif age >= 12:
        price.append(15)

sum(price)
print("Your total is $", sum(price))

        