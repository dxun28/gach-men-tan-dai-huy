import React, { useMemo } from 'react';
import { MessageCircle } from 'lucide-react';
import { PRODUCTS, COMPANY_INFO } from '../constants';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      {/* Added bg-gray-100 for better appearance while loading or transparent images */}
      <div className="relative overflow-hidden h-48 sm:h-56 bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
        />
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded shadow-sm z-10">
            Mới
          </div>
        )}
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="text-xs text-gray-500 mb-1 font-medium uppercase tracking-wide">
          {product.category}
        </div>
        <h3 className="text-gray-800 font-semibold mb-3 line-clamp-2 min-h-[3rem] group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <div className="mt-auto pt-3">
          <a 
            href={COMPANY_INFO.zaloLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-zalo hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <MessageCircle size={18} fill="white" />
            <span>Liên hệ Zalo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

interface ProductListProps {
  onViewAll?: () => void;
}

const ProductList: React.FC<ProductListProps> = ({ onViewAll }) => {
  // Use useMemo to shuffle products only once on mount to prevent re-shuffling on every render
  const randomProducts = useMemo(() => {
    // Create a copy of the array to avoid mutating the original
    const shuffled = [...PRODUCTS];
    
    // Fisher-Yates Shuffle Algorithm
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    // Return the first 8 items
    return shuffled.slice(0, 8);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 mb-12">
      <div className="flex items-center gap-4 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 uppercase relative">
          Sản Phẩm Mới Nhất
          <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
        </h3>
        <div className="flex-grow h-px bg-gray-200 mt-2"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {randomProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-12">
        <button 
          onClick={onViewAll}
          className="bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100"
        >
          Xem tất cả sản phẩm
        </button>
      </div>
    </div>
  );
};

export default ProductList;