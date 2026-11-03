given_number = int(input("Please enter a number: "))
given_lenght = int(input("Please enter a length: "))

result = []
for i in range(1, given_lenght + 1):
    result.append(given_number * i)
print(f"These are the multiples of the given number in the given lenght: {result}")