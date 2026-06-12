import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { OurStory } from "@/components/OurStory";
import { Reviews } from "@/components/Reviews";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Events } from "@/components/sections/Events";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <Hero />
      <About />
      <OurStory />
      <Menu />
      <Events />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
      <ScrollToTop />
      <Toaster position="top-center" />
    </div>
  );
}
