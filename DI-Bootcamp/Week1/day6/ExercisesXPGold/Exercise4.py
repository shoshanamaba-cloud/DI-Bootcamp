prices = {
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3
}

print (prices.items())  

stock = {
    "banana": {"price": 4 , "stock":10},
    "apple": {"price": 2, "stock":5},
    "orange": {"price": 1.5 , "stock":24},
    "pear": {"price": 3 , "stock":1}
}

all_bananas_cost = prices["banana"] * stock["banana"]["stock"]
all_apples_cost = prices["apple"] * stock["apple"]["stock"]
all_oranges_cost = prices["orange"] * stock["orange"]["stock"]
all_pears_cost = prices["pear"] * stock["pear"]["stock"]
all_cost = all_bananas_cost + all_apples_cost + all_oranges_cost + all_pears_cost
print(f"Total cost of all the fruits in stock is: ${all_cost}")