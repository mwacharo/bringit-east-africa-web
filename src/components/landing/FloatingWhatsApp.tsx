import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  const phoneNumber = "254741821113"; 
  const message = "Hello Bringit Courier, I need help with...";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
      {/* Optional label */}
      <div className="bg-white shadow-md px-3 py-2 rounded-lg text-sm text-gray-700">
        👋 Chat with <b>Bringit Courier</b>
      </div>

      {/* Floating button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;