import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const TopBar: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-600 text-sm py-2 border-b border-gray-200">
      <div className="container mx-auto px-4 d-flex flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <Phone size={14} className="text-primary" />
          <span>Hotline: <span className="font-semibold text-gray-800">{COMPANY_INFO.hotline}</span></span>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={14} className="text-primary" />
          <span>{COMPANY_INFO.email}</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
