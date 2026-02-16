import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: "url('/bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>
      {/* Wrapper AOS */}
      <div
        className="relative z-10 flex flex-col items-center"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <img
          src="/mitrakerinci.webp"
          alt="Logo"
          className="w-24 h-24 mb-6 animate-bounce"
        />
        <h1 className="text-7xl font-extrabold text-green-700 mb-4 drop-shadow-lg">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-white mb-2">
          Oops! Halaman tidak ditemukan
        </h2>
        <p className="text-white mb-8 text-center max-w-md">
          Sepertinya kamu tersesat. Halaman yang kamu cari tidak tersedia atau
          sudah dipindahkan.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-green-600 text-white rounded-full font-bold shadow-md hover:scale-105 hover:bg-yellow-400 hover:text-green-900 transition-all duration-300"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
