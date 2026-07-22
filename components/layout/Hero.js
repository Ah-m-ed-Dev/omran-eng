// components/sections/Hero.jsx
"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
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

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden" 
      dir="rtl"
    >
      
      {/* ===== فيديو الخلفية ===== */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://www.pexels.com/download/video/27050277/" type="video/mp4" />
      </video>

      {/* ===== طبقة تعتيم ===== */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70"></div>

      {/* ===== المحتوى ===== */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        
        {/* ===== العنوان الرئيسي ===== */}
        <h1 
          className={`text-2xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* ===== كلمة عمران - فيروزي غامق بدون هايلايتر ===== */}
          <span 
            className="text-7xl font-aref-ruqaa text-[#0D9488] drop-shadow-[0_0_40px_rgba(13,148,136,0.3)] drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
            style={{ fontWeight: 700 }}
          >
            عمران
          </span>
          <br />
          
          {/* ===== الجملة الثانية ===== */}
          <span className="text-5xl drop-shadow-[0_0_40px_rgba(13,148,136,0.2)] drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
            شريكك <span className="text-[#0D9488] drop-shadow-[0_0_40px_rgba(13,148,136,0.4)] drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">للبناء</span> الأمثل
          </span>
        </h1>

        {/* ===== النص الوصفي ===== */}
        <p 
          className={`max-w-xl mt-4 text-lg sm:text-xl text-white/80 font-light leading-relaxed transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 4px 10px rgba(0,0,0,0.5)' }}
        >
          شريكك الموثوق
          {' '}
          <span className="text-white/60">من</span>
          {' '}
          <span className="text-[#0D9488] font-medium" style={{ textShadow: '0 0 30px rgba(13,148,136,0.3), 0 2px 20px rgba(0,0,0,0.8)' }}>
            الفكرة
          </span>
          {' '}
          <span className="text-white/60">إلى</span>
          {' '}
          <span className="text-[#0D9488] font-medium" style={{ textShadow: '0 0 30px rgba(13,148,136,0.3), 0 2px 20px rgba(0,0,0,0.8)' }}>
            الإنجاز
          </span>
        </p>

     {/* ===== الأزرار ===== */}
<div 
  className={`flex flex-row flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 mt-8 transition-all duration-700 delay-400 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}
>
  <Link
    href="#contact"
    className="group relative overflow-hidden bg-[#0D9488]/10 backdrop-blur-md border border-[#0D9488]/30 text-white hover:bg-[#0D9488]/20 hover:border-[#0D9488]/60 hover:scale-105 transition-all duration-300 px-3 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm shadow-lg shadow-black/30 flex-1 sm:flex-none text-center"
  >
    <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2">
      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
      <span className="whitespace-nowrap">اطلب استشارتك الآن</span>
    </span>
    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-[#0D9488]/20 to-transparent"></span>
  </Link>
  <Link
    href="#projects"
    className="group relative overflow-hidden bg-[#0D9488]/5 backdrop-blur-md border border-[#0D9488]/20 text-white hover:bg-[#0D9488]/15 hover:border-[#0D9488]/40 transition-all duration-300 px-3 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm flex-1 sm:flex-none text-center"
  >
    <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2">
      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
      <span className="whitespace-nowrap">استكشف مشاريعنا</span>
    </span>
    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-[#0D9488]/10 to-transparent"></span>
  </Link>
</div>
      </div>
    </section>
  );
}