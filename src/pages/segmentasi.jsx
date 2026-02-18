import React from "react";
import Peta from "../../public/peta.webp"; // Pastikan path sesuai struktur project Anda

export default function Segmentasi() {
  return (
    <div
      id="segmentasi"
      className="min-h-screen py-12 px-4 mt-44 flex flex-col items-center"
    >
      <h1
        className="text-3xl md:text-5xl font-bold text-white mb-6 text-center "
        style={{
          fontFamily: "'Pacifico', cursive",
          textShadow: "4px 4px 0 #2b6cb0, 0px 0px 10px #2b6cb0",
          zIndex: 2,
          position: "relative",
        }}
        data-aos="fade-down"
      >
        Segmentasi Pasar
      </h1>
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center gap-8 p-6 md:p-10">
        {/* Wrapper AOS untuk gambar */}
        <div data-aos="zoom-in">
          <img
            src={Peta}
            alt="Peta Distribusi Pasar"
            className="w-full max-w-xs md:max-w-sm cursor-pointer transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div
          className="flex-1 text-white text-base md:text-lg font-medium text-center md:text-left"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <p className="mb-3 whitespace-normal tracking-wide text-justify">
            Produk teh <b>Mitra Kerinci</b> telah dipasarkan ke berbagai wilayah
            di Indonesia. Peta di samping menunjukkan area distribusi utama:
          </p>
          <ul className="list-disc list-inside text-white mb-3 whitespace-normal tracking-wide pl-4 text-justify">
            <li>
              <span className="font-semibold">Pasar:</span> Sumatera Barat, Jawa
              Tengah, Jawa Timur
            </li>
          </ul>
          <p className="whitespace-normal text-justify tracking-wide">
            Dengan jaringan distribusi yang luas, Mitra Kerinci berkomitmen menghadirkan teh berkualitas ke berbagai penjuru dunia.
          </p>
        </div>
      </div>
    </div>
  );
}
