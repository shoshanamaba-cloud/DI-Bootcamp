user_name = input("Enter your username. Must be exactly 10 characters: ")
if len(user_name) < 10:
    print("Your username is too short. Must be exactly 10 characters.")
elif len(user_name) > 10:
    print("Your username is too long. Must be exactly 10 characters.")
else:
    print("Perfect String")
    print(user_name[0])
    print(user_name[-1])

for count in range(10):
    print(user_name[0:count + 1])
