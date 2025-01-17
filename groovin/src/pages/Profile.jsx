
import React, { useState, useEffect } from "react";
import axios from "axios";
import "animate.css";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "http://django.groovin.party/api/account/profile", // Ensure this endpoint is correct
          {
            headers: {
              accept: "application/json",
              // Add other required headers if necessary, but don't include 'Access-Control-Allow-Origin'
            },
          }
        );
        setProfile(response.data); // Ensure the response data structure matches what you're expecting
      } catch (err) {
                setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProfile();
  }, []);
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-8 animate__animated animate__fadeInLeft">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Profile</h1>
      <div className="flex flex-col lg:flex-row items-start gap-8">
        <div className="bg-white shadow-md rounded-lg p-6 w-full lg:w-1/3 flex flex-col items-center">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Profile Image</h2>
          <div className="relative w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
            <img
              src={profile.image || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 w-full lg:w-2/3">
          <h2 className="text-lg font-medium text-gray-800 mb-4">My Profile</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
      +   <div className="flex flex-col">
              <label htmlFor="firstName" className="text-sm font-medium text-gray-600 mb-1">First Name *</label>
              <input
                type="text"
                id="firstName"
                defaultValue={profile.firstName}
                className="border rounded-lg px-4 py-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="text-sm font-medium text-gray-600 mb-1">Last Name *</label>
              <input
                type="text"
                id="lastName"
                defaultValue={profile.lastName}
                className="border rounded-lg px-4 py-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-sm font-medium text-gray-600 mb-1">Phone Number *</label>
              <input
                type="text"
                id="phone"
                defaultValue={profile.phone}
                className="border rounded-lg px-4 py-2 bg-gray-100"
                readOnly
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="dob" className="text-sm font-medium text-gray-600 mb-1">Date of Birth *</label>
              <input
                type="date"
                id="dob"
                defaultValue={profile.dob}
                className="border rounded-lg px-4 py-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="gender" className="text-sm font-medium text-gray-600 mb-1">Gender *</label>
              <select
                id="gender"
                defaultValue={profile.gender}
                className="border rounded-lg px-4 py-2"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </form>
          <div className="mt-6">
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg"
            >
              Update Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;