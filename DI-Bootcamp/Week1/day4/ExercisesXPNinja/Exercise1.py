import math

C = 50
H = 30

numbers = input("Enter comma-separated numbers: ")
numbers_list = numbers.split(",")

results = []

for D in numbers_list:
    D = int(D)
    Q = math.sqrt((2 * C * D) / H)
    results.append(round(Q))

print(results)
