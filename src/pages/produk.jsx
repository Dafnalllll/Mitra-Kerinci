import React from "react";

const products = [
  {
    name: "GREEN TEA LIKI LEGACY",
    desc: "Light & Smooth Vegetal",
    img: "/produk1.webp",
    link: "https://s.shopee.co.id/7pnpimtz8P",
  },
  {
    name: "RED GLORY SINENSIS BLACK TEA",
    desc: "Light, Sweet Honey, Slight Caramel",
    img: "/produk2.webp",
    link: "https://s.shopee.co.id/gKfBi6KgR",
  },
  {
    name: "GREEN TEA LIKI OPTIMUS",
    desc: "Light & Strong Vegetal",
    img: "/produk3.webp",
    link: "https://s.shopee.co.id/4qAE9J9Y0n",
  },
  {
    name: "GREEN TEA LIKI CHA",
    desc: "Light, Vegetal, Slight Nutty",
    img: "/produk4.webp",
    link: "https://s.shopee.co.id/9zsKIjw212",
  },
  {
    name: "WHITE TEA SILVER NEEDLE",
    desc: "Highest antioxidant and low caffeine",
    img: "/produk5.webp",
    link: "https://s.shopee.co.id/9Uw3huvARw",
  },
];

export default function Produk() {
  return (
    <section
      id="produk"
      className="w-full flex flex-col items-center py-12 px-2 "
    >
      {/* Judul */}
      <div className="mb-10" data-aos="zoom-in" data-aos-duration="1000">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center leading-tight"
          style={{
            fontFamily: "'Pacifico', cursive",
            textShadow: "4px 4px 0 #2b6cb0, 0px 0px 10px #2b6cb0",
            zIndex: 2,
            position: "relative",
          }}
        >
          Produk Teh <br />
          <span className="text-white  px-4 py-1  inline-block -mt-2">
            Unggulan
          </span>
        </h2>
      </div>
      {/* Produk List */}
      <div className="flex flex-col gap-12 w-full max-w-4xl">
        {products.map((prod, i) => (
          <div
            key={prod.name}
            className={`
              flex flex-col-reverse md:flex-row items-center
              ${i % 2 === 1 ? "md:flex-row-reverse" : ""}
                p-4 md:p-8 gap-6 md:gap-12
            `}
            data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
          >
            {/* Gambar */}
            <div className="flex-1 flex justify-center">
              <div className="relative group">
                <img
                  src={prod.img}
                  alt={prod.name}
                  className="w-40 h-40 md:w-48 md:h-48 object-contain  group-hover:scale-110 transition-transform duration-300 cursor-pointer "
                />
              </div>
            </div>
            {/* Deskripsi */}
            <div className="flex-1 flex flex-col items-center md:items-start">
              <div className="text-2xl md:text-3xl font-extrabold text-white mb-2 text-center md:text-left drop-shadow">
                {prod.name}
              </div>
              <div className=" text-blue-200 font-semibold italic px-4 py-2  text-base md:text-lg text-center md:text-left">
                • {prod.desc}
              </div>
              {/* Tombol Beli Sekarang */}
              <div
                data-aos="zoom-in"
                data-aos-duration="700"
                data-aos-delay="200"
                className="w-full flex justify-center md:justify-start"
              >
                <a
                  href={prod.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-[#2b6cb0] hover:bg-[#1e4a7a] text-white font-bold py-2 px-6 rounded-full shadow transition-transform hover:scale-110 duration-200 group"
                >
                  <span className="flex items-center gap-2">
                    Beli Sekarang
                    <img
                      src="/toko.webp"
                      alt="Toko"
                      className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-125 group-hover:rotate-12"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
