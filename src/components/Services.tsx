"use client";
import {
  Brush,
  Droplet,
  Shovel,
  Fence,
  Leaf,
  ArrowUpRight,
} from "tabler-icons-react";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "تصميم اللاندسكيب (2D/3D)",
      desc: "تحويل تخيلاتك لمخططات واقعية تضمن استغلال كل سنتيمتر في مساحتك.",
      icon: <Brush size={32} />,
      delay: 100,
    },
    {
      id: 2,
      title: "أنظمة الري الذكية",
      desc: "تصميم وتنفيذ شبكات ري أوتوماتيكية توفر المياه وتضمن صحة النباتات.",
      icon: <Droplet size={32} />,
      delay: 200,
    },
    {
      id: 3,
      title: "تنسيق وزراعة الحدائق",
      desc: "اختيار وتوريد أفضل أنواع النباتات والنجيلة الطبيعية والصناعية.",
      icon: <Leaf size={32} />,
      delay: 300,
    },
    {
      id: 4,
      title: "أعمال الهاردسكيب",
      desc: "تركيب البرجولات، الممرات الحجرية، والجلسات الخارجية بتصاميم فريدة.",
      icon: <Fence size={32} />,
      delay: 400,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="container mx-auto px-5">
        {/* رأس السكشن */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            data-aos="fade-up"
            className="text-main text-4xl md:text-5xl font-black mb-6"
          >
            حلول <span className="text-main-light">زراعية وهندسية</span> متكاملة
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-slate-500 font-medium text-lg"
          >
            نقدم مجموعة شاملة من الخدمات التي تضمن لك الحصول على مساحة خضراء
            مستدامة تجمع بين الجمالية والوظائف العملية.
          </p>
        </div>

        {/* شبكة الخدمات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={service.delay}
              className="group bg-stone-50 hover:bg-main p-8 rounded-[2.5rem] transition-all duration-500 border border-slate-100 hover:border-main hover:-translate-y-3 shadow-sm hover:shadow-2xl hover:shadow-main/20"
            >
              {/* أيقونة الخدمة */}
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-main mb-8 shadow-sm group-hover:rotate-12 transition-transform duration-500">
                {service.icon}
              </div>

              {/* المحتوى */}
              <h3 className="text-main group-hover:text-white text-xl font-black mb-4 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 group-hover:text-slate-200 text-sm leading-relaxed mb-6 transition-colors">
                {service.desc}
              </p>

              {/* سهم صغير "للمزيد" */}
              <div className="text-main group-hover:text-accent transition-colors flex items-center gap-2 font-bold text-xs uppercase tracking-widest">
                <span>المزيد</span>
                <ArrowUpRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
