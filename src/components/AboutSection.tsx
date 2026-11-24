import { Armchair, ArrowUpRight, HeartHandshake, ShieldCheck } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { buildWhatsAppUrl, CLINIC_IMAGES } from '../utils/clinic';
import { ClinicImage } from './ClinicImage';

const HIGHLIGHTS = [
  {
    icon: HeartHandshake,
    title: 'Atendimento humanizado',
    description: 'Atenção individualizada e escuta cuidadosa.',
  },
  {
    icon: Armchair,
    title: 'Ambiente acolhedor',
    description: 'Um espaço pensado para proporcionar conforto e tranquilidade.',
  },
  {
    icon: ShieldCheck,
    title: 'Cuidado em cada detalhe',
    description: 'Orientações claras e atenção durante sua experiência.',
  },
];

export function AboutSection() {
  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: contentRef, isInView: contentInView } = useInView();

  const teamWhatsAppUrl = buildWhatsAppUrl(
    'Olá! Conheci a Bellos Dentes Concept pelo site e gostaria de conhecer a equipe e agendar uma avaliação.'
  );

  return (
    <section
      id="a-clinica"
      className="bg-[#F8F5F0] text-[#352820] py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Top centered editorial intro */}
        <div
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center ${
            headerInView ? 'reveal-visible' : 'reveal-hidden'
          }`}
        >
          <p className="text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#A18A76] mb-3.5">
            CONHEÇA A BELLOS DENTES
          </p>
          <h2 className="font-editorial text-[2.15rem] sm:text-[2.85rem] lg:text-[3.25rem] font-normal leading-[1.1] tracking-[-0.01em] text-[#352820] text-balance">
            Odontologia com um olhar especial para você.
          </h2>
          <p className="mt-5 text-[0.95rem] sm:text-[1.0625rem] leading-[1.7] text-[#352820]/80">
            Na Bellos Dentes Concept, acreditamos que cuidar do sorriso vai muito
            além de procedimentos. Cada pessoa merece atenção, escuta e um
            atendimento que respeite suas necessidades.
          </p>
        </div>

        {/* Two-column editorial split */}
        <div
          ref={contentRef}
          className="mt-14 sm:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch"
        >
          {/* Left column: Reception photograph */}
          <div
            className={`lg:col-span-6 ${
              contentInView ? 'reveal-visible' : 'reveal-hidden'
            }`}
          >
            <div className="relative h-full min-h-[320px] sm:min-h-[420px] lg:min-h-[520px] overflow-hidden rounded-2xl bg-[#EFE7DC]">
              <ClinicImage
                src={CLINIC_IMAGES.aboutReception}
                alt="Recepção acolhedora da Bellos Dentes Concept com mobiliário contemporâneo, iluminação quente e detalhes em pedra natural"
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                fallbackTitle="Recepção Bellos Dentes Concept"
              />
            </div>
          </div>

          {/* Right column: Narrative + 3 subtle features + CTA */}
          <div
            className={`lg:col-span-6 flex flex-col justify-center ${
              contentInView ? 'reveal-visible' : 'reveal-hidden'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <h3 className="font-editorial text-[1.85rem] sm:text-[2.25rem] font-normal leading-[1.15] text-[#352820] text-balance">
              Um novo jeito de viver sua experiência odontológica.
            </h3>

            <p className="mt-4 text-[0.95rem] sm:text-base leading-[1.75] text-[#352820]/80">
              Preparamos um ambiente acolhedor para que você se sinta confortável
              desde o primeiro contato. Nosso cuidado está nos detalhes: na
              atenção ao receber, na clareza das orientações e no acompanhamento
              de cada etapa.
            </p>

            {/* Feature list with hairline dividers */}
            <div className="mt-8 border-t border-[#D8C4AD]/60 divide-y divide-[#D8C4AD]/60">
              {HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="py-4 sm:py-5 flex items-start gap-4"
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D8C4AD] bg-[#EFE7DC]/55 text-[#352820]">
                      <Icon className="w-4 h-4 stroke-[1.6]" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-[0.9375rem] font-semibold text-[#352820]">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-[#352820]/75">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <a
                href={teamWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#352820] px-7 py-3.5 text-sm font-medium text-[#F8F5F0] hover:bg-[#252321] transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#352820]"
              >
                <span>Conheça nossa equipe</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
