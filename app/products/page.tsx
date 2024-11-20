import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/constants";

export default function ProductsPage() {
  return (
    <div className="py-16 bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Featured Products</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Each sculpture is a unique piece, handcrafted from carefully
            selected car parts. Browse through our collection of available
            works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <Card className="bg-neutral-800 border-none overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="hidden absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 lg:flex items-center justify-center">
                      <Button variant="secondary">View Details</Button>
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
                    <Button className="mt-2 lg:hidden" variant="default">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
