Paragraph = ["Society for the Protection of Nature in Israel, or SPNI, is an Israeli non-profit environmental organization working to preserve plants, animals, and natural environments that represent bio-diversity, by protecting the lands and waters needed for their survival. It is Israel's oldest and largest conservation organization."]
print("The amount of characters in the paragraph:", len(Paragraph[0]))
words = Paragraph[0].split(" ")
print("The amount of words in the paragraph:", len(words))
sentences = Paragraph[0].split(".")
print("The amount of sentences in the paragraph:", len(sentences) - 1)

unique_words = []
for word in words:
    if word not in unique_words:
        unique_words.append(word)
print("Unique words in the paragraph:", len(unique_words))
paragraph_without_spaces = Paragraph[0].replace(" ", "")
print("The amount of non-whitespace characters:", len(paragraph_without_spaces))
average = len(words) / (len(sentences) - 1)
print("Average amount of words per sentence:", average)
non_unique_words = len(words) - len(unique_words)
print("The amount of non-unique words:", non_unique_words)

