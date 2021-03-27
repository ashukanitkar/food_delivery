######API Specifications

Get top food categories and respective image name
```
GET /categories

sample response:
[
  "categories": [
    {"cat": "Pasta", "image": "pasta"},
    {"cat": "Burger", "image": "burger"},
    {"cat": "Seafood", "image": "fish"}
  ]
]
```

Get top restaurants
```
GET /restaurants

sample response:
[
  "restaurants": [
    {
      "name": "Burgers N More", 
      "description": "dd you viewing ten equally believe put. Separate families my on drawings do oh offended strictly elegance. Perceive jointure be mistress by jennings properly. An admiration at he discovered difficulty continuing. We in building removing possible suitable friendly on."
    },
    {
      "name": "Endless Pastabilities", 
      "description": "Extremity direction existence as dashwoods do up. Securing marianne led welcomed offended but offering six raptures. Conveying concluded newspaper rapturous oh at. Two indeed suffer saw beyond far former mrs remain. Occasional continuing possession we insensible an sentiments as is. Law but reasonably motionless principles she."},
    {
      "name": "Taco Bamba",
      "description": "Bore can led than how has rank. Discovery any extensive has commanded direction. Short at front which blind as. Ye as procuring unwilling principle by."
    }
  ]
]
```

Get menu items for restaurant by ID
```
GET /menu-items/{restaurant_id}

sample response:
[
  {
    item: 'Crunchwrap Supreme',
    description: 'A flour tortilla layered with seasoned beef, warm nacho cheese sauce, a crispy tostada shell, crispy lettuce, ripe tomatoes and topped with cool reduced fat sour cream all wrapped in our signature Crunchwrap fold and grilled to go',
    price: 5.00
  }
]
```

Update cart with menu items
```
POST /cart

expected body:
{
  menuItems: [
    {
      name: 'fried chicken', 
      quantity: 2
    }
    ]
}

expected response:
{
  id: 'order-id',
  status: 'in-progress',
  total: '$50',
  menuItems: [{ name: 'fried chicken', quantity: 2 }]
}
```