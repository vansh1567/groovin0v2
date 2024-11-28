import React from 'react';
import { motion } from "framer-motion";
import { 
  Filter, 
  Search, 
  ChevronDown, 
  Edit2, 
  Trash2,
  FileText,
  Plus
} from 'lucide-react';

const Properties = () => {
  const propertyData = [
    {
      id: 1,
      name: "From Factory by Sutra",
      email: "factorybysutra@gmail.com",
      city: "Gurugram",
      status: "Approved",
    },
    {
      id: 2,
      name: "The Red Lion",
      email: "deeps@yopmail.com",
      city: "Gurugram",
      status: "Pending",
    },
    {
      id: 3,
      name: "The Millenium Centre",
      email: "dummy123@gmail.com",
      city: "	Gurugram",
      status: "Pending",
    },
    {
      id: 4,
      name: "Downtown Sector 29",
      email: "downtown29@yopmail.com	",
      city: "	Gurugram",
      status: "Approved",
    },
  ];

  return (
    <div className="p-6 max-w-[1400px] mx-auto animate__animated animate__fadeInLeft">
      {/* Header and Filters Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6" initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}>
          <h1 className="text-2xl font-semibold text-gray-900">Properties</h1>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 text-blue-600 
                               hover:bg-blue-50 transition-colors duration-300 
                               focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-lg">
              {/* <Plus className="h-4 w-4" /> */}
              <span className="text-sm font-medium">Create Properties</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg shadow-sm hover:bg-gray-50">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Rest of the component remains the same */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Property Mail Dropdown */}
          <div className="relative">
            <button className="w-full px-4 py-2.5 bg-white border rounded-lg shadow-sm hover:bg-gray-50 text-left flex items-center justify-between">
              <span className="text-gray-700">Property Mail</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>
          </div>

          {/* Property Status Dropdown */}
          <div className="relative">
            <button className="w-full px-4 py-2.5 bg-white border rounded-lg shadow-sm hover:bg-gray-50 text-left flex items-center justify-between">
              <span className="text-gray-700">Property Status</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>
          </div>

          {/* Search Input */}
          <div className="md:col-span-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search properties..."
                className="w-full px-4 py-2.5 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-10"
              />
              <Search className="h-4 w-4 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remarks</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {propertyData.map((property) => (
                <tr key={property.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{property.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{property.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{property.city}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${property.status === 'Active' ? 'bg-green-100 text-green-800' : 
                        property.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-gray-100 text-gray-800'}`}>
                      {property.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-gray-500" />
                    <span>{property.remarks}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex gap-3">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Properties;