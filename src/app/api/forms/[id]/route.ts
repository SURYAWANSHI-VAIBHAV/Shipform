// src/app/api/forms/[id]/route.ts
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { dbConnect } from '@/lib/dbConfig';
import Form from '@/model/Form';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; 
  await dbConnect();
  const form = await Form.findById(id);
  if (!form) {
    return Response.json({ message: 'Form not found' },{status:400});
  }

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


export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  await dbConnect();
  const { id } = await params;
  const updateData = await request.json();

  const form = await Form.findById(id);
  if (!form) {
    return NextResponse.json({ message: 'Form not found' }, { status: 404 });
  }

  // Update form title and fields
  form.title = updateData.title || form.title;
  form.fields = updateData.fields || form.fields;

  // Save the updated form
  await form.save();

  return NextResponse.json({ message: 'Form updated successfully', form }, { status: 200 });
}