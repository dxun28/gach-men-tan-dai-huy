import React from 'react';
import { MapPin, Phone, Facebook, Youtube, Send } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const quickLinks = [
    { label: 'Trang chủ', action: 'home' },
    { label: 'Giới thiệu', action: 'about' }
  ];

  return (
    <footer className="bg-gray-800 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h5 className="text-lg font-bold text-yellow-500 uppercase mb-6 tracking-wide">
              {COMPANY_INFO.name}
            </h5>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Chuyên cung cấp các loại gạch men, gạch granite, thiết bị vệ sinh, phụ kiện nhà bếp chính hãng, giá rẻ nhất thị trường.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary flex-shrink-0" size={18} />
                <span className="font-semibold text-white tracking-wide">{COMPANY_INFO.hotline}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-bold text-white mb-6">Liên kết nhanh</h5>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button 
                    onClick={() => {
                      onNavigate(link.action);
                      window.scrollTo(0, 0);
                    }}
                    className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2 group focus:outline-none"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full group-hover:bg-secondary transition-colors"></span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h5 className="text-lg font-bold text-white mb-6">Kết nối</h5>
            <div className="flex gap-4 mb-8">
              <a href="#" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors transform hover:-translate-y-1">
                <Facebook size={20} />
              </a>
              <a href={COMPANY_INFO.zaloLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zalo flex items-center justify-center text-white hover:bg-blue-700 transition-colors transform hover:-translate-y-1 font-bold text-xs">
                Zalo
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white hover:bg-red-700 transition-colors transform hover:-translate-y-1">
                <Youtube size={20} />
              </a>
            </div>
            
            <p className="text-gray-400 mb-4 text-sm">Đăng ký nhận báo giá mới nhất:</p>
            <div className="flex relative">
              <input 
                type="email" 
                placeholder="Email của bạn" 
                className="w-full bg-gray-700 border border-gray-600 text-white px-4 py-2.5 rounded-l-lg focus:outline-none focus:border-secondary text-sm"
              />
              <button className="bg-secondary text-white px-5 py-2.5 rounded-r-lg hover:bg-orange-600 transition-colors font-semibold">
                Gửi
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Congtythuandaihuy.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
