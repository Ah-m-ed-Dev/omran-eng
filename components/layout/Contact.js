// components/sections/Contact.jsx
"use client";
import { useEffect, useRef, useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Sparkles,
  Building2,
  Globe,
  ArrowLeft,
  MessageCircle,
  CheckCircle
} from "lucide-react";

// ===== استيراد أيقونات Font Awesome =====
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faLinkedin, 
  faTwitter, 
  faWhatsapp,
  faFacebook,
  faInstagram,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    service: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        service: ""
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "العنوان",
      details: "الدمام، المملكة العربية السعودية",
      sub: "طريق الملك فهد، برج الأعمال",
      color: "#0D9488"
    },
    {
      icon: Phone,
      title: "الهاتف",
      details: "+966 55 123 4567",
      sub: "متاح 24/7",
      color: "#0D9488"
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      details: "info@omran-eng.com",
      sub: "نرد خلال 24 ساعة",
      color: "#0D9488"
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      details: "الأحد - الخميس",
      sub: "8:00 صباحاً - 6:00 مساءً",
      color: "#0D9488"
    }
  ];

  const services = [
    "التصميم الهندسي",
    "الإشراف على المشاريع",
    "الاستشارات الهندسية",
    "إدارة المشاريع",
    "السلامة والجودة",
    "الاستدامة البيئية"
  ];

  // ===== أيقونات السوشيال ميديا من Font Awesome =====
  const socialIcons = [
    { icon: faLinkedin, label: "LinkedIn", color: "#0A66C2" },
    { icon: faTwitter, label: "Twitter", color: "#1DA1F2" },
    { icon: faWhatsapp, label: "WhatsApp", color: "#25D366" },
    { icon: faFacebook, label: "Facebook", color: "#1877F2" },
    { icon: faInstagram, label: "Instagram", color: "#E4405F" },
    { icon: faYoutube, label: "YouTube", color: "#FF0000" },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-[#E8EDF2] to-[#D5DCE4]"
      dir="rtl"
      id="contact"
    >
      
      {/* ===== خلفية زجاجية متحركة ===== */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#0D9488]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#14B8A6]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#2DD4BF]/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* ===== المحتوى ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* ===== العنوان ===== */}
        <div 
          className={`text-center mb-10 md:mb-14 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="inline-block text-[#0D9488] text-sm tracking-[0.2em] uppercase font-cairo-light border border-[#0D9488]/20 rounded-full px-4 py-1 backdrop-blur-xl bg-white/30 shadow-lg shadow-black/5">
              تواصل معنا
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F1A2C]">
            دعنا <span className="text-[#0D9488]">نبني</span> المستقبل معاً
          </h2>
          <p className="mt-3 text-[#0F1A2C]/50 max-w-2xl mx-auto font-cairo-light">
            نحن هنا للإجابة على استفساراتك وتقديم الدعم اللازم لمشاريعك
          </p>
        </div>

        {/* ===== المحتوى الرئيسي ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* ===== معلومات الاتصال ===== */}
          <div 
            className={`lg:col-span-1 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="h-full p-6 md:p-8 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-xl shadow-black/10">
              
              {/* ===== العنوان ===== */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#0D9488]/20 backdrop-blur-sm border border-[#0D9488]/30 flex items-center justify-center text-[#0D9488]">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F1A2C] font-cairo-bold">معلومات الاتصال</h3>
                  <p className="text-[#0F1A2C]/40 text-xs font-cairo-light">نحن هنا لخدمتك</p>
                </div>
              </div>

              {/* ===== قائمة المعلومات ===== */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index}
                    className="group flex items-start gap-4 p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#0D9488]/30 transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
                  >
                    <div className={`w-9 h-9 rounded-full bg-[${item.color}]/20 backdrop-blur-sm border border-[${item.color}]/30 flex items-center justify-center text-[${item.color}] flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-[#0F1A2C]/40 font-cairo-light">{item.title}</p>
                      <p className="text-sm font-semibold text-[#0F1A2C] font-cairo-medium">{item.details}</p>
                      <p className="text-xs text-[#0F1A2C]/40 font-cairo-light">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* ===== الموقع ===== */}
              <div className="mt-6 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-4 h-4 text-[#0D9488]" />
                  <span className="text-sm font-semibold text-[#0F1A2C] font-cairo-medium">موقعنا</span>
                </div>
                <div className="relative w-full h-32 rounded-lg overflow-hidden bg-white/30 backdrop-blur-sm border border-white/20">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28603.9934821448!2d50.1038857!3d26.3931673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49f91d0e7c5e7d%3A0x9c5b3f5c5e5c5e5c!2sDammam%2C%20Saudi%20Arabia!5e0!3m2!1sen!2seg!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full"
                  />
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]"></div>
                </div>
              </div>

              {/* ===== السوشيال ميديا - Font Awesome ===== */}
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-9 h-9 rounded-full bg-white/30 backdrop-blur-sm border border-white/30 flex items-center justify-center text-[#0F1A2C]/40 hover:text-white hover:bg-[#0D9488] hover:border-[#0D9488] transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                    style={{ '--hover-color': social.color }}
                  >
                    <FontAwesomeIcon icon={social.icon} className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ===== نموذج الاتصال ===== */}
          <div 
            className={`lg:col-span-2 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="p-6 md:p-8 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-xl shadow-black/10">
              
              {/* ===== رسالة النجاح ===== */}
              {isSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-[#0D9488]/20 backdrop-blur-sm border border-[#0D9488]/30 flex items-center gap-3 animate-in slide-in-from-top duration-500">
                  <CheckCircle className="w-5 h-5 text-[#0D9488]" />
                  <p className="text-[#0F1A2C] font-cairo-medium">تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.</p>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* ===== الاسم ===== */}
                  <div className="relative">
                    <label className="block text-sm font-semibold text-[#0F1A2C]/70 font-cairo-medium mb-2">
                      الاسم الكامل
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/30 backdrop-blur-sm border border-white/30 text-[#0F1A2C] placeholder-[#0F1A2C]/40 font-cairo-light focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all duration-300"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>

                  {/* ===== رقم الجوال ===== */}
                  <div className="relative">
                    <label className="block text-sm font-semibold text-[#0F1A2C]/70 font-cairo-medium mb-2">
                      رقم الجوال
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/30 backdrop-blur-sm border border-white/30 text-[#0F1A2C] placeholder-[#0F1A2C]/40 font-cairo-light focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all duration-300"
                      placeholder="+966 55 123 4567"
                    />
                  </div>

                  {/* ===== البريد الإلكتروني ===== */}
                  <div className="relative md:col-span-2">
                    <label className="block text-sm font-semibold text-[#0F1A2C]/70 font-cairo-medium mb-2">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/30 backdrop-blur-sm border border-white/30 text-[#0F1A2C] placeholder-[#0F1A2C]/40 font-cairo-light focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all duration-300"
                      placeholder="info@example.com"
                    />
                  </div>

                  {/* ===== الخدمة المطلوبة ===== */}
                  <div className="relative md:col-span-2">
                    <label className="block text-sm font-semibold text-[#0F1A2C]/70 font-cairo-medium mb-2">
                      الخدمة المطلوبة
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/30 backdrop-blur-sm border border-white/30 text-[#0F1A2C] font-cairo-light focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all duration-300 appearance-none"
                    >
                      <option value="">اختر الخدمة</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  {/* ===== الرسالة ===== */}
                  <div className="relative md:col-span-2">
                    <label className="block text-sm font-semibold text-[#0F1A2C]/70 font-cairo-medium mb-2">
                      الرسالة
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-white/30 backdrop-blur-sm border border-white/30 text-[#0F1A2C] placeholder-[#0F1A2C]/40 font-cairo-light focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all duration-300 resize-none"
                      placeholder="اكتب رسالتك هنا..."
                    />
                  </div>
                </div>

                {/* ===== زر الإرسال ===== */}
                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative overflow-hidden bg-[#0D9488] text-white hover:bg-[#14B8A6] px-8 py-4 rounded-full font-cairo-medium shadow-lg shadow-[#0D9488]/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>جاري الإرسال...</span>
                        </>
                      ) : (
                        <>
                          <span>أرسل رسالتك</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </span>
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
                  </button>
                </div>

                <p className="mt-4 text-center text-xs text-[#0F1A2C]/40 font-cairo-light">
                  سنتواصل معك خلال 24 ساعة من استلام رسالتك
                </p>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}