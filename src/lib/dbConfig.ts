import mongoose from 'mongoose';

let isConnected: boolean = false; // Track the connection state

export async function dbConnect() {
  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.DATABASE_URL!, {});
    isConnected = true; 
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('Failed to connect to MongoDB');
  }
}
