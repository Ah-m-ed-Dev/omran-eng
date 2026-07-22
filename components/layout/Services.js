// components/sections/Services.jsx
"use client";
import { useEffect, useRef, useState } from "react";
import { 
  PenTool, 
  Building2, 
  ClipboardCheck, 
  LineChart, 
  Shield, 
  Recycle,
  ArrowLeft,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

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

    return () => {
      window.removeEventListener("resize", checkMobile);
      observer.disconnect();
    };
  }, []);

  const services = [
    {
      icon: PenTool,
      title: "التصميم الهندسي",
      description: "نقدم تصاميم هندسية مبتكرة تجمع بين الجمال والوظيفة، مع مراعاة أحدث المعايير العالمية.",
      features: ["تصميم معماري", "تصميم إنشائي", "نمذجة 3D"],
      color: "#0D9488"
    },
    {
      icon: Building2,
      title: "الإشراف على المشاريع",
      description: "إشراف كامل على تنفيذ المشاريع لضمان الجودة والالتزام بالجدول الزمني والميزانية المحددة.",
      features: ["متابعة تنفيذ", "مراقبة جودة", "إدارة عقود"],
      color: "#14B8A6"
    },
    {
      icon: ClipboardCheck,
      title: "الاستشارات الهندسية",
      description: "استشارات متخصصة في جميع المجالات الهندسية، من التخطيط الاستراتيجي إلى الحلول التنفيذية.",
      features: ["دراسات جدوى", "تحليل مخاطر", "استشارات فنية"],
      color: "#2DD4BF"
    },
    {
      icon: LineChart,
      title: "إدارة المشاريع",
      description: "إدارة متكاملة للمشاريع باستخدام أحدث الأدوات والتقنيات لضمان نجاح المشروع في كل مرحلة.",
      features: ["تخطيط مشاريع", "إدارة موارد", "متابعة أداء"],
      color: "#0D9488"
    },
    {
      icon: Shield,
      title: "السلامة والجودة",
      description: "تطبيق أعلى معايير السلامة والجودة في جميع المشاريع، مع الالتزام باللوائح والمعايير المحلية.",
      features: ["أنظمة سلامة", "ضمان جودة", "تدقيق فني"],
      color: "#14B8A6"
    },
    {
      icon: Recycle,
      title: "الاستدامة البيئية",
      description: "حلول هندسية مستدامة تراعي البيئة وتقلل من الأثر البيئي، مع تحقيق أعلى كفاءة للمشاريع.",
      features: ["تصميم أخضر", "كفاءة طاقة", "إدارة مخلفات"],
      color: "#2DD4BF"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-[#E8EDF2] to-[#D5DCE4]"
      dir="rtl"
      id="services"
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
              خدماتنا
            </span>
           
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F1A2C]">
            حلول <span className="text-[#0D9488]">هندسية</span> متكاملة
          </h2>
          <p className="mt-3 text-[#0F1A2C]/50 max-w-2xl mx-auto font-cairo-light">
            نقدم مجموعة متكاملة من الخدمات الهندسية لتلبية احتياجات مشاريعك
          </p>
        </div>

        {/* ===== عرض الجوال (سلايدر) ===== */}
        {isMobile && (
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(${currentSlide * 100}%)` }}
              >
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="min-w-full p-4"
                  >
                    <div className="h-full p-6 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-xl shadow-black/10">
                      
                      {/* ===== الأيقونة ===== */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-xl bg-white/30 backdrop-blur-xl border border-white/40 flex items-center justify-center text-[#0D9488]">
                          <service.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-[#0F1A2C] font-cairo-bold">{service.title}</h3>
                          <span className="text-[#0F1A2C]/40 text-xs font-cairo-light">خدمة {index + 1}</span>
                        </div>
                      </div>

                      {/* ===== الوصف ===== */}
                      <p className="text-[#0F1A2C]/70 leading-relaxed font-cairo-light text-sm mb-4">
                        {service.description}
                      </p>

                      {/* ===== المميزات ===== */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.features.map((feature, i) => (
                          <span 
                            key={i}
                            className="text-[10px] text-[#0F1A2C]/50 bg-white/30 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 font-cairo-light"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* ===== زر التفاصيل ===== */}
                      <div className="flex items-center gap-2 text-[#0D9488] cursor-pointer">
                        <span className="text-sm font-cairo-medium">تفاصيل الخدمة</span>
                        <ArrowLeft className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ===== أزرار التحكم ===== */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-xl border border-white/40 flex items-center justify-center text-[#0D9488] hover:bg-[#0D9488] hover:text-white transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      currentSlide === index 
                        ? 'w-8 h-2 bg-[#0D9488]' 
                        : 'w-2 h-2 bg-[#0D9488]/30 hover:bg-[#0D9488]/50'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-xl border border-white/40 flex items-center justify-center text-[#0D9488] hover:bg-[#0D9488] hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>

            {/* ===== مؤشر التقدم ===== */}
            <div className="text-center mt-4">
              <span className="text-[#0F1A2C]/40 text-xs font-cairo-light">
                {currentSlide + 1} / {services.length}
              </span>
            </div>
          </div>
        )}

        {/* ===== عرض سطح المكتب (شبكة) ===== */}
        {!isMobile && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`group transition-all duration-700 delay-${Math.min(200 + index * 100, 500)} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(0)}
                >
                  <div className="h-full p-6 md:p-8 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-xl shadow-black/10 hover:shadow-[0_0_60px_rgba(13,148,136,0.15)] transition-all duration-500 hover:-translate-y-2 hover:border-[#0D9488]/30 relative overflow-hidden">
                    
                    {/* ===== خلفية زجاجية متحركة ===== */}
                    <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[${service.color}]/10 blur-2xl transition-all duration-700 group-hover:scale-150`}></div>
                    
                    {/* ===== الأيقونة ===== */}
                    <div className="relative mb-4">
                      <div className="w-14 h-14 rounded-xl bg-white/30 backdrop-blur-xl border border-white/40 flex items-center justify-center text-[#0D9488] group-hover:scale-110 group-hover:bg-[#0D9488]/20 transition-all duration-300">
                        <service.icon className="w-6 h-6" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#0D9488]/20 backdrop-blur-sm border border-[#0D9488]/30 flex items-center justify-center text-[#0D9488] text-[10px] font-bold">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>

                    {/* ===== العنوان ===== */}
                    <h3 className="text-lg font-bold text-[#0F1A2C] font-cairo-bold mb-2 group-hover:text-[#0D9488] transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* ===== الوصف ===== */}
                    <p className="text-[#0F1A2C]/77 leading-relaxed font-cairo-light text-sm mb-4">
                      {service.description}
                    </p>

                    {/* ===== المميزات ===== */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature, i) => (
                        <span 
                          key={i}
                          className="text-[10px] text-gray-800 bg-white/30 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 font-cairo-light"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* ===== زر التفاصيل ===== */}
                    <div className="flex items-center gap-2 text-[#0D9488] group-hover:gap-3 transition-all duration-300 cursor-pointer">
                      <span className="text-sm font-cairo-medium">تفاصيل الخدمة</span>
                      <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>

                    {/* ===== خط سفلي متحرك ===== */}
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[${service.color}] to-transparent transition-all duration-700 ${activeIndex === index ? 'w-full' : 'w-0'}`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* ===== زر إضافي ===== */}
           <div 
  className={`text-center mt-10 transition-all duration-700 delay-600 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}
>
  <a
    href="#contact"
    className="group relative overflow-hidden bg-white/20 backdrop-blur-xl border border-white/30 text-[#0F1A2C] hover:text-white px-8 py-3 rounded-full font-cairo-medium shadow-lg shadow-black/5 hover:shadow-[0_0_40px_rgba(13,148,136,0.15)] transition-all duration-300 hover:bg-[#0D9488] hover:border-[#0D9488] inline-flex items-center"
  >
    <span className="relative z-10 flex items-center gap-2">
      <span>طلب استشارتك الآن</span>
      <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
    </span>
    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
  </a>
</div>
          </>
        )}

      </div>
    </section>
  );
}