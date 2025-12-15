import React, { useState } from 'react';
import { Search, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  onNavigate: (page: string) => void;
  onCategoryClick: (category: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, onCategoryClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Reset states when closing/opening main menu
    if (isOpen) {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    }
  };
  
  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    } else {
      setActiveDropdown(label);
      setActiveSubDropdown(null);
    }
  };

  const toggleSubDropdown = (label: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering parent click
    if (activeSubDropdown === label) {
      setActiveSubDropdown(null);
    } else {
      setActiveSubDropdown(label);
    }
  };

  const handleNavItemClick = (e: React.MouseEvent, itemLabel: string, href: string) => {
    e.preventDefault();
    if (itemLabel === 'Trang chủ') {
      onNavigate('home');
      setIsOpen(false);
    } else if (itemLabel === 'Báo giá') {
       // Optional: Navigate to a quote page or just scroll
       setIsOpen(false);
    } else {
      // It's a category
      onCategoryClick(itemLabel);
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <span className="text-2xl font-bold text-primary">
              Gạch Men <span className="text-secondary">Tân Đại Huy</span>
            </span>
          </div>

          {/* Desktop Menu - Updated for alignment and size */}
          <div className="hidden lg:flex items-center space-x-5 ml-auto mr-6">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative group/level1">
                <a 
                  href={item.href}
                  onClick={(e) => handleNavItemClick(e, item.label, item.href)}
                  className="text-gray-700 hover:text-primary font-medium py-2 flex items-center gap-1 transition-colors text-sm whitespace-nowrap"
                >
                  {item.label}
                  {item.children && <ChevronDown size={14} />}
                </a>
                
                {/* Level 1 Dropdown */}
                {item.children && (
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover/level1:opacity-100 group-hover/level1:visible transition-all duration-300 transform origin-top-left z-50 border-t-2 border-primary">
                    {item.children.map((child) => (
                      <div key={child.label} className="relative group/level2">
                        <a 
                          href={child.href}
                          onClick={(e) => {
                            if (!child.children) {
                                e.preventDefault();
                                onCategoryClick(child.label);
                            } else {
                                e.preventDefault();
                                onCategoryClick(child.label);
                            }
                          }}
                          className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                        >
                          <span>{child.label}</span>
                          {child.children && <ChevronRight size={14} />}
                        </a>

                        {/* Level 2 Dropdown (Submenu) */}
                        {child.children && (
                            <div className="absolute left-full top-0 w-48 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover/level2:opacity-100 group-hover/level2:visible transition-all duration-300 transform origin-top-left z-50 border-t-2 border-primary ml-1">
                                {child.children.map((grandChild) => (
                                    <a 
                                        key={grandChild.label}
                                        href={grandChild.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            onCategoryClick(grandChild.label);
                                        }}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                                    >
                                        {grandChild.label}
                                    </a>
                                ))}
                            </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm sản phẩm..."
                className="pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm w-48 xl:w-64 transition-shadow"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 bg-primary text-white rounded-full hover:bg-blue-700 transition-colors">
                <Search size={16} />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-2 space-y-1 overflow-y-auto max-h-[80vh]">
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              <div className="flex justify-between items-center border-b border-gray-50 last:border-0">
                <a
                  href={item.href}
                  onClick={(e) => handleNavItemClick(e, item.label, item.href)}
                  className="block py-3 text-base font-medium text-gray-700 hover:text-primary w-full"
                >
                  {item.label}
                </a>
                {item.children && (
                  <button 
                    onClick={() => toggleDropdown(item.label)}
                    className="p-3 text-gray-500 hover:text-primary focus:outline-none"
                  >
                    <ChevronDown 
                      size={20} 
                      className={`transform transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                    />
                  </button>
                )}
              </div>
              
              {/* Level 1 Mobile Dropdown */}
              {item.children && activeDropdown === item.label && (
                <div className="bg-gray-50 pl-4 py-2 space-y-2">
                  {item.children.map((child) => (
                    <div key={child.label}>
                        <div className="flex justify-between items-center pr-2">
                             <a
                                href={child.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    onCategoryClick(child.label);
                                    if (!child.children) setIsOpen(false);
                                }}
                                className="block py-2 text-sm text-gray-600 hover:text-primary flex-grow"
                            >
                                {child.label}
                            </a>
                            {child.children && (
                                <button 
                                    onClick={(e) => toggleSubDropdown(child.label, e)}
                                    className="p-2 text-gray-500 hover:text-primary focus:outline-none"
                                >
                                    <ChevronDown 
                                        size={16} 
                                        className={`transform transition-transform ${activeSubDropdown === child.label ? 'rotate-180' : ''}`}
                                    />
                                </button>
                            )}
                        </div>

                        {/* Level 2 Mobile Dropdown */}
                        {child.children && activeSubDropdown === child.label && (
                            <div className="bg-gray-100 pl-4 py-1 space-y-1 border-l-2 border-gray-200 ml-2">
                                {child.children.map(grandChild => (
                                    <a
                                        key={grandChild.label}
                                        href={grandChild.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            onCategoryClick(grandChild.label);
                                            setIsOpen(false);
                                        }}
                                        className="block py-2 text-sm text-gray-500 hover:text-primary"
                                    >
                                        {grandChild.label}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          {/* Mobile Search */}
          <div className="pt-4 pb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm sản phẩm..."
                className="w-full pl-4 pr-12 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 text-primary hover:text-blue-700">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;