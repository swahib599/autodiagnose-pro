const Appointment = require('../models/Appointment');
const nodemailer = require('nodemailer');
const { whatsappClient } = require('../server');

// Create appointment
exports.createAppointment = async (req, res) => {
  try {
    const { name, email, phone, vehicle, year, service, issue } = req.body;

    const newAppointment = new Appointment({
      name,
      email,
      phone,
      vehicle,
      year,
      service,
      issue,
      status: 'pending'
    });

    const savedAppointment = await newAppointment.save();

    // Send confirmation email
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Appointment Request Received - AutoDiagnose Pro',
      html: `
        <h2>Thank you for your appointment request!</h2>
        <p>We have received your request and will contact you within 24 hours to confirm your appointment.</p>
        <h3>Appointment Details:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Vehicle:</strong> ${vehicle} (${year})</p>
        <p><strong>Service:</strong> ${service}</p>
        <br>
        <p>Thank you for choosing AutoDiagnose Pro!</p>
      `
    };

    await transporter.sendMail(mailOptions);

    // Send notification to admin email
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Appointment Request from ${name}`,
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Vehicle:</strong> ${vehicle}</p>
        <p><strong>Year:</strong> ${year}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Issue:</strong> ${issue}</p>
      `
    };

    await transporter.sendMail(adminMailOptions);

    // Send WhatsApp notification
    try {
      const whatsappMessage = `New appointment request from ${name} for ${service} service. Vehicle: ${vehicle} (${year}). Phone: ${phone}`;
      const chatId = process.env.WHATSAPP_NUMBER.substring(1) + "@c.us";
      
      whatsappClient.sendMessage(chatId, whatsappMessage);
    } catch (whatsappError) {
      console.error('WhatsApp notification failed:', whatsappError);
    }

    res.status(201).json({
      success: true,
      message: 'Appointment request sent successfully',
      data: savedAppointment
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to create appointment',
      error: error.message
    });
  }
};

// Get all appointments
exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: appointments
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch appointments',
      error: error.message
    });
  }
};