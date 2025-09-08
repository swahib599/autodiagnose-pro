import React from 'react';

const Brands = () => {
  const brands = [
    { name: 'European', examples: 'Mercedes, BMW, Audi, VW', icon: 'fas fa-car' },
    { name: 'Japanese', examples: 'Toyota, Honda, Nissan', icon: 'fas fa-car' },
    { name: 'American', examples: 'Ford, Chevrolet, Dodge', icon: 'fas fa-car' },
    { name: 'Korean', examples: 'Hyundai, Kia', icon: 'fas fa-car' },
    { name: 'Chinese', examples: 'Great Wall, Geely', icon: 'fas fa-car' },
    { name: 'Indian', examples: 'Tata, Mahindra', icon: 'fas fa-car' }
  ];

  return (
    <section id="brands" className="brands py-16 bg-gradient-to-r from-petrol-blue to-oil-black text-white">
      <div className="container">
        <div className="section-title text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">We Specialize In All Car Brands</h2>
          <p className="max-w-2xl mx-auto">
            From European luxury to Japanese reliability, we have the expertise to diagnose any vehicle
          </p>
        </div>
        <div className="brands-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <div key={index} className="brand-item bg-white bg-opacity-10 p-6 rounded-lg text-center backdrop-blur-sm border border-white border-opacity-10 transition-transform duration-300 hover:-translate-y-1">
              <div className="brand-logo">
                <i className={brand.icon}></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">{brand.name}</h3>
              <p className="text-sm opacity-80">{brand.examples}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;