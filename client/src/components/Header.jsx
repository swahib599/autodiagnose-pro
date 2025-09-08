import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-petrol-blue to-oil-black text-white py-4 sticky top-0 z-50 shadow-lg">
      <div className="container flex justify-between items-center">
        <div className="logo flex items-center gap-3">
          <i className="fas fa-car text-3xl text-shell-yellow"></i>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-shell-yellow to-shell-red bg-clip-text text-transparent">
            AutoDiagnose Pro
          </h1>
        </div>
        <nav>
          <ul className="flex gap-6">
            <li><a href="#services" className="font-medium hover:text-shell-yellow transition-colors">Services</a></li>
            <li><a href="#brands" className="font-medium hover:text-shell-yellow transition-colors">Brands</a></li>
            <li><a href="#booking" className="font-medium hover:text-shell-yellow transition-colors">Book Now</a></li>
            <li><a href="#contact" className="font-medium hover:text-shell-yellow transition-colors">Contact</a></li>
          </ul>
        </nav>
        <a href="#booking" className="cta-button">Schedule Service</a>
      </div>
    </header>
  );
};

export default Header;