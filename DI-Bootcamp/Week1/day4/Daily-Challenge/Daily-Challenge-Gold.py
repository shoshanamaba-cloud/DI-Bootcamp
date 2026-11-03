birthdate = input("Enter your birthdate (DD/MM/YYYY): ")
today = input("Enter today's date (DD/MM/YYYY): ")

birth_day, birth_month, birth_year = birthdate.split("/")
today_day, today_month, today_year = today.split("/")

birth_day = int(birth_day)
birth_month = int(birth_month)
birth_year = int(birth_year)

today_day = int(today_day)
today_month = int(today_month)
today_year = int(today_year)

age = today_year - birth_year

if (today_month, today_day) < (birth_month, birth_day):
    age = age - 1

candles = age % 10

print(f"""
       ___{'i' * candles}___
      |:H:a:p:p:y:|
    __|___________|__
   |^^^^^^^^^^^^^^^^^|
   |:B:i:r:t:h:d:a:y:|
   |                 |
   ~~~~~~~~~~~~~~~~~~~
""")