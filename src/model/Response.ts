// models/Response.js
const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
  formId: { type: mongoose.Schema.Types.ObjectId, ref: 'Form', required: true },
  responses: [
    {
      label: { type: String },
      value: { type: String }, 
    },
  ],
  submittedAt: { type: Date, default: Date.now },
});


const Response = mongoose.models.Response || mongoose.model('Response', responseSchema);

export default Response;