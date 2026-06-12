import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const photos = [
  {
    image: `${import.meta.env.BASE_URL}images/gerbang-vtc.png`,
    title: "Gerbang Utama",
  },
  {
    image: `${import.meta.env.BASE_URL}/images/jalan1.png`,
    title: "Jalan Kompleks",
  },
  {
    image: `${import.meta.env.BASE_URL}/images/jalan2.png`,
    title: "Area Perumahan",
  },
  {
    image: `${import.meta.env.BASE_URL}/images/lapanganbasket-vtc.png`,
    title: "Lapangan Basket",
  },
  {
    image: `${import.meta.env.BASE_URL}/images/lapangantenis-vtc.png`,
    title: "Lapangan Tenis",
  },
  {
    image: `${import.meta.env.BASE_URL}/images/masjid-vtc.png`,
    title: "Masjid",
  },
  {
    image: `${import.meta.env.BASE_URL}/images/posdepan-vtc.png`,
    title: "Pos Keamanan",
  },
  {
    image: `${import.meta.env.BASE_URL}/images/posnyuamleng-vtc.png`,
    title: "Pos Nyuamleng",
  },
  {
    image: `${import.meta.env.BASE_URL}/images/posnyuamleng1-vtc.png`,
    title: "Area Pos Nyuamleng",
  },
];

function Gallery() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = photos.map((photo) => ({
    src: photo.image,
  }));

  return (
    <section
      id="gallery"
      className="py-24 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Galeri Villa Taman Cibodas
        </h2>

        <p className="text-center text-gray-600 mb-14">
          Dokumentasi lingkungan dan fasilitas Villa Taman Cibodas.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              data-aos="fade-up"
                data-aos-delay={index * 100}
              onClick={() => {
                setCurrentIndex(index);
                setOpen(true);
              }}
              className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">
                  {photo.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          index={currentIndex}
        />
      </div>
    </section>
  );
}

export default Gallery;