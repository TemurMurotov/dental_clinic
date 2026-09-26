import { prisma } from '@/lib/prisma';
import { AppointmentStatusSelect } from '@/components/admin/AppointmentStatusSelect';

export default async function AdminAppointmentsPage() {
  const appointments = await prisma.appointment.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground">Navbat so&apos;rovlari</h1>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-surface-elevated">
        <table className="w-full min-w-[640px] text-sm">
          <thead className="border-b border-border bg-surface text-left text-muted">
            <tr>
              <th className="px-4 py-3 font-medium">Bemor</th>
              <th className="px-4 py-3 font-medium">Xizmat</th>
              <th className="px-4 py-3 font-medium">Sana / Vaqt</th>
              <th className="px-4 py-3 font-medium">Izoh</th>
              <th className="px-4 py-3 font-medium">Holat</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a) => (
              <tr key={a.id} className="border-b border-border last:border-0 align-top">
                <td className="px-4 py-3">
                  <div className="font-medium text-foreground">{a.fullName}</div>
                  <div className="text-xs text-muted">{a.phone}</div>
                  {a.email && <div className="text-xs text-muted">{a.email}</div>}
                </td>
                <td className="px-4 py-3 text-foreground">{a.service}</td>
                <td className="px-4 py-3 text-foreground">
                  {a.preferredDate} {a.preferredTime}
                </td>
                <td className="px-4 py-3 max-w-xs text-muted">{a.message}</td>
                <td className="px-4 py-3">
                  <AppointmentStatusSelect id={a.id} status={a.status} />
                </td>
              </tr>
            ))}
            {appointments.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-muted">
                  Hozircha so&apos;rovlar yo&apos;q
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
