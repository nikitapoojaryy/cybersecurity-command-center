import { Navbar } from '@/app/components/layout/Navbar';
import { Hero } from '@/app/components/sections/Hero';
import { About } from '@/app/components/sections/About';
import { Skills } from '@/app/components/sections/Skills';
import { Projects } from '@/app/components/sections/Projects';
import { Experience } from '@/app/components/sections/Experience';
import { Certifications } from '@/app/components/sections/Certifications';
import { Research } from '@/app/components/sections/Research';
import { Contact } from '@/app/components/sections/Contact';
import { Footer } from '@/app/components/layout/Footer';
import { GridBackground } from '@/app/components/effects/GridBackground';

export default function Home() {
  return (
    <>
      <GridBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Research />
        <Contact />
      </main>
      <Footer />
    </>
  );
}