import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Recycle, Trophy } from "lucide-react";

export default function About() {
  return (
    <section className="py-16 bg-neutral-900" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">The Artist Behind the Metal</h2>
            <p className="text-gray-400 mb-6">
              With over 15 years of experience in metalworking and a passion for automotive engineering, 
              I transform discarded car parts into unique pieces of art. Each sculpture tells a story of 
              transformation, giving new life to materials that would otherwise be forgotten.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <Card className="bg-neutral-800 border-none">
                <CardContent className="pt-6">
                  <Wrench className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Craftsmanship</h3>
                  <p className="text-sm text-gray-400">Meticulous attention to detail in every piece</p>
                </CardContent>
              </Card>
              
              <Card className="bg-neutral-800 border-none">
                <CardContent className="pt-6">
                  <Recycle className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Sustainability</h3>
                  <p className="text-sm text-gray-400">Giving new life to discarded materials</p>
                </CardContent>
              </Card>
              
              <Card className="bg-neutral-800 border-none">
                <CardContent className="pt-6">
                  <Trophy className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Recognition</h3>
                  <p className="text-sm text-gray-400">Award-winning artistic vision</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="relative h-[600px]">
            <Image
              src="https://images.unsplash.com/photo-1621972750749-0fbb1abb7736?q=80&w=2574&auto=format&fit=crop"
              alt="Artist at work"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}