import React from 'react';

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = "Hello, I'm interested in your automotive diagnostic services.";
    const whatsappUrl = `https://wa.me/254721778105?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer id="contact" className="footer bg-gradient-to-r from-oil-black to-petrol-blue text-white py-12">
      <div className="container">
        <div className="footer-content grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="footer-section">
            <h3 className="text-xl font-bold mb-4 text-shell-yellow">AutoDiagnose Pro</h3>
            <p>Professional mobile automotive diagnostic services at your convenience. We come to you!</p>
          </div>
          <div className="footer-section footer-contact">
            <h3 className="text-xl font-bold mb-4 text-shell-yellow">Contact Info</h3>
            <p><i className="fas fa-map-marker-alt"></i> Just give us a call we will come wherever you are!</p>
            <p><i className="fas fa-phone"></i> +254721778105</p>
            <p><i className="fas fa-envelope"></i> chadeagle143@gmail.com</p>
          </div>
          <div className="footer-section footer-links">
            <h3 className="text-xl font-bold mb-4 text-shell-yellow">Quick Links</h3>
            <ul>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#brands">Car Brands</a></li>
              <li><a href="#booking">Book Appointment</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="text-xl font-bold mb-4 text-shell-yellow">Follow Us</h3>
            <p>Stay connected with us on social media</p>
            <div className="footer-social flex gap-3 mt-4">
              <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon" onClick={handleWhatsAppClick}><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
        <div className="copyright text-center mt-8 pt-6 border-top border-white border-opacity-20">
          <p>&copy; 2023 AutoDiagnose Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;