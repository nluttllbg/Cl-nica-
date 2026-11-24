import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { buildWhatsAppUrl, CLINIC_INFO, NAV_ITEMS } from '../utils/clinic';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNavUrl = buildWhatsAppUrl(
    'Olá! Gostaria de agendar uma avaliação.'
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="absolute top-6 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none">
      <div className="mx-auto max-w-5xl pointer-events-auto animate-nav-in">
        <div className="relative flex items-center justify-between gap-4 lg:gap-8 rounded-full bg-[#F8F5F0]/95 backdrop-blur-md px-5 sm:px-6 py-2.5 border border-[#D8C4AD]/55 shadow-[0_14px_38px_-14px_rgba(37,35,33,0.28)]">
          {/* Zone 1: Brand wordmark */}
          <a
            href="#inicio"
            onClick={handleLinkClick}
            className="flex items-baseline gap-2 text-[#352820] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#352820] rounded-full"
          >
            <span className="font-editorial text-xl sm:text-[1.35rem] font-semibold tracking-tight leading-none">
              {CLINIC_INFO.brandName}
            </span>
            <span className="text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-[#A18A76]">
              {CLINIC_INFO.brandSubLabel}
            </span>
          </a>

          {/* Zone 2: Desktop Navigation Links */}
          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-5 lg:gap-7"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-[0.8125rem] font-medium text-[#352820]/85 hover:text-[#352820] transition-colors duration-200 whitespace-nowrap shrink-0 py-1 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#A18A76] hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#352820] rounded"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={whatsappNavUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-[#352820] px-4 py-2 text-xs font-medium tracking-wide text-[#F8F5F0] hover:bg-[#252321] transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#352820]"
            >
              <span>Agendar avaliação</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-expanded={isOpen}
              aria-controls="mobile-nav-menu"
              aria-label={isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-[#352820] hover:bg-[#EFE7DC] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#352820]"
            >
              <span className="relative w-5 h-4 flex flex-col justify-between">
                <span
                  className={`block h-[1.5px] w-full bg-[#352820] rounded-full origin-center transition-all duration-300 ease-out ${
                    isOpen ? 'translate-y-[7px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-full bg-[#352820] rounded-full transition-all duration-200 ${
                    isOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-full bg-[#352820] rounded-full origin-center transition-all duration-300 ease-out ${
                    isOpen ? '-translate-y-[7.5px] -rotate-45' : ''
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          id="mobile-nav-menu"
          aria-hidden={!isOpen}
          className={`md:hidden mt-3 origin-top rounded-2xl bg-[#F8F5F0] border border-[#D8C4AD]/65 shadow-[0_20px_45px_-15px_rgba(37,35,33,0.32)] overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen
              ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 scale-95 -translate-y-2 pointer-events-none invisible'
          }`}
        >
          <nav aria-label="Navegação mobile" className="flex flex-col p-4 gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                tabIndex={isOpen ? 0 : -1}
                onClick={handleLinkClick}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-[0.9375rem] font-medium text-[#352820] hover:bg-[#EFE7DC]/75 transition-colors"
              >
                <span>{item.label}</span>
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-[#D8C4AD]/45">
              <a
                href={whatsappNavUrl}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={isOpen ? 0 : -1}
                onClick={handleLinkClick}
                className="flex items-center justify-center gap-2 w-full rounded-full bg-[#352820] px-5 py-3.5 text-sm font-medium text-[#F8F5F0] hover:bg-[#252321] transition-colors"
              >
                <span>Agendar avaliação</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
