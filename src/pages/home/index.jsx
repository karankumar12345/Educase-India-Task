import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
      <div className="min-h-screen flex items-end justify-center bg-[#FAFAFA] px-6 pb-10 border-lime-100">
        <div className="w-full max-w-sm text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to PopX</h1>
          <p className="text-sm text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
  
          <button
            onClick={() => navigate("/signup")}
            className="w-full bg-purple-600 text-white text-sm font-semibold py-3 rounded-md mb-3"
          >
            Create Account
          </button>
  
          <button
            onClick={() => navigate("/login")}
            className="w-full bg-purple-200 text-sm font-semibold text-gray-900 py-3 rounded-md"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    );
  };

export default Home