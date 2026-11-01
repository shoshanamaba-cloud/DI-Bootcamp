alphabet = "abcdefghijklmnopqrstuvwxyz"
vowels = "aeiou"

for letter in alphabet:
    if letter in vowels:
        print(letter, "is a vowel")
    else:
        print(letter, "is a consonant")