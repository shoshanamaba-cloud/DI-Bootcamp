cars = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

cars_list = cars.split(", ")
print(cars_list)

print(f"There are {len(cars_list)} car manufacturers in the list.")
print(f"These are the car manufacturers in the list: {sorted(cars_list, reverse=True)}")

#Car_with_o = 0
#Car_without_i = 0
#for car in cars_list:
#    if "o" in car.lower():
#        Car_with_o += 1
#    if "i" not in car.lower():
#        Car_without_i += 1

Car_with_o = len([car for car in cars_list if "o" in car.lower()])
Car_without_i = len([car for car in cars_list if "i" not in car.lower()])

print(f"Car manufacturers with the letter 'o': {Car_with_o}")
print(f"Car manufacturers without the letter 'i': {Car_without_i}")


cars_list_2 = ["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]

unique_cars = set(cars_list_2)

print(", ".join(unique_cars))
print(len(unique_cars))

sorted_cars = sorted(cars_list_2)

reversed_cars = [car[::-1] for car in sorted_cars]

print(reversed_cars)