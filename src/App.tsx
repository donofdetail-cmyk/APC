import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Authority } from './components/Authority';
import { Process } from './components/Process';
import { VisualProof } from './components/VisualProof';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-apc-black text-white selection:bg-apc-orange selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Authority />
        <Services />
        <VisualProof />
        <Process />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
