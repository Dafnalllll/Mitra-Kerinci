import React from "react";

const events = [
  {
    title: "JOGJA EXPO 21-24 MEI 2025",
    images: ["histori1.webp", "histori2.webp"],
    aos: "fade-right",
  },
  {
    title: "SPECIALTY INDONESIA 4-8 AGUSTUS 2025 (JAKARTA)",
    images: ["histori5.webp", "histori6.webp"],
    aos: "fade-left",
  },
  {
    title: "SUMBAR EXPO 27-28 OKTOBER 2025 (PADANG)",
    images: ["histori3.webp", "histori4.webp"],
    aos: "fade-right",
  },
  {
    title: "PAMERAN WEIS 27-28 NOVEMBER 2025",
    images: ["histori7.webp", "histori8.webp"],
    aos: "fade-left",
  },
];

export default function Histori() {
  return (
    <div id="histori" className="py-20 px-2 md:px-0">
      {/* Judul */}
      <div
        className="flex flex-col items-center mb-16"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <h1
          className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg"
          style={{
            fontFamily: "'Pacifico', cursive",
            textShadow: "4px 4px 0 #2b6cb0, 0px 0px 10px #2b6cb0",
          }}
        >
          Histori Pameran
        </h1>
        <div className="bg-[#1e4a7a] px-6 py-2 rounded-lg mt-2 shadow-lg">
          <span className="text-white text-2xl md:text-3xl font-bold tracking-widest">
            DIVISI MARKETING
          </span>
        </div>
      </div>

      {/* Timeline Zig-Zag */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div
          className="absolute left-1/2 top-0 h-full w-1 bg-blue-400 z-0 rounded-full"
          style={{ transform: "translateX(-50%)" }}
        ></div>
        <div className="flex flex-col gap-24 relative z-10">
          {events.map((event, idx) => (
            <div
              key={event.title}
              className={`flex flex-col md:flex-row items-center md:items-stretch ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} group`}
              data-aos={event.aos}
              data-aos-duration="1000"
            >
              {/* Dot on timeline */}
              <div className="hidden md:block w-1/12 relative">
                <div
                  className="absolute left-1/2 top-1/2 w-8 h-8 bg-blue-400 border-4 border-white rounded-full shadow-lg z-10"
                  style={{ transform: "translate(-50%, -50%)" }}
                ></div>
              </div>
              {/* Card */}
              <div className="w-full md:w-11/12 bg-white/20 backdrop-blur-md border border-blue-200 shadow-2xl rounded-2xl px-6 py-8 flex flex-col md:flex-row gap-8 items-center md:items-start relative">
                {/* Images */}
                <div className="flex gap-4">
                  {event.images.map((img, i) => (
                    <div
                      key={img}
                      className="relative"
                      data-aos="zoom-in"
                      data-aos-delay={150 * (i + 1)}
                    >
                      <img
                        src={img}
                        alt={event.title + " " + (i + 1)}
                        className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-xl border-4 border-white shadow-lg transition-transform duration-300 hover:scale-110 hover:border-blue-400 hover:shadow-2xl cursor-pointer"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition duration-300 rounded-xl pointer-events-none"></div>
                    </div>
                  ))}
                </div>
                {/* Title */}
                <div className="flex-1 flex flex-col justify-center items-center md:items-start">
                  <div className="text-white text-lg md:text-2xl font-bold mb-2 text-center md:text-left drop-shadow-lg">
                    {event.title}
                  </div>
                </div>
              </div>
              {/* Dot on timeline for mobile */}
              <div className="md:hidden flex justify-center w-full my-4">
                <div className="w-8 h-8 bg-blue-400 border-4 border-white rounded-full shadow-lg"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
