"use client";
import { Quote } from "tabler-icons-react";

export default function QuoteSection() {
  return (
    <section className="py-20 bg-main relative overflow-hidden">
      {/* عناصر خلفية خفيفة (أوراق شجر أو دوائر) */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="container mx-auto px-5 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* أيقونة الاقتباس */}
          <div
            className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full text-accent mb-8"
            data-aos="zoom-in"
          >
            <Quote size={40} fill="currentColor" />
          </div>

          {/* نص الكوت */}
          <h2
            className="text-3xl md:text-5xl font-black text-white leading-tight mb-8"
            data-aos="fade-up"
          >
            "نحن لا نزرع الأشجار فحسب، بل نصمم{" "}
            <span className="text-accent">إرثاً أخضر</span> يتنفس بالحياة ليربط
            بين رفاهية الحاضر واستدامة المستقبل."
          </h2>

          {/* خط فاصل صغير */}
          <div
            className="w-24 h-1 bg-accent/50 mx-auto rounded-full"
            data-aos="stretch-x"
          />

          <p
            className="mt-6 text-white/60 font-bold uppercase tracking-[0.2em] text-sm"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            فريق رافينالا
          </p>
        </div>
      </div>
    </section>
  );
}
