import prisma from '@/db/utils/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const dokumen = await prisma.dokumen.findMany({
      include: {
        kategori: true,
        jenisPeraturan: true,
      },
    });
    return NextResponse.json(dokumen);
  } catch (error) {
    return NextResponse.json({ error: 'error' });
  }
}
export async function POST(req: NextRequest) {
  const { nama } = await req.json();
  try {
    const buatDokumen = await prisma.dokumen.create({
      data: {
        nama,
      },
    });
    return NextResponse.json(buatDokumen);
  } catch (error) {
    return NextResponse.json(error);
  }
}
