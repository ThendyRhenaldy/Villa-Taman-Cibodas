import { useState } from "react";

function FAQ() {
  const faqs = [
    {
      question: "Apakah tersedia keamanan 24 jam?",
      answer:
        "Ya, Villa Taman Cibodas memiliki sistem keamanan dan pos penjagaan untuk menunjang kenyamanan warga.",
    },
    {
      question: "Apakah tersedia fasilitas olahraga?",
      answer:
        "Tersedia lapangan basket dan lapangan tenis yang dapat digunakan oleh warga.",
    },
    {
      question: "Apakah tersedia tempat ibadah?",
      answer:
        "Terdapat masjid yang berada di lingkungan Villa Taman Cibodas.",
    },
    {
      question: "Apakah lingkungan cocok untuk keluarga?",
      answer:
        "Ya, lingkungan yang nyaman, asri, dan memiliki fasilitas penunjang aktivitas keluarga.",
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <section id="faq" className="py-24 px-6 bg-white">
      <div data-aos="fade-up" className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Pertanyaan Umum
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="w-full flex justify-between items-center p-5 text-left font-semibold"
              >
                {faq.question}
                <span>
                  {active === index ? "−" : "+"}
                </span>
              </button>

              {active === index && (
                <div className="px-5 pb-5 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;