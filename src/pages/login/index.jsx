import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile");
    // login logic here
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
      <div className="w-full max-w-sm bg-white p-8 border border-gray-200 rounded-md">
        <h2 className="text-2xl font-bold text-gray-900">Signin to your<br />PopX account</h2>
        <p className="text-gray-500 mt-2 text-sm leading-snug">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit,
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm text-purple-700 font-medium">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-purple-700 font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-orange-500 text-white font-semibold rounded-md cursor-not-allowed"
           
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm mt-4 text-gray-600">
          Don’t have an account? <Link to="/signup" className="text-purple-600 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
