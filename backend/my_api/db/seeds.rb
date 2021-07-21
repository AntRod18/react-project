# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Part.create(name:"AMD Ryzen 9 5900X", kind:"processor", price: 549)
Part.create(name:"AMD Ryzen 5 5600X", kind:"processor", price: 299)
Part.create(name:"AMD Ryzen 7 5800X", kind:"processor", price: 399)
Part.create(name:"NZXT Kraken Z73", kind:"cooler", price: 252)
Part.create(name:"NZXT Kraken X63", kind:"cooler", price: 120)
Part.create(name:"Cooler Master MASTERLIQUID ML240L", kind:"cooler", price: 80)
Part.create(name:"Asus ROG Crosshair VIII Hero", kind:"motherboard", price: 380)
Part.create(name:"Asus TUF GAMING X570-PLUS", kind:"motherboard", price: 193)
Part.create(name:"Asus ROG STRIX B550-F GAMING", kind:"motherboard", price: 200)
Part.create(name:"G.Skill Trident Z RGB 16 GB", kind:"memory", price: 115)
Part.create(name:"Corsair Vengeance RGB Pro 16 GB", kind:"memory", price: 90)
Part.create(name:"G.Skill Ripjaws V 16 GB", kind:"memory", price: 92)
Part.create(name:"Samsung 870 Evo", kind:"storage", price: 110)
Part.create(name:"Western Digital WD Blue", kind:"storage", price: 192)
Part.create(name:"Kingston UV500", kind:"storage", price: 310)
Part.create(name:"EVGA GeForce RTX 3080 Ti", kind:"graphics", price: 1200)
Part.create(name:"EVGA GeForce RTX 3080", kind:"graphics", price: 799)
Part.create(name:"EVGA GeForce RTX 3090", kind:"graphics", price: 1500)
Part.create(name:"EVGA G3 1000 W 80+ Gold", kind:"power", price: 240)
Part.create(name:"Corsair RM (2019) 750 W 80+ Gold", kind:"power", price: 125)
Part.create(name:"EVGA SuperNOVA GA 650 W 80+ Gold", kind:"power", price: 85)
Part.create(name:"Lian Li PC-O11 Dynamic", kind:"case", price: 150)
Part.create(name:"Corsair 4000D Airflow", kind:"case", price: 95)
Part.create(name:"Phanteks Eclipse P400A Digital", kind:"case", price: 90)

List.create(name:"first list")
