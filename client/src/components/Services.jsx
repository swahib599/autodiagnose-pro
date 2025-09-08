import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-search',
      title: 'Advanced Diagnostic Scanning',
      description: 'Complete system scan using professional-grade tools to identify issues in engine, transmission, ABS, airbag, and other systems.',
      price: 'From KSH 2,500',
      image: 'https://images.unsplash.com/photo-1603712610496-72e9fbf05b15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      icon: 'fas fa-battery-full',
      title: 'Battery & Electrical System Check',
      description: 'Comprehensive testing of your battery, alternator, and starter to prevent unexpected breakdowns.',
      price: 'From KSH 1,500',
      image: 'https://images.unsplash.com/photo-1603712610496-72e9fbf05b15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      icon: 'fas fa-tachometer-alt',
      title: 'Pre-Purchase Inspection',
      description: 'Thorough inspection of used vehicles before purchase to identify hidden problems and avoid costly surprises.',
      price: 'From KSH 3,500',
      image: 'https://images.unsplash.com/photo-1603712610496-72e9fbf05b15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  ];

  return (
    <section id="services" className="services py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="container">
        <div className="section-title text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-petrol-blue mb-4">Our Premium Services</h2>
          <p className="text-metal-gray max-w-2xl mx-auto">
            We provide comprehensive automotive diagnostic services right at your location with cutting-edge technology
          </p>
        </div>
        <div className="services-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-content p-6">
                <h3 className="text-xl font-bold text-petrol-blue mb-3">{service.title}</h3>
                <p className="text-metal-gray mb-4">{service.description}</p>
                <span className="service-price block text-shell-red text-lg font-bold mb-4">{service.price}</span>
                <a href="#booking" className="cta-button inline-block w-full text-center">Book This Service</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;