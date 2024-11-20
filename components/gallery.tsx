import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const galleryItems = [
  {
    id: 1,
    title: "Mechanical Eagle",
    image: "https://images.unsplash.com/photo-1612404730960-5c71577fca11?q=80&w=2940&auto=format&fit=crop",
    category: "Wildlife",
  },
  {
    id: 2,
    title: "Industrial Dragon",
    image: "https://images.unsplash.com/photo-1597909555048-7b82d3c6ba82?q=80&w=2940&auto=format&fit=crop",
    category: "Fantasy",
  },
  {
    id: 3,
    title: "Steampunk Warrior",
    image: "https://images.unsplash.com/photo-1528795259021-d8c86e14354c?q=80&w=2940&auto=format&fit=crop",
    category: "Human Form",
  },
];

export default function Gallery() {
  return (
    <section className="py-16 bg-neutral-950" id="gallery">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Each piece is uniquely crafted from recycled car parts, combining industrial heritage with artistic vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <Card key={item.id} className="bg-neutral-900 border-none overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative h-80">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link href={`/products/${item.id}`}>
                      <Button variant="secondary">View Details</Button>
                    </Link>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.category}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products">
            <Button size="lg" variant="outline">
              View All Works
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}