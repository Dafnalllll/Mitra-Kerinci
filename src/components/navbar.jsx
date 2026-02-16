import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  // Handler untuk scroll smooth ke section tentang
  const handleTentangClick = (e) => {
    e.preventDefault();
    setOpen(false);
    setDropdown(false);
    if (location.pathname === "/") {
      const section = document.getElementById("tentang");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById("tentang");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 400);
    }
  };

  // Handler untuk scroll smooth ke section struktur
  const handleStrukturClick = (e) => {
    e.preventDefault();
    setOpen(false);
    setDropdown(false);
    if (location.pathname === "/") {
      const section = document.getElementById("struktur");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById("struktur");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 400);
    }
  };

  // Handler untuk scroll smooth ke section histori
  const handleHistoriClick = (e) => {
    e.preventDefault();
    setOpen(false);
    setDropdown(false);
    if (location.pathname === "/") {
      const section = document.getElementById("histori");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById("histori");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 400);
    }
  };

  // Jadikan navItems tentang sebagai dropdown
  const navItems = [
    { to: "/", label: "Home" },
    {
      label: "Tentang",
      dropdown: [
        { label: "Tentang", onClick: handleTentangClick, href: "#tentang" },
        { label: "Struktur", onClick: handleStrukturClick, href: "#struktur" },
        { label: "Histori", onClick: handleHistoriClick, href: "#histori" },
      ],
    },
    { to: "/kontak", label: "Kontak" },
  ];

  return (
    <nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[99vw] max-w-6xl rounded-2xl shadow-xl flex items-center px-4 md:px-16 py-4 z-50 border border-green-200 bg-white"
      style={{
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      {/* Logo */}
      <div className="mr-4 group flex items-center">
        <img
          src="/mitrakerinci.webp"
          alt="Logo"
          className="w-14 h-12 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 cursor-pointer"
        />
      </div>
      {/* Hamburger Button */}
      <button
        className="md:hidden ml-auto flex flex-col justify-center items-center w-10 h-10 group z-50"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span
          className={`block h-1 w-8 rounded-full bg-green-900 transition-all duration-300 ${
            open ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-8 rounded-full bg-green-900 transition-all duration-300 my-1 ${
            open ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-8 rounded-full bg-green-900 transition-all duration-300 ${
            open ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>
      {/* Desktop Menu */}
      <ul className="hidden md:flex flex-row gap-14 mx-auto items-center h-full">
        {navItems.map((item) =>
          item.dropdown ? (
            <li
              className="relative group h-full flex items-center"
              key={item.label}
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              <button
                className="group text-lg font-semibold px-4 py-2 rounded transition-all duration-300 relative text-green-800 hover:text-green-900 flex items-center h-full cursor-pointer"
                type="button"
                style={{ lineHeight: "1.5" }} // pastikan line-height sama
              >
                <span className="transition-all duration-300 group-hover:tracking-widest">
                  {item.label}
                </span>
                <svg
                  className={`ml-1 w-4 h-4 transition-transform duration-300 ${dropdown ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Hover bridge */}
              <div
                className="absolute left-0"
                style={{
                  top: "100%",
                  height: "11rem", // sesuaikan dengan mt-48 (mt-48 = 12rem, bisa dikurangi sedikit)
                  width: "12rem", // samakan dengan w-48
                  zIndex: 40,
                }}
                // Tidak perlu event, hanya untuk area hover
              ></div>
              {/* Dropdown menu */}
              <div className="absolute left-0 mt-66 w-48 bg-white rounded-xl shadow-lg z-50 transition-all duration-200 pb-4 pt-4 hidden group-hover:block">
                {item.dropdown.map((sub, subIdx) => (
                  <a
                    key={sub.label}
                    href={sub.href}
                    onClick={sub.onClick}
                    className={`block px-6 py-3 text-green-900 hover:bg-green-100 transition-all duration-200 ${
                      subIdx === 0 ? "rounded-t-xl" : ""
                    } ${subIdx === item.dropdown.length - 1 ? "rounded-b-xl" : ""}`}
                  >
                    {sub.label}
                  </a>
                ))}
              </div>
            </li>
          ) : (
            <li key={item.to} className="h-full flex items-center">
              <Link
                to={item.to}
                onClick={() => setOpen(false)}
                className={`group text-lg font-semibold px-4 py-2 rounded transition-all duration-300 relative ${
                  location.pathname === item.to
                    ? "text-green-900"
                    : "text-green-800 hover:text-green-900"
                } h-full flex items-center`}
              >
                <span className="transition-all duration-300 group-hover:tracking-widest">
                  {item.label}
                </span>
                <span
                  className={`absolute left-0 bottom-0 w-full h-1 rounded bg-yellow-300 transition-all duration-300 ${
                    location.pathname === item.to
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                  }`}
                  style={{ transformOrigin: "left" }}
                ></span>
              </Link>
            </li>
          ),
        )}
      </ul>
      {/* Mobile Menu Card */}
      <div
        className={`fixed left-1/2 top-11/2 z-50 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-xs rounded-2xl shadow-2xl flex flex-col items-center py-8 px-4 transition-all duration-300 ${
          open
            ? "scale-100 opacity-100"
            : "scale-90 opacity-0 pointer-events-none"
        } md:hidden`}
        style={{
          background:
            "linear-gradient(120deg, #38b2ac 0%, #68d391 60%, #f6e05e 100%)",
        }}
      >
        <img
          src="/mitrakerinci.webp"
          alt="Logo"
          className="w-20 h-16 mb-8 drop-shadow-lg"
        />
        <ul className="flex flex-col gap-6 items-center w-full">
          {navItems.map((item) =>
            item.dropdown ? (
              <li className="w-full" key={item.label}>
                <button
                  className="block text-2xl font-bold px-8 py-3 mt-8 rounded-xl transition-all duration-300 text-center w-full text-teal-900 hover:bg-teal-100 hover:scale-105"
                  onClick={() => setDropdown((v) => !v)}
                >
                  {item.label}
                </button>
                {dropdown && (
                  <div className="flex flex-col w-full">
                    {item.dropdown.map((sub, subIdx) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        onClick={(e) => {
                          sub.onClick(e);
                          setDropdown(false);
                        }}
                        className={`block px-8 py-3 text-lg text-green-900 hover:bg-green-100 transition-all duration-200 ${
                          subIdx === 0 ? "rounded-t-xl" : ""
                        } ${subIdx === item.dropdown.length - 1 ? "rounded-b-xl" : ""}`}
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ) : (
              <li key={item.to} className="w-full">
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`block text-2xl font-bold px-8 py-3 mt-8 rounded-xl transition-all duration-300 text-center w-full ${
                    location.pathname === item.to
                      ? "text-teal-700 bg-yellow-200 shadow"
                      : "text-teal-900 hover:bg-teal-100 hover:scale-105"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
