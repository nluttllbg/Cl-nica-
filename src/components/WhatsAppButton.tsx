import { buildWhatsAppUrl } from '../utils/clinic';

export function WhatsAppButton() {
  const floatingWhatsAppUrl = buildWhatsAppUrl(
    'Olá! Conheci a Bellos Dentes Concept pelo site e gostaria de agendar uma avaliação.'
  );

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366] animate-wa-pulse"
      />
      <a
        href={floatingWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        title="Fale conosco pelo WhatsApp"
        className="relative flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#1F8A4D] text-[#FFFFFF] shadow-[0_12px_30px_-6px_rgba(37,35,33,0.42)] hover:bg-[#197440] hover:scale-105 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F8A4D]"
      >
        <svg
          viewBox="0 0 32 32"
          className="h-6 w-6 sm:h-7 sm:w-7 fill-current"
          aria-hidden="true"
        >
          <path d="M16.04 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.59 4.46 1.71 6.4L3.1 28.9l6.67-1.75a12.75 12.75 0 0 0 6.27 1.64h.01c7.06 0 12.8-5.73 12.8-12.8 0-3.42-1.33-6.64-3.75-9.05A12.72 12.72 0 0 0 16.04 3.2Zm7.45 18.21c-.31.88-1.81 1.68-2.51 1.79-.64.1-1.45.14-2.34-.15-.54-.17-1.24-.4-2.13-.79-3.75-1.62-6.2-5.4-6.39-5.65-.19-.25-1.52-2.03-1.52-3.87 0-1.84.96-2.74 1.3-3.12.34-.37.75-.47 1-.47h.72c.23 0 .54-.09.84.64.31.75 1.06 2.59 1.15 2.78.09.19.16.41.03.66-.13.25-.19.4-.37.62-.19.22-.39.48-.56.65-.19.19-.38.39-.16.76.22.37.97 1.6 2.08 2.59 1.43 1.28 2.64 1.67 3.01 1.86.37.19.59.16.81-.09.22-.25.94-1.09 1.19-1.47.25-.37.5-.31.84-.19.34.12 2.18 1.03 2.56 1.22.37.19.62.28.72.44.09.16.09.9-.22 1.78Z" />
        </svg>
      </a>
    </div>
  );
}
