import React from "react";
import Navbar from "../components/navbar.jsx";
import Tentang from "./tentang.jsx";
import Struktur from "./struktur.jsx";
import Histori from "./histori.jsx";
import Footer from "../components/footer.jsx";
import Produk from "./produk.jsx";
import Keunggulan from "./keunggulan.jsx"; 
import Segmentasi from "./segmentasi.jsx";
import Review from "./review.jsx";

export default function Home() {
  return (
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{
        backgroundImage: "url('/bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 bg-opacity-40 z-0"></div>
      {/* Konten utama */}
      <div className="relative z-10">
        <Navbar />
        {/* Gambar di tengah dengan animasi AOS */}
        <div className="flex justify-center items-center min-h-[78vh]">
          <div className="mt-20 w-full flex justify-center">
            <img
              src="/mitrakerinci1.webp"
              alt="Mitra Kerinci"
              data-aos="zoom-in"
              className="w-full max-w-xs md:max-w-[650px] md:h-[700px] object-contain mx-auto"
            />
          </div>
        </div>
        {/* Section Tentang */}
        <Tentang />
        {/* Section Struktur Organisasi */}
        <Struktur />
        {/* Section Produk */}
        <Produk />
        {/* Section Keunggulan */}
        <Keunggulan /> 
        {/* Section Segmentasi */}
        <Segmentasi />
        {/* Section Histori */}
        <Histori />
        {/* Section Review */}
        <Review />
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
