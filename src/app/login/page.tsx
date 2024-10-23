'use client'
import Navbar from '@/components/Navigation/navbar';
import Link from 'next/link';
import { useState } from 'react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      // Call login API or authentication logic here
      if (email === 'user@example.com' && password === 'password') {
        // Successful login action
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-around pt-20 h-screen bg-gray-50 px-10 lg:px-20">
        <div className="flex flex-col justify-start">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Create beautiful forms and share them anywhere
          </h1>
          <p className="text-lg lg:text-xl mt-4 text-gray-700">
            Easily design custom forms with powerful tools and share them with the world.
          </p>
        </div>

        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Login to FormEdge</h2>
          <p className="text-gray-600">Access your account and start creating!</p>

          {error && <p className="text-red-500">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 text-gray-900 placeholder-gray-400"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password *
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 text-gray-900 placeholder-gray-400"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                <label htmlFor="remember" className="text-sm text-gray-700">Remember me</label>
              </div>
              <Link href='/password' className="text-sm text-indigo-600 hover:underline">Forgot password?</Link>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Log in to continue
              </button>
            </div>
          </form>

          <div>
            <button
              className="w-full flex justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 hover:text-black"
            >
              Sign in with Google
            </button>
          </div>

          <div className="flex justify-center gap-1 mt-4 text-sm text-gray-700">
            <p>Don't have an account?</p>
            <Link href="/signup" className="font-bold text-indigo-600 hover:underline">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
