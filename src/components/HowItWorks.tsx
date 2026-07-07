import React from 'react';
import { MapPin, ShoppingCart, Truck, CreditCard } from 'lucide-react';

const steps = [
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: 'Choose Your Region',
    description: 'Select products from specific Ethiopian regions known for their unique specialties.'
  },
  {
    icon: <ShoppingCart className="h-6 w-6 text-secondary" />,
    title: 'Fill Your Zenbile',
    description: 'Add authentic items to your digital basket, directly supporting local artisans.'
  },
  {
    icon: <CreditCard className="h-6 w-6 text-accent" />,
    title: 'Secure Payment',
    description: 'Pay safely using local methods like Telebirr or international cards.'
  },
  {
    icon: <Truck className="h-6 w-6 text-primary" />,
    title: 'Direct Delivery',
    description: 'We handle the logistics from the source to your doorstep with care.'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">From Highland to Doorstep</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the simplest way to shop authentic Ethiopian products.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-background border-4 border-border flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 group-hover:border-primary">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                
                {/* Step Number Badge */}
                <div className="mt-4 px-3 py-1 bg-muted rounded-full text-xs font-black uppercase tracking-tighter opacity-50">
                  Step 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
