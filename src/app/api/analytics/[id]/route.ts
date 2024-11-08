import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConfig";
import Response from "@/model/Response";
import { ObjectId } from 'mongodb';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();

    const { id } = params;
    const objectId = new ObjectId(id);

    // Find the response by formId
    const response = await Response.find({ formId: objectId });

    // If no response is found, return a 404
    if (!response) {
      return NextResponse.json(
        { message: "No data found for this form ID" },
        { status: 404 }
      );
    }

    console.log(response)

    return NextResponse.json(response, { status: 200 });
    
  } catch (error) {
    console.error("Error fetching response:", error); // Log the error for debugging
    return NextResponse.json(
      { message: "Error fetching response" },
      { status: 500 }
    );
  }
}
