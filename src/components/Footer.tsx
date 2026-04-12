"use client";
import {
  Plant2,
  BrandLinkedin,
  BrandInstagram,
  BrandFacebook,
  ArrowUp,
  Heart,
} from "tabler-icons-react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-main text-white pt-20 pb-10 relative overflow-hidden">
      {/* لمسة جمالية في الخلفية */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* 1. البراند والوصف */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-white p-2 rounded-xl">
                <Plant2 size={24} className="text-main" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl leading-none">
                  RAVINALA
                </span>
                <span className="text-[10px] tracking-[3px] font-bold opacity-60">
                  LANDSCAPE
                </span>
              </div>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
              شركة رائدة في مجال الإنشاءات الزراعية واللاندسكيب، نسعى لتحويل
              المساحات إلى جنات حية بأسلوب هندسي مستدام.
            </p>
            <div className="flex gap-4">
              {[BrandLinkedin, BrandInstagram, BrandFacebook].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-main transition-all"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* 2. روابط سريعة */}
          <div>
            <h4 className="text-lg font-black mb-6 border-r-4 border-accent pr-3">
              روابط سريعة
            </h4>
            <ul className="space-y-4 text-slate-300 font-medium text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-accent transition-colors"
                >
                  من نحن
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-accent transition-colors"
                >
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="hover:text-accent transition-colors"
                >
                  مشاريعنا
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. خدماتنا */}
          <div>
            <h4 className="text-lg font-black mb-6 border-r-4 border-accent pr-3">
              خدماتنا
            </h4>
            <ul className="space-y-4 text-slate-300 font-medium text-sm">
              <li>تصميم لاندسكيب 3D</li>
              <li>أنظمة ري أوتوماتيكية</li>
              <li>تنسيق حدائق منزلية</li>
              <li>صيانة دورية للمزروعات</li>
            </ul>
          </div>

          {/* 4. التواصل السريع */}
          <div>
            <h4 className="text-lg font-black mb-6 border-r-4 border-accent pr-3">
              تواصل معنا
            </h4>
            <p className="text-slate-300 text-sm mb-4">القاهرة، مصر</p>
            <p className="text-white font-black text-lg mb-6">
              info@ravinala.com
            </p>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-widest hover:text-white transition-colors"
            >
              العودة للأعلى{" "}
              <ArrowUp
                size={18}
                className="group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </div>
        </div>

        {/* سطر الحقوق السفلي */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-slate-400 font-medium">
          <p> رافينالا لاندسكيب © 2026 جميع الحقوق محفوظة. </p>
        </div>
      </div>
    </footer>
  );
}
