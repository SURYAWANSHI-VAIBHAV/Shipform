import { dbConnect } from '@/lib/dbConfig';
import User from '@/model/User';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    await dbConnect()
    const { email, password } = await req.json();

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 400 });
        }

        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
        }

        return NextResponse.json({
            message: 'User signed in successfully',
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
            },

        }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}