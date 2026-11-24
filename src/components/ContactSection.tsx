import { ArrowUpRight, Clock, MapPin, MessageCircle, Navigation } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import {
  buildWhatsAppUrl,
  CLINIC_INFO,
  getClinicOpenStatus,
  OPENING_HOURS,
} from '../utils/clinic';

export function ContactSection() {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.08 });

  const contactWhatsAppUrl = buildWhatsAppUrl(
    'Olá! Gostaria de mais informações sobre a clínica.'
  );
  const clinicStatus = getClinicOpenStatus();

  return (
    <section
      id="contato"
      className="bg-[#F8F5F0] text-[#352820] py-20 sm:py-28 lg:py-32"
    >
      <div
        ref={sectionRef}
        className="mx-auto max-w-6xl px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch"
      >
        {/* Left Column: Contact details & WhatsApp CTA */}
        <div
          className={`lg:col-span-5 flex flex-col justify-between ${
            isInView ? 'reveal-visible' : 'reveal-hidden'
          }`}
        >
          <div>
            <p className="text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#A18A76] mb-3.5">
              ESTAMOS ESPERANDO POR VOCÊ
            </p>
            <h2 className="font-editorial text-[2.15rem] sm:text-[2.75rem] lg:text-[3.1rem] font-normal leading-[1.1] tracking-[-0.01em] text-[#352820] text-balance">
              Seu próximo sorriso começa com uma conversa.
            </h2>
            <p className="mt-4 text-[0.95rem] sm:text-base leading-[1.7] text-[#352820]/80">
              Entre em contato com nossa equipe e encontre o melhor momento para
              sua avaliação.
            </p>

            {/* Structured contact details */}
            <div className="mt-8 border-t border-[#D8C4AD]/65 divide-y divide-[#D8C4AD]/65">
              <div className="py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A18A76]">
                  {CLINIC_INFO.fullName}
                </p>
                <div className="mt-2.5 flex items-start gap-3">
                  <MapPin
                    className="w-4 h-4 text-[#A18A76] shrink-0 mt-1 stroke-[1.6]"
                    aria-hidden="true"
                  />
                  <address className="not-italic text-sm sm:text-[0.9375rem] leading-relaxed text-[#352820]">
                    <span className="block">{CLINIC_INFO.addressLine1}</span>
                    <span className="block">{CLINIC_INFO.addressLine2}</span>
                    <span className="block text-[#352820]/75 tabular-nums">
                      {CLINIC_INFO.cep}
                    </span>
                  </address>
                </div>
              </div>

              <div className="py-5 flex items-start gap-3">
                <MessageCircle
                  className="w-4 h-4 text-[#A18A76] shrink-0 mt-1 stroke-[1.6]"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A18A76]">
                    WhatsApp
                  </p>
                  <a
                    href={contactWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-base font-semibold text-[#352820] hover:text-[#A18A76] transition-colors tabular-nums"
                  >
                    {CLINIC_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="py-5 flex items-start gap-3">
                <Clock
                  className="w-4 h-4 text-[#A18A76] shrink-0 mt-1 stroke-[1.6]"
                  aria-hidden="true"
                />
                <div className="w-full">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A18A76]">
                      Horário de atendimento
                    </p>
                    <span className="text-xs font-medium text-[#352820]/75">
                      {clinicStatus.label}
                    </span>
                  </div>

                  <dl className="mt-2.5 space-y-1.5 text-sm">
                    {OPENING_HOURS.map((row) => (
                      <div
                        key={row.day}
                        className="flex items-center justify-between gap-4"
                      >
                        <dt className="text-[#352820]/80">{row.day}</dt>
                        <dd
                          className={`tabular-nums font-medium ${
                            row.isClosed ? 'text-[#A18A76]' : 'text-[#352820]'
                          }`}
                        >
                          {row.hours}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-7">
            <a
              href={contactWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-full bg-[#352820] px-7 py-3.5 text-sm font-medium text-[#F8F5F0] hover:bg-[#252321] transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#352820]"
            >
              <span>Falar com nossa equipe</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Right Column: Responsive Google Maps embed + Directions CTA */}
        <div
          className={`lg:col-span-7 flex flex-col justify-between gap-4 ${
            isInView ? 'reveal-visible' : 'reveal-hidden'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          <div className="relative flex-1 min-h-[340px] sm:min-h-[420px] lg:min-h-[480px] w-full overflow-hidden rounded-2xl border border-[#D8C4AD]/75 bg-[#EFE7DC]">
            <iframe
              title="Localização da Bellos Dentes Concept na Alameda São Caetano, 1264, Santo André"
              src={CLINIC_INFO.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
            <p className="text-xs sm:text-[0.8125rem] text-[#352820]/75">
              Bairro Jardim • Fácil acesso em Santo André
            </p>
            <a
              href={CLINIC_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#352820]/30 px-6 py-2.5 text-sm font-medium text-[#352820] hover:bg-[#352820] hover:text-[#F8F5F0] transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#352820]"
            >
              <Navigation className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Como chegar</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
