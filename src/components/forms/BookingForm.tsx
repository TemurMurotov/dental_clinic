'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations, useLocale } from 'next-intl';
import { CheckCircle2 } from 'lucide-react';
import { appointmentSchema, type AppointmentInput } from '@/lib/validations';
import { Button } from '@/components/ui/Button';
import { services } from '@/content/services';
import type { Locale } from '@/content/site-config';

export function BookingForm() {
  const t = useTranslations('booking');
  const tc = useTranslations('common');
  const locale = useLocale() as Locale;
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentInput>({ resolver: zodResolver(appointmentSchema) });

  async function onSubmit(data: AppointmentInput) {
    setStatus('idle');
    try {
      const res = await fetch('/api/appointments', {
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
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-10 text-center">
        <CheckCircle2 size={40} className="text-success" />
        <p className="font-medium text-foreground">{t('success')}</p>
        <Button variant="outline" onClick={() => setStatus('idle')}>
          {tc('close')}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">{t('fullName')}</label>
          <input
            {...register('fullName')}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
          />
          {errors.fullName && <p className="mt-1 text-xs text-warning">{errors.fullName.message}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">{t('phone')}</label>
          <input
            {...register('phone')}
            type="tel"
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
          />
          {errors.phone && <p className="mt-1 text-xs text-warning">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">{t('email')}</label>
        <input
          {...register('email')}
          type="email"
          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">{t('service')}</label>
        <select
          {...register('service')}
          defaultValue=""
          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
        >
          <option value="" disabled>
            {t('selectService')}
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title[locale]}>
              {s.title[locale]}
            </option>
          ))}
        </select>
        {errors.service && <p className="mt-1 text-xs text-warning">{errors.service.message}</p>}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">{t('date')}</label>
          <input
            {...register('preferredDate')}
            type="date"
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
          />
          {errors.preferredDate && <p className="mt-1 text-xs text-warning">{errors.preferredDate.message}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">{t('time')}</label>
          <input
            {...register('preferredTime')}
            type="time"
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
          />
          {errors.preferredTime && <p className="mt-1 text-xs text-warning">{errors.preferredTime.message}</p>}
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">{t('message')}</label>
        <textarea
          {...register('message')}
          rows={3}
          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
        />
      </div>

      {status === 'error' && <p className="text-sm text-warning">{t('error')}</p>}

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? tc('sending') : t('submit')}
      </Button>
    </form>
  );
}
