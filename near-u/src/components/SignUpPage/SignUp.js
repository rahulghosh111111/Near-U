'use client';

import { EyeOff, Eye } from 'lucide-react';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#5a9acb] to-[#2f5e91] px-4">
      <div className="bg-transparent rounded-xl shadow-md p-8 w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-black text-center mb-6">Sign up</h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Name"
          className="w-full border text-black border-blue-400 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-blue-400 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        {/* Password */}
        <div className="relative mb-6">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2.5 text-gray-500"
          >
            {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
          </button>
        </div>

        {/* Sign Up Button */}
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
          Sign Up
        </button>

        {/* Login Redirect */}
        <p className="text-sm text-gray-600 text-center mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Log In
          </a>
        </p>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-sm text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Sign Up */}
        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-50 transition">
          <FcGoogle className="w-5 h-5" />
          <span className="text-sm text-black">Sign up with Google</span>
        </button>
      </div>
    </div>
  );
}
