import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
      <SectionWrapper
        title="Contact Us"
        subtitle="Get in touch with our team"
        bg="white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-sk-dark-blue mb-2">
                Name
              </label>
              <input
                type="text"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sk-gold"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-sk-dark-blue mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sk-gold"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-sk-dark-blue mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Your phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sk-gold"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-sk-dark-blue mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sk-gold"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-sk-dark-blue mb-2">
                Message
              </label>
              <textarea
                required
                placeholder="Your message"
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sk-gold resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-sk-gold text-sk-dark-blue rounded-lg font-bold hover:bg-sk-gold/90 transition-all btn-premium"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-sk-dark-blue text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin size={24} className="text-sk-gold flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Address</h4>
                    <p className="text-gray-300">Palwal, Haryana, India</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone size={24} className="text-sk-gold flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-gray-300">
                      <a href="tel:+918238902687" className="hover:text-sk-gold">
                        +91-8238902687
                      </a>
                      <br />
                      <a href="tel:+919896908099" className="hover:text-sk-gold">
                        +91-9896908099
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail size={24} className="text-sk-gold flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-gray-300">
                      <a
                        href="mailto:info@skprecast-industries.com"
                        className="hover:text-sk-gold"
                      >
                        info@skprecast-industries.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock size={24} className="text-sk-gold flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Working Hours</h4>
                    <p className="text-gray-300">Mon - Sun: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/918238902687"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-6 py-4 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition-all text-center inline-block"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Contact;
