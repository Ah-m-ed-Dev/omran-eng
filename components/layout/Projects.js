// components/sections/Projects.jsx
"use client";
import { useEffect, useRef, useState } from "react";
import { 
  ArrowLeft, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight,
  Maximize2,
  Calendar,
  MapPin,
  Building2
} from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
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

  const projects = [
    {
      id: 1,
      title: "برج الأعمال المركزي",
      category: "مباني تجارية",
      location: "الرياض، المملكة العربية السعودية",
      year: "2024",
      description: "برج إداري مكون من 30 طابقاً بتصميم معماري عصري يدمج بين الجمال والوظيفة، مع أنظمة ذكية لإدارة المبنى.",
      image: "https://images.pexels.com/photos/28506253/pexels-photo-28506253.jpeg",
      features: ["30 طابق", "أنظمة ذكية", "مواقف سيارات", "مصاعد عالية السرعة"]
    },
    {
      id: 2,
      title: "مدينة الزهور السكنية",
      category: "مشاريع سكنية",
      location: "جدة، المملكة العربية السعودية",
      year: "2023",
      description: "مجمع سكني متكامل يضم 500 وحدة سكنية بتصاميم متنوعة، مع مرافق وخدمات تلبي احتياجات العصر الحديث.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      features: ["500 وحدة", "مساحات خضراء", "نوادي رياضية", "أمن 24/7"]
    },
    {
      id: 3,
      title: "مستشفى السلام التخصصي",
      category: "مباني صحية",
      location: "الدمام، المملكة العربية السعودية",
      year: "2024",
      description: "مستشفى متخصص بسعة 200 سرير، مزود بأحدث التقنيات الطبية وأنظمة السلامة المتطورة.",
      image: "https://images.pexels.com/photos/38087624/pexels-photo-38087624.jpeg",
      features: ["200 سرير", "تقنيات حديثة", "أنظمة سلامة", "عيادات متخصصة"]
    },
    {
      id: 4,
      title: "مجمع المدارس الدولية",
      category: "مباني تعليمية",
      location: "الخبر، المملكة العربية السعودية",
      year: "2023",
      description: "مجمع تعليمي متكامل يضم مدارس لجميع المراحل، مع مختبرات ومرافق رياضية حديثة.",
      image: "https://images.pexels.com/photos/31220287/pexels-photo-31220287.jpeg",
      features: ["جميع المراحل", "مختبرات", "مرافق رياضية", "مكتبة"]
    },
    {
      id: 5,
      title: "فندق النخبة الفاخر",
      category: "فنادق ومنتجعات",
      location: "مكة المكرمة، المملكة العربية السعودية",
      year: "2024",
      description: "فندق 5 نجوم يضم 300 غرفة وجناح، مع مطاعم راقية ومرافق ترفيهية متكاملة.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      features: ["300 غرفة", "مطاعم راقية", "مرافق ترفيهية", "خدمات فاخرة"]
    },
    {
      id: 6,
      title: "المركز الرياضي الأولمبي",
      category: "مشاريع رياضية",
      location: "الرياض، المملكة العربية السعودية",
      year: "2023",
      description: "مدينة رياضية متكاملة تضم استاد رئيسي وصالات رياضية مغطاة ومرافق تدريب على أعلى مستوى.",
      image: "https://images.pexels.com/photos/36293760/pexels-photo-36293760.jpeg",
      features: ["استاد رئيسي", "صالات مغطاة", "مرافق تدريب", "مواقف واسعة"]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-[#E8EDF2] to-[#D5DCE4]"
      dir="rtl"
      id="projects"
    >
      
      {/* ===== خلفية زجاجية متحركة ===== */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0D9488]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#14B8A6]/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-[#2DD4BF]/10 rounded-full blur-3xl animate-pulse delay-3000"></div>
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
              مشاريعنا
            </span>
         
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F1A2C]">
            أحدث <span className="text-[#0D9488]">مشاريعنا</span>
          </h2>
          <p className="mt-3 text-[#0F1A2C]/50 max-w-2xl mx-auto font-cairo-light">
            نفتخر بتنفيذ مشاريع متميزة تعكس خبرتنا وإبداعنا
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
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="min-w-full p-2"
                  >
                    <div className="rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-xl shadow-black/10 overflow-hidden">
                      
                      {/* ===== صورة المشروع ===== */}
                      <div className="relative w-full h-56 overflow-hidden group">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={800}
                          height={400}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        
                        {/* ===== زر تكبير ===== */}
                        <button 
                          onClick={() => openProject(project)}
                          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center text-white hover:bg-[#0D9488] hover:border-[#0D9488] transition-all duration-300"
                        >
                          <Maximize2 className="w-4 h-4" />
                        </button>

                        {/* ===== تصنيف المشروع ===== */}
                        <span className="absolute bottom-4 right-4 text-xs text-white/90 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                          {project.category}
                        </span>
                      </div>

                      {/* ===== معلومات المشروع ===== */}
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-[#0F1A2C] font-cairo-bold mb-2">
                          {project.title}
                        </h3>
                        
                        <div className="flex items-center gap-4 text-[#0F1A2C]/50 text-xs mb-3">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span className="font-cairo-light">{project.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span className="font-cairo-light">{project.year}</span>
                          </div>
                        </div>

                        <p className="text-[#0F1A2C]/80 leading-relaxed font-cairo-light text-sm mb-4">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.features.map((feature, i) => (
                            <span 
                              key={i}
                              className="text-[10px] text-[#0F1A2C]/80 bg-white/30 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 font-cairo-light"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
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
                {projects.map((_, index) => (
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
                {currentSlide + 1} / {projects.length}
              </span>
            </div>
          </div>
        )}

        {/* ===== عرض سطح المكتب (شبكة) ===== */}
        {!isMobile && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`group transition-all duration-700 delay-${Math.min(200 + index * 100, 500)} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-xl shadow-black/10 hover:shadow-[0_0_60px_rgba(13,148,136,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    
                    {/* ===== صورة المشروع ===== */}
                    <div className="relative w-full h-56 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* ===== زر تكبير ===== */}
                      <button 
                        onClick={() => openProject(project)}
                        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center text-white hover:bg-[#0D9488] hover:border-[#0D9488] transition-all duration-300 opacity-0 group-hover:opacity-100"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>

                      {/* ===== تصنيف المشروع ===== */}
                      <span className="absolute bottom-4 right-4 text-xs text-white/90 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                        {project.category}
                      </span>
                    </div>

                    {/* ===== معلومات المشروع ===== */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-[#0F1A2C] font-cairo-bold mb-2 group-hover:text-[#0D9488] transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <div className="flex items-center gap-4 text-[#0F1A2C]/50 text-xs mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span className="font-cairo-light">{project.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span className="font-cairo-light">{project.year}</span>
                        </div>
                      </div>

                      <p className="text-[#0F1A2C]/80 leading-relaxed font-cairo-light text-sm mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, i) => (
                          <span 
                            key={i}
                            className="text-[10px] text-[#0F1A2C]/80 bg-white/30 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 font-cairo-light"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
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
              <button className="group relative overflow-hidden bg-white/20 backdrop-blur-xl border border-white/30 text-[#0F1A2C] hover:text-white px-8 py-3 rounded-full font-cairo-medium shadow-lg shadow-black/5 hover:shadow-[0_0_40px_rgba(13,148,136,0.15)] transition-all duration-300 hover:bg-[#0D9488] hover:border-[#0D9488]">
                <span className="relative z-10 flex items-center gap-2">
                  <span>جميع المشاريع</span>
                  <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
              </button>
            </div>
          </>
        )}

      </div>

      {/* ===== نافذة عرض المشروع (Modal) ===== */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          onClick={closeProject}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ===== زر إغلاق ===== */}
            <button
              onClick={closeProject}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/30 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-[#0D9488] hover:border-[#0D9488] transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* ===== صورة المشروع ===== */}
            <div className="relative w-full h-72 md:h-96">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 right-6 left-6">
                <span className="text-xs text-white/90 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white font-cairo-bold mt-2">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* ===== معلومات المشروع ===== */}
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-4 text-[#0F1A2C]/ text-sm mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span className="font-cairo-light">{selectedProject.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="font-cairo-light">{selectedProject.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  <span className="font-cairo-light">{selectedProject.category}</span>
                </div>
              </div>

              <p className="text-white leading-relaxed font-cairo-light text-base mb-6">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {selectedProject.features.map((feature, i) => (
                  <span 
                    key={i}
                    className="text-xs text-[#0F1A2C]/ bg-white/30 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 font-cairo-light"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* ===== زر الطلب ===== */}
              <div className="mt-6 pt-6 border-t border-white/20">
                <button className="w-full group relative overflow-hidden bg-[#0D9488] text-white hover:bg-[#14B8A6] px-8 py-3 rounded-full font-cairo-medium shadow-lg shadow-[#0D9488]/30 transition-all duration-300">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span>اطلب استشارة لمشروعك</span>
                    <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}