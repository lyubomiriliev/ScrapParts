"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const BANNERS = [
  "/robotBanner3.jpg",
  "/robotBanner2.jpeg",
  "/robotBanner.jpg",
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Handle moving to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === BANNERS.length - 1 ? 0 : prev + 1));
  };

  // Handle moving to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? BANNERS.length - 1 : prev - 1));
  };

  // Automatically scroll to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Handle touch events for swipe detection
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;

    // Minimum distance for swipe to be detected
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    // Reset touch positions
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="w-full flex flex-col justify-center items-center relative overflow-hidden"
    >
      <div className="w-full h-[650px] md:h-[95vh] relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[300vw] h-[95vh] flex transition-transform duration-700"
        >
          {BANNERS.map((banner, index) => (
            <div key={index} className="w-screen h-full flex-shrink-0">
              <Image
                src={banner}
                alt={`Banner ${index + 1}`}
                width={1920}
                height={720}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Semi-Transparent Overlay */}
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-24 sm:py-32 flex flex-col justify-between text-center items-center">
            <h1 className="text-4xl lg:text-7xl whitespace-nowrap uppercase font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-400 via-zinc-100 to-zinc-400">
              Crafting Art from
            </h1>
            <Image
              src="/scrapText.png"
              width={400}
              height={100}
              alt="/"
              className="w-96 lg:w-2/3"
            />
            <div className="absolute top-[28%] w-60 h-60 bg-yellow-600/50 blur-3xl -z-10"></div>
            <p className="text-lg uppercase lg:text-2xl lg:whitespace-nowrap text-gray-200">
              Innovative Sculptures Built with Passion and Precision
            </p>

            <div className="mt-10 flex z-50 gap-x-6">
              <Link href="/products">
                <Button size="lg" className="">
                  View Collection
                </Button>
              </Link>
              <Link href="/#contact">
                <Button size="lg" variant="outline">
                  Contact Artist
                </Button>
              </Link>
            </div>

            {/* Arrow Icons */}
            <div className="absolute inset-0 w-full h-full flex justify-between items-center px-4 text-white z-30">
              <div
                onClick={prevSlide}
                className="absolute left-0 bottom-4 transform -translate-y-1/2 w-10 h-10 border-[1px] rounded-md hidden lg:flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
              >
                <ArrowLeft />
              </div>
              <div
                onClick={nextSlide}
                className="absolute right-0 bottom-4 transform -translate-y-1/2 w-10 h-10 border-[1px] rounded-md hidden lg:flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
              >
                <ArrowRight />
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="absolute w-full left-0 right-0 mx-auto flex justify-center gap-4 bottom-10 z-30 select-none">
              {BANNERS.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    currentSlide === index ? "bg-white" : "bg-gray-500"
                  } hover:cursor-pointer duration-300`}
                  onClick={() => setCurrentSlide(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
