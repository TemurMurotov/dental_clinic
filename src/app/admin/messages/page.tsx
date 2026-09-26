import { prisma } from '@/lib/prisma';

export default async function AdminMessagesPage() {
  const messages = await prisma.contactMessage.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground">Kontakt xabarlari</h1>

      <div className="mt-6 space-y-4">
        {messages.map((m) => (
          <div key={m.id} className="rounded-2xl border border-border bg-surface-elevated p-5">
            <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
              <div className="font-medium text-foreground">{m.name}</div>
              <div className="text-xs text-muted">{new Date(m.createdAt).toLocaleString()}</div>
            </div>
            <div className="mt-1 text-sm text-primary">{m.contact}</div>
            <p className="mt-3 text-sm text-muted">{m.message}</p>
          </div>
        ))}
        {messages.length === 0 && <p className="text-muted">Hozircha xabarlar yo&apos;q</p>}
      </div>
    </div>
  );
}
