import { useState } from "react";
import { Link } from "react-router-dom";
import SectionWrapper from "@/components/SectionWrapper";
import SEO from "@/components/SEO";
import PhoneInput from "@/components/ui/phone-input";
import { 
  ChevronRight, 
  Upload, 
  User, 
  Mail, 
  MapPin, 
  Briefcase, 
  Clock, 
  Banknote,
  Send,
  CheckCircle2,
  FileText,
  Globe
} from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const functionalAreas = [
  "Architecture / Interior Design",
  "Accounting / Tax / Company Secretary / Audit",
  "Corporate Planning / Strategy / Business Development",
  "Construction / Engineering / Cement / Metals",
  "Content / Editors / Journalists",
  "CSR & Sustainability",
  "Customer Service / Tech Support / Operations",
  "Doctors / Nurses / Medical Professional",
  "Export / Import / Merchandising",
  "Fashion / Textile / Accessory Design",
  "Finance / Stock Broking / Banking / Insurance",
  "Front Office Staff / Secretarial / Computer Operator",
  "HR / Administration / IR",
  "Hotel / Restaurants / Hospitality",
  "IT Software - Client Server",
  "IT Software - Mainframe",
  "IT Software - Others",
  "IT Software - Systems / Networking",
  "IT Software - DBA / Datawarehousing",
  "IT Software - Application Programming / Maintenance",
  "IT Software - QA & Testing",
  "IT Software - System Programming",
  "IT Software - Network Administration / Security",
  "IT Software - eCommerce / Internet Technologies",
  "IT Software - Embedded / EDA / VLSI / ASIC / Chip Des.",
  "IT Software - Middleware",
  "IT Software - Mobile",
  "IT Software - ERP / CRM",
  "IT Hardware / Telecom / Technical Support / Internet",
  "Legal / Law",
  "Marketing / Advertising / MR / PR",
  "Media / TV / Films / Production",
  "Operations / Maintenance / Quality",
  "Purchase / SCM",
  "Public Relation / Entertainment / Journalism",
  "Retail / Merchandising",
  "Sales / Business Development / Client Servicing",
  "Special Education / Language / Others",
  "Ticketing / Travel / Airlines / Packaging",
  "Other"
];

const qualifications = [
  "Any Doctorate", "Ph.D / Doctorate", "Any Post Graduate", "Post Graduate Diploma", 
  "M.Tech", "M.Sc", "M.S", "M.Pharma", "M.Phil", "M.Lib", "M.Ed", "M.Com", "M.Arch", 
  "MBA/PGDM", "MCA", "Other Post Graduate Degree", "Any Graduate", "B.Tech/B.E", 
  "B.Sc", "B.S", "B.Pharma", "B.Lib", "B.Ed", "B.Com", "B.Arch", "BBA", "BCA", 
  "Other Graduate Degree", "Any High School", "Other Schooling", "Higher Secondary", "Secondary School"
];

const countries = [
  "India", "United Arab Emirates", "United Kingdom", "United States", "Australia", "Canada", "Singapore",
  "Saudi Arabia", "Qatar", "Oman", "Kuwait", "Bahrain", "Afghanistan", "Albania", "Algeria", "Andorra", 
  "Angola", "Argentina", "Armenia", "Austria", "Azerbaijan", "Bahamas", "Bangladesh", "Barbados", 
  "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Brazil", "Brunei", "Bulgaria", 
  "Cambodia", "Cameroon", "Chile", "China", "Colombia", "Congo", "Costa Rica", "Croatia", "Cuba", 
  "Cyprus", "Czech Republic", "Denmark", "Dominica", "Ecuador", "Egypt", "Estonia", "Ethiopia", 
  "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", 
  "Guatemala", "Guinea", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "Indonesia", "Iran", 
  "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", 
  "Kiribati", "Korea, North", "Korea, South", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", 
  "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", 
  "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", 
  "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nepal", 
  "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Pakistan", "Panama", 
  "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Romania", "Russia", "Rwanda", "Samoa", 
  "San Marino", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Slovakia", "Slovenia", 
  "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", 
  "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", 
  "Togo", "Tonga", "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "Uruguay", "Uzbekistan", 
  "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const CurrentJobs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    email: "",
    country: "India",
    city: "",
    locality: "",
    phone: "",
    qualification: "",
    functionalArea: "",
    expYears: "",
    expMonths: "",
    salLakhs: "",
    salThousands: "",
    noticePeriod: "",
    skills: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'job',
          ...formData
        })
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      
      if (data.success) {
        setIsSuccess(true);
        toast.success("Application submitted successfully!");
      } else {
        toast.error(data.message || "Failed to submit application.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("Network error. Please make sure the backend server is running.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Career Opportunities at GIR Precast"
        description="Explore career opportunities at GIR PRECAST PVT LTD. Join our team of construction and precast wall manufacturing professionals in Palwal, Haryana."
        canonical="https://www.girprecast.com/current-jobs"
        keywords="GIR Precast jobs, precast wall manufacturing jobs, construction careers Palwal, Haryana jobs"
      />
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-gir-dark-blue transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-gir-dark-blue font-bold">Current Jobs</span>
          </div>
        </div>
      </div>

      <SectionWrapper
        title="Explore Career Opportunities"
        subtitle="Join GIR PRECAST PVT LTD and build your career in the world of modern construction."
        bg="white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl overflow-hidden">
            <div className="bg-gray-50 p-6 border-b border-gray-100 flex items-center justify-between font-bold">
              <h3 className="text-xl text-gir-dark-blue uppercase tracking-tight">Job Application Form</h3>
              <FileText className="text-gir-orange" size={24} />
            </div>

            {isSuccess ? (
              <div className="p-20 text-center space-y-6">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={48} />
                </div>
                <h2 className="text-3xl font-bold text-gir-dark-blue">Application Submitted!</h2>
                <p className="text-gray-500 max-w-sm mx-auto">
                  Your profile has been recorded. Our team will contact you if your skills match our requirements.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="px-8 py-3 bg-gir-orange text-white rounded-xl font-bold hover:bg-gir-dark-blue transition-all"
                >
                  Apply for Another Position
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10">
                
                {/* 1. Name and Gender */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[13px] font-extrabold text-gir-dark-blue uppercase tracking-wider flex items-center gap-2">
                       <User size={14} className="text-gir-orange" /> Your Name *
                    </label>
                    <input 
                      required 
                      type="text" 
                      placeholder="Enter Full Name" 
                      value={formData.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gir-orange outline-none" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[13px] font-extrabold text-gir-dark-blue uppercase tracking-wider">Gender *</label>
                    <div className="flex gap-10 pt-3">
                      <label className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-gray-600">
                        <input 
                          type="radio" 
                          name="gender" 
                          value="Male"
                          checked={formData.gender === 'Male'}
                          onChange={(e) => updateField('gender', e.target.value)}
                          className="accent-gir-orange w-4 h-4" 
                        /> Male
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-gray-600">
                        <input 
                          type="radio" 
                          name="gender" 
                          value="Female"
                          checked={formData.gender === 'Female'}
                          onChange={(e) => updateField('gender', e.target.value)}
                          className="accent-gir-orange w-4 h-4" 
                        /> Female
                      </label>
                    </div>
                  </div>
                </div>

                {/* 2. Email and Country */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[13px] font-extrabold text-gir-dark-blue uppercase tracking-wider flex items-center gap-2">
                       <Mail size={14} className="text-gir-orange" /> Email ID *
                    </label>
                    <input 
                      required 
                      type="email" 
                      placeholder="example@email.com" 
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gir-orange outline-none" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[13px] font-extrabold text-gir-dark-blue uppercase tracking-wider flex items-center gap-2">
                       <Globe size={14} className="text-gir-orange" /> Country *
                    </label>
                    <Select value={formData.country} onValueChange={(val) => updateField('country', val)}>
                      <SelectTrigger className="h-12 bg-gray-50 border-gray-200 rounded-xl focus:ring-gir-orange focus:ring-2">
                        <SelectValue placeholder="Select Country" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* 3. City and Locality */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[13px] font-extrabold text-gir-dark-blue uppercase tracking-wider flex items-center gap-2">
                       <MapPin size={14} className="text-gir-orange" /> Current City *
                    </label>
                    <input 
                      required 
                      type="text" 
                      placeholder="e.g. Palwal" 
                      value={formData.city}
                      onChange={(e) => updateField('city', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gir-orange outline-none" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[13px] font-extrabold text-gir-dark-blue uppercase tracking-wider flex items-center gap-2">
                       <MapPin size={14} className="text-gir-orange" /> Current Locality
                    </label>
                    <input 
                      type="text" 
                      placeholder="Area / Colony" 
                      value={formData.locality}
                      onChange={(e) => updateField('locality', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gir-orange outline-none" 
                    />
                  </div>
                </div>

                {/* 4. Mobile (Using Library) and Qualification */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[13px] font-extrabold text-gir-dark-blue uppercase tracking-wider">Mobile *</label>
                    <PhoneInput value={formData.phone} onChange={(val) => updateField('phone', val)} className="w-full" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[13px] font-extrabold text-gir-dark-blue uppercase tracking-wider">Qualification *</label>
                    <Select value={formData.qualification} onValueChange={(val) => updateField('qualification', val)}>
                      <SelectTrigger className="h-12 bg-gray-50 border-gray-200 rounded-xl focus:ring-gir-orange focus:ring-2">
                        <SelectValue placeholder="Select Qualification" />
                      </SelectTrigger>
                      <SelectContent>
                        {qualifications.map(q => <SelectItem key={q} value={q}>{q}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* 5. Functional Area (Post Applied For) */}
                <div className="space-y-3">
                  <label className="text-[13px] font-extrabold text-gir-dark-blue uppercase tracking-wider flex items-center gap-2">
                     <Briefcase size={14} className="text-gir-orange" /> Functional Area (Applied For) *
                  </label>
                  <Select value={formData.functionalArea} onValueChange={(val) => updateField('functionalArea', val)}>
                    <SelectTrigger className="h-12 bg-gray-50 border-gray-200 rounded-xl focus:ring-gir-orange focus:ring-2">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {functionalAreas.map(f => <SelectItem key={f} value={f}>{f}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>

                {/* 6. Experience and Salary */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[13px] font-extrabold text-gir-dark-blue uppercase tracking-wider flex items-center gap-2">
                       <Clock size={14} className="text-gir-orange" /> Total Experience *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       <Select value={formData.expYears} onValueChange={(val) => updateField('expYears', val)}>
                         <SelectTrigger className="h-12 bg-gray-50 border-gray-200 rounded-xl focus:ring-gir-orange focus:ring-2">
                           <SelectValue placeholder="Years" />
                         </SelectTrigger>
                         <SelectContent>
                           {[...Array(31)].map((_, i) => <SelectItem key={i} value={i.toString()}>{i}</SelectItem>)}
                         </SelectContent>
                       </Select>
                       <Select value={formData.expMonths} onValueChange={(val) => updateField('expMonths', val)}>
                         <SelectTrigger className="h-12 bg-gray-50 border-gray-200 rounded-xl focus:ring-gir-orange focus:ring-2">
                           <SelectValue placeholder="Months" />
                         </SelectTrigger>
                         <SelectContent>
                           {[...Array(12)].map((_, i) => <SelectItem key={i} value={i.toString()}>{i}</SelectItem>)}
                         </SelectContent>
                       </Select>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[13px] font-extrabold text-gir-dark-blue uppercase tracking-wider flex items-center gap-2">
                       <Banknote size={14} className="text-gir-orange" /> Current Annual Salary
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       <Select value={formData.salLakhs} onValueChange={(val) => updateField('salLakhs', val)}>
                         <SelectTrigger className="h-12 bg-gray-50 border-gray-200 rounded-xl focus:ring-gir-orange focus:ring-2">
                           <SelectValue placeholder="Lakhs" />
                         </SelectTrigger>
                         <SelectContent>
                           {[...Array(51)].map((_, i) => <SelectItem key={i} value={i.toString()}>{i}</SelectItem>)}
                         </SelectContent>
                       </Select>
                       <Select value={formData.salThousands} onValueChange={(val) => updateField('salThousands', val)}>
                         <SelectTrigger className="h-12 bg-gray-50 border-gray-200 rounded-xl focus:ring-gir-orange focus:ring-2">
                           <SelectValue placeholder="Thousands" />
                         </SelectTrigger>
                         <SelectContent>
                           {[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95].map(v => <SelectItem key={v} value={v.toString()}>{v}</SelectItem>)}
                         </SelectContent>
                       </Select>
                    </div>
                  </div>
                </div>

                {/* 7. Notice Period and Skills */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[13px] font-extrabold text-gir-dark-blue uppercase tracking-wider">Notice Period *</label>
                    <Select value={formData.noticePeriod} onValueChange={(val) => updateField('noticePeriod', val)}>
                      <SelectTrigger className="h-12 bg-gray-50 border-gray-200 rounded-xl focus:ring-gir-orange focus:ring-2">
                        <SelectValue placeholder="Select Period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15 Days or Less">15 Days or Less</SelectItem>
                        <SelectItem value="1 Month">1 Month</SelectItem>
                        <SelectItem value="2 Months">2 Months</SelectItem>
                        <SelectItem value="3 Months">3 Months</SelectItem>
                        <SelectItem value="More than 3 Months">More than 3 Months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[13px] font-extrabold text-gir-dark-blue uppercase tracking-wider">Key Skills</label>
                    <input 
                      type="text" 
                      placeholder="e.g. CAD, RCC Design" 
                      value={formData.skills}
                      onChange={(e) => updateField('skills', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gir-orange outline-none" 
                    />
                  </div>
                </div>

                {/* 8. Resume Upload */}
                <div className="p-8 border-2 border-dashed border-gray-200 rounded-3xl bg-gray-50 hover:bg-gray-100 hover:border-gir-orange transition-all text-center group">
                  <Upload className="mx-auto text-gray-300 group-hover:text-gir-orange transition-colors mb-4" size={40} />
                  <p className="font-bold text-gir-dark-blue">Attach Your Resume *</p>
                  <p className="text-xs text-gray-400 mt-1 mb-6">Allowed formats: .doc, .docx, .rtf, .pdf (Max 2 MB)</p>
                  <label htmlFor="resume_upload" className="px-6 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-bold text-gir-dark-blue shadow-sm hover:shadow-md cursor-pointer transition-all">
                    Browse File
                  </label>
                  <input required id="resume_upload" type="file" className="hidden" />
                </div>

                <div className="pt-4 pb-20 sm:pb-0">
                  <button disabled={isSubmitting} type="submit" className="w-full py-4 bg-gir-orange text-white rounded-2xl font-black text-lg uppercase tracking-widest shadow-[0_10px_20px_-10px_rgba(251,146,60,0.5)] hover:bg-gir-dark-blue hover:shadow-none transition-all flex items-center justify-center gap-4 disabled:opacity-50">
                    {isSubmitting ? "Processing..." : <>Send My Application <Send size={20} /></>}
                  </button>
                </div>

              </form>
            )}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default CurrentJobs;
