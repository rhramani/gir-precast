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
  const { name, email, phone, product, details } = req.body;

  // Create Transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"GIR Precast Enquiry" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER || 'info@girprecast.com',
    subject: `New Enquiry for ${product || 'General Inquiry'} - ${name}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          .email-container { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #0f2a3f; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; }
          .header { background-color: #0f2a3f; padding: 25px; text-align: center; }
          .logo-text { color: #f97316; font-size: 22px; font-weight: bold; margin: 0; text-transform: uppercase; letter-spacing: 2px; }
          .content { padding: 35px 25px; background-color: #ffffff; }
          .badge { display: inline-block; background-color: #fff7ed; color: #f97316; padding: 4px 12px; border-radius: 99px; font-size: 11px; font-weight: bold; margin-bottom: 20px; text-transform: uppercase; }
          .info-card { background-color: #f8fafc; border-radius: 8px; padding: 18px; margin-bottom: 25px; border-left: 4px solid #f97316; }
          .info-item { margin-bottom: 12px; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; }
          .label { font-size: 10px; color: #64748b; text-transform: uppercase; font-weight: bold; display: block; }
          .value { font-size: 14px; font-weight: 600; color: #0f2a3f; }
          .requirement-box { background-color: #ffffff; border: 1px dashed #cbd5e1; padding: 18px; border-radius: 8px; font-style: italic; color: #334155; }
          .footer { background-color: #f1f5f9; padding: 20px; text-align: center; font-size: 11px; color: #64748b; }
          .cta-text { color: #f97316; font-weight: bold; text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header"><h1 class="logo-text">GIR PRECAST PVT LTD</h1></div>
          <div class="content">
            <div class="badge">New Enquiry</div>
            <h2 style="margin-top: 0; color: #0f2a3f; font-size: 20px;">Website Inquiry Received</h2>
            <div class="info-card">
              <div class="info-item"><span class="label">Customer Name</span><span class="value">${name}</span></div>
              <div class="info-item"><span class="label">Product / Service</span><span class="value" style="color: #f97316;">${product || 'General Inquiry'}</span></div>
              <div class="info-item"><span class="label">Mobile Number</span><span class="value">${phone}</span></div>
              <div class="info-item"><span class="label">Email Address</span><span class="value">${email}</span></div>
            </div>
            <span class="label" style="margin-bottom: 8px;">Customer's Message:</span>
            <div class="requirement-box">${details}</div>
            <p style="margin-top: 25px; font-size: 13px;">
              Quick Actions: <a href="mailto:${email}" class="cta-text">Reply via Email</a> | <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" class="cta-text">Contact via WhatsApp</a>
            </p>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} GIR PRECAST PVT LTD | Palwal, Haryana</p>
            <p>Sent via <a href="https://girprecast.com" style="color: #64748b;">GIR Precast Official Portal</a></p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Nodemailer Error:', error);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

export default app;
