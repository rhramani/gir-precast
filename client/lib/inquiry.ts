export const WHATSAPP_NUMBER = "918238902687";
export const INQUIRY_EMAIL = "info@girprecast-pvtltd.com";

interface InquiryData {
  name: string;
  email: string;
  mobile: string;
  product?: string;
  details: string;
}

export const sendInquiry = (data: InquiryData) => {
  const currentDate = new Date().toLocaleString();
  
  // 1. Format WhatsApp message
  const waMessage = `🌟 *NEW INQUIRY - GIR PRECAST* 🌟
--------------------------------------
👤 *Name:* ${data.name}
📧 *Email:* ${data.email}
📱 *Mobile:* ${data.mobile}
🧱 *Product:* ${data.product || "General Inquiry"}
📝 *Requirement:* ${data.details}
--------------------------------------
🕒 *Date:* ${currentDate}
🌐 Sent from: girprecast-pvtltd.com`;

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;

  // 2. Format Email (mailto fallback)
  const emailSubject = `New Inquiry from Website - ${data.name}`;
  const emailBody = `New Inquiry Details:
--------------------------------------
Name: ${data.name}
Email: ${data.email}
Mobile: ${data.mobile}
Product/Service: ${data.product || "General Inquiry"}
Requirement: ${data.details}
--------------------------------------
Date: ${currentDate}
Sent from: girprecast-pvtltd.com`;

  const mailtoUrl = `mailto:${INQUIRY_EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  // 3. Open WhatsApp in new tab
  window.open(waUrl, '_blank');

  // 4. Open Email (mailto) - optional, or just inform user
  // Since we want both, we can try to open both, but browser might block multiple popups.
  // Best practice is to open WhatsApp and maybe redirect to a thank you page or just alert.
  
  // Note: For a "real" automatic email without user intervention, 
  // a backend server with nodemailer or a service like EmailJS is required.
  // I will provide the EmailJS setup instructions in the response.
};
