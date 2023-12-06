import { DataTable } from '@/components/data-table';
import { Dokumen, columns } from './columns';

async function getDokumen(): Promise<Dokumen[]> {
  const res = await fetch('http://localhost:3000/api/peraturan');
  const data = await res.json();
  return data;
}

export default async function DemoPage() {
  const data = await getDokumen();

  return (
    <section className="py-24">
      <div className="container">
        <h1 className="mb-6 text-3xl font-bold">Semua Peraturan</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
}
