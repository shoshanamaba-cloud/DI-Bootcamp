number_list = []
for number in range(3):
    number = input("Enter a number: ")
    number_list.append(int(number))
print(f"The greatest number is: {max(number_list)}")