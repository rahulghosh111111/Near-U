'use client';

import { User, Key } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <div className="w-1/2 bg-[#0b1027] text-white flex flex-col justify-between px-8 py-6">
        <div className="text-2xl font-semibold">CityMed</div>
        <div className="text-sm text-left pb-6">
          Welcome to CityMed, Transforming Hospital Care: Linking Cities, Patients, and Providers
        </div>
      </div>

      {/* Right Side */}
      <div className="w-1/2 bg-gradient-to-b from-[#5a9acb] to-[#2f5e91] flex flex-col justify-center items-center">
        <div className="absolute top-6 right-8 text-black font-medium">Login</div>
        <div className="max-w-sm w-full px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-black">Welcome to CityMed</h2>
          <p className="text-center text-black mb-6">Login to your account.</p>

          <form className="space-y-4">
            <div className="flex items-center bg-cream rounded-md px-3 py-2 text-black shadow-md">
              <User className="w-5 h-5 mr-2" />
              <input
                type="text"
                placeholder="Username"
                className="bg-transparent outline-none w-full placeholder-black"
              />
            </div>

            <div className="flex items-center bg-cream rounded-md px-3 py-2 text-black shadow-md">
              <Key className="w-5 h-5 mr-2" />
              <input
                type="password"
                placeholder="Password"
                className="bg-transparent outline-none w-full placeholder-black"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#0b1027] text-white py-2 rounded-md hover:bg-opacity-80 transition"
            >
              Login
            </button>
          </form>

          <div className="text-center mt-4 text-black">
            Don’t have an account yet? <span className="underline cursor-pointer">SignUp</span>
          </div>
        </div>
      </div>
    </div>
  );
}
