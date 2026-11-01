names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
username = input("Enter your name: ")
if username in names:
    print(f"Index of {username}: {names.index(username)}")