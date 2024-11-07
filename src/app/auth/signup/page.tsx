// pages/auth/signup.tsx
'use client'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
// import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';
import Nav from '@/components/Navigation/nav';

// Define the Zod schema for validation
const signupSchema = z.object({
  username: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type SignupFormData = z.infer<typeof signupSchema>;

const SignupPage = () => {
  // const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    setError(null);
    try {
      console.log(data)
      const res = await axios.post('/api/auth/signup', { ...data }); 
      console.log(res.data);
    } catch (err) {
      setError('Signup failed. Please try again.');
      console.error(err);
    }
  };

  return (
    <div>
      <Nav/>
      <div className="flex min-h-screen items-center justify-center bg-gray-100 text-black">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md p-6 bg-white rounded-md shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            {...register('username')}
            className="w-full px-4 py-2 mt-1 border bg-transparent rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register('email')}
            className="w-full px-4 py-2 mt-1 border bg-transparent rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            {...register('password')}
            className="w-full px-4 py-2 mt-1 border bg-transparent rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
        >
          Sign Up
        </button>
      </form>
    </div>
    </div>
  );
};

export default SignupPage;
