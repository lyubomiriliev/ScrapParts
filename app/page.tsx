import Hero from "@/components/hero";
import Gallery from "@/components/gallery";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Gallery />
      <Contact />
    </div>
  );
}