import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Recycle, Trophy } from "lucide-react";

export default function About() {
  return (
    <section className="py-16 bg-neutral-900" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About the Craftsman</h2>
            <p className="text-gray-400 mb-6">
              Behind every piece of scrap metal lies a vision. Our artist
              transforms rusted car parts into exquisite works of art, blending
              engineering precision with a creative spirit. With an eye for
              innovation and a dedication to quality, each sculpture is crafted
              to perfection, ensuring that every piece is not just a creation
              but a masterpiece. Our mission is to show that even the most
              unlikely materials can be turned into objects of beauty and
              inspiration.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <Card className="bg-neutral-800 border-none flex flex-col justify-center items-center text-center">
                <CardContent className="pt-6 flex flex-col justify-center items-center">
                  <Wrench className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Craftsmanship</h3>
                  <p className="text-sm text-gray-400">
                    Meticulous attention to detail in every piece
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-neutral-800 border-none flex flex-col justify-center items-center text-center">
                <CardContent className="pt-6 flex flex-col justify-center items-center">
                  <Recycle className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Sustainability</h3>
                  <p className="text-sm text-gray-400">
                    Giving new life to discarded materials
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-neutral-800 border-none flex flex-col justify-center items-center text-center">
                <CardContent className="pt-6 flex flex-col justify-center items-center">
                  <Trophy className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Recognition</h3>
                  <p className="text-sm text-gray-400">
                    Award-winning artistic vision
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative h-[600px]">
            <Image
              src="/avatarImage.jpg"
              alt="Artist at work"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
