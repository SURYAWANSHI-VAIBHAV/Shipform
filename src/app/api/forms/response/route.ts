// src/app/api/forms/response.ts
import { NextResponse } from 'next/server';
import connectDB from '../../../../../lib/db';
import Response from '../../../../../lib/model/Response';

export async function POST(request: Request) {
  await connectDB();
  const { formId, responses } = await request.json();

  try {
    const newResponse = await Response.create({
      formId,
      responses,
    });
    return NextResponse.json({ message: 'Form response submitted successfully!', newResponse }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error submitting response', error }, { status: 500 });
  }
}
