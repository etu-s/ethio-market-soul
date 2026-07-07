import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import ProductShowcase from './components/ProductShowcase';
import TrustSection from './components/TrustSection';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <CategoryGrid />
        <HowItWorks />
        <TrustSection />
        <ProductShowcase />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
