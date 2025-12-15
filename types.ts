import React from 'react';

export interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  isNew?: boolean;
}

export interface Category {
  id: number;
  name: string;
  icon: React.ReactNode;
  colorClass: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}