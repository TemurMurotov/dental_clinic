export type Locale = 'uz' | 'en' | 'ru';

export const locales: Locale[] = ['uz', 'en', 'ru'];
export const defaultLocale: Locale = 'uz';

export const siteConfig = {
  doctorName: 'Dr. Alisher Muratbayev',
  clinicName: 'Dr. Alisher Muratbayev Dental Studio',
  phone: '+998 93 150 04 03',
  phoneHref: '+998931500403',
  whatsappNumber: '998931500403',
  telegramUsername: 'alisherlv7',
  instagramUsername: 'alisher.dent',
  email: 'info@example.com',
  mapEmbedUrl: '',
  address: {
    uz: "Uvaysiy ko'chasi, 4-uy, EMU CLINIC",
    en: 'Uvaysiy street, 4, EMU CLINIC',
    ru: 'ул. Увайсий, 4, EMU CLINIC',
  },
  workingHours: {
    uz: 'Dushanba – Shanba: 09:00 – 19:00',
    en: 'Mon – Sat: 9:00 AM – 7:00 PM',
    ru: 'Пн – Сб: 09:00 – 19:00',
  },
} as const;

export const doctorProfile = {
  photo: '/images/doctor-placeholder.svg',
  experienceYears: 12,
  patientsCount: '3000+',
  bio: {
    uz: [
      "Dr. Alisher Muratbayev — 12 yildan ortiq tajribaga ega, zamonaviy davolash usullarini qo'llaydigan stomatolog. U har bir bemorga individual yondashuv, og'riqsiz davolash va yuqori sifatli natijaga alohida e'tibor beradi.",
      "O'z faoliyati davomida minglab bemorlarga sog'lom va chiroyli tabassum sovg'a qilgan. Zamonaviy uskunalar va isbotlangan protokollar asosida ishlaydi.",
    ],
    en: [
      'Dr. Alisher Muratbayev is a dentist with over 12 years of experience, applying modern treatment methods. He pays special attention to an individual approach, painless treatment, and high-quality results for every patient.',
      'Throughout his career, he has given thousands of patients healthy and beautiful smiles. He works with modern equipment and proven clinical protocols.',
    ],
    ru: [
      'Dr. Alisher Muratbayev — стоматолог с более чем 12-летним опытом, применяющий современные методы лечения. Особое внимание уделяет индивидуальному подходу, безболезненному лечению и качественному результату для каждого пациента.',
      'За время практики подарил тысячам пациентов здоровую и красивую улыбку. Работает на современном оборудовании по проверенным клиническим протоколам.',
    ],
  },
  education: {
    uz: [
      'Toshkent Davlat Stomatologiya Instituti — Davolash stomatologiyasi (namuna, o\'zgartiring)',
      'Endodontiya bo\'yicha malaka oshirish kursi',
      'Xalqaro stomatologiya konferensiyalari va seminarlarida ishtirok',
    ],
    en: [
      'Tashkent State Dental Institute — Therapeutic Dentistry (sample, please update)',
      'Advanced Endodontics Certification Course',
      'Regular participant of international dental conferences and workshops',
    ],
    ru: [
      'Ташкентский государственный стоматологический институт — Терапевтическая стоматология (пример, обновите данные)',
      'Курс повышения квалификации по эндодонтии',
      'Постоянный участник международных стоматологических конференций',
    ],
  },
  mission: {
    uz: "Bizning maqsadimiz — har bir bemorga sifatli, og'riqsiz va uzoq muddatli natija beruvchi davolashni taqdim etish, shifoxonaga tashrifni qulay va stressiz tajribaga aylantirish.",
    en: 'Our mission is to provide every patient with high-quality, painless, and long-lasting treatment, turning every clinic visit into a comfortable, stress-free experience.',
    ru: 'Наша миссия — предоставить каждому пациенту качественное, безболезненное и долгосрочное лечение, превратив визит в клинику в комфортный и приятный опыт.',
  },
  certificates: [
    { titleKey: 'certificate1', image: '/images/certificate-placeholder.svg' },
    { titleKey: 'certificate2', image: '/images/certificate-placeholder.svg' },
    { titleKey: 'certificate3', image: '/images/certificate-placeholder.svg' },
  ],
};
