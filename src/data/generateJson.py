import json
import random

product_list = [
    "Silicone Food Storage Bags Set",
    "Wireless Bluetooth Earbuds with Charging Case",
    "Electric Milk Frother and Steamer",
    "Compact Travel Neck Pillow with Built-In Support",
    "Adjustable Laptop Stand with Cooling Fans",
    "Collapsible Silicone Travel Pet Bowl",
    "Reusable Silicone Food Covers",
    "Phone Camera Lens Attachments Kit",
    "Multi-Compartment Insulated Lunch Bag",
    "Portable Mini Projector with Screen",
    "Compact Portable Clothes Steamer",
    "Waterproof Bluetooth Speaker",
    "Car Phone Mount with Automatic Clamping",
    "Ergonomic Lumbar Support Cushion",
    "RFID-Blocking Travel Money Belt",
    "LED Desk Lamp with Wireless Charger",
    "Aromatherapy Essential Oil Diffuser"
]

color = ['red', 'green', 'blue', 'yellow', 'purple']

def generatePrice(min_price, max_price):
    return round(random.uniform(min_price, max_price), 2)

def generateProduct():
    product_name = random.choice(product_list)
    product_color = random.choice(color)
    product_price = generatePrice(10.00, 200.00)
    available_quantity = random.randint(0, 10)
    sku = ''.join(random.choices('ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890', k=8))
    
    product = {
        "name": product_name,
        "color": product_color,
        "price": product_price,
        "available_quantity": available_quantity,
        "sku": sku
    }
    
    return product

def generateJSON(num_products):
    products = [generateProduct() for _ in range(num_products)]
    return json.dumps(products, indent=4)

num_products = 1000  # Change this value to generate the desired number of products
json_data = generateJSON(num_products)

f = open("data.json", "w")
f.write(json_data)
f.close()