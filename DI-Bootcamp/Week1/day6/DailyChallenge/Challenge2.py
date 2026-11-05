items_purchase = {"Water": "$1", "Bread": "$3", "TV": "$1,000", "Fertilizer": "$20"}
wallet = "$300"

wallet = int(wallet.replace("$", ""))

purchase = []

for item, price in items_purchase.items():
    price = int(price.replace("$", "").replace(",", ""))

    if price <= wallet:
        purchase.append(item)
        wallet = wallet - price

print(purchase)
print(wallet)