import {
  AlignCenterHorizontal,
  ArrowUpRight,
  Heart,
  ShieldCheck,
  Smile,
  Sparkles,
  Sun,
} from 'lucide-react';
import { useInView } from '../hooks/useInView';
import {
  buildTreatmentWhatsAppMessage,
  buildWhatsAppUrl,
  TREATMENTS,
  type TreatmentItem,
} from '../utils/clinic';
import { ClinicImage } from './ClinicImage';

function getTreatmentIcon(iconName: TreatmentItem['iconName']) {
  switch (iconName) {
    case 'sparkles':
      return Sparkles;
    case 'sun':
      return Sun;
    case 'shield':
      return ShieldCheck;
    case 'align':
      return AlignCenterHorizontal;
    case 'heart':
      return Heart;
    case 'smile':
      return Smile;
  }
}

export function TreatmentsSection() {
  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: gridRef, isInView: gridInView } = useInView({ threshold: 0.08 });

  return (
    <section
      id="tratamentos"
      className="bg-[#EFE7DC] text-[#352820] py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center ${
            headerInView ? 'reveal-visible' : 'reveal-hidden'
          }`}
        >
          <p className="text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#A18A76] mb-3.5">
            NOSSOS TRATAMENTOS
          </p>
          <h2 className="font-editorial text-[2.15rem] sm:text-[2.85rem] lg:text-[3.25rem] font-normal leading-[1.1] tracking-[-0.01em] text-[#352820] text-balance">
            Seu sorriso merece atenção em cada detalhe.
          </h2>
          <p className="mt-4 text-[0.95rem] sm:text-[1.0625rem] leading-[1.7] text-[#352820]/80">
            Conheça algumas das possibilidades de cuidado odontológico
            disponíveis na clínica.
          </p>
        </div>

        {/* Six Treatment Cards */}
        <div
          ref={gridRef}
          className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8"
        >
          {TREATMENTS.map((treatment, index) => {
            const Icon = getTreatmentIcon(treatment.iconName);
            const whatsappUrl = buildWhatsAppUrl(
              buildTreatmentWhatsAppMessage(treatment.title)
            );

            return (
              <article
                key={treatment.id}
                style={{ transitionDelay: `${index * 70}ms` }}
                className={`group flex flex-col bg-[#F8F5F0] rounded-xl overflow-hidden border border-[#D8C4AD]/60 transition-all duration-500 hover:border-[#A18A76] ${
                  gridInView ? 'reveal-visible' : 'reveal-hidden'
                }`}
              >
                {/* 4:3 Treatment Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#D8C4AD]/30">
                  <ClinicImage
                    src={treatment.image}
                    alt={treatment.imageAlt}
                    fallbackTitle={treatment.title}
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <div className="flex items-center gap-2.5 text-[#A18A76] mb-3">
                      <Icon className="w-4 h-4 stroke-[1.6]" aria-hidden="true" />
                      <span className="h-[1px] flex-1 bg-[#D8C4AD]/55" aria-hidden="true" />
                    </div>
                    <h3 className="font-editorial text-[1.65rem] font-medium leading-snug text-[#352820]">
                      {treatment.title}
                    </h3>
                    <p className="mt-2.5 text-[0.9125rem] leading-[1.65] text-[#352820]/78">
                      {treatment.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#D8C4AD]/45">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Saiba mais sobre ${treatment.title} pelo WhatsApp`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#352820] hover:text-[#A18A76] transition-colors duration-200 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#352820] rounded"
                    >
                      <span>Saiba mais</span>
                      <ArrowUpRight
                        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-10 text-center text-xs sm:text-[0.8125rem] text-[#352820]/70 max-w-2xl mx-auto">
          A disponibilidade e a indicação de cada procedimento são confirmadas
          mediante avaliação odontológica presencial e planejamento individualizado.
        </p>
      </div>
    </section>
  );
}
