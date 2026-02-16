import React from "react";

export default function Struktur() {
  return (
    <div
      id="struktur"
      className="min-h-screen flex flex-col items-center justify-center relative py-16 mt-40"
    >
      {/* Wrapper AOS */}
      <div
        className="relative z-10 flex flex-col items-center w-full"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1
          className="text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-lg tracking-wide"
          style={{ fontFamily: "'Pacifico', cursive" }} // Tambahkan fontFamily di sini
        >
          Struktur Organisasi
        </h1>
        <div className="p-4 md:p-8 max-w-4xl w-full flex justify-center">
          <img
            src="/struktur.webp"
            alt="Struktur Organisasi"
            className="w-full max-w-3xl rounded-xl shadow-lg object-contain"
          />
        </div>
      </div>
    </div>
  );
}
