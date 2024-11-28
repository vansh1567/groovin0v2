import React, { useState } from "react";
const Details = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Details:", formData);
    alert("Details submitted successfully!");
  };

  return (
    <div className="flex min-h-screen bg-gray-50 ">
      {/* Main Content */}
      <main className="flex-1 p-12">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Details</h2>
        <h1 className="text-3xl font-bold mb-6">Provide Your Details</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-lg text-gray-700 mb-2">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3"
              required
            />
          </div>
          {/* Email */}
          <div>
            <label className="block text-lg text-gray-700 mb-2">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3"
              required
            />
          </div>
          {/* Phone */}
          <div>
            <label className="block text-lg text-gray-700 mb-2">Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your 10-digit phone number"
              className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3"
              required
            />
          </div>
          {/* Gender */}
          <div>
            <label className="block text-lg text-gray-700 mb-2">Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-600"
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export default Details;
