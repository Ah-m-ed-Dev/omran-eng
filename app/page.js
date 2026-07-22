// app/page.js
import Hero from "@/components/layout/Hero";
import Header from "@/components/layout/Header";
import About from "@/components/layout/About";
import Services from "@/components/layout/Services";
import Projects from "@/components/layout/Projects";
import Contact from "@/components/layout/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
      <Footer />  
      
    </main>
  );
}