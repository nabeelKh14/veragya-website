"use client";

import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  variant?: "fixed" | "inline";
}

export default function WhatsAppButton({ variant = "fixed" }: WhatsAppButtonProps) {
  const phoneNumber = "919999999999";
  const message = "Hi! I'd like to know more about your services.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const baseClasses =
    "flex items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:bg-green-600 hover:scale-110 hover:shadow-xl";
  const fixedClasses = "fixed bottom-6 right-6 z-50 h-14 w-14";
  const inlineClasses = "h-12 w-12";

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${variant === "fixed" ? fixedClasses : inlineClasses}`}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className={variant === "fixed" ? "h-7 w-7" : "h-5 w-5"} />
    </button>
  );
}
