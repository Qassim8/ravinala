"use client";
import {
  Phone,
  Mail,
  MapPin,
  BrandWhatsapp,
  Clock,
  Send,
  User,
  MessageDots,
  CircleCheck,
} from "tabler-icons-react";
import { useState, useEffect } from "react";

export default function ContactSection() {
  const [success, setSuccess] = useState(false);
  const [load, setLoad] = useState(false);

  // إخفاء رسالة النجاح تلقائياً
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      setLoad(true);
      const response = await fetch(
        "https://formsubmit.co/ajax/mohamedalgasim123@gmail.com", // استخدام AJAX لضمان الوصول
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        },
      );
      if (response.ok) {
        e.target.reset();
        setSuccess(true);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoad(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* رسالة النجاح العائمة */}
      {success && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 bg-green-600 text-white py-4 px-8 rounded-2xl shadow-2xl flex items-center gap-3 z-[9999] animate-bounce">
          <CircleCheck size={24} />
          <span className="font-bold text-lg">تم إرسال رسالتك بنجاح!</span>
        </div>
      )}

      <div className="container mx-auto px-5 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* 1. معلومات التواصل (الجانب الأيمن) */}
          <div className="lg:w-1/3" data-aos="fade-left">
            <div className="inline-block px-4 py-1.5 bg-main/5 rounded-full text-main font-bold text-sm mb-6">
              تواصل معنا
            </div>
            <h2 className="text-4xl font-black text-main mb-6 leading-tight">
              لنبدأ بتحويل <span className="text-main-light">مساحتك</span> إلى
              واقع حي
            </h2>
            <p className="text-slate-500 mb-10 leading-relaxed font-medium">
              فريقنا الهندسي جاهز للإجابة على استفساراتكم وتحديد موعد للمعاينة
              الميدانية.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: <Phone size={22} />,
                  label: "اتصل بنا",
                  val: "+966 50 000 0000",
                  link: "tel:+966500000000",
                },
                {
                  icon: <BrandWhatsapp size={22} />,
                  label: "واتساب",
                  val: "مراسلة فورية",
                  link: "https://wa.me/966500000000",
                },
                {
                  icon: <Mail size={22} />,
                  label: "الإيميل",
                  val: "info@ravinala.com",
                  link: "mailto:info@ravinala.com",
                },
                {
                  icon: <MapPin size={22} />,
                  label: "المقر",
                  val: "الرياض، المملكة العربية السعودية",
                  link: "#",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  className="flex items-center gap-4 p-5 rounded-3xl border border-slate-100 hover:border-main/20 hover:bg-stone-50 transition-all group"
                >
                  <div className="bg-white shadow-sm p-3 rounded-xl text-main group-hover:bg-main group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                      {item.label}
                    </p>
                    <p className="text-main font-black text-sm">{item.val}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* 2. الفورم (الجانب الأيسر) */}
          <div className="lg:w-2/3 w-full" data-aos="fade-right">
            <div className="bg-stone-50 p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm">
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_subject"
                  value="طلب جديد من موقع Ravinala Landscape"
                />

                <div className="space-y-2">
                  <label className="text-sm font-black text-main mr-2 flex items-center gap-2">
                    <User size={16} /> الاسم الكامل
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="أدخل اسمك الكريم"
                    className="form-input-custom"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-black text-main mr-2 flex items-center gap-2">
                    <Mail size={16} /> البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="example@mail.com"
                    className="form-input-custom"
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-black text-main mr-2 flex items-center gap-2">
                    <MessageDots size={16} /> تفاصيل المشروع أو الاستفسار
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    placeholder="اكتب لنا نبذة عن المساحة التي ترغب في تصميمها أو صيانتها..."
                    className="form-input-custom resize-none"
                  ></textarea>
                </div>

                <div className="md:col-span-2 mt-4">
                  <button
                    type="submit"
                    disabled={load}
                    className={`w-full bg-main hover:bg-main-light text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-main/10 transition-all flex items-center justify-center gap-3 group ${load ? "opacity-70 cursor-not-allowed" : "cursor-pointer"}`}
                  >
                    {load ? "جاري الإرسال..." : "إرسال الطلب الآن"}
                    {!load && (
                      <Send
                        size={22}
                        className="group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform rtl:group-hover:translate-x-1"
                      />
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .form-input-custom {
          width: 100%;
          padding: 1.2rem 1.5rem;
          border-radius: 1.2rem;
          border: 1px solid #e2e8f0;
          background: white;
          outline: none;
          transition: all 0.3s ease;
          font-weight: 500;
        }
        .form-input-custom:focus {
          border-color: var(--color-main);
          box-shadow: 0 0 0 4px rgba(5, 74, 73, 0.05);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
