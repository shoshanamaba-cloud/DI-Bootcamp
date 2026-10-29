month = input("Enter a month (1-12): ")
if int(month) >= 3  and int(month) <= 5:
    print("Spring")
elif int(month) >= 6 and int(month) <= 8:
    print("Summer")
elif int(month) >= 9 and int(month) <= 11:
    print("Autumn")
else:
    print("Winter")