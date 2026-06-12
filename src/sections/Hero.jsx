function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/gerbang-vtc.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div
        data-aos="fade-up"
        className="relative z-10 text-center text-white px-6"
        >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Villa Taman Cibodas
        </h1>

        <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-8">
          Portal Informasi Lingkungan dan Fasilitas Warga
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#about"
            className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-semibold transition"
          >
            Pelajari Lebih Lanjut
          </a>

          <a
            href="#gallery"
            className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold transition"
          >
            Lihat Galeri
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;