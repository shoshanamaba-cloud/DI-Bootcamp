family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
total_cost = 0
for name, age in family.items():
    if age < 3:
        total_cost += 0
    elif age <= 12:
        total_cost += 10
    else:
        total_cost += 15

print(f"Total cost for the family to watch the movie is ${total_cost}.")