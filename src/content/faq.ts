import type { LocalizedText } from './services';

export interface GeneralFAQItem {
  question: LocalizedText;
  answer: LocalizedText;
}

export const generalFaqs: GeneralFAQItem[] = [
  {
    question: {
      uz: "Birinchi tashrifga qanday tayyorlanish kerak?",
      en: 'How should I prepare for my first visit?',
      ru: 'Как подготовиться к первому визиту?',
    },
    answer: {
      uz: "Shunchaki belgilangan vaqtda keling. Agar oldingi tibbiy hujjatlaringiz yoki rentgen suratlaringiz bo'lsa, ular bilan kelishingiz mumkin.",
      en: 'Simply arrive at your scheduled time. If you have previous medical records or X-rays, feel free to bring them along.',
      ru: 'Просто приходите в назначенное время. Если у вас есть предыдущие медицинские документы или снимки, возьмите их с собой.',
    },
  },
  {
    question: {
      uz: 'Navbatni bekor qilish yoki ko\'chirish mumkinmi?',
      en: 'Can I cancel or reschedule my appointment?',
      ru: 'Можно ли отменить или перенести запись?',
    },
    answer: {
      uz: "Ha, albatta. Iltimos, kamida 24 soat oldin Telegram yoki telefon orqali xabar bering.",
      en: 'Yes, of course. Please let us know at least 24 hours in advance via Telegram or phone.',
      ru: 'Да, конечно. Пожалуйста, сообщите нам минимум за 24 часа по Telegram или телефону.',
    },
  },
  {
    question: {
      uz: "To'lov usullari qanday?",
      en: 'What payment methods are available?',
      ru: 'Какие способы оплаты доступны?',
    },
    answer: {
      uz: "Naqd pul va bank kartalari orqali to'lov qabul qilinadi. Aniq narxlar konsultatsiya vaqtida belgilanadi.",
      en: 'We accept cash and bank card payments. Exact pricing is determined during your consultation.',
      ru: 'Мы принимаем оплату наличными и банковскими картами. Точные цены определяются на консультации.',
    },
  },
  {
    question: {
      uz: 'Favqulodda holatlarda (kuchli tish og\'rig\'i) nima qilishim kerak?',
      en: 'What should I do in a dental emergency (severe pain)?',
      ru: 'Что делать при срочной зубной боли?',
    },
    answer: {
      uz: "Telegram yoki telefon orqali darhol bog'laning, imkon qadar tezroq sizni qabul qilishga harakat qilamiz.",
      en: 'Contact us immediately via Telegram or phone, and we will try to see you as soon as possible.',
      ru: 'Немедленно свяжитесь с нами по Telegram или телефону, мы постараемся принять вас как можно скорее.',
    },
  },
  {
    question: {
      uz: 'Bolalar uchun ham xizmat ko\'rsatasizlarmi?',
      en: 'Do you provide treatment for children?',
      ru: 'Оказываете ли вы услуги детям?',
    },
    answer: {
      uz: "Ha, oilaviy tashrif va bolalar uchun muloyim yondashuv taklif etiladi.",
      en: 'Yes, we welcome family visits and offer a gentle approach for children.',
      ru: 'Да, мы принимаем семейные визиты и предлагаем бережный подход к детям.',
    },
  },
];
