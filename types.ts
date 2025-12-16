import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface ProductFeature {
  title: string;
  description?: string;
}

export interface Tariff {
  category: string;
  rate: string;
}

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  features: string[];
  tariffs?: Tariff[];
  extraInfo?: string;
}

export interface Value {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface InfoSection {
  id: string;
  title: string;
  content: React.ReactNode; // Flexible content for complex info pages
  icon?: LucideIcon;
}