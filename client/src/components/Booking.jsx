import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    year: '',
    service: '',
    issue: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("GlSgm4Kmmb8xIOfe1");
  }, []);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Format appointment details as message (simplified to avoid duplication with template)
      const appointmentMessage = `NEW APPOINTMENT BOOKING

Customer: ${formData.name}
Vehicle: ${formData.year} ${formData.vehicle}
Service: ${formData.service}
Issue: ${formData.issue || "No specific issue mentioned"}
Booking Date: ${new Date().toLocaleString()}`;

      // Send admin notification email using EmailJS directly from frontend
      // Try using minimal template parameters first
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email, 
        message: appointmentMessage,
        to_name: "AutoDiagnose Pro",
        reply_to: formData.phone,
        phone_number: formData.phone
      };

      console.log('Sending EmailJS with params:', templateParams);
      console.log('Phone number being sent:', formData.phone);
      console.log('Form data check:', formData);
      
      // Send email using the correct template ID
      console.log('Sending with template ID: template_apccp0m');
      const result = await emailjs.send("service_1khjeq5", "template_apccp0m", templateParams);
      console.log('EmailJS success result:', result);

      setSubmitMessage('Appointment request sent successfully! We will contact you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        vehicle: '',
        year: '',
        service: '',
        issue: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      console.error('Error details:', error.text, error.status);
      setSubmitMessage('Failed to send appointment request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="booking py-16 bg-gradient-to-r from-petrol-blue to-petrol-green text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container relative z-10">
        <div className="booking-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="booking-content">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Schedule Your Diagnostic Service</h2>
            <p className="mb-4">
              Fill out the form and we'll contact you within 24 hours to confirm your appointment. We offer flexible scheduling including evenings and weekends.
            </p>
            <p>
              Our certified technicians will come to your home or office with all necessary equipment to diagnose your vehicle issues.
            </p>
          </div>
          <div className="booking-form bg-white bg-opacity-95 p-8 rounded-2xl shadow-xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-petrol-blue mb-6 text-center">Request an Appointment</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="form-group">
                <label htmlFor="name" className="block text-petrol-blue font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-shell-yellow focus:border-transparent"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="block text-petrol-blue font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-shell-yellow focus:border-transparent"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="block text-petrol-blue font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-shell-yellow focus:border-transparent"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="form-group">
                  <label htmlFor="vehicle" className="block text-petrol-blue font-medium mb-2">Vehicle Make & Model</label>
                  <input
                    type="text"
                    id="vehicle"
                    name="vehicle"
                    value={formData.vehicle}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-shell-yellow focus:border-transparent"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="year" className="block text-petrol-blue font-medium mb-2">Vehicle Year</label>
                  <input
                    type="number"
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    min="1990"
                    max={new Date().getFullYear() + 1}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-shell-yellow focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="service" className="block text-petrol-blue font-medium mb-2">Select Service</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-shell-yellow focus:border-transparent"
                  required
                >
                  <option value="">Choose a service</option>
                  <option value="Advanced Diagnostic Scanning">Advanced Diagnostic Scanning</option>
                  <option value="Battery & Electrical System Check">Battery & Electrical System Check</option>
                  <option value="Pre-Purchase Inspection">Pre-Purchase Inspection</option>
                  <option value="Other Issue">Other Issue</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="issue" className="block text-petrol-blue font-medium mb-2">Describe the Issue</label>
                <textarea
                  id="issue"
                  name="issue"
                  value={formData.issue}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-shell-yellow focus:border-transparent"
                  placeholder="Please describe any symptoms or issues your vehicle is experiencing"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-shell-red to-shell-yellow text-white py-4 px-6 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Schedule Appointment'}
              </button>
              {submitMessage && (
                <div className={`mt-4 p-3 rounded-lg text-center ${submitMessage.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;