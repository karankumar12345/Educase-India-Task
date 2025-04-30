import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value) => {
    setFormData(prev => ({ ...prev, isAgency: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally, here you'd send `formData` to your API
    navigate('/profile'); // Navigate to profile after form submission
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-lg border rounded-lg w-[400px]"
      >
        <h2 className="text-2xl font-bold mb-1">Create your</h2>
        <h2 className="text-2xl font-bold mb-6">PopX account</h2>

        {[
          { label: 'Full Name', name: 'fullName' },
          { label: 'Phone number', name: 'phone' },
          { label: 'Email address', name: 'email' },
          { label: 'Password', name: 'password', type: 'password' },
          { label: 'Company name', name: 'company', required: false },
        ].map((field) => (
          <div key={field.name} className="mb-4">
            <label className="block text-sm text-purple-600 font-medium mb-1">
              {field.label}{field.name !== 'company' && <span className="text-red-500">*</span>}
            </label>
            <input
              type={field.type || 'text'}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required={field.name !== 'company'}
              className="w-full border rounded-md px-4 py-2 text-sm"
              placeholder={field.label}
            />
          </div>
        ))}

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Are you an Agency?<span className="text-red-500">*</span>
          </label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={formData.isAgency === 'yes'}
                onChange={() => handleRadioChange('yes')}
                className="accent-purple-600"
              />
              Yes
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={formData.isAgency === 'no'}
                onChange={() => handleRadioChange('no')}
                className="accent-purple-600"
              />
              No
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-md font-semibold hover:bg-purple-700 transition"
        >
          Create Account
        </button>
        <p className="text-center text-sm mt-4 text-gray-600">
          Alreay have an account? <Link to="/login" className="text-purple-600 hover:underline">Sign In</Link>
        </p>
      </form>
    
    </div>
  );
};

export default Signup;
