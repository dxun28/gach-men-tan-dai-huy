import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import AllProductsPage from './components/AllProductsPage';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'products' | 'about'>('home');
  const [targetCategory, setTargetCategory] = useState<string | undefined>(undefined);

  const handleNavigate = (view: string) => {
    if (view === 'home') {
      setCurrentView('home');
      setTargetCategory(undefined);
      window.scrollTo(0, 0);
    } else if (view === 'products') {
      setCurrentView('products');
      // If just navigating to products generally, reset to "All" (undefined causes AllProductsPage to stick to current or default)
      // Here we explicitly want to show "All" if user clicked navbar "Products" (which doesn't exist anymore but kept for logic safety)
      setTargetCategory('Tất cả sản phẩm');
      window.scrollTo(0, 0);
    } else if (view === 'about') {
      setCurrentView('about');
      setTargetCategory(undefined);
      window.scrollTo(0, 0);
    }
  };

  const handleCategorySelect = (category: string) => {
    setTargetCategory(category);
    setCurrentView('products');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navbar onNavigate={handleNavigate} onCategoryClick={handleCategorySelect} />
      
      <main className="flex-grow bg-gray-50">
        {currentView === 'home' && (
          <>
            <Hero />
            <CategoryList onCategoryClick={handleCategorySelect} />
            <div className="bg-gray-50 border-t border-gray-200">
              <ProductList onViewAll={() => handleNavigate('products')} />
            </div>
          </>
        )}
        
        {currentView === 'products' && (
          <AllProductsPage initialCategory={targetCategory} />
        )}

        {currentView === 'about' && (
          <AboutPage />
        )}
      </main>
      
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;