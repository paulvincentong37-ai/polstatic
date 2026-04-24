import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WorkGrid, { type Work } from "@/components/WorkGrid";
import About from "@/components/About";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import worksData from "@/data/works.json";

export default function Home() {
  const works = (worksData.works as Work[]) ?? [];

  return (
    <main className="relative">
      <Nav />
      <Hero workCount={works.length} />
      <WorkGrid works={works} />
      <About />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}
