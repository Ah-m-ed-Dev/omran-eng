// components/layout/Header.jsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Home, Briefcase, FolderOpen, Users, Phone, ChevronRight } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY < 50) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }

      if (window.innerWidth < 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setHidden(true);
        } else {
          setHidden(false);
        }
      } else {
        setHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 80;
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* ===== هيدر سطح المكتب (جانبي) ===== */}
      {!isMobile && (
        <header
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`
            fixed left-4 top-1/2 -translate-y-1/2 z-50 transition-all duration-300 ease-in-out
            ${scrolled 
              ? "bg-[#0F1A2C]/60 backdrop-blur-xl shadow-2xl rounded-full border border-[#0D9488]/20 py-4" 
              : "bg-[#0F1A2C]/40 backdrop-blur-md rounded-full border border-[#0D9488]/10 py-5 shadow-lg shadow-black/20"
            }
            ${isHovered ? "px-5" : "px-3"}
            hover:shadow-[0_0_40px_rgba(13,148,136,0.15)]
          `}
          dir="ltr"
        >
          <nav className="flex flex-col items-center gap-3">
            <Link href="/" className="group relative flex items-center justify-center">
              <div className={`
                w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500
                ${scrolled 
                  ? "bg-gradient-to-br from-[#0D9488] to-[#14B8A6] text-white shadow-lg shadow-[#0D9488]/40" 
                  : "bg-[#0D9488]/20 text-[#0D9488] backdrop-blur-sm border border-[#0D9488]/20"
                }
                hover:scale-110 transition-transform duration-300
              `}>
                <svg 
                  className="w-5 h-5" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M3 21h18" />
                  <path d="M5 21V7l4-4 4 4v14" />
                  <path d="M19 21V11l-4-4" />
                  <path d="M9 9h.01" />
                  <path d="M9 13h.01" />
                  <path d="M9 17h.01" />
                  <rect x="13" y="13" width="4" height="8" rx="0.5" />
                </svg>
              </div>
              <span className="absolute left-16 whitespace-nowrap text-sm font-bold text-[#0D9488] bg-[#0F1A2C]/80 backdrop-blur-sm px-3 py-1 rounded-full border border-[#0D9488]/30 font-aref-ruqaa-bold shadow-lg shadow-black/20">
                عمران
              </span>
            </Link>

            <div className="w-6 h-px bg-gradient-to-r from-transparent via-[#0D9488]/30 to-transparent"></div>

            {[
              { icon: Home, label: "الرئيسية", href: "/" },
              { icon: Users, label: "من نحن", href: "#about" },
              { icon: Briefcase, label: "الخدمات", href: "#services" },
              { icon: FolderOpen, label: "المشاريع", href: "#projects" },
              { icon: Phone, label: "اتصل بنا", href: "#contact" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith("#")) {
                    scrollToSection(e, item.href.substring(1));
                  }
                }}
                className={`
                  group relative flex items-center justify-center w-11 h-11 rounded-full
                  transition-all duration-300 
                  bg-[#0D9488]/5 backdrop-blur-sm border border-[#0D9488]/10
                  hover:bg-[#0D9488]/20 hover:border-[#0D9488]/30 hover:scale-110
                  text-[#0D9488] hover:text-white
                  shadow-lg shadow-black/10 hover:shadow-[0_0_30px_rgba(13,148,136,0.2)]
                `}
                aria-label={item.label}
              >
                <item.icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                {isHovered && (
                  <span className="absolute left-14 whitespace-nowrap text-sm text-white/90 bg-[#0F1A2C]/90 backdrop-blur-sm px-3 py-1 rounded-full border border-[#0D9488]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg shadow-black/20">
                    {item.label}
                  </span>
                )}
              </a>
            ))}

            <div className="w-6 h-px bg-gradient-to-r from-transparent via-[#0D9488]/30 to-transparent"></div>
          </nav>
        </header>
      )}

      {/* ===== هيدر الجوال ===== */}
      {isMobile && (
        <>
          {hidden && (
            <button
              onClick={() => setHidden(false)}
              className="fixed left-4 top-1/2 -translate-y-1/2 z-40 bg-[#0F1A2C]/60 backdrop-blur-xl rounded-full py-4 px-2 border border-[#0D9488]/20 shadow-xl shadow-black/20 hover:bg-[#0F1A2C]/80 transition-all duration-300 group hover:scale-110"
              aria-label="إظهار القائمة"
            >
              <ChevronRight className="w-4 h-4 text-[#0D9488] group-hover:scale-110 transition-transform" />
            </button>
          )}

          <header
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`
              fixed z-50 transition-all duration-700 ease-in-out
              ${isAtTop 
                ? "top-4 left-4 right-4 -translate-y-0" 
                : `left-4 top-1/2 -translate-y-1/2 ${hidden ? "-translate-x-[120%] opacity-0" : "translate-x-0"}`
              }
              ${isAtTop 
                ? `bg-[#0F1A2C]/60 backdrop-blur-xl rounded-full border border-[#0D9488]/20 shadow-xl shadow-black/20 py-2 px-4`
                : `${scrolled 
                    ? "bg-[#0F1A2C]/60 backdrop-blur-xl shadow-2xl rounded-full border border-[#0D9488]/20 py-3" 
                    : "bg-[#0F1A2C]/40 backdrop-blur-md rounded-full border border-[#0D9488]/10 py-4 shadow-lg shadow-black/20"
                  }
                  ${isHovered ? "px-4" : "px-2.5"}`
              }
              hover:shadow-[0_0_40px_rgba(13,148,136,0.15)]
            `}
            dir={isAtTop ? "rtl" : "ltr"}
          >
            {isAtTop ? (
              // ===== هيدر علوي للجوال =====
              <div className="px-2 mx-auto max-w-7xl flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                  <div className={`
                    w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500
                    ${scrolled 
                      ? "bg-gradient-to-br from-[#0D9488] to-[#14B8A6] text-white shadow-lg shadow-[#0D9488]/40" 
                      : "bg-[#0D9488]/20 text-[#0D9488] backdrop-blur-sm border border-[#0D9488]/20"
                    }
                    group-hover:scale-110 transition-transform
                  `}>
                    <svg 
                      className="w-4 h-4" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M3 21h18" />
                      <path d="M5 21V7l4-4 4 4v14" />
                      <path d="M19 21V11l-4-4" />
                      <path d="M9 9h.01" />
                      <path d="M9 13h.01" />
                      <path d="M9 17h.01" />
                      <rect x="13" y="13" width="4" height="8" rx="0.5" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold text-white font-aref-ruqaa-bold">عمران</span>
                </Link>

                <nav className="flex items-center gap-2">
                  {[
                    { icon: Home, href: "/", label: "الرئيسية" },
                    { icon: Briefcase, href: "#services", label: "الخدمات" },
                    { icon: FolderOpen, href: "#projects", label: "المشاريع" },
                    { icon: Phone, href: "#contact", label: "اتصل بنا" },
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      onClick={(e) => {
                        if (item.href.startsWith("#")) {
                          scrollToSection(e, item.href.substring(1));
                        }
                      }}
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0D9488]/10 backdrop-blur-sm border border-[#0D9488]/20 text-[#0D9488] hover:bg-[#0D9488]/30 hover:text-white hover:scale-110 transition-all duration-300"
                      aria-label={item.label}
                    >
                      <item.icon className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </nav>
              </div>
            ) : (
              // ===== هيدر جانبي للجوال =====
              <nav className="flex flex-col items-center gap-2">
                <Link href="/" className="group relative flex items-center justify-center">
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500
                    ${scrolled 
                      ? "bg-gradient-to-br from-[#0D9488] to-[#14B8A6] text-white shadow-lg shadow-[#0D9488]/40" 
                      : "bg-[#0D9488]/20 text-[#0D9488] backdrop-blur-sm border border-[#0D9488]/20"
                    }
                    hover:scale-110 transition-transform
                  `}>
                    <svg 
                      className="w-4 h-4" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M3 21h18" />
                      <path d="M5 21V7l4-4 4 4v14" />
                      <path d="M19 21V11l-4-4" />
                      <path d="M9 9h.01" />
                      <path d="M9 13h.01" />
                      <path d="M9 17h.01" />
                      <rect x="13" y="13" width="4" height="8" rx="0.5" />
                    </svg>
                  </div>
                  {isHovered && (
                    <span className="absolute left-12 whitespace-nowrap text-xs font-bold text-[#0D9488] bg-[#0F1A2C]/80 backdrop-blur-sm px-2 py-1 rounded-full border border-[#0D9488]/30 font-aref-ruqaa-bold shadow-lg shadow-black/20">
                      عمران
                    </span>
                  )}
                </Link>

                <div className="w-5 h-px bg-gradient-to-r from-transparent via-[#0D9488]/30 to-transparent"></div>

                {[
                  { icon: Home, label: "الرئيسية", href: "/" },
                  { icon: Briefcase, label: "الخدمات", href: "#services" },
                  { icon: FolderOpen, label: "المشاريع", href: "#projects" },
                  { icon: Users, label: "من نحن", href: "#about" },
                  { icon: Phone, label: "اتصل بنا", href: "#contact" },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith("#")) {
                        scrollToSection(e, item.href.substring(1));
                      }
                    }}
                    className={`
                      group relative flex items-center justify-center w-9 h-9 rounded-full
                      transition-all duration-300 
                      bg-[#0D9488]/5 backdrop-blur-sm border border-[#0D9488]/10
                      hover:bg-[#0D9488]/20 hover:border-[#0D9488]/30 hover:scale-110
                      text-[#0D9488] hover:text-white
                      shadow-lg shadow-black/10
                    `}
                    aria-label={item.label}
                  >
                    <item.icon className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" />
                    {isHovered && (
                      <span className="absolute left-12 whitespace-nowrap text-xs text-white/90 bg-[#0F1A2C]/90 backdrop-blur-sm px-2 py-1 rounded-full border border-[#0D9488]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg shadow-black/20">
                        {item.label}
                      </span>
                    )}
                  </a>
                ))}

                <div className="w-5 h-px bg-gradient-to-r from-transparent via-[#0D9488]/30 to-transparent"></div>
              </nav>
            )}
          </header>
        </>
      )}
    </>
  );
}