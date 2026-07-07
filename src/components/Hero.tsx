import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative min-h-[85vh] flex items-center overflow-hidden bg-background">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 skew-x-12 translate-x-32 z-0" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/20 text-secondary font-semibold text-sm mb-6 border border-secondary/30">
              <span className="mr-2">✨</span> The Modern Digital Gebeya
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-foreground leading-[1.1] mb-6">
              Bringing the Heart of the <span className="text-primary">Market</span> to Your Door
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Zenbile connects you with authentic Ethiopian craftsmanship, from the finest coffee beans to hand-woven textiles. Experience the vibrant spirit of our local market anywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 text-lg font-bold shadow-lg shadow-primary/20">
                Explore Market <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold">
                View Collections
              </Button>
            </div>
            
            <div className="mt-12 flex flex-wrap items-center gap-4 sm:gap-8 border-t border-border pt-8">
              <div>
                <p className="text-2xl font-bold text-foreground">10k+</p>
                <p className="text-sm text-muted-foreground">Authentic Products</p>
              </div>
              <div className="h-10 w-[1px] bg-border" />
              <div>
                <p className="text-2xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Local Artisans</p>
              </div>
              <div className="h-10 w-[1px] bg-border" />
              <div>
                <p className="text-2xl font-bold text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground">Local Delivery</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/c38a91ed-b8aa-4941-95e8-54c870ffb3fb/digital-gebeya-hero-e4a86ee2-1783420346589.webp"
                alt="Digital Gebeya Market"
                className="w-full h-full object-cover aspect-[4/5] lg:aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 w-full">
                  <div className="flex justify-between items-center text-white">
                    <div>
                      <p className="text-sm opacity-80 uppercase tracking-widest font-bold">Featured Stall</p>
                      <p className="text-xl font-bold">Highland Treasures</p>
                    </div>
                    <Button variant="secondary" size="sm" className="font-bold">
                      Visit Shop
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating UI Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl z-20 border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-lg text-primary">
                  <ShoppingBag className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-bold">Latest Order</p>
                  <p className="text-sm font-bold">Yirgacheffe Coffee</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
