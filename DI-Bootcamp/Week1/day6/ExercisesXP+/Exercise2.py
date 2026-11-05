sales_data = [
    {"customer_id": 1, 
     "product": "Smartphone", 
     "price": 600, 
     "quantity": 1, 
     "date": "2023-04-03"},
    {"customer_id": 2, 
     "product": "Laptop", 
     "price": 1200, 
     "quantity": 1, 
     "date": "2023-04-04"},
    {"customer_id": 1, 
     "product": "Laptop", 
     "price": 1000, 
     "quantity": 1, 
     "date": "2023-04-05"},
    {"customer_id": 2, 
     "product": "Smartphone", 
     "price": 500, 
     "quantity": 2, 
     "date": "2023-04-06"},
    {"customer_id": 3, 
     "product": "Headphones", 
     "price": 150, 
     "quantity": 4, 
     "date": "2023-04-07"},
    {"customer_id": 3, 
     "product": "Smartphone", 
     "price": 550, 
     "quantity": 1, 
     "date": "2023-04-08"},
    {"customer_id": 1, 
     "product": "Headphones", 
     "price": 100, 
     "quantity": 2, 
     "date": "2023-04-09"},
]

total_sale_per_product = {}
for sale in sales_data:
    product = sale["product"]
    total_sale_per_product[product] = total_sale_per_product.get(product, 0) + (sale["price"] * sale["quantity"])

print(total_sale_per_product)

customer_spending = {}
for sale in sales_data:
    customer_id = sale["customer_id"]
    customer_spending[customer_id] = customer_spending.get(customer_id, 0) + (sale["price"] * sale["quantity"])

print(customer_spending)
 # adding key "total_price" to each sale dictionary
total_price = 0
for sale in sales_data:
    total_price = sale["price"] * sale["quantity"]
    sale["total_price"] = total_price

high_value_sales = []
for sale in sales_data:
    if sale["total_price"] > 500:
        high_value_sales.append(sale)

high_value_sales.sort(key=lambda sale: sale["total_price"], reverse=True)
print(high_value_sales)

customer_purchases = {}
for sale in sales_data:
    customer_id = sale["customer_id"]
    customer_purchases[customer_id] = customer_purchases.get(customer_id, 0) + 1 

print(customer_purchases)

loyal_customers = []
for customer_id, purchase_count in customer_purchases.items():
    if purchase_count > 1:
        loyal_customers.append(customer_id)

print(loyal_customers)