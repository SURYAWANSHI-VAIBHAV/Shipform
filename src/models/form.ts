import mongoose, { Schema, Document, models } from 'mongoose';

// Define the interface for the FormInput schema
interface IFormInput extends Document {
  inputId: string;
  type: string;         // e.g., 'text', 'email', 'number', 'radio', 'checkbox'
  labelName: string;
  isRequired: boolean;
  isMultiple: boolean;
}

// Define the schema for the FormInput
const FormInputSchema: Schema = new Schema({
  inputId: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  labelName: {
    type: String,
    required: true,
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
  isMultiple: {
    type: Boolean,
    default: false,
  },
});

// Define the interface for the Form schema
interface IForm extends Document {
  formId: string;
  userId: string;
  formName: string;
  isLive: boolean;
  inputs: IFormInput[];  // Array of input fields
}

// Define the schema for the Form
const FormSchema: Schema = new Schema(
  {
    formId: {
      type: String,
      required: true,
      unique:true
    },
    userId: {
      type: String,
      required: true,
    },
    formName: {
      type: String,
      required: true,
    },
    isLive: {
      type: Boolean,
      default: false,
    },
    inputs: [FormInputSchema],  // Array of input objects
  },
  { timestamps: true }  // Automatically add createdAt and updatedAt timestamps
);

// Create and export the models if they haven't been compiled already
// const FormInput = models.FormInput || mongoose.model<IFormInput>('FormInput', FormInputSchema);
const Form = models.Form || mongoose.model<IForm>('Form', FormSchema);

export { Form };
