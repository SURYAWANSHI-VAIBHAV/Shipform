// lib/models/Form.ts
import mongoose from 'mongoose';

const formSchema = new mongoose.Schema({
  title: { type: String, default:"untitled form" },
  fields: [
    {
      label: { type: String, default: 'label name' },
      type: { type: String, default: 'text' },
    },
  ],
  submissions:{
    type:Number,
    default:0
  },
  createdAt: { type: Date, default: Date.now },
});

const Form = mongoose.models.Form || mongoose.model('Form', formSchema);

export default Form;
