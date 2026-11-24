import { Armchair, Eye, HeartHandshake, MessageCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const DIFFERENTIALS = [
  {
    number: '01',
    icon: HeartHandshake,
    title: 'Atendimento acolhedor',
    description:
      'Um atendimento atencioso, com respeito às necessidades e ao momento de cada paciente.',
  },
  {
    number: '02',
    icon: MessageCircle,
    title: 'Escuta e confiança',
    description:
      'Valorizamos a comunicação transparente e explicamos cada etapa do atendimento.',
  },
  {
    number: '03',
    icon: Eye,
    title: 'Atenção aos detalhes',
    description:
      'Do primeiro contato ao acompanhamento, buscamos oferecer uma experiência cuidadosa.',
  },
  {
    number: '04',
    icon: Armchair,
    title: 'Ambiente confortável',
    description:
      'Um espaço agradável para que você se sinta bem durante sua visita.',
  },
];

export function BenefitsSection() {
  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: gridRef, isInView: gridInView } = useInView({ threshold: 0.1 });

  return (
    <section className="bg-[#F8F5F0] text-[#352820] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div
          ref={headerRef}
          className={`max-w-2xl ${
            headerInView ? 'reveal-visible' : 'reveal-hidden'
          }`}
        >
          <p className="text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#A18A76] mb-3.5">
            NOSSO DIFERENCIAL
          </p>
          <h2 className="font-editorial text-[2.15rem] sm:text-[2.85rem] lg:text-[3.25rem] font-normal leading-[1.1] tracking-[-0.01em] text-[#352820] text-balance">
            Cuidar de você também faz parte do tratamento.
          </h2>
        </div>

        <div
          ref={gridRef}
          className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
        >
          {DIFFERENTIALS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                style={{ transitionDelay: `${idx * 80}ms` }}
                className={`border-t border-[#D8C4AD] pt-6 flex flex-col ${
                  gridInView ? 'reveal-visible' : 'reveal-hidden'
                }`}
              >
                <div className="flex items-center justify-between text-[#A18A76]">
                  <span className="text-xs font-semibold tracking-[0.18em] tabular-nums">
                    {item.number}
                  </span>
                  <Icon className="w-4 h-4 stroke-[1.6]" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-editorial text-[1.6rem] font-medium leading-snug text-[#352820]">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[0.9125rem] leading-[1.7] text-[#352820]/78">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
