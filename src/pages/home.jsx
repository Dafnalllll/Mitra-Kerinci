import React from "react";
import Navbar from "../components/navbar.jsx";
import Tentang from "./tentang.jsx";
import Struktur from "./struktur.jsx";
import Histori from "./histori.jsx"; // import Histori
import Footer from "../components/footer.jsx";

export default function Home() {
  return (
    <div
      className="min-h-screen relative"
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
          <div className="mt-20">
            <img
              src="/mitrakerinci1.webp"
              alt="Mitra Kerinci"
              data-aos="zoom-in"
              style={{
                width: "650px",
                height: "700px",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        {/* Import konten Tentang */}
        <Tentang />
        {/* Section Struktur Organisasi */}
        <Struktur />
        {/* Section Histori */}
        <Histori />
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
