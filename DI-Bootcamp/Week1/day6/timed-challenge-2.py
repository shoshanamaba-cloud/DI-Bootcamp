#perfect_numbers = [6, 28, 496, 8128, 33550336]

#for given_number in range(10):
#    given_number = int(input("Enter a number"))
#    if given_number in perfect_numbers:
#        print("True")
#    else:
#        print("False")

given_number = int(input("Enter a number: "))

divisor_sum = 0

for number in range(1, given_number):
    if given_number % number == 0:
        divisor_sum = divisor_sum + number

if divisor_sum == given_number:
    print("True")
else:
    print("False")