// pages/api/check-username-unique.ts

import { dbConnect } from '@/lib/dbConfig';
import User from '@/model/User';
import { NextRequest } from 'next/server';
import { z } from 'zod';

const verificationSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  code: z.string().min(1, 'Verification code is required'),
});

export async function GET(req: NextRequest) {
  await dbConnect();

  try {
    const { username, code } = await req.json();
    console.log(username)
    const validationResult = verificationSchema.safeParse({ username, code });

    if (!validationResult.success) {
      const errors = validationResult.error.format().code?._errors || [];
      return Response.json({ errors }, { status: 400 });
    }

    const decodedUsername = decodeURIComponent(username);
    const user = await User.findOne({ username: decodedUsername });

    if (!user) {
      return Response.json({ message: 'Username not found' }, { status: 404 });
    }

    const codeValid = user.verificationToken === code;
    const expiryValid = new Date(user.verificationTokenExpiresAt) > new Date();

    if (codeValid && expiryValid) {
      user.isVerified = true;
      await user.save();
      return Response.json({ success: true, message: 'Account verified' }, { status: 200 });
    } 

    if (!expiryValid) {
      return Response.json({ success: false, message: 'Verification code expired. Please request a new code.' }, { status: 410 });
    }

    return Response.json({ success: false, message: 'Incorrect verification code' }, { status: 409 });
  } catch (error) {
    console.error('Error verifying username:', error);
    return Response.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
