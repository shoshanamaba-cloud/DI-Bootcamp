Birthdays ={
    "Freddy": "1946/9/5",
    "Celia": "1925/10/21",
    "Thom": "1968/10/7",
    "Naoko": "1967/3/15",
    "Shakira": "1977/2/2"
}
user_name = input("Enter your name: ")
user_birthday = input("Enter your birthday (YYYY/MM/DD): ")
Birthdays[user_name] = user_birthday
person = input("Enter a name: ")
while True:
    if person == "quit":
        break
    elif person in Birthdays:
        print(f"{person}'s birthday is on {Birthdays[person]}")
    else:
        print(f"{person} is not in the dictionary.")
    person = input("Enter a name: ")