'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { CheckCircle2 } from 'lucide-react';
import { contactSchema, type ContactInput } from '@/lib/validations';
import { Button } from '@/components/ui/Button';

export function ContactForm() {
  const t = useTranslations('contact');
  const tc = useTranslations('common');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(data: ContactInput) {
    setStatus('idle');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-8 text-center">
        <CheckCircle2 size={36} className="text-success" />
        <p className="font-medium text-foreground">{t('success')}</p>
        <Button variant="outline" size="sm" onClick={() => setStatus('idle')}>
          {tc('close')}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register('name')}
          placeholder={t('namePlaceholder')}
          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
        />
        {errors.name && <p className="mt-1 text-xs text-warning">{errors.name.message}</p>}
      </div>
      <div>
        <input
          {...register('contact')}
          placeholder={t('contactPlaceholder')}
          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
        />
        {errors.contact && <p className="mt-1 text-xs text-warning">{errors.contact.message}</p>}
      </div>
      <div>
        <textarea
          {...register('message')}
          placeholder={t('messagePlaceholder')}
          rows={4}
          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
        />
        {errors.message && <p className="mt-1 text-xs text-warning">{errors.message.message}</p>}
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? tc('sending') : t('submit')}
      </Button>
    </form>
  );
}
