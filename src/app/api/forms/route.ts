// src/app/api/forms/route.ts
import { NextResponse } from 'next/server';
import connectDB from '../../../../lib/db';
import Form from '../../../../lib/model/Form';

export async function POST(request: Request) {
  await connectDB();
  const { title, fields } = await request.json();

  const form = await Form.create({ title, fields });
  return NextResponse.json(form, { status: 201 });
}

export async function GET() {
  await connectDB();
  const forms = await Form.find({});
  return NextResponse.json(forms);
}