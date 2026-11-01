my_fav_numbers = {3, 5, 7, 9, 11}
my_fav_numbers.add(13)
my_fav_numbers.add(15)
my_fav_numbers.remove(15)
friend_fav_numbers = {2, 4, 6, 8, 10}
our_fav_numbers = list(my_fav_numbers) + list(friend_fav_numbers)

print("My favorite numbers are:", my_fav_numbers)
print("My friend's favorite numbers are:", friend_fav_numbers)
print("Our favorite numbers are:", our_fav_numbers)