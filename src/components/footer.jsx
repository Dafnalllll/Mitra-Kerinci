import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import { SiX } from "react-icons/si"; // Tambahkan ini

export default function Footer() {
  return (
    <footer
      className="w-full shadow-2xl py-8 px-4 md:px-16 flex flex-col md:flex-row justify-between items-center gap-10 border-t border-blue-200"
      style={{
        background: "#fff",
      }}
    >
      {/* Kiri: Logo, ID FOOD, Sosial Media */}
      <div className="flex flex-col items-center md:items-start gap-4 md:w-1/3 w-full">
        <img
          src="/mitrakerinci1.webp"
          alt="Mitra Kerinci"
          className="h-40 w-56 drop-shadow-lg md:-ml-8 mx-auto"
        />
        <div className="flex gap-4 mt-2 justify-center md:justify-start w-full">
          <a
            href="https://www.instagram.com/mitrakerinci/"
            aria-label="Instagram"
            className="hover:scale-110 transition-transform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl text-blue-900 hover:text-pink-500 transition-colors" />
          </a>
          <a
            href="https://web.facebook.com/mitra.kerinci.96"
            aria-label="Facebook"
            className="hover:scale-110 transition-transform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-2xl text-blue-900 hover:text-blue-600 transition-colors" />
          </a>
          <a
            href="https://www.youtube.com/@ptmitrakerinci306"
            aria-label="YouTube"
            className="hover:scale-110 transition-transform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-2xl text-blue-900 hover:text-red-500 transition-colors" />
          </a>
        </div>
        <div className="mt-4 text-xs text-blue-700 tracking-wide text-center md:text-left w-full">
          &copy; {new Date().getFullYear()} Mitra Kerinci. All rights reserved.
        </div>
      </div>
      {/* Divider untuk desktop */}
      <div className="hidden md:block h-40 w-px bg-blue-300/30 mx-6 rounded-full"></div>
      {/* Kanan: Kontak & Alamat */}
      <div className="flex-1 flex flex-col gap-4 md:items-end items-center w-full">
        <div className="flex items-center gap-3 justify-center md:justify-end w-full">
          <span className="bg-blue-900 text-white px-5 py-1 rounded font-bold text-lg shadow-md tracking-wide">
            Find Us
          </span>
        </div>
        <div className="w-full">
          <div className="text-xl font-semibold mb-2 tracking-wide text-blue-900 text-center md:text-right">
            Kontak
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-end gap-8 mb-2 w-full md:justify-end">
            <span className="flex items-center gap-3">
              <span className="bg-blue-900 text-white rounded-full p-3 shadow-lg">
                <FaPhoneAlt className="text-xl" />
              </span>
              <a
                href="tel:+6285210082416"
                className="text-base font-medium text-blue-900 hover:underline"
              >
                +62 852-1008-2416{" "}
                <span className="text-blue-500 text-sm">(Sabrina)</span>
              </a>
            </span>
            <span className="flex items-center gap-3">
              <span className="bg-blue-900 text-white rounded-full p-3 shadow-lg">
                <FaEnvelope className="text-xl" />
              </span>
              <a
                href="mailto:kesekretariatan@mitrakerinci.co.id"
                className="text-base font-medium text-blue-900 hover:underline"
              >
                kesekretariatan@mitrakerinci.co.id
              </a>
            </span>
          </div>
        </div>
        <div className="w-full">
          <div className="text-xl font-semibold mb-1 tracking-wide text-blue-900 text-center md:text-right">
            Alamat
          </div>
          <div className="text-blue-900 font-medium leading-snug text-center md:text-right">
            Kebun & Pabrik, Jorong Sungai Lambai, Nagari Lubuk Gadang Selatan.
            <br />
            Kec. Sangir, Kab. Solok Selatan, Sumatera Barat, Kode Pos 27778
          </div>
        </div>
      </div>
    </footer>
  );
}
