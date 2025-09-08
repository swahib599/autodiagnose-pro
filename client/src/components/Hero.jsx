import React from 'react';

const Hero = () => {
  return (
    <section className="hero bg-gradient-to-r from-petrol-blue to-oil-black text-white py-20 text-center">
      <div className="container">
        <div className="hero-content max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-shell-yellow to-shell-red bg-clip-text text-transparent">
            Professional Mobile Automotive Diagnostics
          </h2>
          <p className="text-xl mb-8">
            Expert vehicle diagnosis at your doorstep. No need to visit a workshop - we come to you with advanced tools and expertise for all car brands.
          </p>
          <a href="#booking" className="cta-button inline-block">Book an Appointment</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;