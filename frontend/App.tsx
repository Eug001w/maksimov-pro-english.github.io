import React from 'react';
import { Navbar, Footer } from './components/Layout';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { MethodologySection } from './components/MethodologySection';
import { FeaturesSection } from './components/FeaturesSection';
import { PricingSection } from './components/PricingSection';
import { ReviewsSection } from './components/ReviewsSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <MethodologySection />
        <FeaturesSection />
        <PricingSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;