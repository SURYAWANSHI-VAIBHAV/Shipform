import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/utils/dbConnect';
import ResponseModel from '@/models/response';

// GET
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  await connectDB();

  try {
    const response = await ResponseModel.findById(params.id);
    if (!response) {
      return NextResponse.json({ success: false, message: 'Response not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: response }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Error fetching response' }, { status: 400 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    
    const { userId, formData, ownerId,formId } = await req.json(); 
    console.log(userId, formData, ownerId,formId)
    const newResponse = await ResponseModel.create({ userId, formData,ownerId,formId });
    console.log(newResponse)
    
    return NextResponse.json({ success: true, data: newResponse }, { status: 201 });
  } catch (error) {
    const errorMessage = error?.message || 'Error creating response';
    return NextResponse.json({ success: false, message: errorMessage }, { status: 400 });
  }
}
// PUT
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  await connectDB();

  try {
    const body = await req.json();
    const response = await ResponseModel.findByIdAndUpdate(params.id, body, { new: true, runValidators: true });
    if (!response) {
      return NextResponse.json({ success: false, message: 'Response not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: response }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Error updating response' }, { status: 400 });
  }
}

// DELETE
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  await connectDB();

  try {
    const deletedResponse = await ResponseModel.findByIdAndDelete(params.id);
    if (!deletedResponse) {
      return NextResponse.json({ success: false, message: 'Response not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: {} }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Error deleting response' }, { status: 400 });
  }
}
