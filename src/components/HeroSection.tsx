"use client";
import { useEffect } from "react";
import { ArrowLeft } from "tabler-icons-react";
import Link from "next/link";
// تأكد من تثبيت AOS في مشروعك
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  // تفعيل AOS بمجرد تحميل المكون
  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة الأنميشن ثانية واحدة
      once: true, // الأنميشن يحدث مرة واحدة فقط
    });
  }, []);

  return (
    <section className="relative h-screen py-20 flex items-center justify-center text-white overflow-hidden">
      {/* 1. حاوية الخلفية (فيديو أو صورة) مع Overlay غامق */}
      <div className="absolute top-0 left-0 w-full h-full bg-white/95 z-20"></div>
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-background.png"
          alt="Hero Background"
          className="w-full h-full object-cover "
        />
      </div>

      {/* 2. حاوية المحتوى الرئيسي */}
      <div className="container mx-auto px-5 z-30 text-center">
        {/* شارة علوية بسيطة */}
        <div
          data-aos="fade-down"
          data-aos-delay="200"
          className="inline-flex items-center gap-2 bg-main/40 border border-white/20 px-4 py-1 rounded-full text-xs font-bold mb-6 tracking-wider"
        >
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span>خبرة تعيد الحياة لطبيعتك</span>
        </div>

        {/* العنوان الضخم (Heading) */}
        <h1
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8 text-slate-600"
        >
          نصمم{" "}
          <span className="text-accent underline underline-offset-8 decoration-wavy decoration-white/40">
            جنة
          </span>{" "}
          أرضية
          <br />
          بلمسة هندسية{" "}
          <span className="text-main-light bg-white px-3 py-1 rounded-3xl">
            مبتكرة
          </span>
        </h1>

        {/* الوصف الفرعي (Subtitle) */}
        <p
          data-aos="fade-up"
          data-aos-delay="600"
          className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-slate-600 font-medium leading-relaxed"
        >
          في رافينالا لاندسكيب، نجمع بين شغف الطبيعة ودقة الهندسة الزراعية. نحن
          لا نقوم فقط بتصميم مساحات، بل ننشئ نظمًا بيئية مستدامة تعكس هويتك
          وتضمن لك راحة البال طوال العام.
        </p>

        {/* أزرار الدعوة للإجراء (CTA Buttons) */}
        <div
          data-aos="zoom-in"
          data-aos-delay="800"
          className="flex flex-wrap justify-center gap-6"
        >
          {/* الزر الرئيسي */}
          <Link
            href="#contact"
            className="cursor-pointer group bg-accent hover:bg-white text-main px-10 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-accent/20 transition-all flex items-center gap-3 hover:-translate-y-1 active:scale-95"
          >
            <span>اطلب معاينة مجانية</span>
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform rtl:group-hover:translate-x-1"
            />
          </Link>

          {/* الزر الثانوي */}
          <Link
            href="#projects"
            className="cursor-pointer border-2 border-slate-600/40 hover:border-slate-600 text-slate-600 px-10 py-5 rounded-2xl font-black text-lg transition-colors hover:bg-white/10"
          >
            استكشف أعمالنا
          </Link>
        </div>
      </div>
    </section>
  );
}
