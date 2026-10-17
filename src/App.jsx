import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { LanguageProvider } from './context/LanguageContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import EnquiryModal from './components/enquiry/EnquiryModal';
import WhatsAppFloatingButton from './components/enquiry/WhatsAppFloatingButton';
import ScrollToTop from './components/common/ScrollToTop';

import HomePage from './pages/HomePage';
import MattressesPage from './pages/MattressesPage';
import PillowsPage from './pages/PillowsPage';
import BabyNurseryPage from './pages/BabyNurseryPage';
import FoldableCollectionPage from './pages/FoldableCollectionPage';
import CustomProductsPage from './pages/CustomProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function AnimatedRoutes({ onOpenEnquiry, onOpenConfigurator }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={<HomePage onOpenEnquiry={onOpenEnquiry} onOpenConfigurator={onOpenConfigurator} />} 
        />
        <Route 
          path="/mattresses" 
          element={<MattressesPage onOpenEnquiry={onOpenEnquiry} />} 
        />
        <Route 
          path="/pillows" 
          element={<PillowsPage onOpenEnquiry={onOpenEnquiry} />} 
        />
        <Route 
          path="/baby-nursery" 
          element={<BabyNurseryPage onOpenEnquiry={onOpenEnquiry} />} 
        />
        <Route 
          path="/foldable" 
          element={<FoldableCollectionPage onOpenEnquiry={onOpenEnquiry} />} 
        />
        <Route 
          path="/custom" 
          element={<CustomProductsPage onOpenEnquiry={onOpenEnquiry} />} 
        />
        <Route 
          path="/product/:productId" 
          element={<ProductDetailPage onOpenEnquiry={onOpenEnquiry} />} 
        />
        <Route 
          path="/about" 
          element={<AboutPage onOpenEnquiry={onOpenEnquiry} />} 
        />
        <Route 
          path="/contact" 
          element={<ContactPage />} 
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedEnquiryProduct, setSelectedEnquiryProduct] = useState(null);
  const [selectedEnquiryConfig, setSelectedEnquiryConfig] = useState(null);

  const handleOpenEnquiry = (product = null, config = null) => {
    setSelectedEnquiryProduct(product);
    setSelectedEnquiryConfig(config);
    setEnquiryModalOpen(true);
  };

  const handleOpenConfigurator = () => {
    const configuratorEl = document.getElementById('configurator');
    if (configuratorEl) {
      configuratorEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#configurator';
    }
  };

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-[#F7F4EE] text-[#302820] font-sans antialiased">
          
          {/* Navigation Bar */}
          <Header 
            onOpenEnquiry={handleOpenEnquiry}
            onOpenConfigurator={handleOpenConfigurator}
          />

          {/* Dynamic Animated Page Routes */}
          <div className="flex-1">
            <AnimatedRoutes 
              onOpenEnquiry={handleOpenEnquiry} 
              onOpenConfigurator={handleOpenConfigurator} 
            />
          </div>

          {/* Global Footer */}
          <Footer onOpenEnquiry={handleOpenEnquiry} />

          {/* Universal Modals & Floating Tools */}
          <EnquiryModal 
            isOpen={enquiryModalOpen}
            onClose={() => setEnquiryModalOpen(false)}
            initialProduct={selectedEnquiryProduct}
            initialConfig={selectedEnquiryConfig}
          />

          <WhatsAppFloatingButton />

        </div>
      </Router>
    </LanguageProvider>
  );
}
