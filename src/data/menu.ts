export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  /** Optional sub-heading within a section, e.g. "Extras", "Muffin", "Croissant". */
  subcategory?: string;
};

export const coffee: MenuItem[] = [
  { name: "Espresso", price: "$2.50" },
  { name: "Cortadito", price: "$3.50" },
  { name: "Cappuccino", price: "$5.50" },
  { name: "Latte", price: "$5.50" },
  { name: "Americano", price: "$4.25" },
  { name: "Iced Latte", price: "$6.00" },
  { name: "Iced Americano", price: "$4.75" },
  { name: "Extra Shot", price: "$1.00", subcategory: "Extras" },
  { name: "Almond Milk", price: "$0.50", subcategory: "Extras" },
];

export const drinks: MenuItem[] = [
  { name: "Dasani", price: "$2.00" },
  { name: "Fiji", price: "$3.00" },
  { name: "Gatorade", price: "$4.00" },
  { name: "Red Bull", price: "$3.00" },
  { name: "Core Power", price: "$6.00" },
  { name: "Soda", price: "$3.00" },
];

export const iceCream: MenuItem[] = [
  { name: "Ice Cream", price: "$7.50" },
  { name: "Extra Fruit", price: "$0.50", subcategory: "Extras" },
];

export const milkshakes: MenuItem[] = [
  { name: "Power Serve", price: "$8.50", description: "Banana, Oreo" },
  { name: "Belly Rally", price: "$8.50", description: "Mixed berries, vanilla" },
];

export const food: MenuItem[] = [
  { name: "Breakfast Sandwich", price: "$5.20", description: "Ham, Cheese, Egg" },
  { name: "Cachito", price: "$3.20", description: "Ham, Cheese" },
  { name: "Tequeño", price: "$2.50" },
  { name: "Pan de Bono", price: "$2.75" },
  { name: "Dubai Chocolate", price: "$3.99", subcategory: "Muffin" },
  { name: "Carrot", price: "$3.99", subcategory: "Muffin" },
  { name: "Dulce de Leche", price: "$3.99", subcategory: "Muffin" },
  { name: "Nuts & Cream", price: "$3.99", subcategory: "Muffin" },
  { name: "Jumbo", price: "$3.20", subcategory: "Croissant" },
  { name: "Chocolate", price: "$3.20", subcategory: "Croissant" },
  { name: "White Chocolate", price: "$3.20", subcategory: "Croissant" },
];

export const combos: MenuItem[] = [
  { name: "Morning Kick", price: "$12.00", description: "Latte + Breakfast Sandwich" },
  { name: "Post-Match", price: "$10.50", description: "Smoothie + Cachito" },
];