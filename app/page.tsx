import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { OurStory } from "@/components/OurStory";
import { Gallery } from "@/components/Gallery";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <Hero />
      <About />
      <OurStory />
      <Menu />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}
