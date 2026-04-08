export const WHATSAPP_NUMBER = "919992908099";
export const INQUIRY_EMAIL = "info@girprecast.com";

interface InquiryData {
  name: string;
  email: string;
  mobile: string;
  product?: string;
  details: string;
}

export const sendInquiry = async (data: InquiryData) => {
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
🌐 Sent from: girprecast.com`;

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;

  // 2. Call Backend API for Automatic Email (Nodemailer)
  try {
    // Mapping frontend 'mobile' to backend 'phone'
    const payload = {
      ...data,
      phone: data.mobile 
    };

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    
    if (!response.ok) {
        console.error("Backend Email Error:", await response.text());
    }
  } catch (error) {
    console.error("Nodemailer service failed (background):", error);
  }

  // 3. Open WhatsApp in new tab
  window.open(waUrl, '_blank');
};
