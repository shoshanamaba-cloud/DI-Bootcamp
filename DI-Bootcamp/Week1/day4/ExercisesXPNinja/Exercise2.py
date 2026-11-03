numbers_list = [3, 47, 99, -80, 22, 97, 54, -23, 5, 7] 

print("Original list:", numbers_list)
print ("List in ascending order:", sorted(numbers_list))
print ("List in descending order:", sorted(numbers_list, reverse=True))
print ("Sum of all numbers in the list:", sum(numbers_list))

first_and_last = (numbers_list[0], numbers_list[-1])
print ("First and last numbers in the list:", first_and_last)
Greater_than_50 =[]
Smaller_than_10 = []
for number in numbers_list:
    if number >= 50:
        Greater_than_50.append(number)
    if number < 10:
        Smaller_than_10.append(number)

print ("Numbers greater than 50:", Greater_than_50)
print ("Numbers smaller than 10:", Smaller_than_10)

import math 
numbers_squared = []
for number in numbers_list:
    if number >= 0:
        squared = math.sqrt(number)
        numbers_squared.append(squared)
    else:
        numbers_squared.append(number)

print("Numbers squared:", numbers_squared)

numbers_without_duplicates = []

for number in numbers_list:
    if number not in numbers_without_duplicates:
        numbers_without_duplicates.append(number)

print("Numbers without duplicates:", numbers_without_duplicates)
print("There are:", len(numbers_without_duplicates), "numbers without duplicates in the list.")

average = sum(numbers_list) / len(numbers_list)
print("Average of the numbers in the list:", average)  

print ("The largest number in the list:", max(numbers_list))
print ("The smallest number in the list:", min(numbers_list))
