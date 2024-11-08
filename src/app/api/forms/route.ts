// src/app/api/forms/route.ts
import { dbConnect } from '@/lib/dbConfig';
import Form from '@/model/Form';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  await dbConnect();
  const { title, fields } = await request.json();

  const form = await Form.create({ title, fields });
  return NextResponse.json(form, { status: 201 });
}

export async function GET() {
  await dbConnect();
  const forms = await Form.find({});
  return NextResponse.json(forms,{ status: 200 });
}