import React from 'react';
import { ShoppingBasket, Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <span className="text-3xl font-bold tracking-tighter flex items-center gap-2">
              <ShoppingBasket className="text-primary h-8 w-8" />
              ZEN<span className="text-primary">BILE</span>
            </span>
            <p className="text-background/70 leading-relaxed">
              Bridging the gap between traditional Ethiopian markets and the modern digital world. Zenbile is your gateway to authentic Ethiopian quality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary/20 transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary/20 transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary/20 transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-background/70 hover:text-primary hover:underline transition-all duration-300">Shop All Categories</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary hover:underline transition-all duration-300">Artisans & Sellers</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary hover:underline transition-all duration-300">Shipping Information</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary hover:underline transition-all duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary hover:underline transition-all duration-300">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Shop by Category</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-background/70 hover:text-primary hover:underline transition-all duration-300">Premium Bunna (Coffee)</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary hover:underline transition-all duration-300">Habesha Textiles</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary hover:underline transition-all duration-300">Authentic Spices</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary hover:underline transition-all duration-300">Hand-Woven Mesobs</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary hover:underline transition-all duration-300">Modern Fashion</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Get in Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                <span className="text-background/70">Bole District, Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-background/70">+251 911 00 00 00</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-background/70">hello@zenbile.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Zenbile Digital Market. All rights reserved.
          </p>
          <div className="flex gap-4">
             <span className="px-3 py-1 bg-white/10 rounded text-xs font-bold tracking-wider opacity-60">VISA</span>
             <span className="px-3 py-1 bg-white/10 rounded text-xs font-bold tracking-wider opacity-60">Mastercard</span>
             <span className="px-3 py-1 bg-white/10 rounded text-xs font-bold tracking-wider opacity-60">Telebirr</span>
             <span className="px-3 py-1 bg-white/10 rounded text-xs font-bold tracking-wider opacity-60">CBE Birr</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
