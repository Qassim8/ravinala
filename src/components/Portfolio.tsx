"use client";
import { ExternalLink, Search } from "tabler-icons-react";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "فيلا خاصة - حي النرجس",
      category: "لاندسكيب وتجميل",
      image: "/project1.jpg", // استبدلها بصور مشاريعك الحقيقية
      size: "lg",
    },
    {
      id: 2,
      title: "حديقة استراحة الياسمين",
      category: "أنظمة ري حديثة",
      image: "/project2.jpg",
      size: "sm",
    },
    {
      id: 3,
      title: "مشروع الروف الأخضر",
      category: "زراعة أسطح",
      image: "/project3.jpg",
      size: "sm",
    },
    {
      id: 4,
      title: "تنسيق مجمع تجاري",
      category: "هاردسكيب وانشاءات",
      image: "/project4.jpg",
      size: "md",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-stone-50">
      <div className="container mx-auto px-5">
        {/* رأس السكشن */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl" data-aos="fade-left">
            <h2 className="text-main text-4xl md:text-5xl font-black mb-4">
              مشاريع <span className="text-main-light">نفخر</span> بتنفيذها
            </h2>
            <p className="text-slate-500 font-medium">
              نضع كل شغفنا وخبرتنا في كل متر مربع نقوم بتصميمه، لنحول المساحات
              العادية إلى لوحات فنية حية.
            </p>
          </div>
          <button
            data-aos="fade-right"
            className="group flex items-center gap-2 text-main font-black border-b-2 border-main pb-1 hover:text-main-light hover:border-main-light transition-all"
          >
            عرض الكل
            <ExternalLink size={18} />
          </button>
        </div>

        {/* شبكة الصور الاحترافية */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[300px]">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className={`relative group overflow-hidden rounded-[2.5rem] shadow-lg
                ${project.size === "lg" ? "md:col-span-8 md:row-span-2" : ""}
                ${project.size === "md" ? "md:col-span-6 md:row-span-1" : ""}
                ${project.size === "sm" ? "md:col-span-4 md:row-span-1" : ""}
              `}
            >
              {/* الصورة */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* الطبقة الشفافة عند الـ Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-main/90 via-main/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-accent font-bold text-sm uppercase tracking-widest bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-white text-2xl font-black mt-3">
                    {project.title}
                  </h3>
                </div>

                {/* أيقونة البحث/التكبير */}
                <div className="absolute top-6 left-6 bg-white text-main p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all delay-100 scale-50 group-hover:scale-100">
                  <Search size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
