import { FaWhatsapp } from "react-icons/fa";

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/6281234567890"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-xl z-50 flex items-center gap-2 transition-all duration-300 hover:scale-105"
    >
      <FaWhatsapp size={24} />
      <span className="font-medium">
        Hubungi Kami
      </span>
    </a>
  );
}

export default WhatsappButton;