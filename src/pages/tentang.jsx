import React from "react";
import About from "../../public/about.webp";

export default function Tentang() {
  return (
    <div
      id="tentang"
      className="flex flex-col items-center justify-center min-h-[80vh] py-12 mt-34"
    >
      {/* Mengenai */}
      <div className="relative w-full flex justify-center">
        <h1
          className="text-6xl font-bold text-white mb-2 tracking-wide mr-[24rem] drop-shadow-lg"
          style={{
            fontFamily: "'Pacifico', cursive",
            textShadow: "4px 4px 0 #2b6cb0, 0px 0px 10px #2b6cb0",
            zIndex: 2,
            position: "relative",
          }}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Mengenai
        </h1>
      </div>
      {/* PT MITRA KERINCI */}
      <div className="relative w-full flex justify-center -mt-6 z-1">
        <div
          className="bg-gradient-to-r from-[#1e4a7a] to-[#60a5fa] px-12 py-5 rounded-xl shadow-xl inline-block border-4 border-[#a78bfa] "
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <span
            className="text-white text-4xl font-bold tracking-widest"
            style={{ letterSpacing: "2px" }}
          >
            PT MITRA KERINCI
          </span>
        </div>
      </div>
      {/* Konten utama: gambar kiri, deskripsi kanan */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-14 w-full max-w-5xl">
        {/* Gambar kiri */}
        <div
          className="flex justify-center md:justify-start w-full md:w-auto"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img
            src={About}
            alt="Petani Mitra Kerinci"
            className="w-[450px] h-[240px] object-cover rounded-3xl border-4 border-[#60a5fa] shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </div>
        {/* Deskripsi kanan */}
        <div
          className="mt-8 md:mt-0 flex-1 text-left text-white text-xl font-medium bg-gradient-to-br from-[#1e4a7a]/90 to-[#60a5fa]/80 rounded-2xl p-8 border-2 border-[#a78bfa] shadow-lg transition-shadow duration-300"
          style={{ lineHeight: "2" }}
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <span className="block w-full tracking-wide">
            PT Mitra Kerinci merupakan anak Perusahaan dari PT Rajawali
            Nusantara Indonesia (Persero).
            <br />
            <br />
            Pada awalnya, Perusahaan bernama PT Perkebunan Mitra Kerinci,
            didirikan dengan Akta No. 98 tanggal 17 Juli 1990 yang dibuat
            dihadapan Imas Fatimah, SH, notaris di Jakarta.
            <br />
            <br />
            Terletak di kaki Gunung Kerinci, berbatasan langsung dengan Taman
            Nasional Kerinci Seblat di Kabupaten Solok Selatan, Provinsi
            Sumatera Barat. Kebun Teh satu hamparan seluas 2.025 Ha.
          </span>
        </div>
      </div>
    </div>
  );
}
