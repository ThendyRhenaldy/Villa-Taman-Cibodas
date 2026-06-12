function Facilities() {
  const facilities = [
    {
      title: "Keamanan 24 Jam",
      desc: "Lingkungan aman dengan sistem keamanan yang terjaga.",
      icon: "🛡️",
    },
    {
      title: "Area Hijau",
      desc: "Taman dan ruang terbuka hijau untuk keluarga.",
      icon: "🌳",
    },
    {
      title: "Akses Strategis",
      desc: "Dekat sekolah, rumah sakit, dan pusat perbelanjaan.",
      icon: "📍",
    },
    {
      title: "Tempat Ibadah",
      desc: "Fasilitas ibadah yang nyaman dan mudah dijangkau.",
      icon: "🕌",
    },
    {
      title: "Area Komersial",
      desc: "Dekat dengan berbagai kebutuhan harian.",
      icon: "🛒",
    },
    {
      title: "Jalan Luas",
      desc: "Akses kendaraan yang nyaman untuk penghuni.",
      icon: "🚗",
    },
  ];

  return (
    <section
      id="facilities"
      className="py-24 bg-slate-100 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-14">
          Fasilitas Unggulan
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {facilities.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
            >
              <div className="text-5xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Facilities;