"use client";
import { useState } from "react";
import { ShoppingCart, Menu, X, Search, User } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl font-extrabold text-indigo-600 tracking-tight">
              Toby&apos;s Shop
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#categories" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Categories</a>
            <a href="#products" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Products</a>
            <a href="#deals" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Deals</a>
            <a href="#about" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">About</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-1 text-gray-500 hover:text-indigo-600 transition-colors">
              <Search size={20} />
            </button>
            <button className="text-gray-500 hover:text-indigo-600 transition-colors">
              <User size={20} />
            </button>
            <button className="relative text-gray-500 hover:text-indigo-600 transition-colors">
              <ShoppingCart size={20} />
              <span className="absolute -top-1.5 -right-1.5 bg-indigo-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </button>
            <button
              className="md:hidden text-gray-500"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          <a href="#categories" className="text-sm font-medium text-gray-700 hover:text-indigo-600" onClick={() => setMenuOpen(false)}>Categories</a>
          <a href="#products" className="text-sm font-medium text-gray-700 hover:text-indigo-600" onClick={() => setMenuOpen(false)}>Products</a>
          <a href="#deals" className="text-sm font-medium text-gray-700 hover:text-indigo-600" onClick={() => setMenuOpen(false)}>Deals</a>
          <a href="#about" className="text-sm font-medium text-gray-700 hover:text-indigo-600" onClick={() => setMenuOpen(false)}>About</a>
        </div>
      )}
    </header>
  );
}
