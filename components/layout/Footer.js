// components/layout/Footer.jsx
"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Building2,
  ChevronUp,
  Send
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

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const currentYear = new Date().getFullYear();

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const footerLinks = [
    {
      title: "روابط سريعة",
      links: [
        { label: "الرئيسية", href: "/" },
        { label: "من نحن", href: "#about" },
        { label: "الخدمات", href: "#services" },
        { label: "المشاريع", href: "#projects" },
        { label: "اتصل بنا", href: "#contact" },
      ]
    },
    {
      title: "خدماتنا",
      links: [
        { label: "التصميم الهندسي", href: "#services" },
        { label: "الإشراف على المشاريع", href: "#services" },
        { label: "الاستشارات الهندسية", href: "#services" },
        { label: "إدارة المشاريع", href: "#services" },
        { label: "السلامة والجودة", href: "#services" },
      ]
    }
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
    <footer 
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0F1A2C] border-t border-[#0D9488]/20"
      dir="rtl"
    >
      
      {/* ===== خلفية زجاجية متحركة ===== */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0D9488]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#14B8A6]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#2DD4BF]/5 rounded-full blur-3xl"></div>
      </div>

      {/* ===== المحتوى ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 md:py-16">
        
        {/* ===== الشبكة ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* ===== العمود 1: الشعار والمعلومات ===== */}
          <div 
            className={`lg:col-span-1 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#0D9488]/20 backdrop-blur-sm border border-[#0D9488]/30 flex items-center justify-center text-[#0D9488]">
                <Building2 className="w-5 h-5" />
              </div>
              {/* ===== كلمة عمران بنفس خط الهيرو ===== */}
              <span className="text-4xl font-bold font-aref-ruqaa-bold text-white">
                عمران
              </span>
            </div>

            <p className="text-white/50 text-sm leading-relaxed font-cairo-light mb-4">
              نقدم حلولاً هندسية متكاملة تجمع بين الخبرة والإبداع، 
              مع الالتزام بأعلى معايير الجودة والإتقان.
            </p>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/40 text-xs">
                <MapPin className="w-3.5 h-3.5 text-[#0D9488]" />
                <span className="font-cairo-light">الدمام، المملكة العربية السعودية</span>
              </div>
              <div className="flex items-center gap-2 text-white/40 text-xs">
                <Phone className="w-3.5 h-3.5 text-[#0D9488]" />
                <span className="font-cairo-light">+966 55 123 4567</span>
              </div>
              <div className="flex items-center gap-2 text-white/40 text-xs">
                <Mail className="w-3.5 h-3.5 text-[#0D9488]" />
                <span className="font-cairo-light">info@omran-eng.com</span>
              </div>
              <div className="flex items-center gap-2 text-white/40 text-xs">
                <Clock className="w-3.5 h-3.5 text-[#0D9488]" />
                <span className="font-cairo-light">الأحد - الخميس، 8ص - 6م</span>
              </div>
            </div>
          </div>

          {/* ===== العمود 2: روابط سريعة ===== */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h4 className="text-white font-bold font-cairo-bold mb-4 text-sm">
              {footerLinks[0].title}
            </h4>
            <ul className="space-y-2.5">
              {footerLinks[0].links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-[#0D9488] text-sm font-cairo-light transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-1"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#0D9488]/30"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== العمود 3: خدماتنا ===== */}
          <div 
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h4 className="text-white font-bold font-cairo-bold mb-4 text-sm">
              {footerLinks[1].title}
            </h4>
            <ul className="space-y-2.5">
              {footerLinks[1].links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-[#0D9488] text-sm font-cairo-light transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-1"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#0D9488]/30"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== العمود 4: النشرة البريدية ===== */}
          <div 
            className={`transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h4 className="text-white font-bold font-cairo-bold mb-4 text-sm">
              اشترك في نشرتنا
            </h4>
            <p className="text-white/40 text-sm font-cairo-light mb-4">
              احصل على أحدث أخبارنا وعروضنا
            </p>
            
            <div className="flex flex-col gap-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/30 font-cairo-light focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all duration-300"
                />
              </div>
              <button className="group relative overflow-hidden bg-[#0D9488] text-white hover:bg-[#14B8A6] px-4 py-2.5 rounded-xl font-cairo-medium transition-all duration-300 flex items-center justify-center gap-2">
                <span className="relative z-10 flex items-center gap-2 text-sm">
                  <span>اشترك</span>
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
              </button>
            </div>

            {/* ===== السوشيال ميديا - Font Awesome ===== */}
            <div className="flex flex-wrap gap-2 mt-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:bg-[#0D9488] hover:border-[#0D9488] transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ===== الحدود السفلية ===== */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-cairo-light">
            © {currentYear} عمران للاستشارات الهندسية. جميع الحقوق محفوظة.
          </p>
          
          <div className="flex items-center gap-4">
            <Link href="#" className="text-white/30 hover:text-[#0D9488] text-xs font-cairo-light transition-colors duration-300">
              سياسة الخصوصية
            </Link>
            <span className="text-white/10">|</span>
            <Link href="#" className="text-white/30 hover:text-[#0D9488] text-xs font-cairo-light transition-colors duration-300">
              شروط الاستخدام
            </Link>
          </div>

          {/* ===== زر العودة للأعلى ===== */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-white/30 hover:text-[#0D9488] text-xs font-cairo-light transition-all duration-300"
          >
            <span>العودة للأعلى</span>
            <ChevronUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </footer>
  );
}