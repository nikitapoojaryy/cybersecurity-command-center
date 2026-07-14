import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";
import KnowledgeCenter from "@/app/components/KnowledgeCenter";
import CertificationRoadmap from "@/app/components/CertificationRoadmap";
import Footer from "@/app/components/Footer";


export default function Home() {

  return (

    <main>

      <Navbar />

      <Hero />

      <Projects />

      <KnowledgeCenter />

      <CertificationRoadmap />

      <Footer />

    </main>

  );

}