// app/layout.js
import "./globals.css";

// ===== استيراد الخطوط من Google Fonts =====
import { Inter, Aref_Ruqaa, Cairo, Tajawal } from "next/font/google";

// ===== تهيئة خط Inter (للإنجليزية) =====
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// ===== تهيئة خط Aref Ruqaa (للكلمة الرئيسية) =====
const arefRuqaa = Aref_Ruqaa({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-aref-ruqaa",
});

// ===== تهيئة خط Cairo (للنصوص الطويلة) =====
const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  variable: "--font-cairo",
});

// ===== تهيئة خط Tajawal (للجمل القصيرة) =====
const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
});

export const metadata = {
  title: "عمران للاستشارات الهندسية",
  description: "استشارات هندسية متكاملة بإتقان",
};

export default function RootLayout({ children }) {
  return (
    <html 
      lang="ar" 
      dir="rtl" 
      className={`
        ${inter.variable}
        ${arefRuqaa.variable}
        ${cairo.variable}
        ${tajawal.variable}
      `}
    >
      <body className="font-cairo">{children}</body>
    </html>
  );
}