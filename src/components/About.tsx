"use client";
import { Check } from "tabler-icons-react";

export default function AboutSection() {
  const values = [
    "دمج الهندسة الزراعية مع التصميم المعماري.",
    "حلول ري ذكية تقلل استهلاك المياه بنسبة 30%.",
    "اختيار نباتات مستدامة تتناسب مع المناخ المحلي.",
    "التزام تام بالجداول الزمنية للتنفيذ.",
  ];

  return (
    <section id="about" className="py-20 overflow-hidden">
      <div className="container mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* الجانب الأيمن: الصور */}
          <div className="lg:w-1/2 relative" data-aos="fade-left">
            {/* الصورة الرئيسية */}
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
              <img
                src="/about-landscape.jpg"
                alt="Ravinala Landscape Work"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* مربع صغير إضافي (يظهر سنة التأسيس بشكل أنيق) */}
            <div
              className="absolute -bottom-8 -right-8 bg-main p-8 rounded-[2rem] text-white shadow-2xl z-20 hidden md:block"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <p className="text-4xl font-black mb-1">2025</p>
              <p className="text-sm font-bold opacity-80 uppercase tracking-widest">
                تأسيس الرؤية
              </p>
            </div>

            {/* عنصر ديكوري خلف الصورة */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-main/5 rounded-full blur-3xl -z-0" />
          </div>

          {/* الجانب الأيسر: المحتوى النصي */}
          <div className="lg:w-1/2" data-aos="fade-right">
            <div className="inline-block px-4 py-1.5 bg-main/5 rounded-full text-main font-bold text-sm mb-6">
              عن رافينالا
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-main leading-tight mb-8">
              نعيد تعريف{" "}
              <span className="text-main-light">المساحات الخضراء</span> بمنظور
              هندسي حديث
            </h2>

            <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
              نحن فريق من المهندسين الشباب الشغوفين بتحويل المساحات الصامتة إلى
              جنات حية. في رافينالا، لا نكتفي بوضع الأشجار، بل نصمم أنظمة بيئية
              متكاملة توازن بين الجمال البصري والاستدامة البيئية، لضمان استمرار
              جمال منزلك أو مشروعك لسنوات طويلة.
            </p>

            {/* قائمة القيم */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {values.map((val, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-accent/20 p-1 rounded-full text-accent">
                    <Check size={18} strokeWidth={3} />
                  </div>
                  <span className="text-slate-700 font-bold text-sm">
                    {val}
                  </span>
                </div>
              ))}
            </div>

            {/* زر "اعرف أكثر" */}
            <div className="mt-10">
              <button className="bg-main hover:bg-main-light text-white px-8 py-4 rounded-2xl font-black transition-all hover:shadow-xl hover:shadow-main/20 active:scale-95">
                قصتنا وأهدافنا
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
