import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    title: "Mechanical Eagle",
    price: "€250,00",
    image: "/robot1.jpg",
    category: "Wildlife",
  },
  {
    id: 2,
    title: "Industrial Dragon",
    price: "€3,200",
    image: "/robot2.jpg",
    category: "Fantasy",
  },
  {
    id: 3,
    title: "Steampunk Warrior",
    price: "€2,800",
    image: "/robot3.jpg",
    category: "Human Form",
  },
  {
    id: 4,
    title: "Mechanical Lion",
    price: "€2,900",
    image: "/robot4.jpg",
    category: "Wildlife",
  },
  {
    id: 5,
    title: "Gear Phoenix",
    price: "€3,500",
    image: "/guitar2.jpg",
    category: "Fantasy",
  },
  {
    id: 6,
    title: "Abstract Motion",
    price: "€2,200",
    image: "/guitar1.jpg",
    category: "Abstract",
  },
];

export default function ProductsPage() {
  return (
    <div className="py-16 bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Available Works</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Each sculpture is a unique piece, handcrafted from carefully
            selected car parts. Browse through our collection of available
            works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="bg-neutral-800 border-none overflow-hidden group"
            >
              <CardContent className="p-0">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link href={`/products/${product.id}`}>
                      <Button variant="secondary">View Details</Button>
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{product.title}</h3>
                    <span className="text-primary font-medium">
                      {product.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">{product.category}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
