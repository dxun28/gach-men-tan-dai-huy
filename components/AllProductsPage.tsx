import React, { useState, useEffect } from 'react';
import { Search, ChevronRight, Filter, Check, ChevronLeft } from 'lucide-react';
import { ProductCard } from './ProductList';
import { PRODUCTS, NAV_ITEMS } from '../constants';
import { Product, NavItem } from '../types';

interface AllProductsPageProps {
  initialCategory?: string;
}

const AllProductsPage: React.FC<AllProductsPageProps> = ({ initialCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả sản phẩm');
  const [displayProducts, setDisplayProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  // Số lượng sản phẩm mỗi trang là 9
  const itemsPerPage = 9;
  
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const productCategories = NAV_ITEMS.filter(item => !['Trang chủ', 'Báo giá', 'Liên hệ'].includes(item.label));

  // --- Logic Helper ---
  const getPathToCategory = (items: NavItem[], target: string, path: string[] = []): string[] | null => {
    for (const item of items) {
      if (item.label === target) {
        return [...path, item.label];
      }
      if (item.children) {
        const found = getPathToCategory(item.children, target, [...path, item.label]);
        if (found) return found;
      }
    }
    return null;
  };

  const getAllChildCategories = (navItems: NavItem[], parentLabel: string): string[] => {
    let categories: string[] = [];
    
    const findAndCollect = (items: NavItem[]) => {
      for (const item of items) {
        if (item.label === parentLabel) {
           if (item.children) {
             collectAll(item.children);
           }
           return true; 
        } else if (item.children) {
           const found = findAndCollect(item.children);
           if (found) return true;
        }
      }
      return false;
    };

    const collectAll = (items: NavItem[]) => {
      items.forEach(c => {
        categories.push(c.label);
        if (c.children) collectAll(c.children);
      });
    };

    findAndCollect(navItems);
    return categories;
  };

  // --- Effects ---
  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
      setCurrentPage(1);
      const path = getPathToCategory(NAV_ITEMS, initialCategory);
      if (path) {
        const newExpanded: Record<string, boolean> = {};
        path.forEach(p => newExpanded[p] = true);
        setExpandedCategories(newExpanded);
      }
    } else {
        setExpandedCategories({});
    }
  }, [initialCategory]);

  useEffect(() => {
    let filtered: Product[] = [];
    
    // 1. Filter by Category
    if (selectedCategory === 'Tất cả sản phẩm') {
      filtered = [...PRODUCTS];
    } else {
      const childCategories = getAllChildCategories(NAV_ITEMS, selectedCategory);
      // Include the selected category itself
      const categoriesToMatch = [selectedCategory, ...childCategories];
      
      // Use exact match to avoid "Gạch 80x80" matching "Gạch 80x80 VN" partially
      filtered = PRODUCTS.filter(p => categoriesToMatch.includes(p.category));
    }

    // 2. Filter by Search Term
    if (searchTerm.trim() !== '') {
        const lowerTerm = searchTerm.toLowerCase();
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(lowerTerm) || 
            p.category.toLowerCase().includes(lowerTerm)
        );
    }

    // 3. Shuffle the filtered results (Fisher-Yates Shuffle)
    // We shuffle filtering to satisfy the requirement of random display on category click
    for (let i = filtered.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
    }
    
    setDisplayProducts(filtered);
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  // --- Pagination Data ---
  const totalPages = Math.ceil(displayProducts.length / itemsPerPage);
  const currentProducts = displayProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const startRange = displayProducts.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endRange = Math.min(currentPage * itemsPerPage, displayProducts.length);

  // --- Handlers ---
  const toggleCategoryExpand = (label: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setExpandedCategories(prev => ({ ...prev, [label]: !prev[label] }));
  };

  const handleCategoryClick = (categoryName: string, hasChildren: boolean = false) => {
    setSelectedCategory(categoryName);
    setCurrentPage(1); 
    setSearchTerm(''); // Clear search on category change
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (categoryName === 'Tất cả sản phẩm') {
        setExpandedCategories({});
        return;
    }
    const path = getPathToCategory(NAV_ITEMS, categoryName);
    if (path) {
        const newExpanded: Record<string, boolean> = {};
        path.forEach(cat => newExpanded[cat] = true);
        setExpandedCategories(newExpanded);
    }
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const CheckMark = () => <Check size={16} className="text-primary ml-auto font-bold" strokeWidth={3} />;

  // --- Render Pagination Buttons (Smart Logic) ---
  const renderPaginationButtons = () => {
    const pageNumbers = [];
    
    if (totalPages <= 7) {
        // Nếu ít trang, hiện tất cả
        for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
    } else {
        // Luôn hiện trang 1
        pageNumbers.push(1);

        if (currentPage > 3) {
            pageNumbers.push('...');
        }

        // Tính khoảng giữa
        let start = Math.max(2, currentPage - 1);
        let end = Math.min(totalPages - 1, currentPage + 1);

        // Điều chỉnh nếu đang ở đầu hoặc cuối danh sách
        if (currentPage <= 3) {
            start = 2;
            end = 4;
        } else if (currentPage >= totalPages - 2) {
            start = totalPages - 3;
            end = totalPages - 1;
        }

        for (let i = start; i <= end; i++) {
            pageNumbers.push(i);
        }

        if (currentPage < totalPages - 2) {
            pageNumbers.push('...');
        }

        // Luôn hiện trang cuối
        pageNumbers.push(totalPages);
    }

    return (
        <div className="flex justify-center mt-12 gap-2 flex-wrap">
            {/* Nút Prev */}
            <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 transition-colors ${
                    currentPage === 1 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-primary hover:border-primary'
                }`}
            >
                <ChevronLeft size={16} />
            </button>

            {/* Các nút số */}
            {pageNumbers.map((page, index) => (
                <React.Fragment key={index}>
                    {page === '...' ? (
                        <span className="w-10 h-10 flex items-center justify-center text-gray-400 font-bold">...</span>
                    ) : (
                        <button
                            onClick={() => handlePageChange(page as number)}
                            className={`w-10 h-10 flex items-center justify-center rounded-full font-bold transition-all transform hover:-translate-y-1 ${
                            currentPage === page
                                ? 'bg-primary text-white shadow-md shadow-blue-200 border border-primary'
                                : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-primary hover:text-primary'
                            }`}
                        >
                            {page}
                        </button>
                    )}
                </React.Fragment>
            ))}

            {/* Nút Next */}
            <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 transition-colors ${
                    currentPage === totalPages 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-primary hover:border-primary'
                }`}
            >
                <ChevronRight size={16} />
            </button>
        </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6 flex items-center">
        <span className="cursor-pointer hover:text-primary">Trang chủ</span>
        <ChevronRight size={14} className="mx-2" />
        <span 
          className="cursor-pointer hover:text-primary"
          onClick={() => handleCategoryClick('Tất cả sản phẩm')}
        >
          Sản phẩm
        </span>
        {selectedCategory !== 'Tất cả sản phẩm' && (
          <>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-gray-800 font-semibold">{selectedCategory}</span>
          </>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar */}
        <aside className="w-full lg:w-1/4 flex-shrink-0">
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm sticky top-24">
            
            {/* Search Section */}
            <div className="mb-8">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2 uppercase text-sm tracking-wider">
                <Search size={18} className="text-primary" />
                Tìm kiếm sản phẩm
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Nhập tên gạch, thiết bị..."
                  className="w-full pl-3 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary">
                  <Search size={18} />
                </button>
              </div>
            </div>

            <hr className="my-6 border-gray-100" />

            {/* Categories Section */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2 uppercase text-sm tracking-wider">
                <Filter size={18} className="text-primary" />
                Danh mục sản phẩm
              </h3>
              
              <div className="space-y-1">
                <div 
                  className={`flex items-center py-2 px-2 rounded cursor-pointer transition-colors ${selectedCategory === 'Tất cả sản phẩm' ? 'bg-blue-50 text-primary font-semibold' : 'text-gray-700 hover:text-primary hover:bg-gray-50'}`}
                  onClick={() => handleCategoryClick('Tất cả sản phẩm')}
                >
                  <span className="text-sm">Tất cả sản phẩm</span>
                  {selectedCategory === 'Tất cả sản phẩm' && <CheckMark />}
                </div>

                {productCategories.map((item) => (
                  <div key={item.label}>
                    <div 
                      className={`flex justify-between items-center py-2 px-2 rounded cursor-pointer transition-colors ${selectedCategory === item.label ? 'bg-blue-50 text-primary font-semibold' : 'text-gray-700 hover:text-primary hover:bg-gray-50'}`}
                      onClick={() => handleCategoryClick(item.label, !!item.children)}
                    >
                      <span className="text-sm">{item.label}</span>
                      <div className="flex items-center gap-2">
                         {selectedCategory === item.label && <CheckMark />}
                         {item.children && (
                          <div onClick={(e) => toggleCategoryExpand(item.label, e)} className="p-1 hover:bg-gray-200 rounded">
                             <ChevronRight 
                              size={14} 
                              className={`transform transition-transform duration-200 text-gray-400 ${expandedCategories[item.label] ? 'rotate-90' : ''}`} 
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {item.children && expandedCategories[item.label] && (
                      <div className="ml-2 pl-2 border-l-2 border-gray-100 space-y-1 mt-1 mb-2">
                        {item.children.map(sub => (
                          <div key={sub.label}>
                              <div 
                                className={`flex justify-between items-center py-2 px-2 rounded cursor-pointer transition-colors ${selectedCategory === sub.label ? 'bg-blue-50 text-primary font-semibold' : 'text-gray-500 hover:text-primary hover:bg-gray-50'}`}
                                onClick={() => handleCategoryClick(sub.label, !!sub.children)}
                              >
                                <span className="text-sm">{sub.label}</span>
                                <div className="flex items-center gap-2">
                                    {selectedCategory === sub.label && <CheckMark />}
                                    {sub.children && (
                                        <div onClick={(e) => toggleCategoryExpand(sub.label, e)} className="p-1 hover:bg-gray-200 rounded">
                                            <ChevronRight 
                                                size={14} 
                                                className={`transform transition-transform duration-200 text-gray-400 ${expandedCategories[sub.label] ? 'rotate-90' : ''}`} 
                                            />
                                        </div>
                                    )}
                                </div>
                              </div>
                              {sub.children && expandedCategories[sub.label] && (
                                  <div className="ml-2 pl-2 border-l-2 border-gray-200 space-y-1 mt-1 mb-2">
                                      {sub.children.map(grandChild => (
                                          <div 
                                            key={grandChild.label}
                                            className={`flex items-center py-2 px-2 rounded cursor-pointer transition-colors ${selectedCategory === grandChild.label ? 'bg-blue-50 text-primary font-semibold' : 'text-gray-500 hover:text-primary hover:bg-gray-50'}`}
                                            onClick={() => handleCategoryClick(grandChild.label)}
                                          >
                                            <span className="text-sm">{grandChild.label}</span>
                                            {selectedCategory === grandChild.label && <CheckMark />}
                                          </div>
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
            </div>
          </div>
        </aside>

        {/* Right Content - Product Grid */}
        <main className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 border-b border-gray-200 pb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{selectedCategory}</h1>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                <span className="font-medium">Trang {currentPage} / {totalPages > 0 ? totalPages : 1}</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span>Hiển thị <span className="font-medium text-gray-900">{startRange}-{endRange}</span> trên tổng <span className="font-bold text-primary">{displayProducts.length}</span> kết quả</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Sắp xếp:</span>
              <select className="border border-gray-300 rounded p-1 focus:outline-none focus:border-primary">
                <option>Ngẫu nhiên</option>
                <option>Mới nhất</option>
                <option>Giá thấp đến cao</option>
                <option>Giá cao đến thấp</option>
              </select>
            </div>
          </div>

          {displayProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
             <div className="text-center py-12 text-gray-500 bg-white rounded-lg border border-gray-100">
                <p>Chưa có sản phẩm nào trong danh mục này.</p>
                <button 
                  onClick={() => handleCategoryClick('Tất cả sản phẩm')}
                  className="mt-4 text-primary font-semibold hover:underline"
                >
                  Xem tất cả sản phẩm
                </button>
             </div>
          )}

          {/* Render Pagination if needed */}
          {totalPages > 1 && renderPaginationButtons()}
        </main>
      </div>
    </div>
  );
};

export default AllProductsPage;