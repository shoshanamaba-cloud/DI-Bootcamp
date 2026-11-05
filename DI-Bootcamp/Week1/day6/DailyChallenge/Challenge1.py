word = input("type a word an I'll tell you the index of it's components>>> ")
my_dict = {}

for index, letter in enumerate(word):

    if letter in my_dict:
        my_dict[letter].append

    else:
        my_dict[letter] = [index]

print(my_dict)

