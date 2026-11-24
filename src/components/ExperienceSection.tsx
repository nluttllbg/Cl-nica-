import { ArrowUpRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { buildWhatsAppUrl, CLINIC_IMAGES } from '../utils/clinic';
import { ClinicImage } from './ClinicImage';

const GALLERY_ITEMS = [
  {
    src: CLINIC_IMAGES.experienceArchitecture,
    alt: 'Corredor e lounge da Bellos Dentes Concept com ripado em madeira clara, luz natural e atmosfera tranquila',
    caption: 'Arquitetura pensada para acolher',
    spanClass: 'md:col-span-7 md:aspect-[16/10]',
  },
  {
    src: CLINIC_IMAGES.experienceSuite,
    alt: 'Consultório equipado com iluminação natural suave e mobiliário clínico minimalista',
    caption: 'Consultórios com conforto e serenidade',
    spanClass: 'md:col-span-5 md:aspect-[4/3] lg:aspect-auto lg:h-full',
  },
  {
    src: CLINIC_IMAGES.aboutReception,
    alt: 'Área de recepção da clínica em tons neutros com poltronas confortáveis e balcão em pedra natural',
    caption: 'Recepção calma desde a chegada',
    spanClass: 'md:col-span-5 md:aspect-[4/3]',
  },
  {
    src: CLINIC_IMAGES.experienceCare,
    alt: 'Detalhes de instrumental clínico organizado sobre pedra travertino e linho em luz suave',
    caption: 'Atenção e cuidado em cada etapa',
    spanClass: 'md:col-span-7 md:aspect-[16/10]',
  },
];

export function ExperienceSection() {
  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: galleryRef, isInView: galleryInView } = useInView({ threshold: 0.08 });

  const visitWhatsAppUrl = buildWhatsAppUrl(
    'Olá! Gostaria de conhecer a Bellos Dentes Concept e agendar uma avaliação.'
  );

  return (
    <section
      id="experiencia"
      className="bg-[#352820] text-[#F8F5F0] py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Top Row: Editorial Heading + Paragraph + CTA */}
        <div
          ref={headerRef}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end ${
            headerInView ? 'reveal-visible' : 'reveal-hidden'
          }`}
        >
          <div className="lg:col-span-7">
            <p className="text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#D8C4AD] mb-3.5">
              UMA EXPERIÊNCIA DIFERENTE
            </p>
            <h2 className="font-editorial text-[2.15rem] sm:text-[2.85rem] lg:text-[3.35rem] font-normal leading-[1.08] tracking-[-0.01em] text-[#FFFFFF] text-balance">
              Um ambiente onde o cuidado começa antes mesmo da consulta.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[0.95rem] sm:text-base leading-[1.75] text-[#EFE7DC]/88">
              Sabemos que muitas pessoas chegam ao consultório odontológico com
              receio ou ansiedade. Por isso, valorizamos um atendimento atencioso,
              explicações claras e um ambiente acolhedor para tornar cada etapa
              mais tranquila.
            </p>
          </div>
        </div>

        {/* Mobile horizontal scroll gallery / Desktop editorial grid */}
        <div
          ref={galleryRef}
          className={`mt-12 sm:mt-16 flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2 -mx-5 px-5 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-12 md:gap-6 md:overflow-visible no-scrollbar ${
            galleryInView ? 'reveal-visible' : 'reveal-hidden'
          }`}
        >
          {GALLERY_ITEMS.map((item, idx) => (
            <figure
              key={item.caption}
              style={{ transitionDelay: `${idx * 80}ms` }}
              className={`group relative shrink-0 w-[82vw] sm:w-[68vw] md:w-auto snap-center overflow-hidden rounded-xl bg-[#252321] ${item.spanClass}`}
            >
              <div className="aspect-[4/3] md:aspect-auto md:h-full w-full overflow-hidden">
                <ClinicImage
                  src={item.src}
                  alt={item.alt}
                  fallbackTitle={item.caption}
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#252321]/75 via-transparent to-transparent"
              />
              <figcaption className="absolute bottom-4 left-4 right-4 text-xs sm:text-[0.8125rem] font-medium tracking-wide text-[#F8F5F0]/95">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-12 flex justify-start md:justify-end">
          <a
            href={visitWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#F8F5F0] px-7 py-3.5 text-sm font-semibold text-[#352820] hover:bg-[#EFE7DC] transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8F5F0]"
          >
            <span>Venha conhecer a Bellos Dentes</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
