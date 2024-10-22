// Import necessary modules
import dbConnect from '@/utils/dbConnect';  // Assuming you have a dbConnect function
import { Form } from '@/models/form';  // Import the Form model
import { NextRequest, NextResponse } from 'next/server';

// POST handler for creating a new form
export const POST = async (req: NextRequest,{ params }: { params: { formId: string }}) => {
  await dbConnect();

  try {
    // Extract form data from the request body (req.json() needs to be awaited)
    const { formId } = await params;

    if (!formId) {
      return NextResponse.json({ error: 'formId is required' }, { status: 400 });
    }

    
    const reqBody = await req.json(); 
    const {  userId, formName, isLive, inputs }: any = reqBody;

  console.log(userId, formName, isLive, inputs)

    // Validate the request data
    if (!formId || !userId || !formName || !inputs) {
      return NextResponse.json({ error: 'Please provide all required fields' }, { status: 400 });
    }

    // Create a new Form instance
    const newForm = new Form({
      formId,
      userId,
      formName,
      isLive: isLive ?? false,  // Default to false if not provided
      inputs,
    });

    // Save the form to the database
    const savedForm = await newForm.save();

    // Return the created form as the response
    return NextResponse.json(savedForm, { status: 201 });
  } catch (error) {
    console.error('Error creating form:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
};
