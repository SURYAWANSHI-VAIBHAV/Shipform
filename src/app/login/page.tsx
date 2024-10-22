'use client'
import Navbar from '@/components/Navigation/navbar';
import { Goal } from 'lucide-react';
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
      // For demo purposes, we just log the credentials
      if (email === 'user@example.com' && password === 'password') {
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div>
      <Navbar/>
      <div className="flex justify-around pt-20 h-screen bg-gray-100 px-20">
        <div className='flex flex-col justify-start'>
          <h1 className='text-6xl pr-40'>Create beautiful forms and share them anywhere</h1>
          <p className='text-xl pr-40 mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos officiis deserunt alias cum fuga expedita labore quis molestias, iusto laboriosam.</p>
        </div>
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow h-fit ">
        <h2 className="text-4xl font-bold  text-gray-900">Login to FormEdge</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
              className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className='flex justify-between'>
          <div className='flex gap-2' >
            <input type="checkbox" name="" id="" placeholder=''/>
            <p>Remember me</p>
          </div>
          <Link href='/password'>Forgot password?</Link>
          </div>
          <div>
            <button
              type="submit"
              className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log in to continue
            </button>
          </div>
          
        </form>
        <div>
            <div
              className="flex justify-center w-full px-4 py-2 text-sm font-medium text-black  rounded-md  hover:bg-blue-800 hover:text-white border border-black "
            >
              Sign in with Google
            </div>
          </div>
      <div className='flex justify-center gap-1'>
        <p >dont have an account?</p>
        <Link href={'/signup'} className='font-bold'>signup</Link>
      </div>
    </div>
      </div>
    </div>
  );
};

export default LoginPage;
