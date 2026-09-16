import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Formations from "@/components/Formations";
import Campus from "@/components/Campus";
import Activities from "@/components/Activities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Formations />
        <Campus />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
