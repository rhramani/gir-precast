import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:8080',
  methods: ['POST'],
  credentials: true
}));
app.use(express.json());

// Main Email Route
app.post('/api/send-email', async (req, res) => {
  console.log('Incoming Email Request:', req.body.type, 'from', req.body.email);
  const { type, name, email, phone, ...details } = req.body;

  // Create Transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Dynamic Email Configuration based on Form Type
  const isJob = type === 'job';
  const isEnquiry = type === 'enquiry';
  const subject = isJob 
    ? `New Job Application: ${details.functionalArea || 'Position'} - ${name}` 
    : isEnquiry
      ? `New Enquiry for ${details.product || 'General'} - ${name}`
      : `Contact Message from ${name}`;

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        .body { background-color: #f3f4f6; padding: 40px 10px; margin: 0; }
        .email-container { font-family: 'Poppins', 'Inter', Arial, sans-serif; line-height: 1.6; color: #182650; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.1); }
        .header { background-color: #182650; padding: 40px 20px; text-align: center; }
        .header h1 { color: #f16722; font-size: 24px; font-weight: 900; margin: 0; text-transform: uppercase; letter-spacing: 3px; }
        .content { padding: 40px 30px; }
        .badge { display: inline-block; background-color: #fff7ed; color: #f16722; padding: 6px 16px; border-radius: 100px; font-size: 12px; font-weight: 900; margin-bottom: 25px; text-transform: uppercase; letter-spacing: 1px; }
        .section-title { font-size: 14px; font-weight: 900; color: #182650; text-transform: uppercase; margin-bottom: 15px; border-bottom: 2px solid #f16722; display: inline-block; }
        .info-grid { display: grid; grid-template-cols: 1fr; gap: 15px; margin-bottom: 30px; }
        .info-item { background-color: #f8fafc; border-radius: 12px; padding: 15px; border-left: 4px solid #f16722; }
        .label { font-size: 10px; color: #64748b; text-transform: uppercase; font-weight: 800; display: block; margin-bottom: 4px; }
        .value { font-size: 15px; font-weight: 700; color: #182650; }
        .footer { background-color: #f8fafc; padding: 30px; text-align: center; font-size: 12px; color: #64748b; font-weight: 600; }
        .cta-button { display: inline-block; background-color: #f16722; color: #ffffff !important; padding: 12px 25px; border-radius: 12px; text-decoration: none; font-weight: 800; margin-top: 20px; }
      </style>
    </head>
    <body class="body">
      <div class="email-container">
        <div class="header">
          <h1>GIR PRECAST PVT LTD</h1>
        </div>
        <div class="content">
          <div class="badge">${isJob ? 'Job Application' : isEnquiry ? 'Product Enquiry' : 'General Contact'}</div>
          
          <div class="section-title">Personal Details</div>
          <div class="info-grid" style="margin-bottom: 25px;">
            <div class="info-item"><span class="label">Name</span><span class="value">${name}</span></div>
            <div class="info-item"><span class="label">Email</span><span class="value">${email}</span></div>
            <div class="info-item"><span class="label">Phone</span><span class="value">${phone}</span></div>
            ${details.gender ? `<div class="info-item"><span class="label">Gender</span><span class="value">${details.gender}</span></div>` : ''}
            ${details.city ? `<div class="info-item"><span class="label">Location</span><span class="value">${details.city}, ${details.country || 'India'}</span></div>` : ''}
          </div>

          ${isJob ? `
            <div class="section-title">Professional Profile</div>
            <div class="info-grid">
              <div class="info-item"><span class="label">Applied For</span><span class="value" style="color: #f16722;">${details.functionalArea}</span></div>
              <div class="info-item"><span class="label">Qualification</span><span class="value">${details.qualification}</span></div>
              <div class="info-item"><span class="label">Experience</span><span class="value">${details.expYears}y ${details.expMonths}m</span></div>
              <div class="info-item"><span class="label">Current Salary</span><span class="value">₹${details.salLakhs}L ${details.salThousands}K</span></div>
              <div class="info-item"><span class="label">Notice Period</span><span class="value">${details.noticePeriod}</span></div>
            </div>
            <div class="info-item" style="margin-top: 20px;">
              <span class="label">Key Skills</span><span class="value">${details.skills || 'N/A'}</span>
            </div>
          ` : `
            <div class="section-title">Enquiry Details</div>
            <div class="info-item">
              <span class="label">Product / Service</span><span class="value">${details.product || 'General Inquiry'}</span>
            </div>
            <div class="info-item" style="margin-top: 15px;">
              <span class="label">Message</span><span class="value">${details.message || details.details || 'No message provided.'}</span>
            </div>
          `}

          <div style="text-align: center; margin-top: 30px;">
            <a href="mailto:${email}" class="cta-button">Reply to ${name}</a>
          </div>
        </div>
        <div class="footer">
          <p>© ${new Date().getFullYear()} GIR PRECAST PVT LTD | Palwal, Haryana</p>
          <p>This is an automated message from your official portal.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const mailOptions = {
    from: `"GIR Precast Portal" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER || 'info@girprecast.com',
    subject: subject,
    html: html,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Nodemailer Error:', error);
    res.status(500).json({ success: false, message: 'Submission failed. Please try again later.' });
  }
});

if (process.env.NODE_ENV !== 'production') {
  const server = app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    
    // Verify transporter on startup
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    
    transporter.verify((error) => {
      if (error) {
        console.error('❌ Email Transporter Error:', error.message);
      } else {
        console.log('✅ Email Transporter is ready to send messages');
      }
    });
  });
}

export default app;
