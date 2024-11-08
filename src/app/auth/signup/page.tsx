'use client'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import axios from 'axios';
import Nav from '@/components/Navigation/nav';
import heroImage from './../../../../public/Hero.png';

const signupSchema = z.object({
  username: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type SignupFormData = z.infer<typeof signupSchema>;

const SignupPage = () => {
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
      const res = await axios.post('/api/auth/signup', { ...data });
    } catch (err) {
      setError('Signup failed. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <Nav />
      <div className="flex items-center justify-center min-h-screen">

        <div className="flex w-full max-w-5xl bg-white shadow-lg rounded-lg">

          <div className="w-1/2 hidden md:block">
            <img
              src={heroImage.src}
              alt="Hero Image"
              className="object-cover w-full h-full rounded-l-lg"
            />
          </div>

          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Create Your Account</h2>

            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="username" className="text-sm font-medium text-gray-700">Full Name</label>
                <input
                  id="username"
                  type="text"
                  {...register('username')}
                  className="w-full p-2 mt-2 border-2 bg-transparent border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="w-full p-2 mt-2 border-2 bg-transparent border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                <input
                  id="password"
                  type="password"
                  {...register('password')}
                  className="w-full p-2 mt-2 border-2 bg-transparent border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Sign Up
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              <p>
                Already have an account?{' '}
                <a href="/auth/signin" className="text-blue-600 hover:underline">Login here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
