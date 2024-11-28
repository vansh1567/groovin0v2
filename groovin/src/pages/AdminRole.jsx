import React from 'react';
import 'animate.css';
import { Search, Users, ShieldCheck } from 'lucide-react';

const AdminRole = () => {
  return (
    <div className="p-6 max-w-[1400px] mx-auto animate__animated animate__fadeInLeft ">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Assign Role </h1>
          {/* <div className="flex gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              <Users className="h-4 w-4 mr-1" />
              Users: 45
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
              <ShieldCheck className="h-4 w-4 mr-1" />
              Roles: 3
            </span>
          </div> */}
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <form className="space-y-6">
          {/* Select User Section */}
          <div className="space-y-4">
            <label className="block">
              <span className="text-gray-700 text-sm font-medium mb-2 flex items-center">
                Select User*
                <span className="ml-1 text-xs text-gray-500">(Required)</span>
              </span>
              <div className="mt-1 relative">
                <input
                  type="text"
                  placeholder="Enter Mobile Number"
                  className="w-full px-4 py-2.5 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-10"
                />
                <Search className="h-4 w-4 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </label>
          </div>

          {/* Select Roles Section */}
          <div className="space-y-4">
            <label className="block">
              <span className="text-gray-700 text-sm font-medium mb-2 flex items-center">
                Select Roles*
                <span className="ml-1 text-xs text-gray-500">(Required)</span>
              </span>
              <div className="mt-3 space-y-3">
                <div className="flex items-center">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">Super Admin</span>
                  </label>
                </div>
                <div className="flex items-center">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">Admin</span>
                  </label>
                </div>
                <div className="flex items-center">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">Manager</span>
                  </label>
                </div>
              </div>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      
    </div>
  );
};

export default AdminRole;