import { NextRequest, NextResponse } from 'next/server';  // Import NextResponse
import connectDB from '@/utils/dbConnect';
import ResponseModel from '@/models/response';

// GET
export async function GET(req: Request, { params }: { params: { id: string } }) {
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

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const reqBody = await req.json(); 
    const {  userId, formData, isLive, inputs }: any = reqBody;

    const newResponse = await ResponseModel.create(reqBody);
    NextResponse.json({ success: true, data: newResponse });
  } catch (error) {
    NextResponse.json({ success: false, message: 'Error creating response' });
  }
}


// PUT
export async function PUT(req: Request, { params }: { params: { id: string } }) {
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
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
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
