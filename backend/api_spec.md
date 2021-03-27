######API Specifications

Get menu items for restaurant by ID
```
GET /menu-items/{restaurant_id}

sample response:
[
  {
    item: 'Crunchwrap Supreme',
    description: 'A flour tortilla layered with seasoned beef, warm nacho cheese sauce, a crispy tostada shell, crispy lettuce, ripe tomatoes and topped with cool reduced fat sour cream all wrapped in our signature Crunchwrap fold and grilled to go',
    price: 5.00,
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