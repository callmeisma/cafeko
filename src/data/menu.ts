export type MenuItem = {
  name: string;
  price: string;
  description?: string;
};

export const coffee: MenuItem[] = [
  { name: "Espresso", price: "$2.50" },
  { name: "Cortadito", price: "$3.50" },
  { name: "Cappuccino", price: "$5.50" },
  { name: "Latte", price: "$5.50" },
  { name: "Americano", price: "$4.25" },
  { name: "Iced Latte", price: "$6.00" },
  { name: "Iced Americano", price: "$4.75" },
  { name: "Extra Shot", price: "$1.00" },
  { name: "Almond Milk", price: "$0.50" },
];

export const drinks: MenuItem[] = [
  { name: "Water", price: "$2.00" },
  { name: "Vita Coco", price: "$5.00" },
  { name: "Sport Drink", price: "$4.00" },
  { name: "Sodas", price: "$3.00" },
  { name: "Red Bull", price: "$3.50" },
];

export const iceCream: MenuItem[] = [
  {
    name: "One Fruit",
    price: "$7.50",
  },
  {
    name: "Extra Fruit",
    price: "$0.50",
  },
];

export const milkshakes: MenuItem[] = [
  {
    name: "Power Serve",
    price: "$8.50",
    description: "Banana, Oreo",
  },
  {
    name: "Belly Rally",
    price: "$8.50",
    description: "Mixed berries, vanilla",
  },
];

export const food: MenuItem[] = [
  {
    name: "Breakfast Sandwich",
    price: "$5.20",
    description: "Ham, cheese, egg",
  },
  {
    name: "Cachito",
    price: "$3.20",
    description: "Ham, cheese",
  },
  { name: "Tequeño", price: "$2.50" },
  { name: "Pan de Bono", price: "$2.75" },
  { name: "Muffins", price: "$3.99" },
  { name: "Croissant", price: "$3.20" },
  { name: "Plain", price: "$3.20" },
  { name: "Chocolate", price: "$3.20" },
  { name: "Dulce de Leche", price: "$3.20" },
];

export const combos: MenuItem[] = [
  {
    name: "Morning Kick",
    price: "$12.00",
    description: "Latte + Breakfast Sandwich",
  },
  {
    name: "Post-Match",
    price: "$10.50",
    description: "Smoothie + Cachito",
  },
];