import { Link } from "react-router-dom";
import SectionWrapper from "@/components/SectionWrapper";
import { ChevronRight, Briefcase, MapPin, Clock, Mail, Phone, Users, Target, Heart } from "lucide-react";

const CurrentJobs = () => {
  const whyJoinUs = [
    {
      icon: <Target className="text-gir-orange" size={28} />,
      title: "Growth Opportunity",
      desc: "Be part of a rapidly growing company in the precast construction industry.",
    },
    {
      icon: <Users className="text-gir-orange" size={28} />,
      title: "Team Culture",
      desc: "Work alongside skilled professionals in a supportive and collaborative environment.",
    },
    {
      icon: <Heart className="text-gir-orange" size={28} />,
      title: "Work-Life Balance",
      desc: "We value our team's well-being and offer a healthy work-life balance.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-gir-dark-blue font-medium">Home</Link>
            <ChevronRight size={14} />
            <span className="text-gir-dark-blue font-bold">Current Jobs</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <SectionWrapper
        title="Career Opportunities"
        subtitle="Join GIR PRECAST PVT LTD and build a career in modern precast construction technology."
        bg="white"
      >
        {/* Why Join Us */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {whyJoinUs.map((item) => (
            <div
              key={item.title}
              className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow group"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gir-dark-blue mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Current Openings */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gir-dark-blue mb-8 flex items-center gap-3">
            <Briefcase className="text-gir-orange" size={28} />
            Current Openings
          </h3>

          {/* No openings message */}
          <div className="bg-gray-50 rounded-2xl p-12 text-center border border-gray-100">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Briefcase className="text-gray-300" size={36} />
            </div>
            <h4 className="text-xl font-bold text-gir-dark-blue mb-3">
              No Current Openings
            </h4>
            <p className="text-gray-500 max-w-md mx-auto mb-8 leading-relaxed">
              We don't have any open positions at the moment. However, we're always looking for talented individuals. Feel free to send us your resume and we'll keep it on file for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@girprecast.com?subject=Job Application - GIR Precast"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gir-orange text-white font-bold rounded-xl hover:bg-gir-dark-blue transition-colors shadow-lg"
              >
                <Mail size={20} />
                Send Your Resume
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gir-dark-blue text-gir-dark-blue font-bold rounded-xl hover:bg-gir-dark-blue hover:text-white transition-colors"
              >
                <Phone size={20} />
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 bg-gir-dark-blue rounded-2xl p-8 md:p-10 text-white">
            <h4 className="text-lg font-bold mb-6">Send Applications To:</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Mail className="text-gir-orange mt-1 shrink-0" size={20} />
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Email</p>
                  <p className="font-medium">info@girprecast.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-gir-orange mt-1 shrink-0" size={20} />
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Phone</p>
                  <p className="font-medium">+91-9992908099</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-gir-orange mt-1 shrink-0" size={20} />
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Location</p>
                  <p className="font-medium">Palwal, Haryana, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default CurrentJobs;
