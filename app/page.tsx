import Hero from "@/components/hero";
import Gallery from "@/components/gallery";
import About from "@/components/about";
import Contact from "@/components/contact";
import ExhibitionsPage from "./exhibitions/page";
import NewsSection from "@/components/news";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Gallery />
      <NewsSection />
      <ExhibitionsPage />
      <Contact />
    </div>
  );
}
