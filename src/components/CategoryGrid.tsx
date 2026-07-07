import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    title: 'Bunna (Coffee)',
    description: 'The birthplace of coffee. Rich, aromatic beans from Yirgacheffe and Sidamo.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/c38a91ed-b8aa-4941-95e8-54c870ffb3fb/ethiopian-coffee-e8b8f7f8-1783420347578.webp',
    color: 'bg-primary/10',
    count: '1.2k+ products'
  },
  {
    title: 'Shemma (Textiles)',
    description: 'Hand-woven Habesha cotton with traditional vibrant patterns.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/c38a91ed-b8aa-4941-95e8-54c870ffb3fb/ethiopian-textiles-af684b77-1783420347262.webp',
    color: 'bg-secondary/10',
    count: '850+ items'
  },
  {
    title: 'Shiro & Spices',
    description: 'Authentic Berbere, Shiro, and exotic spices from the heart of the market.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/c38a91ed-b8aa-4941-95e8-54c870ffb3fb/ethiopian-spices-05fcfc7b-1783420347578.webp',
    color: 'bg-accent/10',
    count: '420+ spices'
  },
  {
    title: 'Mesob & Crafts',
    description: 'Beautiful hand-woven baskets and traditional home decor.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/c38a91ed-b8aa-4941-95e8-54c870ffb3fb/ethiopian-handicrafts-05e1eba3-1783420347478.webp',
    color: 'bg-primary/5',
    count: '600+ crafts'
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">Explore the Gebeya</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the finest quality products sourced directly from local artisans and farmers across Ethiopia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`relative overflow-hidden rounded-2xl mb-4 transition-transform duration-500 group-hover:-translate-y-2 ${cat.color}`}>
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white flex items-center gap-2 font-bold">
                    Shop Now <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-secondary transition-colors">{cat.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{cat.count}</p>
              <p className="text-sm text-muted-foreground line-clamp-2">{cat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
