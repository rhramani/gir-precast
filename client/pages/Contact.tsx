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
              <label className="block text-sm font-semibold text-gir-dark-blue mb-2">
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gir-orange"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gir-dark-blue mb-2">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gir-orange"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gir-dark-blue mb-2">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gir-orange"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gir-dark-blue mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gir-orange"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gir-dark-blue mb-2">
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gir-orange resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gir-orange text-white rounded-lg font-bold hover:bg-gir-orange/90 transition-all btn-premium"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gir-dark-blue text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin size={24} className="text-gir-orange flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Address</h4>
                    <p className="text-gray-300">Opp. Adani CNG Pump, Delhi-Mathura Road Near Hanuman Mandir, Palwal, Haryana - 121102, India</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone size={24} className="text-gir-orange flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-gray-300">
                      <a href="tel:+918238902687" className="hover:text-gir-orange">
                        +91-8238902687
                      </a>
                      <br />
                      <a href="tel:+919896908099" className="hover:text-gir-orange">
                        +91-9896908099
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail size={24} className="text-gir-orange flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-gray-300">
                      <a
                        href="mailto:info@girprecast-industries.com"
                        className="hover:text-gir-orange"
                      >
                        info@girprecast-industries.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock size={24} className="text-gir-orange flex-shrink-0" />
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
              className="w-full px-6 py-4 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition-all text-center flex items-center justify-center gap-3 shadow-lg"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.868-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Contact;


