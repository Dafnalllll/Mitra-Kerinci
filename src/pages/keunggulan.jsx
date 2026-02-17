import React from "react";

const advantages = [
  {
    title:
      "Tanah vulkanik Kerinci dan hutan tropis di sekeliling kebun menjadikan cita rasa dan aroma teh Liki sangat unik.",
    icon: "🌋",
  },
  {
    title:
      "Kebun Liki menjadi penyangga Taman Nasional Kerinci Seblat yang merupakan rumah bagi hewan langka dunia.",
    icon: "🌳",
  },
  {
    title:
      "Teh specialty Liki hanya berasal dari pucuk termuda (P+2) dan diolah secara artisan.",
    icon: "🍃",
  },
  {
    title:
      "Dikelola secara profesional dengan menerapkan standar budidaya dan pengolahan yang baik (GAP dan GMP) dalam tata kelolanya.",
    icon: "🛡️",
  },
  {
    title:
      "HEMAT & SEHAT: Enam gram teh Liki dapat diseduh 5 kali dengan masing-masing seduhan menggunakan air sebanyak 150 ml dan perendaman 10 detik.",
    icon: "💧",
  },
];

export default function Keunggulan() {
  return (
    <div
      id="keunggulan"
      className="min-h-screen py-10 mt-40"
      data-aos="fade-in"
    >
      <div className="max-w-3xl mx-auto">
        <h1
          className="text-white py-6 text-center font-bold text-3xl md:text-5xl mb-8 tracking-wide"
          style={{
            fontFamily: "'Pacifico', cursive",
            textShadow: "4px 4px 0 #2b6cb0, 0px 0px 10px #2b6cb0",
            zIndex: 2,
            position: "relative",
          }}
          data-aos="fade-down"
        >
          Keunggulan Teh Liki
        </h1>
        <div className="flex flex-col gap-7">
          {advantages.map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 120}
              className="will-change-transform"
            >
              <div
                className="
                flex flex-col items-center text-center
                md:flex-row md:items-start md:text-left
                text-white px-7 py-6 gap-3 md:gap-5
                transition-all duration-200 cursor-pointer
                hover:-translate-y-1 hover:scale-[1.02] relative bg-transparent
              "
              >
                <div
                  className="
                  min-w-[54px] min-h-[54px] text-blue-700
                  flex items-center justify-center font-bold text-3xl
                  mb-2 md:mb-0 md:mr-2 relative
                "
                >
                  {item.icon}
                </div>
                <div className="text-base md:text-lg font-medium leading-relaxed">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
