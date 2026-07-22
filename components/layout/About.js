// components/sections/About.jsx
"use client";
import { useEffect, useRef, useState } from "react";
import { Target, Eye, Users, Award, Clock, CheckCircle } from "lucide-react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
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

  const stats = [
    { value: "+10", label: "سنوات خبرة", icon: Award },
    { value: "+50", label: "مشروع منفذ", icon: CheckCircle },
    { value: "+30", label: "عميل راضٍ", icon: Users },
    { value: "24/7", label: "دعم مستمر", icon: Clock },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-[#E8EDF2] to-[#D5DCE4]"
      dir="rtl"
      id="about"
    >
      
      {/* ===== خلفية زجاجية ===== */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0D9488]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0D9488]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0D9488]/5 rounded-full blur-3xl"></div>
      </div>

      {/* ===== المحتوى ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* ===== العنوان ===== */}
        <div 
          className={`text-center mb-10 md:mb-14 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block text-[#0D9488] text-sm tracking-[0.2em] uppercase font-cairo-light border border-[#0D9488]/20 rounded-full px-4 py-1 backdrop-blur-xl bg-white/30 shadow-lg shadow-black/5 mb-4">
            من نحن
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F1A2C]">
            نبني <span className="text-[#0D9488]">المستقبل</span> بإتقان
          </h2>
          <p className="mt-3 text-[#0F1A2C]/50 max-w-2xl mx-auto font-cairo-light">
            نقدم حلولاً هندسية متكاملة تجمع بين الخبرة والإبداع
          </p>
        </div>

        {/* ===== البطاقات الزجاجية ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* ===== الرؤية ===== */}
          <div 
            className={`group transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="h-full p-6 md:p-8 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-xl shadow-black/10 hover:shadow-[0_0_60px_rgba(13,148,136,0.15)] transition-all duration-500 hover:-translate-y-2 hover:border-[#0D9488]/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-11 h-11 rounded-full bg-white/30 backdrop-blur-xl border border-white/40 flex items-center justify-center text-[#0D9488] group-hover:scale-110 group-hover:bg-[#0D9488]/20 transition-all duration-300">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0F1A2C] font-cairo-bold">رؤيتنا</h3>
              </div>
              <p className="text-[#0F1A2C]/70 leading-relaxed font-cairo-light text-sm">
                أن نكون الشريك الهندسي الأول، ونقدم حلولاً مبتكرة 
                تجمع بين الجمال والوظيفة، مع الالتزام بأعلى معايير الجودة.
              </p>
              <div className="mt-4 w-12 h-0.5 bg-gradient-to-r from-[#0D9488]/40 to-transparent rounded-full group-hover:w-20 transition-all duration-500"></div>
            </div>
          </div>

          {/* ===== الرسالة ===== */}
          <div 
            className={`group transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="h-full p-6 md:p-8 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-xl shadow-black/10 hover:shadow-[0_0_60px_rgba(13,148,136,0.15)] transition-all duration-500 hover:-translate-y-2 hover:border-[#0D9488]/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-11 h-11 rounded-full bg-white/30 backdrop-blur-xl border border-white/40 flex items-center justify-center text-[#0D9488] group-hover:scale-110 group-hover:bg-[#0D9488]/20 transition-all duration-300">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0F1A2C] font-cairo-bold">رسالتنا</h3>
              </div>
              <p className="text-[#0F1A2C]/70 leading-relaxed font-cairo-light text-sm">
                نضع خبرتنا في خدمة عملائنا، ونقدم استشارات متكاملة 
                من التخطيط إلى التنفيذ، مع ضمان الجودة والشفافية.
              </p>
              <div className="mt-4 w-12 h-0.5 bg-gradient-to-r from-[#0D9488]/40 to-transparent rounded-full group-hover:w-20 transition-all duration-500"></div>
            </div>
          </div>

        </div>

        {/* ===== الإحصائيات ===== */}
        <div 
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {stats.map((stat, i) => (
            <div 
              key={i}
              className="text-center p-4 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg shadow-black/5 hover:shadow-[0_0_40px_rgba(13,148,136,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0D9488]/20 group"
            >
              <stat.icon className="w-5 h-5 text-[#0D9488] mx-auto mb-1 group-hover:scale-110 group-hover:text-[#0D9488]/80 transition-all duration-300" />
              <p className="text-xl md:text-2xl font-bold text-[#0D9488] font-cairo-bold">{stat.value}</p>
              <p className="text-[#0F1A2C]/40 text-xs font-cairo-light">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* ===== القيم ===== */}
        <div 
          className={`mt-6 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="p-5 md:p-6 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/30 shadow-xl shadow-black/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-white/30 backdrop-blur-xl border border-white/40 flex items-center justify-center text-[#0D9488]">
                <Award className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#0F1A2C] font-cairo-bold">قيمنا</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "الجودة", icon: CheckCircle },
                { label: "الشفافية", icon: Eye },
                { label: "الإتقان", icon: Target },
                { label: "الاستدامة", icon: Award },
              ].map((item, i) => (
                <div 
                  key={i}
                  className="text-center p-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 hover:border-[#0D9488]/30 transition-all duration-300 hover:bg-white/30 hover:-translate-y-1 group"
                >
                  <item.icon className="w-5 h-5 text-[#0D9488] mx-auto mb-1 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-[#0F1A2C]/60 text-xs font-cairo-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}