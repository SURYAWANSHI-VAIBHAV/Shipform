// Import necessary modules
import dbConnect from '@/utils/dbConnect';  // Assuming you have a dbConnect function
import { Form } from '@/models/form';  // Import the Form model
import { NextRequest, NextResponse } from 'next/server';

// GET handler for fetching a form by formId from the URL path
export const GET = async (req: NextRequest, { params }: { params: { formId: string } }) => {
  await dbConnect();

  try {
    // Extract formId from the URL parameters
    const { formId } =await params;
    console.log(formId)

    // Validate formId
    if (!formId) {
      return NextResponse.json({ error: 'formId is required' }, { status: 400 });
    }

    // Find the form by formId
    const form = await Form.findOne({formId:formId});
    console.log(form)

    // Check if form exists
    if (!form) {
      return NextResponse.json({ error: 'Form not found' }, { status: 404 });
    }

    // Return the found form as a response
    return NextResponse.json(form, { status: 200 });
  } catch (error) {
    console.error('Error fetching form:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
};
