users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

characters_dict = {}
for index, character in enumerate(users):
    characters_dict[character] = index

print(characters_dict)

characters_dict = {}
for index, character in enumerate(users):
    characters_dict[index] = character

print(characters_dict)

characters_dict = {}
sorted_users = sorted(users)

for index, character in enumerate(sorted_users):
    characters_dict[character] = index

print(characters_dict)