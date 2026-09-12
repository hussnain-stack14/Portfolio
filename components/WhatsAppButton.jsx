"use client";

import Link from "next/link";

export default function WhatsAppButton({ phoneNumber, message = "Hi, I'd like to get in touch!" }) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(37,211,102,0.18)] transition duration-200 hover:scale-[1.02] hover:bg-[#20bd5a] hover:shadow-[0_10px_30px_rgba(37,211,102,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a1d]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12.001 2C6.478 2 2 6.478 2 12.001c0 2.115.652 4.076 1.766 5.696L2.05 22l4.401-1.657A9.955 9.955 0 0 0 12 22c5.523 0 10-4.478 10-9.999C22 6.478 17.523 2 12.001 2zm0 18.09a8.089 8.089 0 0 1-4.115-1.126l-.295-.176-3.06 1.152.815-2.984-.191-.306A8.088 8.088 0 1 1 12.001 20.09z" />
      </svg>
      Chat on WhatsApp
    </Link>
  );
}