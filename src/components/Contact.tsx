"use client";
import React, { useState, useEffect, FormEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  BrandWhatsapp,
  Send,
  User,
  MessageDots,
  CircleCheck,
} from "tabler-icons-react";

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  val: string;
  link: string;
}

export default function ContactSection() {
  const [success, setSuccess] = useState<boolean>(false);
  const [load, setLoad] = useState<boolean>(false);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);

    try {
      setLoad(true);
      const response = await fetch(
        "https://formsubmit.co/ajax/mohamedalgasim123@gmail.com",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        },
      );

      if (response.ok) {
        target.reset();
        setSuccess(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoad(false);
    }
  }

  const contactList: ContactInfo[] = [
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
      label: "الموقع",
      val: "الرياض، المملكة العربية السعودية",
      link: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-stone-50/50 relative overflow-hidden"
    >
      {/* خلفية جمالية خفيفة */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <img
          src="/hero-background.png"
          alt=""
          className="w-full h-full object-cover grayscale"
        />
      </div>

      {/* رسالة النجاح */}
      {success && (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 bg-main text-white py-4 px-10 rounded-full shadow-2xl flex items-center gap-3 z-[100] animate-in fade-in slide-in-from-top-5 duration-500">
          <CircleCheck size={24} className="text-accent" />
          <span className="font-bold">
            تم إرسال رسالتك بنجاح! سنقوم بالرد قريباً.
          </span>
        </div>
      )}

      <div className="container mx-auto px-5 relative z-10">
        {/* العناوين */}
        <div className="max-w-3xl mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-main text-white rounded-full text-xs font-bold mb-6 tracking-widest uppercase">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            تواصل معنا الآن
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-main mb-6 leading-[1.2]">
            لنصنع معاً <span className="text-main-light italic">مشروعاً</span>{" "}
            ينبض بالحياة
          </h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed">
            فريق Ravinala جاهز لتحويل رؤيتك إلى واقع هندسي. سواء كانت استشارة
            سريعة أو مشروعاً متكاملاً، نحن هنا لنسمع منك.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* 1. كروت التواصل (4 أعمدة) */}
          <div className="lg:col-span-4 space-y-4" data-aos="fade-right">
            {contactList.map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="flex items-center gap-5 p-6 bg-white rounded-[2rem] border border-slate-100 hover:border-main/20 hover:shadow-xl hover:shadow-main/5 transition-all duration-300 group"
              >
                <div className="bg-stone-50 p-4 rounded-2xl text-main group-hover:bg-main group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">
                    {item.label}
                  </p>
                  <p className="text-main font-black text-base">{item.val}</p>
                </div>
              </a>
            ))}
          </div>

          {/* 2. فورم التواصل (8 أعمدة) */}
          <div className="lg:col-span-8" data-aos="fade-left">
            <div className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-sm border border-slate-50 relative overflow-hidden">
              {/* لمسة فنية داخل الفورم */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-main/5 rounded-bl-full -z-0"></div>

              <form
                onSubmit={handleSubmit}
                className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_subject"
                  value="New Inquiry - Ravinala Landscape"
                />

                <div className="space-y-3">
                  <label className="text-xs font-black text-main/60 uppercase tracking-tighter mr-2 flex items-center gap-2">
                    <User size={14} /> الاسم الكامل
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="محمد القاسم"
                    className="modern-input"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black text-main/60 uppercase tracking-tighter mr-2 flex items-center gap-2">
                    <Mail size={14} /> البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="info@example.com"
                    className="modern-input"
                  />
                </div>

                <div className="md:col-span-2 space-y-3">
                  <label className="text-xs font-black text-main/60 uppercase tracking-tighter mr-2 flex items-center gap-2">
                    <MessageDots size={14} /> كيف يمكننا مساعدتك؟
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="أخبرنا عن مساحة حديقتك، أو الخدمة التي ترغب بها..."
                    className="modern-input resize-none"
                  ></textarea>
                </div>

                <div className="md:col-span-2 mt-4">
                  <button
                    type="submit"
                    disabled={load}
                    className="w-full bg-main hover:bg-main-light text-white py-6 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-4 group shadow-2xl shadow-main/20 disabled:opacity-50"
                  >
                    {load ? "جاري الإرسال..." : "أرسل رسالتك الآن"}
                    {!load && (
                      <Send
                        size={22}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
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
        .modern-input {
          width: 100%;
          padding: 1.25rem 1.5rem;
          border-radius: 1.25rem;
          border: 1px solid #f1f5f9;
          background: #f8fafc;
          outline: none;
          transition: all 0.3s ease;
          font-weight: 600;
          color: #054a49;
        }
        .modern-input:focus {
          background: white;
          border-color: #054a49;
          box-shadow: 0 10px 20px -10px rgba(5, 74, 73, 0.1);
        }
        .modern-input::placeholder {
          color: #cbd5e1;
          font-weight: 400;
        }
      `}</style>
    </section>
  );
}
