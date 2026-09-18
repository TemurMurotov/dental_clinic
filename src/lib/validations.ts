import { z } from 'zod';

export const appointmentSchema = z.object({
  fullName: z.string().min(2, 'Ism kamida 2 belgidan iborat bo\'lishi kerak'),
  phone: z.string().min(7, "To'g'ri telefon raqam kiriting"),
  email: z.string().email().optional().or(z.literal('')),
  service: z.string().min(1, 'Xizmatni tanlang'),
  preferredDate: z.string().min(1, 'Sanani tanlang'),
  preferredTime: z.string().min(1, 'Vaqtni tanlang'),
  message: z.string().optional(),
});

export type AppointmentInput = z.infer<typeof appointmentSchema>;

export const contactSchema = z.object({
  name: z.string().min(2, 'Ism kamida 2 belgidan iborat bo\'lishi kerak'),
  contact: z.string().min(5, 'Telefon yoki email kiriting'),
  message: z.string().min(5, 'Xabar juda qisqa'),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const loginSchema = z.object({
  email: z.string().min(1),
  password: z.string().min(1),
});

export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1),
  newPassword: z.string().min(6, 'Yangi parol kamida 6 belgidan iborat bo\'lishi kerak'),
});

export const blogPostSchema = z.object({
  slug: z.string().min(1),
  locale: z.string().min(2),
  title: z.string().min(1),
  excerpt: z.string().min(1),
  content: z.string().min(1),
  coverImage: z.string().optional(),
  category: z.string().min(1),
  published: z.boolean().optional(),
});

export const caseSchema = z.object({
  locale: z.string().min(2),
  title: z.string().min(1),
  description: z.string().min(1),
  category: z.string().min(1),
  beforeImage: z.string().min(1),
  afterImage: z.string().min(1),
});
