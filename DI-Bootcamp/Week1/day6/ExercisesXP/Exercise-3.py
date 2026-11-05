brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": "men, women, children, home",
    "international_competitors": "Gap, H&M, Benetton",
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": "pink, green"
    }
}

brand["number_stores"] = 2
print(f"Zara offers clothing for {brand['type_of_clothes'].split(', ')[0]}, {brand['type_of_clothes'].split(', ')[1]} and {brand['type_of_clothes'].split(', ')[2]}, as well as {brand['type_of_clothes'].split(', ')[3]} products.")
brand["country_creation"] = "Spain"
print("international_competitors" in brand)
brand["international_competitors"] = brand["international_competitors"] + ", Desigual"
del brand["creation_date"]
print(brand["international_competitors"].split(", ")[-1])
print(brand["major_color"]["US"])
print(len(brand.keys()))
print(brand.keys())

more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

brand.update(more_on_zara)
print(brand)