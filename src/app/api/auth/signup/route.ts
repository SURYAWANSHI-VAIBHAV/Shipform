import { dbConnect } from '@/lib/dbConfig';
import User from '@/model/User';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    await dbConnect();
    const { email, password, username } = await req.json();

    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return NextResponse.json({ message: 'Email already registered' }, { status: 400 });
        }

        const newUser = new User({
            email,
            password,
            username,
        });

        await newUser.save();

        return NextResponse.json({ message: 'User created successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Server error' },{status:500});
    }
}
