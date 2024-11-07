// src/app/api/forms/[id]/route.ts
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { dbConnect } from '@/lib/dbConfig';
import Form from '@/model/Form';

// Use the new approach for unwrapping params
export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;  // Unwrap the promise
  await dbConnect();
  const form = await Form.findById(id);
  if (!form) {
    return Response.json({ message: 'Form not found' },{status:400});
  }

  // Increment impressions count if the form is viewed
  form.impressions += 1;
  await form.save();
  return Response.json(form);
}

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  await dbConnect();
  const response = await request.json();
  const { id } = await params;  
  const form = await Form.findById(id);
  if (!form) {
    return Response.json({ message: 'Form not found' },{status:200});
  }

  // Increment submissions count
  form.submissions += 1;
  await form.save();
  await Form.updateOne(
    { _id: new mongoose.Types.ObjectId(id) },
    { $push: { responses: response } }
  );


  return NextResponse.json({ message: 'Response submitted successfully' }, { status: 201 });
}
