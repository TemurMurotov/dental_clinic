export type ServiceCategorySlug = 'therapeutic' | 'hygiene' | 'surgery' | 'endodontics';

export interface LocalizedText {
  uz: string;
  en: string;
  ru: string;
}

export interface LocalizedList {
  uz: string[];
  en: string[];
  ru: string[];
}

export interface FAQItem {
  question: LocalizedText;
  answer: LocalizedText;
}

export interface Service {
  slug: string;
  category: ServiceCategorySlug;
  icon: string;
  title: LocalizedText;
  shortDescription: LocalizedText;
  description: LocalizedText;
  benefits: LocalizedList;
  process: LocalizedList;
  faqs: FAQItem[];
}

export interface ServiceCategory {
  slug: ServiceCategorySlug;
  icon: string;
  title: LocalizedText;
  description: LocalizedText;
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: 'therapeutic',
    icon: 'Stethoscope',
    title: { uz: 'Davolash stomatologiyasi', en: 'Therapeutic Dentistry', ru: 'Терапевтическая стоматология' },
    description: {
      uz: "Tish kariesi, pulpit va boshqa muammolarni zamonaviy materiallar bilan davolash",
      en: 'Treating caries, pulpitis and other issues using modern materials',
      ru: 'Лечение кариеса, пульпита и других проблем современными материалами',
    },
  },
  {
    slug: 'hygiene',
    icon: 'Sparkles',
    title: { uz: 'Professional og\'iz gigienasi', en: 'Professional Oral Hygiene', ru: 'Профессиональная гигиена полости рта' },
    description: {
      uz: "Tishlarni tozalash, oqartirish va profilaktik parvarish xizmatlari",
      en: 'Teeth cleaning, whitening and preventive care services',
      ru: 'Чистка, отбеливание и профилактический уход за зубами',
    },
  },
  {
    slug: 'surgery',
    icon: 'Scissors',
    title: { uz: 'Stomatologik jarrohlik', en: 'Dental Surgery', ru: 'Хирургическая стоматология' },
    description: {
      uz: "Tish sug'urish va boshqa jarrohlik amaliyotlari malakali mutaxassislar tomonidan",
      en: 'Tooth extraction and other surgical procedures by qualified specialists',
      ru: 'Удаление зубов и другие хирургические операции у квалифицированных специалистов',
    },
  },
  {
    slug: 'endodontics',
    icon: 'Activity',
    title: { uz: 'Endodontiya', en: 'Endodontics', ru: 'Эндодонтия' },
    description: {
      uz: "Tish kanallarini zamonaviy uskunalar bilan davolash",
      en: 'Root canal treatment using modern equipment',
      ru: 'Лечение корневых каналов с использованием современного оборудования',
    },
  },
];

export const services: Service[] = [
  // ---------------- THERAPEUTIC ----------------
  {
    slug: 'dental-fillings',
    category: 'therapeutic',
    icon: 'Syringe',
    title: { uz: 'Tish plombalash', en: 'Dental Fillings', ru: 'Пломбирование зубов' },
    shortDescription: {
      uz: "Zararlangan tish to'qimasini tiklab, tabiiy ko'rinishni qaytaramiz",
      en: 'Restoring damaged tooth structure with a natural look',
      ru: 'Восстановление повреждённых тканей зуба с естественным видом',
    },
    description: {
      uz: "Zamonaviy kompozit materiallar yordamida tishning shakli va funksiyasi to'liq tiklanadi. Plomba rangi tabiiy tish rangiga moslashtiriladi, natija sezilmaydigan darajada tabiiy bo'ladi.",
      en: 'Using modern composite materials, the shape and function of the tooth are fully restored. The filling color is matched to the natural tooth shade for a seamless result.',
      ru: 'С помощью современных композитных материалов форма и функция зуба полностью восстанавливаются. Цвет пломбы подбирается под естественный оттенок зуба.',
    },
    benefits: {
      uz: ['Bir martalik tashrifda bajariladi', 'Tabiiy rang va shakl', "Og'riqsiz zamonaviy anesteziya", 'Uzoq muddatli natija'],
      en: ['Completed in a single visit', 'Natural color and shape', 'Painless modern anesthesia', 'Long-lasting result'],
      ru: ['Выполняется за один визит', 'Естественный цвет и форма', 'Безболезненная анестезия', 'Долговечный результат'],
    },
    process: {
      uz: ['Tashxis va rentgen tekshiruvi', "Zararlangan to'qimani tozalash", 'Kompozit material bilan tiklash', 'Yasash va sayqallash'],
      en: ['Diagnosis and X-ray examination', 'Removing damaged tissue', 'Restoration with composite material', 'Shaping and polishing'],
      ru: ['Диагностика и рентген-обследование', 'Удаление повреждённой ткани', 'Восстановление композитным материалом', 'Формирование и полировка'],
    },
    faqs: [
      {
        question: { uz: 'Plomba qancha muddat xizmat qiladi?', en: 'How long does a filling last?', ru: 'Сколько служит пломба?' },
        answer: {
          uz: "To'g'ri parvarish bilan 5-10 yil yoki undan ko'proq xizmat qiladi.",
          en: 'With proper care, it can last 5–10 years or longer.',
          ru: 'При правильном уходе служит 5–10 лет и более.',
        },
      },
      {
        question: { uz: 'Jarayon og\'riqli bo\'ladimi?', en: 'Is the procedure painful?', ru: 'Болезненна ли процедура?' },
        answer: {
          uz: "Yo'q, zamonaviy mahalliy anesteziya tufayli jarayon deyarli sezilmaydi.",
          en: 'No, thanks to modern local anesthesia the procedure is virtually painless.',
          ru: 'Нет, благодаря современной местной анестезии процедура практически безболезненна.',
        },
      },
    ],
  },
  {
    slug: 'caries-treatment',
    category: 'therapeutic',
    icon: 'ShieldAlert',
    title: { uz: 'Kariesni davolash', en: 'Caries Treatment', ru: 'Лечение кариеса' },
    shortDescription: {
      uz: "Kariesni erta bosqichda aniqlash va davolash orqali tishni saqlab qolamiz",
      en: 'Detecting and treating caries early to preserve your tooth',
      ru: 'Раннее выявление и лечение кариеса для сохранения зуба',
    },
    description: {
      uz: "Kariesga chalingan to'qima to'liq tozalanib, tish sog'lom holatga qaytariladi. Erta bosqichda davolash asorat va qo'shimcha xarajatlarning oldini oladi.",
      en: 'Decayed tissue is fully removed and the tooth is restored to a healthy state. Early treatment prevents complications and additional costs.',
      ru: 'Поражённая кариесом ткань полностью удаляется, зуб восстанавливается. Раннее лечение предотвращает осложнения.',
    },
    benefits: {
      uz: ['Tishni yo\'qotishdan saqlaydi', 'Og\'riqni bartaraf etadi', 'Arzon va tezkor', 'Asoratlarning oldini oladi'],
      en: ['Prevents tooth loss', 'Eliminates pain', 'Affordable and fast', 'Prevents complications'],
      ru: ['Предотвращает потерю зуба', 'Устраняет боль', 'Доступно и быстро', 'Предотвращает осложнения'],
    },
    process: {
      uz: ['Vizual va rentgen diagnostika', 'Kariyoz to\'qimani olib tashlash', 'Kanalni dezinfeksiya qilish (agar kerak bo\'lsa)', 'Plomba qo\'yish'],
      en: ['Visual and X-ray diagnosis', 'Removing carious tissue', 'Disinfection if needed', 'Placing the filling'],
      ru: ['Визуальная и рентген-диагностика', 'Удаление кариозной ткани', 'Дезинфекция при необходимости', 'Установка пломбы'],
    },
    faqs: [
      {
        question: { uz: 'Kariesni qanday oldini olish mumkin?', en: 'How can caries be prevented?', ru: 'Как предотвратить кариес?' },
        answer: {
          uz: "Muntazam tozalash, to'g'ri ovqatlanish va har 6 oyda profilaktik ko'rikdan o'tish yordam beradi.",
          en: 'Regular brushing, a healthy diet, and check-ups every 6 months help prevent it.',
          ru: 'Регулярная чистка, правильное питание и осмотр раз в 6 месяцев помогают предотвратить кариес.',
        },
      },
      {
        question: { uz: 'Davolashsiz qoldirsam nima bo\'ladi?', en: 'What happens if I leave it untreated?', ru: 'Что будет, если не лечить?' },
        answer: {
          uz: "Karies chuqurlashib, pulpit yoki tish yo'qotilishiga olib kelishi mumkin.",
          en: 'Caries can deepen and lead to pulpitis or tooth loss.',
          ru: 'Кариес может углубиться и привести к пульпиту или потере зуба.',
        },
      },
    ],
  },
  {
    slug: 'pulpitis-treatment',
    category: 'therapeutic',
    icon: 'HeartPulse',
    title: { uz: 'Pulpitni davolash', en: 'Pulpitis Treatment', ru: 'Лечение пульпита' },
    shortDescription: {
      uz: "Tish pulpasi yallig'lanishini davolab, kuchli og'riqni bartaraf etamiz",
      en: 'Treating inflamed tooth pulp to relieve severe pain',
      ru: 'Лечение воспаления пульпы для устранения сильной боли',
    },
    description: {
      uz: "Pulpit — tishning ichki to'qimasi yallig'lanishi bo'lib, kuchli og'riq keltirib chiqaradi. Zamonaviy endodontik davolash orqali og'riq bartaraf etiladi va tish saqlab qolinadi.",
      en: 'Pulpitis is inflammation of the inner tooth tissue causing severe pain. Modern endodontic treatment relieves the pain and preserves the tooth.',
      ru: 'Пульпит — воспаление внутренней ткани зуба, вызывающее сильную боль. Современное эндодонтическое лечение устраняет боль и сохраняет зуб.',
    },
    benefits: {
      uz: ['Kuchli og\'riqni tezda bartaraf etadi', 'Tishni saqlab qoladi', 'Zamonaviy og\'riqsizlantirish', 'Infeksiya tarqalishining oldini oladi'],
      en: ['Quickly relieves severe pain', 'Preserves the tooth', 'Modern pain relief', 'Prevents infection spread'],
      ru: ['Быстро устраняет сильную боль', 'Сохраняет зуб', 'Современное обезболивание', 'Предотвращает распространение инфекции'],
    },
    process: {
      uz: ['Og\'riqsizlantirish', 'Pulpani olib tashlash', 'Kanallarni tozalash va dezinfeksiya', 'Kanalni plombalash va tishni tiklash'],
      en: ['Anesthesia', 'Removing the pulp', 'Cleaning and disinfecting canals', 'Filling the canal and restoring the tooth'],
      ru: ['Анестезия', 'Удаление пульпы', 'Очистка и дезинфекция каналов', 'Пломбирование канала и восстановление зуба'],
    },
    faqs: [
      {
        question: { uz: 'Pulpit davolangandan keyin tish "o\'lik" bo\'ladimi?', en: 'Does the tooth become "dead" after treatment?', ru: 'Становится ли зуб «мёртвым» после лечения?' },
        answer: {
          uz: "Asab olib tashlanadi, lekin tish o'z funksiyasini to'liq saqlab qoladi va bir necha yillar xizmat qiladi.",
          en: 'The nerve is removed, but the tooth fully retains its function and lasts for many years.',
          ru: 'Нерв удаляется, но зуб полностью сохраняет функцию и служит долгие годы.',
        },
      },
      {
        question: { uz: 'Necha marta tashrif kerak bo\'ladi?', en: 'How many visits are needed?', ru: 'Сколько потребуется визитов?' },
        answer: {
          uz: "Odatda 1-2 tashrifda yakunlanadi, murakkab holatlarda ko'proq bo'lishi mumkin.",
          en: 'Usually completed in 1–2 visits, more in complex cases.',
          ru: 'Обычно завершается за 1–2 визита, в сложных случаях — больше.',
        },
      },
    ],
  },
  {
    slug: 'periodontitis-treatment',
    category: 'therapeutic',
    icon: 'ShieldCheck',
    title: { uz: 'Periodontitni davolash', en: 'Periodontitis Treatment', ru: 'Лечение периодонтита' },
    shortDescription: {
      uz: "Tish ildizi atrofidagi yallig'lanishni davolab, tishni saqlab qolamiz",
      en: 'Treating inflammation around the tooth root to save the tooth',
      ru: 'Лечение воспаления вокруг корня зуба для сохранения зуба',
    },
    description: {
      uz: "Periodontit — tish ildizi uchidagi to'qimalarning yallig'lanishi. Zamonaviy davolash usullari bilan infeksiya bartaraf etiladi va tishni sug'urishdan saqlab qolish imkoniyati yaratiladi.",
      en: 'Periodontitis is inflammation of the tissues around the root tip. Modern treatment eliminates the infection and helps avoid tooth extraction.',
      ru: 'Периодонтит — воспаление тканей у верхушки корня зуба. Современное лечение устраняет инфекцию и позволяет избежать удаления зуба.',
    },
    benefits: {
      uz: ['Infeksiyani bartaraf etadi', 'Tishni sug\'urishdan saqlaydi', 'Og\'riq va shishni kamaytiradi', 'Uzoq muddatli natija'],
      en: ['Eliminates infection', 'Prevents tooth extraction', 'Reduces pain and swelling', 'Long-lasting result'],
      ru: ['Устраняет инфекцию', 'Предотвращает удаление зуба', 'Уменьшает боль и отёк', 'Долговечный результат'],
    },
    process: {
      uz: ['Rentgen diagnostika', 'Kanallarni ochish va tozalash', 'Dorivor davolash', 'Yakuniy plombalash va nazorat'],
      en: ['X-ray diagnosis', 'Opening and cleaning canals', 'Medicated treatment', 'Final filling and follow-up'],
      ru: ['Рентген-диагностика', 'Раскрытие и очистка каналов', 'Медикаментозное лечение', 'Финальное пломбирование и контроль'],
    },
    faqs: [
      {
        question: { uz: 'Davolash necha bosqichda amalga oshiriladi?', en: 'How many stages does treatment take?', ru: 'Сколько этапов занимает лечение?' },
        answer: {
          uz: "Odatda 2-3 tashrifda, holatga qarab muddat o'zgarishi mumkin.",
          en: 'Usually 2–3 visits, depending on the severity of the case.',
          ru: 'Обычно 2–3 визита, в зависимости от тяжести случая.',
        },
      },
      {
        question: { uz: 'Tishni sug\'urish shart bo\'ladimi?', en: 'Will the tooth need to be extracted?', ru: 'Нужно ли будет удалять зуб?' },
        answer: {
          uz: "Ko'p hollarda yo'q — zamonaviy davolash tishni saqlab qolish imkonini beradi.",
          en: 'In most cases, no — modern treatment allows the tooth to be preserved.',
          ru: 'В большинстве случаев нет — современное лечение позволяет сохранить зуб.',
        },
      },
    ],
  },
  {
    slug: 'aesthetic-restorations',
    category: 'therapeutic',
    icon: 'Gem',
    title: { uz: 'Estetik tiklash', en: 'Aesthetic Restorations', ru: 'Эстетическая реставрация' },
    shortDescription: {
      uz: "Tishlarning shakli, rangi va nisbatlarini estetik jihatdan yaxshilaymiz",
      en: 'Improving the shape, color and proportions of teeth aesthetically',
      ru: 'Улучшение формы, цвета и пропорций зубов эстетически',
    },
    description: {
      uz: "Kompozit qoplamalar yordamida tishdagi nuqson, chatoq yoki noto'g'ri shakl estetik jihatdan tuzatiladi, natijada tabiiy va chiroyli tabassum hosil bo'ladi.",
      en: 'Using composite veneers, tooth defects, gaps, or irregular shapes are aesthetically corrected, resulting in a natural and beautiful smile.',
      ru: 'С помощью композитных виниров устраняются дефекты, щели или неправильная форма зубов, создавая естественную красивую улыбку.',
    },
    benefits: {
      uz: ['Bitta tashrifda natija', 'Tabiiy ko\'rinish', 'Tish to\'qimasi minimal olib tashlanadi', 'Ishonchli va uzoq muddatli'],
      en: ['Results in a single visit', 'Natural appearance', 'Minimal tooth tissue removal', 'Reliable and long-lasting'],
      ru: ['Результат за один визит', 'Естественный вид', 'Минимальное удаление ткани зуба', 'Надёжно и долговечно'],
    },
    process: {
      uz: ['Konsultatsiya va reja tuzish', 'Tish rangini tanlash', 'Kompozit material bilan shakllantirish', 'Sayqallash va yakuniy nazorat'],
      en: ['Consultation and planning', 'Choosing the tooth shade', 'Shaping with composite material', 'Polishing and final check'],
      ru: ['Консультация и планирование', 'Подбор оттенка зуба', 'Формирование композитным материалом', 'Полировка и финальный осмотр'],
    },
    faqs: [
      {
        question: { uz: 'Natija qancha vaqt saqlanadi?', en: 'How long does the result last?', ru: 'Как долго держится результат?' },
        answer: {
          uz: "To'g'ri parvarish bilan 5 yil va undan ortiq.",
          en: 'With proper care, 5 years or more.',
          ru: 'При правильном уходе — 5 лет и более.',
        },
      },
      {
        question: { uz: 'Bu vinirdan farqi bormi?', en: 'How is this different from veneers?', ru: 'Чем это отличается от виниров?' },
        answer: {
          uz: "Kompozit tiklash bir tashrifda, arzonroq narxda bajariladi, keramika vinirlar esa laboratoriya jarayonini talab qiladi.",
          en: 'Composite restoration is done in one visit at a lower cost, while ceramic veneers require a lab process.',
          ru: 'Композитная реставрация делается за один визит и дешевле, керамические виниры требуют лабораторного этапа.',
        },
      },
    ],
  },

  // ---------------- HYGIENE ----------------
  {
    slug: 'ultrasonic-cleaning',
    category: 'hygiene',
    icon: 'Waves',
    title: { uz: 'Ultratovushli tozalash', en: 'Ultrasonic Cleaning', ru: 'Ультразвуковая чистка' },
    shortDescription: {
      uz: "Tish toshi va yumshoq to'qima yig'ilmalarini og'riqsiz tozalaymiz",
      en: 'Painlessly removing tartar and soft plaque buildup',
      ru: 'Безболезненное удаление зубного камня и налёта',
    },
    description: {
      uz: "Ultratovush uskunasi yordamida tish toshi va plaket tish sirtidan va milk ostidan xavfsiz tozalanadi. Bu tish go'shti kasalliklarining oldini oladi.",
      en: 'Using ultrasonic equipment, tartar and plaque are safely removed from the tooth surface and below the gumline. This helps prevent gum disease.',
      ru: 'С помощью ультразвукового оборудования зубной камень и налёт безопасно удаляются с поверхности зуба и под десной. Это предотвращает заболевания дёсен.',
    },
    benefits: {
      uz: ["Og'riqsiz va xavfsiz", "Milk kasalliklarining oldini oladi", "Nafas hidini yaxshilaydi", "30-40 daqiqada bajariladi"],
      en: ['Painless and safe', 'Prevents gum disease', 'Improves breath freshness', 'Takes 30–40 minutes'],
      ru: ['Безболезненно и безопасно', 'Предотвращает заболевания дёсен', 'Освежает дыхание', 'Занимает 30–40 минут'],
    },
    process: {
      uz: ["Og'iz bo'shlig'ini tekshirish", 'Ultratovush uskunasi bilan tozalash', 'Sayqallash', 'Fluorlash bilan yakunlash'],
      en: ['Oral examination', 'Cleaning with ultrasonic device', 'Polishing', 'Finishing with fluoride treatment'],
      ru: ['Осмотр полости рта', 'Чистка ультразвуковым аппаратом', 'Полировка', 'Завершение фторированием'],
    },
    faqs: [
      {
        question: { uz: 'Necha oyda bir marta qilish kerak?', en: 'How often should this be done?', ru: 'Как часто нужно проводить процедуру?' },
        answer: { uz: "Har 6 oyda bir marta tavsiya etiladi.", en: 'Recommended every 6 months.', ru: 'Рекомендуется раз в 6 месяцев.' },
      },
      {
        question: { uz: 'Tish sirtiga zarar yetkazadimi?', en: 'Does it damage the tooth surface?', ru: 'Повреждает ли это поверхность зуба?' },
        answer: {
          uz: "Yo'q, professional uskuna tish emalini shikastlamaydi.",
          en: 'No, professional equipment does not harm tooth enamel.',
          ru: 'Нет, профессиональное оборудование не повреждает эмаль.',
        },
      },
    ],
  },
  {
    slug: 'air-flow-cleaning',
    category: 'hygiene',
    icon: 'Wind',
    title: { uz: 'Air Flow tozalash', en: 'Air Flow Cleaning', ru: 'Чистка Air Flow' },
    shortDescription: {
      uz: "Havo-suv-kukun aralashmasi bilan tish dog'larini olib tashlaymiz",
      en: 'Removing tooth stains with an air-water-powder mixture',
      ru: 'Удаление пятен с зубов воздушно-водно-порошковой смесью',
    },
    description: {
      uz: "Air Flow texnologiyasi choy, qahva va chekish natijasida paydo bo'lgan dog'larni samarali olib tashlaydi, tishlarga tabiiy oqlik va yaltiroqlik qaytaradi.",
      en: 'Air Flow technology effectively removes stains caused by tea, coffee, and smoking, restoring natural whiteness and shine to teeth.',
      ru: 'Технология Air Flow эффективно удаляет пятна от чая, кофе и курения, возвращая зубам естественную белизну и блеск.',
    },
    benefits: {
      uz: ["Tishga zarar yetkazmaydi", "Bir seansda natija", "Tish sirtini silliqlashtiradi", "Oqartirishdan oldin tavsiya etiladi"],
      en: ['Does not damage the tooth', 'Results in one session', 'Smooths the tooth surface', 'Recommended before whitening'],
      ru: ['Не повреждает зуб', 'Результат за один сеанс', 'Сглаживает поверхность зуба', 'Рекомендуется перед отбеливанием'],
    },
    process: {
      uz: ['Dastlabki ko\'rik', 'Air Flow uskunasi bilan tozalash', 'Suv bilan chayish', 'Fluorlash'],
      en: ['Initial examination', 'Cleaning with the Air Flow device', 'Rinsing with water', 'Fluoride treatment'],
      ru: ['Первичный осмотр', 'Чистка аппаратом Air Flow', 'Полоскание водой', 'Фторирование'],
    },
    faqs: [
      {
        question: { uz: 'Oqartirish bilan bir xilmi?', en: 'Is it the same as whitening?', ru: 'Это то же самое, что отбеливание?' },
        answer: {
          uz: "Yo'q, bu tozalash usuli, oqartirish esa tish rangini kimyoviy o'zgartiradi.",
          en: 'No, this is a cleaning method, while whitening chemically changes tooth color.',
          ru: 'Нет, это метод очистки, а отбеливание химически изменяет цвет зубов.',
        },
      },
      {
        question: { uz: 'Sezuvchanlikni oshiradimi?', en: 'Does it increase sensitivity?', ru: 'Повышает ли это чувствительность?' },
        answer: {
          uz: "Odatda yo'q, protsedura yumshoq va xavfsiz hisoblanadi.",
          en: 'Usually not, the procedure is gentle and safe.',
          ru: 'Обычно нет, процедура мягкая и безопасная.',
        },
      },
    ],
  },
  {
    slug: 'teeth-whitening',
    category: 'hygiene',
    icon: 'Sun',
    title: { uz: 'Tish oqartirish', en: 'Teeth Whitening', ru: 'Отбеливание зубов' },
    shortDescription: {
      uz: "Zamonaviy va xavfsiz usullar bilan tishlaringizni bir necha ton oqartiramiz",
      en: 'Whitening your teeth by several shades using modern, safe methods',
      ru: 'Отбеливание зубов на несколько тонов современными безопасными методами',
    },
    description: {
      uz: "Professional oqartirish geli va zamonaviy uskunalar yordamida tishlar 3-8 tongacha oqartiriladi, natija bir necha yil davomida saqlanadi.",
      en: 'Using professional whitening gel and modern equipment, teeth are whitened by 3–8 shades, with results lasting several years.',
      ru: 'С помощью профессионального отбеливающего геля и оборудования зубы отбеливаются на 3–8 тонов, результат сохраняется несколько лет.',
    },
    benefits: {
      uz: ["Tez va sezilarli natija", "Nazorat ostida xavfsiz jarayon", "Individual reja", "Uzoq muddatli saqlanish"],
      en: ['Fast and noticeable result', 'Safe procedure under supervision', 'Individual plan', 'Long-lasting effect'],
      ru: ['Быстрый и заметный результат', 'Безопасная процедура под контролем', 'Индивидуальный план', 'Долговременный эффект'],
    },
    process: {
      uz: ['Tish va milk holatini baholash', 'Milkni himoyalash', 'Oqartiruvchi gel qo\'llash', 'Fluorlash bilan yakunlash'],
      en: ['Assessing tooth and gum condition', 'Protecting the gums', 'Applying whitening gel', 'Finishing with fluoride'],
      ru: ['Оценка состояния зубов и дёсен', 'Защита дёсен', 'Нанесение отбеливающего геля', 'Завершение фторированием'],
    },
    faqs: [
      {
        question: { uz: 'Natija qancha vaqt saqlanadi?', en: 'How long does the result last?', ru: 'Как долго держится результат?' },
        answer: {
          uz: "Parvarishga qarab 1-3 yil.",
          en: 'Depending on care, 1–3 years.',
          ru: 'В зависимости от ухода — 1–3 года.',
        },
      },
      {
        question: { uz: 'Tish uchun xavfsizmi?', en: 'Is it safe for teeth?', ru: 'Безопасно ли это для зубов?' },
        answer: {
          uz: "Ha, professional nazorat ostida bajarilganda xavfsiz.",
          en: 'Yes, when performed under professional supervision.',
          ru: 'Да, при выполнении под профессиональным контролем.',
        },
      },
    ],
  },
  {
    slug: 'preventive-care',
    category: 'hygiene',
    icon: 'ShieldPlus',
    title: { uz: 'Profilaktik parvarish', en: 'Preventive Dental Care', ru: 'Профилактический уход' },
    shortDescription: {
      uz: "Muntazam tekshiruvlar orqali muammolarni oldindan aniqlaymiz",
      en: 'Identifying issues early through regular check-ups',
      ru: 'Раннее выявление проблем через регулярные осмотры',
    },
    description: {
      uz: "Muntazam profilaktik ko'riklar tish muammolarini erta bosqichda aniqlash va oldini olish imkonini beradi, bu esa uzoq muddatda vaqt va xarajatni tejaydi.",
      en: 'Regular preventive check-ups allow early detection and prevention of dental problems, saving time and cost in the long run.',
      ru: 'Регулярные профилактические осмотры позволяют выявить и предотвратить проблемы на ранней стадии, экономя время и средства.',
    },
    benefits: {
      uz: ["Muammolarni erta aniqlaydi", "Davolash xarajatini kamaytiradi", "Sog'lom tabassumni saqlaydi", "Individual tavsiyalar"],
      en: ['Detects problems early', 'Reduces treatment costs', 'Maintains a healthy smile', 'Personalized recommendations'],
      ru: ['Раннее выявление проблем', 'Снижает расходы на лечение', 'Сохраняет здоровую улыбку', 'Индивидуальные рекомендации'],
    },
    process: {
      uz: ['To\'liq og\'iz bo\'shlig\'i ko\'rigi', 'Zarur bo\'lsa rentgen', 'Gigiyena holatini baholash', 'Individual parvarish rejasi'],
      en: ['Full oral examination', 'X-ray if needed', 'Hygiene assessment', 'Personalized care plan'],
      ru: ['Полный осмотр полости рта', 'Рентген при необходимости', 'Оценка гигиены', 'Индивидуальный план ухода'],
    },
    faqs: [
      {
        question: { uz: 'Qanchalik tez-tez borish kerak?', en: 'How often should I visit?', ru: 'Как часто нужно посещать?' },
        answer: { uz: "Har 6 oyda bir marta tavsiya etiladi.", en: 'Every 6 months is recommended.', ru: 'Рекомендуется раз в 6 месяцев.' },
      },
      {
        question: { uz: 'Bolalar uchun ham amal qiladimi?', en: 'Does this apply to children too?', ru: 'Подходит ли это детям?' },
        answer: {
          uz: "Ha, bolalar uchun ham muntazam profilaktik ko'rik juda muhim.",
          en: 'Yes, regular preventive check-ups are equally important for children.',
          ru: 'Да, регулярные осмотры также очень важны для детей.',
        },
      },
    ],
  },

  // ---------------- SURGERY ----------------
  {
    slug: 'tooth-extraction',
    category: 'surgery',
    icon: 'Wrench',
    title: { uz: "Tish sug'urish", en: 'Tooth Extraction', ru: 'Удаление зуба' },
    shortDescription: {
      uz: "Zarur hollarda tishni xavfsiz va og'riqsiz sug'uramiz",
      en: 'Safe and painless tooth extraction when necessary',
      ru: 'Безопасное и безболезненное удаление зуба при необходимости',
    },
    description: {
      uz: "Saqlab bo'lmaydigan yoki muammo tug'diruvchi tishlar zamonaviy anesteziya va xavfsiz protokollar asosida sug'uriladi, tiklanish jarayoni bo'yicha to'liq tavsiyalar beriladi.",
      en: 'Teeth that cannot be saved or are causing issues are extracted using modern anesthesia and safe protocols, with full aftercare guidance provided.',
      ru: 'Зубы, которые невозможно сохранить или которые вызывают проблемы, удаляются с использованием современной анестезии и безопасных протоколов.',
    },
    benefits: {
      uz: ["Og'riqsiz jarayon", "Tezkor tiklanish", "Asoratlarning oldini olish", "Keyingi davolash rejasi"],
      en: ['Painless procedure', 'Fast recovery', 'Complication prevention', 'Follow-up treatment plan'],
      ru: ['Безболезненная процедура', 'Быстрое восстановление', 'Профилактика осложнений', 'План дальнейшего лечения'],
    },
    process: {
      uz: ['Diagnostika va rentgen', "Mahalliy anesteziya", "Tishni xavfsiz sug'urish", "Tiklanish bo'yicha tavsiyalar"],
      en: ['Diagnosis and X-ray', 'Local anesthesia', 'Safe tooth extraction', 'Recovery instructions'],
      ru: ['Диагностика и рентген', 'Местная анестезия', 'Безопасное удаление зуба', 'Рекомендации по восстановлению'],
    },
    faqs: [
      {
        question: { uz: "Sug'urishdan keyin nima qilish kerak?", en: 'What should I do after extraction?', ru: 'Что делать после удаления?' },
        answer: {
          uz: "Shifokor tavsiyalariga rioya qiling: sovuq narsa qo'llash, qattiq ovqatdan saqlanish va tayinlangan dorilarni ichish.",
          en: "Follow the doctor's instructions: apply cold, avoid hard food, and take prescribed medication.",
          ru: 'Следуйте рекомендациям врача: холод, отказ от твёрдой пищи и приём назначенных препаратов.',
        },
      },
      {
        question: { uz: "Sug'urish og'riqlimi?", en: 'Is extraction painful?', ru: 'Больно ли удаление?' },
        answer: {
          uz: "Anesteziya tufayli jarayon davomida og'riq sezilmaydi.",
          en: 'Thanks to anesthesia, the procedure itself is not painful.',
          ru: 'Благодаря анестезии сама процедура безболезненна.',
        },
      },
    ],
  },
  {
    slug: 'wisdom-tooth-removal',
    category: 'surgery',
    icon: 'Hammer',
    title: { uz: 'Aql tishini olib tashlash', en: 'Wisdom Tooth Removal', ru: 'Удаление зуба мудрости' },
    shortDescription: {
      uz: "Murakkab joylashgan aql tishlarini xavfsiz olib tashlaymiz",
      en: 'Safely removing complex or impacted wisdom teeth',
      ru: 'Безопасное удаление сложных или ретинированных зубов мудрости',
    },
    description: {
      uz: "Noto'g'ri joylashgan yoki qisman chiqqan aql tishlari og'riq va yallig'lanishga sabab bo'lishi mumkin. Jarrohlik yo'li bilan xavfsiz olib tashlanadi.",
      en: 'Impacted or partially erupted wisdom teeth can cause pain and inflammation. They are safely removed through a surgical procedure.',
      ru: 'Неправильно расположенные или частично прорезавшиеся зубы мудрости могут вызывать боль и воспаление. Удаляются хирургическим путём.',
    },
    benefits: {
      uz: ["Og'riq va yallig'lanishni bartaraf etadi", "Qo'shni tishlarni himoyalaydi", "Zamonaviy jarrohlik texnikasi", "To'liq nazorat ostida"],
      en: ['Relieves pain and inflammation', 'Protects neighboring teeth', 'Modern surgical technique', 'Fully supervised'],
      ru: ['Устраняет боль и воспаление', 'Защищает соседние зубы', 'Современная хирургическая техника', 'Полный контроль'],
    },
    process: {
      uz: ['Rentgen/KT diagnostika', 'Anesteziya', "Tishni xavfsiz olib tashlash", "Tikish va tiklanish nazorati"],
      en: ['X-ray/CT diagnosis', 'Anesthesia', 'Safe tooth removal', 'Suturing and recovery follow-up'],
      ru: ['Рентген/КТ диагностика', 'Анестезия', 'Безопасное удаление зуба', 'Наложение швов и контроль восстановления'],
    },
    faqs: [
      {
        question: { uz: 'Tiklanish qancha davom etadi?', en: 'How long is the recovery?', ru: 'Сколько длится восстановление?' },
        answer: { uz: "Odatda 3-7 kun.", en: 'Usually 3–7 days.', ru: 'Обычно 3–7 дней.' },
      },
      {
        question: { uz: 'Har doim olib tashlash kerakmi?', en: 'Does it always need to be removed?', ru: 'Всегда ли нужно удалять?' },
        answer: {
          uz: "Yo'q, faqat muammo tug'diradigan yoki noto'g'ri joylashgan hollarda.",
          en: 'No, only when it causes problems or is incorrectly positioned.',
          ru: 'Нет, только если он вызывает проблемы или расположен неправильно.',
        },
      },
    ],
  },
  {
    slug: 'surgical-consultation',
    category: 'surgery',
    icon: 'ClipboardList',
    title: { uz: 'Jarrohlik konsultatsiyasi', en: 'Surgical Consultation', ru: 'Хирургическая консультация' },
    shortDescription: {
      uz: "Jarrohlik zarurligini aniqlash uchun to'liq tekshiruv va reja",
      en: 'Full examination and planning to determine surgical necessity',
      ru: 'Полное обследование и планирование для определения необходимости операции',
    },
    description: {
      uz: "Har qanday jarrohlik amaliyotidan oldin to'liq diagnostika o'tkazilib, bemorga eng mos davolash rejasi va barcha savollariga javob beriladi.",
      en: 'Before any surgical procedure, a full diagnosis is carried out and the patient receives the most suitable treatment plan with all questions answered.',
      ru: 'Перед любой хирургической операцией проводится полная диагностика, пациенту предлагается оптимальный план лечения.',
    },
    benefits: {
      uz: ["Individual davolash rejasi", "Barcha risklar tushuntiriladi", "Shaffof narx taklifi", "Qulay vaqt rejalashtirish"],
      en: ['Personalized treatment plan', 'All risks explained', 'Transparent pricing', 'Convenient scheduling'],
      ru: ['Индивидуальный план лечения', 'Разъяснение всех рисков', 'Прозрачное ценообразование', 'Удобное планирование времени'],
    },
    process: {
      uz: ['Shikoyatlarni tinglash', 'Diagnostika (rentgen/KT)', 'Davolash variantlarini muhokama qilish', 'Amaliyot sanasini rejalashtirish'],
      en: ['Listening to complaints', 'Diagnostics (X-ray/CT)', 'Discussing treatment options', 'Scheduling the procedure'],
      ru: ['Выслушивание жалоб', 'Диагностика (рентген/КТ)', 'Обсуждение вариантов лечения', 'Планирование даты операции'],
    },
    faqs: [
      {
        question: { uz: 'Konsultatsiya pullikmi?', en: 'Is the consultation paid?', ru: 'Платная ли консультация?' },
        answer: {
          uz: "Narxlar haqida to'liq ma'lumotni bog'lanish sahifasidan bilib olishingiz mumkin.",
          en: 'You can find full pricing information on the contact page.',
          ru: 'Полную информацию о ценах вы можете узнать на странице контактов.',
        },
      },
      {
        question: { uz: 'Konsultatsiyaga qanday tayyorlanish kerak?', en: 'How should I prepare for the consultation?', ru: 'Как подготовиться к консультации?' },
        answer: {
          uz: "Agar mavjud bo'lsa, oldingi rentgen suratlari va tibbiy hujjatlaringizni olib keling.",
          en: 'Bring any previous X-rays and medical records if available.',
          ru: 'Принесите предыдущие рентгеновские снимки и медицинские документы, если они есть.',
        },
      },
    ],
  },
  {
    slug: 'minor-oral-surgery',
    category: 'surgery',
    icon: 'Cross',
    title: { uz: "Kichik jarrohlik amaliyotlari", en: 'Minor Oral Surgeries', ru: 'Малые хирургические операции' },
    shortDescription: {
      uz: "Kista, frenulum va boshqa kichik jarrohlik amaliyotlari",
      en: 'Cyst removal, frenectomy and other minor procedures',
      ru: 'Удаление кист, френулопластика и другие малые операции',
    },
    description: {
      uz: "Kista olib tashlash, frenulumni kesish va boshqa kichik jarrohlik amaliyotlari zamonaviy uskunalar va xavfsiz protokollar bilan bajariladi.",
      en: 'Cyst removal, frenectomy, and other minor surgical procedures are performed with modern equipment and safe protocols.',
      ru: 'Удаление кист, пластика уздечки и другие малые операции выполняются с использованием современного оборудования.',
    },
    benefits: {
      uz: ["Minimal invaziv usullar", "Tez tiklanish", "Zamonaviy uskunalar", "Tajribali jarroh nazorati"],
      en: ['Minimally invasive methods', 'Fast recovery', 'Modern equipment', 'Experienced surgical supervision'],
      ru: ['Малоинвазивные методы', 'Быстрое восстановление', 'Современное оборудование', 'Контроль опытного хирурга'],
    },
    process: {
      uz: ['Diagnostika', 'Anesteziya', 'Jarrohlik amaliyoti', 'Tiklanish nazorati'],
      en: ['Diagnosis', 'Anesthesia', 'Surgical procedure', 'Recovery follow-up'],
      ru: ['Диагностика', 'Анестезия', 'Хирургическая операция', 'Контроль восстановления'],
    },
    faqs: [
      {
        question: { uz: "Bu amaliyotlar qancha vaqt oladi?", en: 'How long do these procedures take?', ru: 'Сколько времени занимают эти операции?' },
        answer: { uz: "Odatda 20-60 daqiqa.", en: 'Usually 20–60 minutes.', ru: 'Обычно 20–60 минут.' },
      },
      {
        question: { uz: "Ishga qachon qaytish mumkin?", en: 'When can I return to work?', ru: 'Когда можно вернуться к работе?' },
        answer: {
          uz: "Aksariyat hollarda 1-2 kundan keyin.",
          en: 'In most cases, after 1–2 days.',
          ru: 'В большинстве случаев через 1–2 дня.',
        },
      },
    ],
  },

  // ---------------- ENDODONTICS ----------------
  {
    slug: 'root-canal-treatment',
    category: 'endodontics',
    icon: 'GitBranch',
    title: { uz: 'Tish kanalini davolash', en: 'Root Canal Treatment', ru: 'Лечение корневых каналов' },
    shortDescription: {
      uz: "Zamonaviy uskunalar bilan tish kanallarini yuqori aniqlikda davolaymiz",
      en: 'Treating root canals with high precision using modern equipment',
      ru: 'Лечение корневых каналов с высокой точностью на современном оборудовании',
    },
    description: {
      uz: "Mikroskop va apeks-lokator kabi zamonaviy uskunalar yordamida tish kanallari yuqori aniqlik bilan tozalanadi va plombalanadi, bu esa davolash sifatini sezilarli oshiradi.",
      en: 'Using modern equipment such as a microscope and apex locator, root canals are cleaned and filled with high precision, significantly improving treatment quality.',
      ru: 'С помощью современного оборудования, включая микроскоп и апекслокатор, каналы очищаются и пломбируются с высокой точностью.',
    },
    benefits: {
      uz: ["Yuqori aniqlikdagi davolash", "Tishni saqlab qolish imkoniyati", "Zamonaviy og'riqsizlantirish", "Uzoq muddatli natija"],
      en: ['High-precision treatment', 'Chance to preserve the tooth', 'Modern pain relief', 'Long-lasting result'],
      ru: ['Высокоточное лечение', 'Возможность сохранить зуб', 'Современное обезболивание', 'Долговечный результат'],
    },
    process: {
      uz: ['Diagnostika va rentgen', 'Kanalni ochish', 'Mexanik va dorivor tozalash', 'Kanalni plombalash'],
      en: ['Diagnosis and X-ray', 'Opening the canal', 'Mechanical and chemical cleaning', 'Filling the canal'],
      ru: ['Диагностика и рентген', 'Раскрытие канала', 'Механическая и медикаментозная очистка', 'Пломбирование канала'],
    },
    faqs: [
      {
        question: { uz: 'Necha tashrifda yakunlanadi?', en: 'How many visits does it take?', ru: 'За сколько визитов завершается?' },
        answer: { uz: "Odatda 1-2 tashrif.", en: 'Usually 1–2 visits.', ru: 'Обычно 1–2 визита.' },
      },
      {
        question: { uz: "Davolashdan keyin qattiq ovqat yesa bo'ladimi?", en: 'Can I eat hard food after treatment?', ru: 'Можно ли есть твёрдую пищу после лечения?' },
        answer: {
          uz: "Tish to'liq tiklangunga qadar bir necha kun ehtiyot bo'lish tavsiya etiladi.",
          en: "It's recommended to be cautious for a few days until the tooth is fully restored.",
          ru: 'Рекомендуется быть осторожным несколько дней до полного восстановления зуба.',
        },
      },
    ],
  },
  {
    slug: 'root-canal-retreatment',
    category: 'endodontics',
    icon: 'RefreshCcw',
    title: { uz: 'Kanalni qayta davolash', en: 'Root Canal Retreatment', ru: 'Повторное лечение каналов' },
    shortDescription: {
      uz: "Oldin davolangan, lekin muammo qaytgan kanallarni qayta davolaymiz",
      en: 'Retreating previously treated canals where issues have returned',
      ru: 'Повторное лечение каналов при возврате проблемы',
    },
    description: {
      uz: "Ba'zan avval davolangan kanalda infeksiya qayta paydo bo'lishi mumkin. Bunday holatlarda eski plomba olib tashlanib, kanal zamonaviy usullar bilan qayta davolanadi.",
      en: 'Sometimes infection can recur in a previously treated canal. In such cases, the old filling is removed and the canal is retreated with modern methods.',
      ru: 'Иногда в ранее пролеченном канале может вновь появиться инфекция. В таких случаях старая пломба удаляется, канал лечится заново.',
    },
    benefits: {
      uz: ["Tishni sug'urishdan saqlaydi", "Infeksiyani to'liq bartaraf etadi", "Zamonaviy mikroskopik texnika", "Yuqori muvaffaqiyat darajasi"],
      en: ['Avoids tooth extraction', 'Fully eliminates infection', 'Modern microscopic technique', 'High success rate'],
      ru: ['Позволяет избежать удаления зуба', 'Полностью устраняет инфекцию', 'Современная микроскопическая техника', 'Высокий процент успеха'],
    },
    process: {
      uz: ['Muammoni aniqlash (rentgen)', 'Eski materialni olib tashlash', 'Kanalni qayta tozalash', 'Qayta plombalash'],
      en: ['Identifying the issue (X-ray)', 'Removing old material', 'Re-cleaning the canal', 'Refilling the canal'],
      ru: ['Выявление проблемы (рентген)', 'Удаление старого материала', 'Повторная очистка канала', 'Повторное пломбирование'],
    },
    faqs: [
      {
        question: { uz: 'Qachon qayta davolash kerak bo\'ladi?', en: 'When is retreatment needed?', ru: 'Когда требуется повторное лечение?' },
        answer: {
          uz: "Og'riq qaytganda yoki rentgenda yangi yallig'lanish aniqlanganda.",
          en: 'When pain returns or new inflammation is found on X-ray.',
          ru: 'При возврате боли или обнаружении нового воспаления на рентгене.',
        },
      },
      {
        question: { uz: 'Muvaffaqiyat darajasi qanday?', en: 'What is the success rate?', ru: 'Какова вероятность успеха?' },
        answer: {
          uz: "Zamonaviy usullar bilan muvaffaqiyat darajasi yuqori, lekin holatga bog'liq.",
          en: 'With modern methods, success rates are high, though it depends on the case.',
          ru: 'При современных методах вероятность успеха высока, но зависит от случая.',
        },
      },
    ],
  },
  {
    slug: 'modern-endodontics',
    category: 'endodontics',
    icon: 'Microscope',
    title: { uz: 'Zamonaviy endodontik protseduralar', en: 'Modern Endodontic Procedures', ru: 'Современные эндодонтические процедуры' },
    shortDescription: {
      uz: "Mikroskop va raqamli texnologiyalar asosida murakkab kanal davolash",
      en: 'Complex canal treatment using microscope and digital technology',
      ru: 'Сложное лечение каналов с использованием микроскопа и цифровых технологий',
    },
    description: {
      uz: "Murakkab anatomiyaga ega kanallar operatsion mikroskop, raqamli apeks-lokator va 3D diagnostika asosida yuqori aniqlik bilan davolanadi.",
      en: 'Canals with complex anatomy are treated with high precision using an operating microscope, digital apex locator, and 3D diagnostics.',
      ru: 'Каналы со сложной анатомией лечатся с высокой точностью с использованием операционного микроскопа и 3D-диагностики.',
    },
    benefits: {
      uz: ["Murakkab holatlarni hal qiladi", "Yuqori muvaffaqiyat darajasi", "Minimal invaziv yondashuv", "Aniqroq diagnostika"],
      en: ['Resolves complex cases', 'High success rate', 'Minimally invasive approach', 'More accurate diagnosis'],
      ru: ['Решает сложные случаи', 'Высокий процент успеха', 'Малоинвазивный подход', 'Более точная диагностика'],
    },
    process: {
      uz: ['3D/rentgen diagnostika', 'Mikroskop ostida kanalni topish', 'Raqamli asbob bilan davolash', 'Yakuniy nazorat'],
      en: ['3D/X-ray diagnostics', 'Locating canals under microscope', 'Treatment with digital instruments', 'Final follow-up'],
      ru: ['3D/рентген диагностика', 'Поиск каналов под микроскопом', 'Лечение цифровыми инструментами', 'Финальный контроль'],
    },
    faqs: [
      {
        question: { uz: 'Bu usul boshqalardan nimasi bilan farq qiladi?', en: 'How is this different from other methods?', ru: 'Чем этот метод отличается от других?' },
        answer: {
          uz: "Mikroskop yordamida kanallar aniqroq ko'rinadi, bu esa xato ehtimolini kamaytiradi.",
          en: 'The microscope allows canals to be seen more clearly, reducing the chance of error.',
          ru: 'Микроскоп позволяет точнее видеть каналы, снижая вероятность ошибки.',
        },
      },
      {
        question: { uz: 'Har bir bemorga tavsiya etiladimi?', en: 'Is this recommended for every patient?', ru: 'Рекомендуется ли это каждому пациенту?' },
        answer: {
          uz: "Ayniqsa murakkab yoki qayta davolash talab etiladigan holatlarda tavsiya etiladi.",
          en: 'Especially recommended for complex cases or retreatments.',
          ru: 'Особенно рекомендуется в сложных случаях или при повторном лечении.',
        },
      },
    ],
  },
];

export function getServicesByCategory(category: ServiceCategorySlug) {
  return services.filter((s) => s.category === category);
}

export function getServiceBySlug(category: string, slug: string) {
  return services.find((s) => s.category === category && s.slug === slug);
}
