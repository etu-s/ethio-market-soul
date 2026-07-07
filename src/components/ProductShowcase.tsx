import React from 'react';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const featuredProducts = [
  {
    id: 1,
    name: 'Yirgacheffe Special Reserve',
    category: 'Bunna',
    price: 'ETB 1,200',
    rating: 4.9,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/c38a91ed-b8aa-4941-95e8-54c870ffb3fb/ethiopian-coffee-e8b8f7f8-1783420347578.webp',
    tag: 'Best Seller'
  },
  {
    id: 2,
    name: 'Traditional Mesob Basket',
    category: 'Crafts',
    price: 'ETB 3,500',
    rating: 4.8,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/c38a91ed-b8aa-4941-95e8-54c870ffb3fb/ethiopian-handicrafts-05e1eba3-1783420347478.webp',
    tag: 'Handmade'
  },
  {
    id: 3,
    name: 'Habesha Kemis Scarf',
    category: 'Textiles',
    price: 'ETB 1,800',
    rating: 4.7,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/c38a91ed-b8aa-4941-95e8-54c870ffb3fb/ethiopian-textiles-af684b77-1783420347262.webp',
    tag: 'Authentic'
  },
  {
    id: 4,
    name: 'Organic Berbere Spice Blend',
    category: 'Spices',
    price: 'ETB 450',
    rating: 5.0,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/c38a91ed-b8aa-4941-95e8-54c870ffb3fb/ethiopian-spices-05fcfc7b-1783420347578.webp',
    tag: 'Chef Choice'
  }
];

const ProductShowcase = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 text-center md:text-left">Featured Treasures</h2>
            <p className="text-lg text-muted-foreground max-w-xl text-center md:text-left">
              Hand-picked selections that represent the very best of Ethiopian culture and quality.
            </p>
          </div>
          <Button variant="outline" className="font-bold border-2">View All Products</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group flex flex-col h-full bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Button variant="secondary" size="icon" className="absolute top-4 right-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <Heart className="h-4 w-4" />
                </Button>
                {product.tag && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground font-bold">
                    {product.tag}
                  </Badge>
                )}
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-secondary uppercase tracking-widest">{product.category}</span>
                  <div className="flex items-center gap-1 text-sm font-bold">
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    {product.rating}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-1">{product.name}</h3>
                
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xl font-black text-foreground">{product.price}</span>
                  <Button size="sm" className="font-bold">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
