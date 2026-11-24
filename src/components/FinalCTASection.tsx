import { ArrowUpRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { buildWhatsAppUrl, CLINIC_IMAGES } from '../utils/clinic';
import { ClinicImage } from './ClinicImage';

export function FinalCTASection() {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  const finalWhatsAppUrl = buildWhatsAppUrl(
    'Olá! Conheci a Bellos Dentes Concept pelo site e gostaria de agendar minha avaliação.'
  );

  return (
    <section className="relative overflow-hidden bg-[#252321] py-24 sm:py-32 lg:py-40 text-[#F8F5F0]">
      {/* Background Portrait */}
      <div className="absolute inset-0">
        <ClinicImage
          src={CLINIC_IMAGES.finalCta}
          alt="Paciente com sorriso natural e confiante em ambiente iluminado por luz natural"
          className="h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#252321]/88 via-[#252321]/72 to-[#252321]/55"
        />
      </div>

      {/* Centered Content */}
      <div
        ref={ref}
        className={`relative z-10 mx-auto max-w-3xl px-5 sm:px-8 text-center ${
          isInView ? 'reveal-visible' : 'reveal-hidden'
        }`}
      >
        <h2 className="font-editorial text-[2.45rem] sm:text-[3.35rem] lg:text-[4rem] font-normal leading-[1.06] tracking-[-0.015em] text-[#FFFFFF] text-balance">
          Seu sorriso merece esse cuidado.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-[0.95rem] sm:text-lg leading-relaxed text-[#EFE7DC]/90">
          Estamos prontos para receber você com atenção, carinho e
          profissionalismo.
        </p>

        <div className="mt-9 flex flex-col items-center gap-4">
          <a
            href={finalWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F8F5F0] px-8 py-4 text-sm sm:text-[0.9375rem] font-semibold text-[#352820] hover:bg-[#EFE7DC] transition-colors duration-200 shadow-[0_12px_30px_-8px_rgba(0,0,0,0.5)] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8F5F0]"
          >
            <span>Agende sua avaliação pelo WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>

          <p className="text-xs sm:text-sm text-[#D8C4AD]">
            Será um prazer receber você na Bellos Dentes Concept.
          </p>
        </div>
      </div>
    </section>
  );
}
