"use client";
import {
  Certificate,
  ShieldCheck,
  Leaf,
  SettingsAutomation,
} from "tabler-icons-react";

export default function FeaturesBar() {
  const features = [
    {
      id: 1,
      icon: <Leaf className="text-accent" size={32} />,
      title: "تصميمات مستدامة",
      subtitle: "نركز على نباتات تناسب بيئتنا وتوفر المياه",
    },
    {
      id: 2,
      icon: <Certificate className="text-accent" size={32} />,
      title: "إشراف هندسي",
      subtitle: "كل خطوة تتم بدراسة زراعية وهندسية دقيقة",
    },
    {
      id: 3,
      icon: <SettingsAutomation className="text-accent" size={32} />,
      title: "حلول ذكية",
      subtitle: "أنظمة ري أوتوماتيكية موفرة للجهد والمال",
    },
    {
      id: 4,
      icon: <ShieldCheck className="text-accent" size={32} />,
      title: "ضمان الجودة",
      subtitle: "نلتزم بمتابعة ما بعد التنفيذ لضمان نجاح الزرع",
    },
  ];

  return (
    <section className="relative z-20 px-5">
      <div className="container mx-auto">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-main/5 border border-main/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-4 bg-surface p-4 rounded-2xl group-hover:bg-main transition-all duration-300 group-hover:scale-110">
                <div className="group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-main font-black text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
