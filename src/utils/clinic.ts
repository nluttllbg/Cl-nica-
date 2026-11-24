export interface NavItem {
  label: string;
  href: string;
}

export interface TreatmentItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  iconName: 'sparkles' | 'sun' | 'shield' | 'align' | 'heart' | 'smile';
}

export interface OpeningHourRow {
  day: string;
  hours: string;
  isClosed?: boolean;
}

export interface ClinicStatus {
  isOpen: boolean;
  label: string;
  detail: string;
}

export const WHATSAPP_PHONE = '5511910489853';

export const CLINIC_INFO = {
  brandName: 'Bellos Dentes',
  brandSubLabel: 'CONCEPT',
  fullName: 'Bellos Dentes Concept | Clínica Odontológica',
  tagline: 'Odontologia com cuidado, atenção e propósito.',
  addressLine1: 'Alameda São Caetano, 1264',
  addressLine2: 'Jardim, Santo André – SP',
  cep: 'CEP 09070-210',
  fullAddress: 'Alameda São Caetano, 1264 – Jardim, Santo André – SP, CEP 09070-210',
  phoneDisplay: '(11) 91048-9853',
  phoneHref: 'tel:+5511910489853',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Bellos+Dentes+Concept%2C+Alameda+Sao+Caetano%2C+1264%2C+Santo+Andre%2C+SP',
  mapsEmbedUrl:
    'https://maps.google.com/maps?q=Alameda+S%C3%A3o+Caetano,+1264+-+Jardim,+Santo+Andr%C3%A9+-+SP,+09070-210&t=&z=16&ie=UTF8&iwloc=&output=embed',
  googleRating: '5,0',
  googleReviewCount: 78,
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'A clínica', href: '#a-clinica' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

export const OPENING_HOURS: OpeningHourRow[] = [
  { day: 'Segunda a Sexta', hours: '08:30–19:00' },
  { day: 'Sábado', hours: '08:30–14:00' },
  { day: 'Domingo', hours: 'Fechado', isClosed: true },
];

export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá! Gostaria de agendar uma avaliação.';

export function buildWhatsAppUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  const cleanMessage = message.trim() || DEFAULT_WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(cleanMessage)}`;
}

export function buildTreatmentWhatsAppMessage(treatmentTitle: string): string {
  return `Olá! Conheci a Bellos Dentes Concept pelo site e gostaria de saber mais sobre ${treatmentTitle} e agendar uma avaliação.`;
}

export function getClinicOpenStatus(now: Date = new Date()): ClinicStatus {
  // Format date parts in São Paulo timezone so clinic hours match Santo André local time
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Sao_Paulo',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const parts = formatter.formatToParts(now);
  const weekday = parts.find((p) => p.type === 'weekday')?.value ?? 'Mon';
  const hourStr = parts.find((p) => p.type === 'hour')?.value ?? '00';
  const minuteStr = parts.find((p) => p.type === 'minute')?.value ?? '00';

  const hour = Number(hourStr) === 24 ? 0 : Number(hourStr);
  const minute = Number(minuteStr);
  const minutesOfDay = hour * 60 + minute;

  const openMinutes = 8 * 60 + 30; // 08:30

  if (weekday === 'Sun') {
    return {
      isOpen: false,
      label: 'Fechado no momento',
      detail: 'Retornamos na segunda-feira às 08:30',
    };
  }

  if (weekday === 'Sat') {
    const closeSat = 14 * 60; // 14:00
    if (minutesOfDay >= openMinutes && minutesOfDay < closeSat) {
      return {
        isOpen: true,
        label: 'Aberto agora',
        detail: 'Atendimento hoje até as 14:00',
      };
    }
    if (minutesOfDay < openMinutes) {
      return {
        isOpen: false,
        label: 'Abre hoje às 08:30',
        detail: 'Sábado das 08:30 às 14:00',
      };
    }
    return {
      isOpen: false,
      label: 'Fechado no momento',
      detail: 'Retornamos na segunda-feira às 08:30',
    };
  }

  const closeWeekday = 19 * 60; // 19:00
  if (minutesOfDay >= openMinutes && minutesOfDay < closeWeekday) {
    return {
      isOpen: true,
      label: 'Aberto agora',
      detail: 'Atendimento hoje até as 19:00',
    };
  }

  if (minutesOfDay < openMinutes) {
    return {
      isOpen: false,
      label: 'Abre hoje às 08:30',
      detail: 'Atendimento das 08:30 às 19:00',
    };
  }

  return {
    isOpen: false,
    label: 'Fechado no momento',
    detail: weekday === 'Fri' ? 'Amanhã atendemos das 08:30 às 14:00' : 'Amanhã atendemos a partir das 08:30',
  };
}

export const CLINIC_IMAGES = {
  hero: '/src/assets/images/hero_dental_clinic_1795540063416.jpg',
  aboutReception: '/src/assets/images/about_clinic_reception_1795540063435.jpg',
  experienceArchitecture:
    '/src/assets/images/experience_clinic_architecture_1795540067090.jpg',
  experienceSuite: '/src/assets/images/treatment_surgery_1795540066291.jpg',
  experienceCare: '/src/assets/images/treatment_prevention_1795540065454.jpg',
  finalCta: '/src/assets/images/final_cta_smile_1795540067824.jpg',
} as const;

export const TREATMENTS: TreatmentItem[] = [
  {
    id: 'estetica-dental-facetas',
    title: 'Estética Dental e Facetas',
    description:
      'Cuidados estéticos voltados à harmonia do sorriso, com planejamento individualizado de acordo com as características de cada paciente.',
    image: '/src/assets/images/treatment_veneers_1795540063279.jpg',
    imageAlt:
      'Paciente com sorriso natural e harmônico após cuidados de estética dental em iluminação natural suave',
    iconName: 'sparkles',
  },
  {
    id: 'clareamento-dental',
    title: 'Clareamento Dental',
    description:
      'Uma alternativa para quem deseja melhorar a aparência da cor dos dentes com orientação e acompanhamento profissional.',
    image: '/src/assets/images/treatment_whitening_1795540063639.jpg',
    imageAlt:
      'Retrato de paciente sorrindo com dentes luminosos e aparência natural e saudável',
    iconName: 'sun',
  },
  {
    id: 'limpeza-prevencao',
    title: 'Limpeza e Prevenção',
    description:
      'Cuidados importantes para a manutenção da saúde bucal e prevenção de problemas odontológicos.',
    image: '/src/assets/images/treatment_prevention_1795540065454.jpg',
    imageAlt:
      'Instrumentos odontológicos esterilizados dispostos sobre bandeja de travertino em ambiente clínico acolhedor',
    iconName: 'shield',
  },
  {
    id: 'ortodontia',
    title: 'Ortodontia',
    description:
      'Tratamentos voltados ao alinhamento dentário e à melhora da função e harmonia do sorriso.',
    image: '/src/assets/images/treatment_orthodontics_1795540065404.jpg',
    imageAlt:
      'Alinhador ortodôntico transparente sobre superfície de pedra natural sob luz suave',
    iconName: 'align',
  },
  {
    id: 'extracao-de-sisos',
    title: 'Extração de Sisos',
    description:
      'Avaliação e cuidados relacionados à necessidade de remoção dos terceiros molares.',
    image: '/src/assets/images/treatment_surgery_1795540066291.jpg',
    imageAlt:
      'Consultório odontológico moderno com iluminação natural e ambiente tranquilo para procedimentos clínicos',
    iconName: 'heart',
  },
  {
    id: 'estetica-orofacial',
    title: 'Estética Orofacial',
    description:
      'Procedimentos estéticos faciais, quando indicados, realizados mediante avaliação individualizada.',
    image: '/src/assets/images/treatment_orofacial_1795540066664.jpg',
    imageAlt:
      'Perfil facial natural e sereno destacando equilíbrio e harmonia estética em luz natural',
    iconName: 'smile',
  },
];
