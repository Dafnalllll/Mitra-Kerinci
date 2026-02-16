import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-green-100">
      <div className="relative flex flex-col items-center">
        {/* Gambar berputar */}
        <img
          src="/mitrakerinci.webp"
          alt="Loading"
          className="w-32 h-32 animate-spin-slow "
          style={{ animation: "spin 2.5s linear infinite" }}
        />
        {/* Efek gelombang */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-36 h-8 overflow-hidden">
          <svg
            viewBox="0 0 144 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 16 Q 36 32 72 16 T 144 16 V32 H0 V16Z"
              fill="#60a5fa"
              className="animate-wave"
            />
          </svg>
        </div>
      </div>
      <p className="mt-10 text-lg font-semibold text-blue-700 tracking-wide animate-pulse">
        Memuat Mitra Kerinci...
      </p>
      {/* Custom CSS untuk animasi */}
      <style>
        {`
          @keyframes spin {
            100% { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin 2.5s linear infinite;
          }
          @keyframes wave {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(-20px); }
          }
          .animate-wave {
            animation: wave 2s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}
