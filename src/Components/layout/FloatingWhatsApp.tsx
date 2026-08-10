"use client";

import { MessageCircle } from "lucide-react";

const PHONE_NUMBER = "+91XXXXXXXXXX";

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${PHONE_NUMBER.replace(/\\D/g, "")}?text=Hello%20Active%20Paints,%20I%20would%20like%20a%20paint%20quotation.`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 md:bottom-6 right-4 z-[999] flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 animate-[pulse_2.5s_ease-in-out_infinite]"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}