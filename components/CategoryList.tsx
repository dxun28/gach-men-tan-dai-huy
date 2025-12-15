import React from 'react';
import { CATEGORIES } from '../constants';

interface CategoryListProps {
  onCategoryClick: (categoryName: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({ onCategoryClick }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-center text-3xl font-bold uppercase mb-8 text-gray-800">
        Danh Mục Phổ Biến
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {CATEGORIES.map((cat) => (
          <div 
            key={cat.id} 
            onClick={() => onCategoryClick(cat.name)}
            className="group cursor-pointer bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className={`transform group-hover:scale-110 transition-transform duration-300`}>
              {cat.icon}
            </div>
            <h5 className="font-semibold text-gray-800 mt-2 group-hover:text-primary transition-colors">
              {cat.name}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;