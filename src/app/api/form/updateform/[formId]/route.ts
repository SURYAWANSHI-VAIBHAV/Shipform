// Import necessary modules
import dbConnect from '@/utils/dbConnect';  // Assuming you have a dbConnect function
import { Form } from '@/models/form';  // Import the Form model
import { NextRequest, NextResponse } from 'next/server';

// PUT handler for updating an existing form
export const PUT = async (req: NextRequest, { params }: { params: { formId: string }}) => {
  await dbConnect();

  try {
    // Extract formId from the params
    const { formId } = params;
    if (!formId) {
      return NextResponse.json({ error: 'formId is required' }, { status: 400 });
    }

    // Parse the request body to get form data
    const reqBody = await req.json();
    const { userId, formName, isLive, inputs }: any = reqBody;

    // Validate required fields
    if (!userId || !formName || !inputs) {
      return NextResponse.json({ error: 'Please provide all required fields' }, { status: 400 });
    }

    // Find the existing form by formId and update its fields
    const updatedForm = await Form.findOneAndUpdate(
      { formId }, // Query to find the form by formId
      { userId, formName, isLive: isLive ?? false, inputs }, // Fields to update
      { new: true } // Return the updated document
    );

    // If form not found, return 404 error
    if (!updatedForm) {
      return NextResponse.json({ error: 'Form not found' }, { status: 404 });
    }

    // Return the updated form as the response
    return NextResponse.json(updatedForm, { status: 200 });
  } catch (error) {
    console.error('Error updating form:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
};
