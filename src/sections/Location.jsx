function Location() {
  return (
    <section
      id="location"
      className="py-24 px-6 bg-slate-100"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Lokasi Villa Taman Cibodas
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Berlokasi strategis dengan akses mudah ke berbagai fasilitas umum.
        </p>

        <div
            data-aos="fade-up"
            className="grid lg:grid-cols-2 gap-10"
            >

          <div>
            <iframe
              title="Villa Taman Cibodas"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15866.515105545855!2d106.6006145360575!3d-6.180416573130518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ff0061580f5b%3A0x7678a277f5bc696f!2sVilla%20taman%20cibodas!5e0!3m2!1sen!2sid!4v1780307234845!5m2!1sen!2sid"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              className="rounded-xl shadow-lg"
            ></iframe>
          </div>

          <div className="flex flex-col justify-center">

            <h3 className="text-2xl font-semibold mb-6">
              Akses Lokasi
            </h3>

            <ul className="space-y-4 text-gray-700">
                <li>📍 Berlokasi di Cibodas, Tangerang</li>
                <li>🕌 Tersedia fasilitas masjid di dalam kawasan</li>
                <li>🏀 Lapangan basket untuk aktivitas olahraga warga</li>
                <li>🎾 Lapangan tenis untuk rekreasi dan olahraga</li>
                <li>🛡️ Pos keamanan dan akses gerbang utama</li>
                <li>🌳 Lingkungan asri dan nyaman untuk keluarga</li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Location;