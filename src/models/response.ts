import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the form field structure
interface IFormField {
  labelName: string;
  ans: string;
  additionalData?: Record<string, string>; // Flexible key-value pairs for additional data
}

// Define the interface for the main response document
export interface IResponse extends Document {
  userId: mongoose.Types.ObjectId;
  ownerId: mongoose.Types.ObjectId;
  formId: string;
  formData: IFormField[];
  createdAt: Date;
  updatedAt: Date;
}

// Create the schema
const formFieldSchema = new Schema<IFormField>({
  labelName: { type: String, required: true },
  ans: { type: String, required: true },
});

// Define the main schema for the form response
const responseSchema = new Schema<IResponse>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  ownerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  formId: { type: String, required: true, unique: true },
  formData: { type: [formFieldSchema], required: true }
}, { timestamps: true });

// Create the model
const ResponseModel = mongoose.model<IResponse>('Response', responseSchema);

export default ResponseModel;
