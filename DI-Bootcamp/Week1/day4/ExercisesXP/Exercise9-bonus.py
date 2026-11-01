attendees = int(input("How many people want to watch the movie?"))
ages = []

for attendee in range(attendees):
    age = int(input("What is your age?"))
    
    if age < 16:
        print("You're not allowed in!")
    else: 
        ages.append(age)

print("only people with ages", ages, "are allowed to go in")