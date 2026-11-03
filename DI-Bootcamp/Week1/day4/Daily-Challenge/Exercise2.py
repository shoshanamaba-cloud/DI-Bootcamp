word = input("Please enter a word: ")

new_word = ""

for letter in word:
    if new_word == "":
        new_word = new_word + letter
    elif letter != new_word[-1]:
        new_word = new_word + letter

print(new_word)
