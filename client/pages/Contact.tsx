import { useState } from "react";
import { Link } from "react-router-dom";
import SectionWrapper from "@/components/SectionWrapper";
import { Mail, Phone, MapPin, User, Globe, ChevronRight } from "lucide-react";
import PhoneInput from "@/components/ui/phone-input";
import { sendInquiry } from "@/lib/inquiry";

const Contact = () => {
  const [formData, setFormData] = useState({
    product: "",
    name: "",
    email: "",
    mobile: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    sendInquiry({
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      product: formData.product,
      details: formData.details
    });

    alert("Thank you! Opening WhatsApp to share your requirement. You can also send us an email at info@girprecast-pvtltd.com");
    setFormData({ product: "", name: "", email: "", mobile: "", details: "" });
  };


  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-gir-dark-blue transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-gir-dark-blue font-bold">Contact Us</span>
          </div>
        </div>
      </div>

      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-0 border border-gray-200 rounded-sm overflow-hidden shadow-sm">

          {/* Left Column - Contact Information */}
          <div className="bg-gray-50 p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-200">

            <h2 className="text-2xl font-bold text-gir-dark-blue mb-8 inline-block border-b-2 border-gir-orange pb-2">
              GIR PRECAST PVT LTD
            </h2>

            <div className="flex flex-col">
              <div className="flex gap-4 py-4 border-b border-dotted border-gray-300">
                <div className="w-10 h-10 rounded-full bg-gir-orange text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <User size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-gir-dark-blue mb-1 text-[15px]">Contact Person</h4>
                  <p className="text-gray-600 text-sm">Mr. Vivek Koladiya</p>
                </div>
              </div>

              <div className="flex gap-4 py-4 border-b border-dotted border-gray-300">
                <div className="w-10 h-10 rounded-full bg-gir-orange text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-gir-dark-blue mb-1 text-[15px]">Address</h4>
                  <p className="text-gray-600 text-sm leading-relaxed pr-4">
                    Opp. Adani CNG Pump, Delhi-Mathura Road Near Hanuman Mandir, Palwal, Haryana, India - 121102
                  </p>
                </div>
              </div>

              <div className="flex gap-4 py-4 border-b border-dotted border-gray-300">
                <div className="w-10 h-10 rounded-full bg-gir-orange text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-gir-dark-blue mb-1 text-[15px]">Call Us</h4>
                  <p className="text-gray-600 text-sm">
                    <a href="tel:+918238902687" className="hover:text-gir-orange transition-colors">+91-8238902687</a>,{' '}
                    {/* <a href="tel:+919896908099" className="hover:text-gir-orange transition-colors">+91-9896908099</a> */}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 py-4 border-b border-dotted border-gray-300">
                <div className="w-10 h-10 rounded-full bg-gir-orange text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-gir-dark-blue mb-1 text-[15px]">Email</h4>
                  <p className="text-gray-600 text-sm">
                    <a href="mailto:info@girprecast-pvtltd.com" className="hover:text-gir-orange transition-colors">info@girprecast-pvtltd.com</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4 py-4 border-b border-dotted border-gray-300">
                <div className="w-10 h-10 rounded-full bg-gir-orange text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-gir-dark-blue mb-1 text-[15px]">Alt. Email</h4>
                  <p className="text-gray-600 text-sm">
                    <a href="mailto:girprecastpvtltd@gmail.com" className="hover:text-gir-orange transition-colors">girprecastpvtltd@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4 py-4 border-b border-dotted border-gray-300">
                <div className="w-10 h-10 rounded-full bg-gir-orange text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Globe size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-gir-dark-blue mb-1 text-[15px]">Web Address</h4>
                  <p className="text-gray-600 text-sm">
                    <a href="https://www.girprecast-pvtltd.com" target="_blank" rel="noopener noreferrer" className="hover:text-gir-orange transition-colors break-all">https://www.girprecast-pvtltd.com</a>
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="mt-8">
              <a
                href="https://wa.me/918238902687"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full px-6 py-3 bg-[#25D366] text-white rounded font-bold hover:bg-[#1ebe57] transition-all justify-center items-center gap-2 shadow-sm"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.868-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div> */}
          </div>

          {/* Right Column - Form */}
          <div className="bg-white p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gir-dark-blue mb-2">
                  Product / Service Looking for <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Product / Service Looking for"
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-400 rounded text-[15px] focus:outline-none focus:border-gir-orange focus:ring-1 focus:ring-gir-orange bg-white transition-colors text-gir-dark-blue placeholder:text-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gir-dark-blue mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-400 rounded text-[15px] focus:outline-none focus:border-gir-orange focus:ring-1 focus:ring-gir-orange bg-white transition-colors text-gir-dark-blue placeholder:text-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gir-dark-blue mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-400 rounded text-[15px] focus:outline-none focus:border-gir-orange focus:ring-1 focus:ring-gir-orange bg-white transition-colors text-gir-dark-blue placeholder:text-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gir-dark-blue mb-2">
                  Mobile <span className="text-red-500">*</span>
                </label>
                <PhoneInput
                  value={formData.mobile}
                  onChange={(value) => setFormData({ ...formData, mobile: value })}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gir-dark-blue mb-2">
                  Enquiry Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  placeholder="Your Requirement"
                  rows={5}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-400 rounded text-[15px] focus:outline-none focus:border-gir-orange focus:ring-1 focus:ring-gir-orange bg-white transition-colors text-gir-dark-blue placeholder:text-gray-500 resize-y"
                />
              </div>

              <div className="flex gap-4 pt-2">
                <button
                  type="submit"
                  className="px-8 py-2.5 bg-gir-orange text-white rounded font-bold hover:bg-gir-dark-blue transition-colors text-sm shadow-sm"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ product: "", name: "", email: "", mobile: "", details: "" })}
                  className="px-8 py-2.5 bg-gir-orange text-white rounded font-bold hover:bg-gir-dark-blue transition-colors text-sm shadow-sm"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>

        </div>
      </SectionWrapper>
    </div>
  );
};

export default Contact;


