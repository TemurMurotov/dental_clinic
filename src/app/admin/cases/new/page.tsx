import { CaseForm } from '@/components/admin/CaseForm';

export default function NewCasePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground">Yangi case</h1>
      <div className="mt-6">
        <CaseForm />
      </div>
    </div>
  );
}
