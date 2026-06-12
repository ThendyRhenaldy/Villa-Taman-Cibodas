function Statistics() {
  const stats = [
  {
    number: "24 Jam",
    label: "Keamanan",
  },
  {
    number: "2",
    label: "Lapangan Olahraga",
  },
  {
    number: "1",
    label: "Masjid",
  },
  {
    number: "9+",
    label: "Titik Dokumentasi",
  },
];

  return (
    <section className="py-20 bg-green-600 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-8 text-center">

          {stats.map((item, index) => (
            <div key={index}>
              <h2 className="text-5xl font-bold mb-3">
                {item.number}
              </h2>

              <p className="text-lg">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Statistics;