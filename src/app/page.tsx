import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import MetricsBar from '@/components/sections/MetricsBar';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Testimonials from '@/components/sections/Testimonials';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MetricsBar />
        <Experience />
        <Projects />
        <Skills />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
