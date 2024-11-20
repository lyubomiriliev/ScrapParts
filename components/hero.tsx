import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?q=80&w=3270&auto=format&fit=crop"
          alt="Workshop background"
          fill
          className="object-cover brightness-[0.3]"
          priority
        />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-24 sm:py-32">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-400">
            Transforming Scrap Metal<br />into Living Art
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-xl">
            Discover unique sculptures crafted from recycled car parts, where industrial waste transforms into stunning artistic expressions. Each piece tells a story of rebirth and creativity.
          </p>
          
          <div className="mt-10 flex gap-x-6">
            <Link href="/products">
              <Button size="lg" className="bg-neutral-800 hover:bg-neutral-700">
                View Collection
              </Button>
            </Link>
            <Link href="/#contact">
              <Button size="lg" variant="outline">
                Contact Artist
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}