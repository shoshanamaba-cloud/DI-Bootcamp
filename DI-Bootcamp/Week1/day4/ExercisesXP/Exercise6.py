name = input("Enter your name")
while len(name) < 3 or name.isdigit():
    name = input ("Your name must be longer/there are digits in your name")

print("Thank you")
