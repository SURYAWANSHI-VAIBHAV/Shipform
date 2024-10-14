import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../lib/mongodb';
import ResponseModel from '../../../models/Response';

// GET, PUT, DELETE operations for a single response
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const { id } = req.query;

  await connectDB();

  switch (method) {
    case 'GET':
      try {
        const response = await ResponseModel.findById(id);
        if (!response) {
          return res.status(404).json({ success: false, message: 'Response not found' });
        }
        res.status(200).json({ success: true, data: response });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'PUT':
      try {
        const response = await ResponseModel.findByIdAndUpdate(id, req.body, {
          new: true, // Return the updated document
          runValidators: true
        });
        if (!response) {
          return res.status(404).json({ success: false, message: 'Response not found' });
        }
        res.status(200).json({ success: true, data: response });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'DELETE':
      try {
        const deletedResponse = await ResponseModel.findByIdAndDelete(id);
        if (!deletedResponse) {
          return res.status(404).json({ success: false, message: 'Response not found' });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
