import React from 'react';
import PageWrapper from '../components/common/PageWrapper';
import HeroSection from '../components/sections/HeroSection';
import TrustBarSection from '../components/sections/TrustBarSection';
import FeaturedProductVideoSection from '../components/sections/FeaturedProductVideoSection';
import FeaturedProductsSection from '../components/sections/FeaturedProductsSection';
import WhyPanchuSection from '../components/sections/WhyPanchuSection';
import CustomCotGuideSection from '../components/sections/CustomCotGuideSection';
import InteractiveConfigurator from '../components/configurator/InteractiveConfigurator';
import CustomerFaqSection from '../components/sections/CustomerFaqSection';
import ClosingCtaSection from '../components/sections/ClosingCtaSection';

export default function HomePage({ onOpenEnquiry, onOpenConfigurator }) {
  return (
    <PageWrapper>
      <main className="min-h-screen">
        {/* Preserved 100% Visual Hero Section */}
        <HeroSection 
          onOpenConfigurator={onOpenConfigurator} 
          onExploreClick={() => {
            const el = document.getElementById('featured-collections');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 1. Trust & Value Quick Bar */}
        <TrustBarSection />

        {/* 2. Premium Product Advertising Video Experience */}
        <FeaturedProductVideoSection 
          onOpenEnquiry={onOpenEnquiry}
          onOpenConfigurator={onOpenConfigurator}
        />

        {/* 3. Customer-First Featured Products & Collections */}
        <div id="featured-collections">
          <FeaturedProductsSection onOpenEnquiry={onOpenEnquiry} />
        </div>

        {/* 3. Why Choose Pure Ilavam Panchu? (Comparison vs Foam) */}
        <WhyPanchuSection />

        {/* 4. Custom Cot & Heritage Tailoring Guide (Antique Beds, Swings & Diwans) */}
        <CustomCotGuideSection onOpenEnquiry={onOpenEnquiry} />

        {/* 5. Interactive Bed Configurator */}
        <div id="configurator">
          <InteractiveConfigurator onOpenEnquiry={onOpenEnquiry} />
        </div>

        {/* 6. Customer Decision FAQ */}
        <CustomerFaqSection />

        {/* 7. Direct Workshop Contact & Closing CTA */}
        <ClosingCtaSection onOpenEnquiry={onOpenEnquiry} />
      </main>
    </PageWrapper>
  );
}
