const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Test route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// EmailJS contact form route
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "All fields are required." });
  }

  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        template_params: {
          from_name: name,
          from_email: email,
          message: message,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`EmailJS API error: ${response.statusText}`);
    }

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: "Failed to send email." });
  }
});

// Appointment booking email route
app.post("/send-appointment-email", async (req, res) => {
  const { name, email, phone, vehicle, year, service, issue } = req.body;

  if (!name || !email || !phone || !vehicle || !year || !service) {
    return res.status(400).json({ 
      success: false, 
      error: "All required fields must be filled." 
    });
  }

  try {
    // Format appointment details as a message
    const appointmentMessage = `
NEW APPOINTMENT BOOKING

Customer Details:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}

Vehicle Information:
- Vehicle: ${year} ${vehicle}
- Service Requested: ${service}

Issue Description:
${issue || "No specific issue mentioned"}

Booking Date: ${new Date().toLocaleString()}

Please contact the customer within 24 hours to confirm the appointment.
    `;

    // Send admin notification using the working contact form template
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        template_params: {
          from_name: name,
          from_email: email,
          message: appointmentMessage,
          to_email: "centyanita@gmail.com",
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`EmailJS API error: ${response.statusText} - ${errorText}`);
    }

    res.status(200).json({ 
      success: true, 
      message: "Appointment request sent successfully! We will contact you within 24 hours." 
    });
  } catch (error) {
    console.error("Error sending appointment email:", error);
    res.status(500).json({ 
      success: false, 
      error: "Failed to send appointment request. Please try again or contact us directly." 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
