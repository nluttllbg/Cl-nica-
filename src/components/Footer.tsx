import { useEffect, useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { buildWhatsAppUrl, CLINIC_INFO, NAV_ITEMS } from '../utils/clinic';

export function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const footerWhatsAppUrl = buildWhatsAppUrl(
    'Olá! Gostaria de agendar uma avaliação na Bellos Dentes Concept.'
  );

  useEffect(() => {
    if (!privacyOpen) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setPrivacyOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [privacyOpen]);

  return (
    <footer className="bg-[#352820] text-[#F8F5F0] pt-16 sm:pt-20 pb-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#F8F5F0]/15">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <a
              href="#inicio"
              className="inline-flex items-baseline gap-2.5 text-[#FFFFFF]"
            >
              <span className="font-editorial text-2xl sm:text-[1.75rem] font-medium tracking-tight">
                {CLINIC_INFO.brandName}
              </span>
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#D8C4AD]">
                {CLINIC_INFO.brandSubLabel}
              </span>
            </a>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#EFE7DC]/80">
              {CLINIC_INFO.tagline}
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8C4AD]">
              Navegação
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[#F8F5F0]/80 hover:text-[#FFFFFF] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8C4AD]">
              Contato
            </p>
            <div className="mt-4 space-y-3 text-sm text-[#F8F5F0]/82">
              <p>
                WhatsApp:{' '}
                <a
                  href={footerWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#FFFFFF] hover:text-[#D8C4AD] transition-colors tabular-nums"
                >
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </p>
              <p className="leading-relaxed">
                {CLINIC_INFO.addressLine1} – {CLINIC_INFO.addressLine2}
              </p>
              <div className="pt-1 flex flex-wrap items-center gap-4">
                <a
                  href={CLINIC_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#D8C4AD] hover:text-[#FFFFFF] transition-colors"
                >
                  <span>Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
                <button
                  type="button"
                  onClick={() => setPrivacyOpen(true)}
                  className="text-xs font-medium text-[#D8C4AD] hover:text-[#FFFFFF] transition-colors underline underline-offset-4 cursor-pointer"
                >
                  Política de Privacidade
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Discreet Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#EFE7DC]/65">
          <p>© 2026 Bellos Dentes Concept. Todos os direitos reservados.</p>
          <p className="max-w-lg sm:text-right leading-relaxed">
            Conteúdo informativo. Todo tratamento odontológico depende de
            avaliação clínica individualizada realizada na clínica.
          </p>
        </div>
      </div>

      {/* Accessible Privacy Notice Dialog */}
      {privacyOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-modal-title"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#252321]/70 backdrop-blur-sm p-4"
          onClick={() => setPrivacyOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-2xl bg-[#F8F5F0] text-[#352820] p-6 sm:p-8 shadow-2xl border border-[#D8C4AD]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <h2
                id="privacy-modal-title"
                className="font-editorial text-2xl font-medium text-[#352820]"
              >
                Política de Privacidade
              </h2>
              <button
                type="button"
                onClick={() => setPrivacyOpen(false)}
                aria-label="Fechar política de privacidade"
                className="rounded-full p-2 text-[#352820]/70 hover:bg-[#EFE7DC] hover:text-[#352820] transition-colors"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#352820]/85">
              <p>
                Este site tem finalidade exclusivamente informativa e facilita o
                contato direto com a equipe da{' '}
                <strong>Bellos Dentes Concept</strong> por meio do WhatsApp
                oficial da clínica.
              </p>
              <p>
                Não coletamos nem armazenamos dados pessoais por meio de
                formulários nesta página. Ao clicar nos links de atendimento,
                você será direcionado ao aplicativo WhatsApp para conversar
                diretamente com nossa recepção.
              </p>
              <p>
                Em caso de dúvidas sobre seus dados ou atendimento, entre em
                contato pelo WhatsApp {CLINIC_INFO.phoneDisplay} ou presencialmente
                em {CLINIC_INFO.fullAddress}.
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setPrivacyOpen(false)}
                className="rounded-full bg-[#352820] px-6 py-2.5 text-xs font-medium text-[#F8F5F0] hover:bg-[#252321] transition-colors"
              >
                Entendi
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
