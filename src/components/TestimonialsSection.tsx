import { ArrowUpRight, Star } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { CLINIC_INFO } from '../utils/clinic';

const EXPERIENCE_THEMES = [
  {
    id: 'estetica',
    context: 'Estética Dental',
    summary:
      'Relatos destacam o atendimento atencioso e a segurança transmitida pela equipe durante o planejamento e a realização dos cuidados estéticos com o sorriso.',
  },
  {
    id: 'ambiente',
    context: 'Ambiente Acolhedor',
    summary:
      'Pacientes ressaltam a sensação de bem-estar no espaço da clínica, a cordialidade na recepção e o cuidado dedicado ao longo de toda a consulta.',
  },
  {
    id: 'tranquilidade',
    context: 'Conforto e Clareza',
    summary:
      'Avaliações valorizam as explicações detalhadas de cada etapa e o ambiente tranquilo, ajudando até quem chegava com receio a se sentir à vontade.',
  },
];

export function TestimonialsSection() {
  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: cardsRef, isInView: cardsInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="avaliacoes"
      className="bg-[#EFE7DC] text-[#352820] py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header & Google Summary */}
        <div
          ref={headerRef}
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-8 ${
            headerInView ? 'reveal-visible' : 'reveal-hidden'
          }`}
        >
          <div className="max-w-2xl">
            <p className="text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#A18A76] mb-3.5">
              EXPERIÊNCIAS REAIS
            </p>
            <h2 className="font-editorial text-[2.15rem] sm:text-[2.85rem] lg:text-[3.25rem] font-normal leading-[1.1] tracking-[-0.01em] text-[#352820] text-balance">
              A <em className="italic font-normal">confiança</em> de quem já
              conhece nosso cuidado.
            </h2>
          </div>

          <div className="flex flex-col sm:items-start lg:items-end gap-1.5 shrink-0">
            <div className="flex items-center gap-1 text-[#A18A76]" aria-label="Avaliação de 5 estrelas">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#A18A76] text-[#A18A76]"
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="text-sm font-semibold text-[#352820] tabular-nums">
              {CLINIC_INFO.googleRating} estrelas no Google
            </p>
            <p className="text-xs text-[#352820]/70 tabular-nums">
              {CLINIC_INFO.googleReviewCount} avaliações
            </p>
          </div>
        </div>

        {/* Horizontal Scroll on Mobile / 3-column Grid on Desktop */}
        <div
          ref={cardsRef}
          className="mt-12 sm:mt-16 flex overflow-x-auto snap-x snap-mandatory gap-5 pb-2 -mx-5 px-5 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-3 md:gap-7 md:overflow-visible no-scrollbar"
        >
          {EXPERIENCE_THEMES.map((item, idx) => (
            <article
              key={item.id}
              style={{ transitionDelay: `${idx * 85}ms` }}
              className={`shrink-0 w-[84vw] sm:w-[68vw] md:w-auto snap-center flex flex-col justify-between rounded-xl bg-[#F8F5F0] p-7 sm:p-8 border border-[#D8C4AD]/65 ${
                cardsInView ? 'reveal-visible' : 'reveal-hidden'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#D8C4AD]/50">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A18A76]">
                    {item.context}
                  </span>
                  <div className="flex items-center gap-0.5 text-[#A18A76]" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[#A18A76] text-[#A18A76]"
                      />
                    ))}
                  </div>
                </div>

                <p className="mt-6 font-editorial text-[1.4rem] sm:text-[1.5rem] leading-[1.45] text-[#352820]">
                  {item.summary}
                </p>
              </div>

              <p className="mt-6 pt-4 border-t border-[#D8C4AD]/40 text-xs text-[#352820]/65">
                Síntese de percepções de atendimento na clínica
              </p>
            </article>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <a
            href={CLINIC_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#352820]/30 bg-transparent px-7 py-3.5 text-sm font-medium text-[#352820] hover:bg-[#352820] hover:text-[#F8F5F0] transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#352820]"
          >
            <span>Ver avaliações no Google</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
