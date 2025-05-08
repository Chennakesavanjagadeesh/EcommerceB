import React, { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    gender: '',
    role: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'radio' ? value : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/eregister', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) alert('Registered successfully!');
        else alert('Registration failed');
      })
      .catch((err) => console.error('Error:', err));
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block font-semibold">Username</label>
          <input
            type="text"
            name="username"
            className="w-full border p-2 rounded"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block font-semibold">Email ID</label>
          <input
            type="email"
            name="email"
            className="w-full border p-2 rounded"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block font-semibold">Password</label>
          <input
            type="password"
            name="password"
            className="w-full border p-2 rounded"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block font-semibold">Phone No</label>
          <input
            type="number"
            name="phone"
            className="w-full border p-2 rounded"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Gender</label>
          {['Male', 'Female', 'Others'].map((g) => (
            <label key={g} className="mr-4">
              <input
                type="radio"
                name="gender"
                value={g}
                onChange={handleChange}
                checked={formData.gender === g}
                className="mr-1"
              />
              {g}
            </label>
          ))}
        </div>

        <div>
          <label className="block font-semibold mb-1">Role</label>
          {['Admin', 'Customer'].map((r) => (
            <label key={r} className="mr-4">
              <input
                type="radio"
                name="role"
                value={r}
                onChange={handleChange}
                checked={formData.role === r}
                className="mr-1"
              />
              {r}
            </label>
          ))}
        </div>

        <div>
          <label className="block font-semibold">Address</label>
          <textarea
            name="address"
            rows="2"
            className="w-full border p-2 rounded"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;