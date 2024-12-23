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
          <h2 className="text-5xl lg:text-6xl font-bold mb-4">GALLERY</h2>
          <p className="text-gray-400 max-w-4xl mx-auto">
            Explore our collection of one-of-a-kind sculptures, each forged from
            reclaimed car parts. From gears to chains, nuts to bearings – these
            discarded elements are transformed into stunning pieces of art.
            Every sculpture tells a story of reinvention and showcases the
            ingenuity of our craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {products.map((item) => (
            <div className="relative h-80 overflow-hidden rounded-lg">
              <Image
                src={item.images[0]}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products">
            <Button size="lg" variant="outline">
              Shop Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
