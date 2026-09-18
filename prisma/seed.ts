import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';
  const adminPassword = process.env.ADMIN_PASSWORD || 'change-me-please';

  const existingAdmin = await prisma.adminUser.findUnique({ where: { email: adminEmail } });
  if (!existingAdmin) {
    await prisma.adminUser.create({
      data: { email: adminEmail, passwordHash: await bcrypt.hash(adminPassword, 10) },
    });
    console.log(`Admin user created: ${adminEmail}`);
  }

  const blogCount = await prisma.blogPost.count();
  if (blogCount === 0) {
    await prisma.blogPost.createMany({
      data: [
        {
          slug: 'togri-tish-parvarishi',
          locale: 'uz',
          title: "To'g'ri tish parvarishi: kundalik 5 ta qoida",
          excerpt: "Tishlaringizni sog'lom saqlash uchun har kuni rioya qilishingiz kerak bo'lgan asosiy qoidalar.",
          content:
            "Sog'lom tabassum uchun kundalik parvarish juda muhim. Birinchidan, kuniga kamida ikki marta tish yuvish kerak. Ikkinchidan, tish ipidan foydalanish tishlar orasidagi plakni olib tashlaydi. Uchinchidan, shirinliklarni cheklash karies xavfini kamaytiradi. To'rtinchidan, har 6 oyda stomatologga profilaktik ko'rikka boring. Beshinchidan, fluorli tish pastasidan foydalaning — bu tish emalini mustahkamlaydi.",
          category: 'Preventive Care',
          coverImage: '/images/blog-placeholder.svg',
        },
        {
          slug: 'endodontiyada-zamonaviy-texnologiyalar',
          locale: 'uz',
          title: 'Endodontiyada zamonaviy texnologiyalar',
          excerpt: "Mikroskop va raqamli uskunalar tish kanali davolashni qanday o'zgartirdi.",
          content:
            "So'nggi yillarda endodontiya sohasida katta texnologik yutuqlar bo'ldi. Operatsion mikroskoplar shifokorlarga kanal tuzilishini yuqori aniqlik bilan ko'rish imkonini beradi. Raqamli apeks-lokatorlar kanal uzunligini aniq o'lchaydi. Bu texnologiyalar davolash muvaffaqiyat darajasini sezilarli oshirdi va bemorlar uchun jarayonni qulayroq qildi.",
          category: 'Endodontics',
          coverImage: '/images/blog-placeholder.svg',
        },
        {
          slug: 'tish-oqartirish-haqida-hammasi',
          locale: 'en',
          title: 'Everything You Need to Know About Teeth Whitening',
          excerpt: 'A complete guide to safe, professional teeth whitening treatments.',
          content:
            'Teeth whitening has become one of the most requested cosmetic dental procedures. Professional whitening, performed under a dentist\'s supervision, is far safer and more effective than over-the-counter kits. It typically lightens teeth by 3–8 shades in a single session, with results lasting one to three years depending on lifestyle habits like coffee, tea, and smoking.',
          category: 'Oral Hygiene',
          coverImage: '/images/blog-placeholder.svg',
        },
        {
          slug: 'why-regular-checkups-matter',
          locale: 'en',
          title: 'Why Regular Dental Check-ups Matter',
          excerpt: 'Preventive visits catch problems early and save you time and money.',
          content:
            'Many dental problems develop silently, without pain, until they become serious. Regular check-ups every six months allow your dentist to catch cavities, gum disease, and other issues early — often before you notice any symptoms. Early treatment is almost always simpler, faster, and more affordable than treating an advanced problem.',
          category: 'Preventive Care',
          coverImage: '/images/blog-placeholder.svg',
        },
        {
          slug: 'sovremennye-metody-lecheniya-kariesa',
          locale: 'ru',
          title: 'Современные методы лечения кариеса',
          excerpt: 'Как современные технологии делают лечение кариеса быстрым и комфортным.',
          content:
            'Лечение кариеса сегодня значительно отличается от того, что было десять лет назад. Современные композитные материалы позволяют точно подобрать цвет пломбы под естественный оттенок зуба. Использование анестезии делает процедуру практически безболезненной. Раннее выявление кариеса на профилактическом осмотре позволяет вылечить его за один визит.',
          category: 'Therapeutic Dentistry',
          coverImage: '/images/blog-placeholder.svg',
        },
        {
          slug: 'ukhod-za-polostyu-rta-posle-udaleniya',
          locale: 'ru',
          title: 'Уход за полостью рта после удаления зуба',
          excerpt: 'Простые рекомендации для быстрого и безопасного восстановления.',
          content:
            'После удаления зуба важно соблюдать несколько простых правил: избегать горячей пищи в первые сутки, не полоскать рот интенсивно, чтобы не повредить кровяной сгусток, и принимать назначенные врачом препараты. При соблюдении рекомендаций восстановление проходит быстро и без осложнений.',
          category: 'Dental Surgery',
          coverImage: '/images/blog-placeholder.svg',
        },
      ],
    });
    console.log('Blog posts seeded');
  }

  const caseCount = await prisma.case.count();
  if (caseCount === 0) {
    await prisma.case.createMany({
      data: [
        {
          locale: 'uz',
          title: "Old tishlarni estetik tiklash",
          description: "Kompozit tiklash yordamida bemorning tabassumi to'liq yangilandi.",
          category: 'Estetik tiklash',
          beforeImage: '/images/case-before-placeholder.svg',
          afterImage: '/images/case-after-placeholder.svg',
        },
        {
          locale: 'uz',
          title: 'Professional tozalash va oqartirish',
          description: "Air Flow tozalash va oqartirish kursi natijasida tishlar 4 tonga oqardi.",
          category: 'Gigiyena',
          beforeImage: '/images/case-before-placeholder.svg',
          afterImage: '/images/case-after-placeholder.svg',
        },
        {
          locale: 'en',
          title: 'Aesthetic Front Teeth Restoration',
          description: "Composite restoration completely refreshed the patient's smile.",
          category: 'Aesthetic Restoration',
          beforeImage: '/images/case-before-placeholder.svg',
          afterImage: '/images/case-after-placeholder.svg',
        },
        {
          locale: 'ru',
          title: 'Эстетическая реставрация передних зубов',
          description: 'Композитная реставрация полностью обновила улыбку пациента.',
          category: 'Эстетика',
          beforeImage: '/images/case-before-placeholder.svg',
          afterImage: '/images/case-after-placeholder.svg',
        },
      ],
    });
    console.log('Cases seeded');
  }

  const testimonialCount = await prisma.testimonial.count();
  if (testimonialCount === 0) {
    await prisma.testimonial.createMany({
      data: [
        {
          patientName: 'Dilnoza Karimova',
          rating: 5,
          text: "Juda professional yondashuv! Og'riqsiz davolandim va natijadan judayam mamnunman. Tavsiya qilaman.",
        },
        {
          patientName: 'Alexander Petrov',
          rating: 5,
          text: 'Отличная клиника, внимательный доктор и современное оборудование. Лечение прошло абсолютно безболезненно.',
        },
        {
          patientName: 'Sarah Johnson',
          rating: 5,
          text: 'Excellent experience from start to finish. Dr. Muratbayev explained everything clearly and the result exceeded my expectations.',
          videoUrl: null,
        },
      ],
    });
    console.log('Testimonials seeded');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
