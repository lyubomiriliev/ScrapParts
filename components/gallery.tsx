import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/constants";

export default function Gallery() {
  return (
    <section className="py-16 bg-neutral-950" id="gallery">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Gallery</h2>
          <p className="text-gray-400 max-w-4xl mx-auto">
            Explore our collection of one-of-a-kind sculptures, each forged from
            reclaimed car parts. From gears to chains, nuts to bearings – these
            discarded elements are transformed into stunning pieces of art.
            Every sculpture tells a story of reinvention and showcases the
            ingenuity of our craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 3).map((item) => (
            <Link key={item.id} href={`/products/${item.id}`}>
              <Card className="bg-neutral-900 border-none overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={item.images[0]}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="hidden lg:flex absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
                      <Button variant="secondary">View Details</Button>
                    </div>
                  </div>
                  <div className="p-4 flex justify-between">
                    <div className="flex flex-col">
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.category}</p>
                    </div>
                    <Button className="mt-2 lg:hidden" variant="secondary">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
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
