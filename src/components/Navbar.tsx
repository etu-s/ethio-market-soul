import React, { useState } from 'react';
import { Search, ShoppingBasket, Menu, X, Globe, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-foreground tracking-tighter flex items-center gap-2">
              <ShoppingBasket className="text-secondary h-8 w-8" />
              ZEN<span className="text-primary">BILE</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground/80 hover:text-primary transition-colors font-medium">Categories</a>
            <a href="#" className="text-foreground/80 hover:text-primary transition-colors font-medium">New Arrivals</a>
            <a href="#" className="text-foreground/80 hover:text-primary transition-colors font-medium">Zenbile Store</a>
            <a href="#" className="text-foreground/80 hover:text-primary transition-colors font-medium">Deals</a>
          </div>

          {/* Search & Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="bg-muted border-none rounded-full py-1.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary w-64 transition-all"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            <Button variant="ghost" size="icon" className="text-foreground/80">
              <Globe className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground/80">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="secondary" className="font-bold relative">
              <ShoppingBasket className="h-5 w-5 mr-2" />
              Cart
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border animate-in slide-in-from-top duration-300">
          <div className="px-5 pt-4 pb-2">
            <div className="relative">
              <input type="text" placeholder="Search products..." className="w-full bg-muted border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary" />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted">Categories</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted">New Arrivals</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted">Zenbile Store</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted">Deals</a>
          </div>
          <div className="pt-4 pb-3 border-t border-border">
            <div className="flex items-center px-5 space-x-4">
              <Button variant="outline" className="flex-1">Sign In</Button>
              <Button variant="secondary" className="flex-1 font-bold">Cart (0)</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
