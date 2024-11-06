import { NextResponse } from 'next/server';
import User from '@/model/User';
import bcrypt from 'bcryptjs';
import { SendVerificationEmail } from '@/helpers/sendVerificationEmail';
import { dbConnect } from '@/lib/dbConfig';

export async function POST(req: Request) {
  await dbConnect();

  try {
    const reqBody = await req.json(); // Get the JSON body from the request
    const { username, email, password } = reqBody; // Corrected line

    if (!username || !email || !password) {
      return NextResponse.json({ success: false, message: 'All fields are required' }, { status: 400 });
    }

    const existingUser = await User.findOne({ email });
    const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();
    const verificationTokenExpiresAt = new Date(Date.now() + 3600000); // 1 hour expiration

    if (existingUser) {
      if (existingUser.isVerified) {
        return NextResponse.json({ success: false, message: 'User already exists with this email' }, { status: 409 });
      }

      existingUser.password = await bcrypt.hash(password, 10);
      existingUser.verificationToken = verificationToken;
      existingUser.verificationTokenExpiresAt = verificationTokenExpiresAt;
      await existingUser.save();
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        isVerified: false,
        verificationToken,
        verificationTokenExpiresAt,
      });
      await newUser.save();
    }

    const emailResponse = await SendVerificationEmail(email, username, verificationToken);
    if (!emailResponse.success) {
      return NextResponse.json({ success: false, message: 'Failed to send verification email' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'User created successfully. Please verify your email.' }, { status: 201 });
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
