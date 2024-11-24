import React from 'react';
import { Search, Users, ShieldCheck } from 'lucide-react';

const AdminManager = () => {
  // Sample property data - replace with your actual data
  const properties = [
    { id: 1, name: "Property One" },
    { id: 2, name: "Property Two" },
    { id: 3, name: "Property Three" },
    { id: 4, name: "Property Four" }
  ];

  return (
    <div className="p-6 max-w-[1400px] mx-auto">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Assign Manager</h1>
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
              <span className="text-gray-700 text-sm font-medium mb-2 flex items-center mt-10">
                Select Property*
                <span className="ml-1 text-xs text-gray-500">(Required)</span>
              </span>
              <div className="mt-5 relative">
                <select
                  className="w-full px-4 py-2.5 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none text-gray-700"
                >
                  <option value="">Select Property</option>
                  {properties.map((property) => (
                    <option key={property.id} value={property.id}>
                      {property.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
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

export default AdminManager;