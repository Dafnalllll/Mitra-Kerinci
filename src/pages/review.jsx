import React from "react";

const reviews = [
  {
    user: "ricky160217",
    rating: 5,
    text: "Teh ini juga bisa digunakan sebagai obat, dan berkhasiat.. trims seller.",
  },
  {
    user: "rinopoplear",
    rating: 5,
    text: "Kualitas sesuai deskripsi harga terjangkau, semoga tetap terjaga kualitasnya",
  },
  {
    user: "prelovedbrn",
    rating: 5,
    text: "Pertama beli iseng aja buat oleh2, taunya yg dikasih suka bgt katanya enak bgt tehnya dan bnr2 asli daun teh. Jd repurchase lg deh. Admin nya ramah bgt, pengiriman cpt, packaging rapi dan aman",
  },
  {
    user: "m*****i",
    rating: 5,
    text: "Packingannya bagus, rapi banget, saya suka. Mudah-mudahan bagus untuk kesehatan. Makasih seller.. 😍😍",
  },
];

const UserIcon = () => (
  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#e6eaf3] to-[#b6c6e3] border-4 border-white shadow flex items-center justify-center mr-5 flex-shrink-0">
    <svg
      className="w-8 h-8 text-[#3b6cb7]"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 20c0-3.314 3.134-6 7-6s7 2.686 7 6"
      />
    </svg>
  </div>
);

const ReviewCard = ({ user, rating, text }) => (
  <div className="flex items-start  text-white cursor-pointer px-8 py-6 min-w-[320px] max-w-xl w-full relative hover:scale-[1.025] transition-transform duration-300">
    <UserIcon />
    <div className="flex-1">
      <div className="flex items-center gap-2 font-semibold mb-1">
        <span className="bg-white/20 px-3 py-1 rounded-lg text-white text-sm">
          {user}
        </span>
        <span className="text-yellow-400 text-lg drop-shadow">★</span>
        <span className="text-white text-sm">{rating}/5</span>
      </div>
      <div className="text-white/90 text-base leading-relaxed text-justify">
        {text}
      </div>
    </div>
  </div>
);

export default function ReviewPage() {
  return (
    <div
      id="review"
      className="min-h-screen py-16 px-2 font-poppins relative flex flex-col items-center"
    >
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#17457b] mb-12 bg-white/90 inline-block px-10 py-4 rounded-xl shadow-lg tracking-wide border-2 border-[#17457b]">
        Apa Kata Mereka?
      </h2>
      <div className="flex flex-col gap-10 items-center w-full">
        {reviews.map((r, i) => (
          <ReviewCard key={i} {...r} />
        ))}
      </div>
    </div>
  );
}
