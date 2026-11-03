words =[]
for n in range(7):
    word = input("Enter a word: ")
    words.append(word)

letter = input("Enter a letter: ")
for word in words:
    if letter in word:
        print(f"{letter} is in the word {word} at index {word.index(letter)}")
    else:
        print(f"{letter} is not in the word {word}")