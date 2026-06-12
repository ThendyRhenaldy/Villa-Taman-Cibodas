import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menus = [
    ["Beranda", "#hero"],
    ["Tentang", "#about"],
    ["Fasilitas", "#facilities"],
    ["Galeri", "#gallery"],
    ["Lokasi", "#location"],
    ["FAQ", "#faq"],
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg"
          : "bg-black/30 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={`${import.meta.env.BASE_URL}images/logo-vtc.jpg`}
            alt="Logo Villa Taman Cibodas"
            className="h-10 md:h-12 w-auto rounded"
          />

          <div>
            <h1
              className={`font-bold text-sm md:text-lg transition-colors duration-300 ${
                scrolled ? "text-green-700" : "text-white"
              }`}
            >
              Villa Taman Cibodas
            </h1>

            <p
              className={`text-[10px] md:text-xs transition-colors duration-300 ${
                scrolled ? "text-slate-500" : "text-slate-200"
              }`}
            >
              Portal Informasi Warga
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">

          {menus.map(([label, href]) => (
            <li key={label}>
              <a
                href={href}
                className={`transition-colors duration-300 hover:text-green-500 ${
                  scrolled ? "text-slate-800" : "text-white"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className={`md:hidden text-xl ${
            scrolled ? "text-slate-800" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`md:hidden px-6 pb-6 ${
            scrolled
              ? "bg-white"
              : "bg-black/90 backdrop-blur-md"
          }`}
        >
          <ul className="flex flex-col gap-5 font-medium">
            {menus.map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`block transition-colors duration-300 hover:text-green-500 ${
                    scrolled
                      ? "text-slate-800"
                      : "text-white"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;