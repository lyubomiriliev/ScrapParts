import ProductDetails from "@/components/product-details";

const products = {
  "1": {
    title: "Mechanical Eagle",
    price: "€2,500",
    category: "Wildlife",
    dimensions: "120cm x 80cm x 60cm",
    weight: "45kg",
    materials: ["Car Engine Parts", "Transmission Components", "Steel Pipes"],
    description: "A majestic eagle sculpture crafted from various car engine components. The wings are made from carefully arranged transmission parts, while the body features intricate details created from smaller engine components. This piece symbolizes freedom and mechanical precision.",
    images: [
      "https://images.unsplash.com/photo-1612404730960-5c71577fca11?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?q=80&w=2940&auto=format&fit=crop",
    ],
  },
  "2": {
    title: "Industrial Dragon",
    price: "€3,200",
    category: "Fantasy",
    dimensions: "150cm x 100cm x 90cm",
    weight: "65kg",
    materials: ["Exhaust Systems", "Gearbox Parts", "Chrome Elements"],
    description: "A fearsome dragon brought to life through the creative use of automotive parts. The body is constructed from exhaust system components, while the wings incorporate elements from various gearboxes. Chrome accents add a distinctive shine to this mythical creature.",
    images: [
      "https://images.unsplash.com/photo-1597909555048-7b82d3c6ba82?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547651196-2d6ed7c106ae?q=80&w=2940&auto=format&fit=crop",
    ],
  },
  "3": {
    title: "Steampunk Warrior",
    price: "€2,800",
    category: "Human Form",
    dimensions: "180cm x 70cm x 70cm",
    weight: "55kg",
    materials: ["Pistons", "Crankshafts", "Metallic Plating"],
    description: "A towering warrior figure that embodies the fusion of human form and mechanical precision. Created using pistons for joints and crankshafts for the core structure, this piece represents the harmony between man and machine.",
    images: [
      "https://images.unsplash.com/photo-1528795259021-d8c86e14354c?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2940&auto=format&fit=crop",
    ],
  },
  "4": {
    title: "Mechanical Lion",
    price: "€2,900",
    category: "Wildlife",
    dimensions: "130cm x 90cm x 50cm",
    weight: "50kg",
    materials: ["Engine Block", "Timing Chains", "Brake Components"],
    description: "A majestic lion brought to life through automotive engineering. The mane is crafted from intricate timing chains, while the body utilizes parts from an engine block to create a powerful, dynamic pose.",
    images: [
      "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1612404730960-5c71577fca11?q=80&w=2940&auto=format&fit=crop",
    ],
  },
  "5": {
    title: "Gear Phoenix",
    price: "€3,500",
    category: "Fantasy",
    dimensions: "140cm x 120cm x 70cm",
    weight: "45kg",
    materials: ["Transmission Gears", "Radiator Parts", "Copper Wiring"],
    description: "A mythical phoenix rising from industrial elements. The wings are intricately crafted from transmission gears, while copper wiring creates the illusion of flames, symbolizing rebirth and transformation.",
    images: [
      "https://images.unsplash.com/photo-1547651196-2d6ed7c106ae?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1597909555048-7b82d3c6ba82?q=80&w=2940&auto=format&fit=crop",
    ],
  },
  "6": {
    title: "Abstract Motion",
    price: "€2,200",
    category: "Abstract",
    dimensions: "100cm x 100cm x 40cm",
    weight: "35kg",
    materials: ["Bearings", "Suspension Parts", "Polished Steel"],
    description: "An abstract representation of movement and mechanics. Using bearings and suspension components, this piece creates a sense of perpetual motion through its dynamic arrangement of curved and linear elements.",
    images: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528795259021-d8c86e14354c?q=80&w=2940&auto=format&fit=crop",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(products).map((id) => ({
    id,
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products[params.id as keyof typeof products];
  return <ProductDetails product={product} />;
}