const products = [
  {
    id: 1,
    slug: "masala-dosa",
    name: "Masala Dosa",
    price: "₹180",
    image: "/products/masala-dosa.jpg",
    description:
      "A crispy golden rice crepe stuffed with spiced potato filling, served hot with coconut chutney and sambar.",
    ingredients: [
      "Rice batter",
      "Urad dal",
      "Potato masala",
      "Coconut chutney",
      "Sambar",
    ],
    specifications: [
      "Contains gluten",
      "Best consumed fresh",
      "Traditional South Indian recipe",
    ],
    serving: "Best enjoyed hot with a side of ghee or butter.",
  },
  {
    id: 2,
    slug: "paneer-butter-masala",
    name: "Paneer Butter Masala",
    price: "₹240",
    image: "/products/paneer.jpg",
    description:
      "Soft paneer cubes simmered in a rich, buttery tomato gravy — mildly spiced, creamy, and full of flavor.",
    ingredients: [
      "Paneer",
      "Butter",
      "Tomatoes",
      "Cashews",
      "Spices",
      "Cream",
    ],
    specifications: [
      "Vegetarian",
      "Contains dairy",
      "Mildly spiced and creamy",
    ],
    serving: "Pairs perfectly with butter naan or jeera rice.",
  },
  {
    id: 3,
    slug: "south-indian-thali",
    name: "South Indian Thali",
    price: "₹320",
    image: "/products/south-indian.jpg",
    description:
      "A wholesome, balanced meal featuring rice, sambar, rasam, poriyal, curd, papad, and traditional sweets.",
    ingredients: [
      "Steamed rice",
      "Lentils",
      "Tamarind",
      "Seasonal vegetables",
      "Curd",
    ],
    specifications: [
      "Completely vegetarian",
      "Includes dairy in curd",
      "Served traditionally on a banana leaf",
    ],
    serving:
      "Served on a banana leaf — a complete taste of the South on one plate.",
  },
  {
    id: 4,
    slug: "filter-coffee",
    name: "Filter Coffee",
    price: "₹90",
    image: "/products/filter-coffee.jpg",
    description:
      "Authentic South Indian filter coffee brewed with fresh decoction and frothy milk, aromatic and strong.",
    ingredients: ["Coffee decoction", "Milk", "Sugar"],
    specifications: ["Contains caffeine", "Contains dairy", "Strong and aromatic"],
    serving: "Served piping hot in a traditional stainless steel tumbler.",
  },
  {
    id: 5,
    slug: "medu-vada",
    name: "Medu Vada",
    price: "₹140",
    image: "/products/vada.jpg",
    description:
      "Crispy on the outside, soft and fluffy inside — made with urad dal batter and served with chutney and sambar.",
    ingredients: ["Urad dal", "Curry leaves", "Green chilli", "Ginger"],
    specifications: ["Gluten-free", "Vegan-friendly", "Crispy and soft texture"],
    serving: "Perfect as a snack or breakfast with hot filter coffee.",
  },
  {
    id: 6,
    slug: "fresh-fruit-juice",
    name: "Fresh Fruit Juice",
    price: "₹120",
    image: "/products/fruit-juice.jpg",
    description:
      "A refreshing blend of seasonal fruits, cold-pressed to preserve nutrients and natural sweetness.",
    ingredients: ["Seasonal fruits", "Mint", "Lemon juice", "Ice cubes"],
    specifications: [
      "100% natural",
      "No added sugar or preservatives",
      "Refreshing and healthy",
    ],
    serving: "Served chilled without added sugar or preservatives.",
  },
];

export default products;
