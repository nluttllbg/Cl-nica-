import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { buildWhatsAppUrl, CLINIC_IMAGES } from '../utils/clinic';
import { ClinicImage } from './ClinicImage';

export function HeroSection() {
  const heroWhatsAppUrl = buildWhatsAppUrl(
    'Olá! Conheci a Bellos Dentes Concept pelo site e gostaria de agendar uma avaliação.'
  );

  return (
    <section
      id="inicio"
      className="relative min-h-[650px] h-[100svh] w-full flex flex-col justify-end overflow-hidden bg-[#252321]"
    >
      {/* Background Architectural Clinic Photography */}
      <div className="absolute inset-0">
        <ClinicImage
          src={CLINIC_IMAGES.hero}
          alt="Sala clínica moderna e iluminada da Bellos Dentes Concept com luz natural e design acolhedor em tons neutros"
          loading="eager"
          fetchPriority="high"
          className="h-full w-full object-cover object-center"
        />
        {/* Measured scrim for WCAG AA/AAA text legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#252321]/88 via-[#252321]/45 to-[#252321]/30"
        />
      </div>

      {/* Bottom-aligned centered editorial content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-5 sm:px-8 pb-10 sm:pb-14 pt-28 text-center text-[#F8F5F0]">
        <p
          className="animate-hero-up text-[0.7rem] sm:text-xs font-medium tracking-[0.26em] text-[#EFE7DC]/90 uppercase mb-4"
          style={{ animationDelay: '60ms' }}
        >
          ODONTOLOGIA • ESTÉTICA • CUIDADO
        </p>

        <h1
          className="animate-hero-up font-editorial text-[2.75rem] sm:text-[3.85rem] lg:text-[4.65rem] font-normal leading-[1.03] tracking-[-0.015em] text-[#FFFFFF] text-balance"
          style={{ animationDelay: '150ms' }}
        >
          Seu sorriso,{' '}
          <br />
          em sua <em className="italic font-normal text-[#EFE7DC]">melhor versão</em>.
        </h1>

        <p
          className="animate-hero-up mx-auto mt-5 max-w-xl text-[0.95rem] sm:text-[1.0625rem] leading-relaxed text-[#F8F5F0]/88 font-normal"
          style={{ animationDelay: '240ms' }}
        >
          Mais do que cuidar do seu sorriso, queremos proporcionar uma
          experiência de confiança, conforto e cuidado em cada detalhe.
        </p>

        {/* Hero Action Buttons */}
        <div
          className="animate-hero-up mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4"
          style={{ animationDelay: '330ms' }}
        >
          <a
            href={heroWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-full bg-[#F8F5F0] px-7 py-3.5 text-sm font-semibold text-[#352820] hover:bg-[#EFE7DC] transition-all duration-200 shadow-[0_10px_28px_-8px_rgba(0,0,0,0.45)] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8F5F0]"
          >
            <span>Agende sua avaliação</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>

          <a
            href="#a-clinica"
            className="inline-flex items-center justify-center w-full sm:w-auto rounded-full border border-[#F8F5F0]/45 bg-[#252321]/30 backdrop-blur-sm px-7 py-3.5 text-sm font-medium text-[#F8F5F0] hover:bg-[#F8F5F0]/15 hover:border-[#F8F5F0]/75 transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8F5F0]"
          >
            Conheça a clínica
          </a>
        </div>

        {/* Subtle trust indicator & minimal scroll prompt */}
        <div
          className="animate-hero-up mt-7 flex flex-col items-center gap-3"
          style={{ animationDelay: '420ms' }}
        >
          <p className="text-xs sm:text-[0.8125rem] tracking-wide text-[#D8C4AD]">
            Um espaço pensado para você se sentir bem.
          </p>
          <a
            href="#a-clinica"
            aria-label="Rolar para conhecer a clínica"
            className="inline-flex items-center justify-center w-8 h-8 rounded-full text-[#EFE7DC]/80 hover:text-[#FFFFFF] transition-colors animate-gentle-float focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8F5F0]"
          >
            <ArrowDown className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
