import React, { useState, useMemo } from 'react';
import { motion } from "framer-motion";
import { 
  Filter, 
  Search, 
  ChevronDown, 
  Edit2, 
  Trash2,
  FileText,
  Plus,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Properties = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage] = useState(4); // Number of items to show per page

  const propertyData = [
    {
      id: 1,
      name: "From Factory by Sutra",
      email: "factorybysutra@gmail.com",
      city: "Gurugram",
      status: "Approved",
      remarks: "Verified",
    },
    {
      id: 2,
      name: "The Red Lion",
      email: "deeps@yopmail.com",
      city: "Gurugram",
      status: "Pending",
      remarks: "Under Review",
    },
    {
      id: 3,
      name: "The Millenium Centre",
      email: "dummy123@gmail.com",
      city: "Gurugram",
      status: "Pending",
      remarks: "Awaiting Verification",
    },
    {
      id: 4,
      name: "Downtown Sector 29",
      email: "downtown29@yopmail.com",
      city: "Gurugram",
      status: "Approved",
      remarks: "Confirmed",
    },
    {
      id: 5,
      name: "Sunrise Apartments",
      email: "sunrise@example.com",
      city: "Delhi",
      status: "Pending",
      remarks: "Pending Approval",
    },
    {
      id: 6,
      name: "Green Valley Homes",
      email: "greenvalley@example.com",
      city: "Noida",
      status: "Approved",
      remarks: "Fully Verified",
    },
    {
      id: 7,
      name: "Lakeside Residency",
      email: "lakeside@example.com",
      city: "Gurugram",
      status: "Pending",
      remarks: "Initial Review",
    },
    {
      id: 8,
      name: "Urban Heights",
      email: "urbanheights@example.com",
      city: "Delhi",
      status: "Approved",
      remarks: "Completed",
    }
  ];

  // Filter properties based on search term
  const filteredProperties = useMemo(() => {
    return propertyData.filter(property => 
      property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, propertyData]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProperties.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Total pages calculation
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);

  return (
    <div className="p-6 max-w-[1400px] mx-auto animate__animated animate__fadeInLeft">
      {/* Header and Filters Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Properties</h1>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 text-blue-600 
                               hover:bg-blue-50 transition-colors duration-300 
                               focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-lg">
              <Plus className="h-4 w-4" />
              <span className="text-sm font-medium">Create Properties</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg shadow-sm hover:bg-gray-50">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Search Input */}
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search properties..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // Reset to first page when searching
              }}
              className="w-full px-4 py-2.5 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-10"
            />
            <Search className="h-4 w-4 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
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
              {currentItems.map((property) => (
                <tr key={property.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{property.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{property.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{property.city}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${property.status === 'Approved' ? 'bg-green-100 text-green-800' : 
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

        {/* Pagination Section */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
          <div className="text-sm text-gray-700">
            Showing{' '}
            <span className="font-medium">
              {indexOfFirstItem + 1}
            </span>{' '}
            to{' '}
            <span className="font-medium">
              {Math.min(indexOfLastItem, filteredProperties.length)}
            </span>{' '}
            of{' '}
            <span className="font-medium">
              {filteredProperties.length}
            </span>{' '}
            properties
          </div>
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex items-center px-3 py-2 border rounded-md text-sm font-medium transition-colors 
                ${currentPage === 1 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'}`}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`px-3 py-2 border rounded-md text-sm font-medium transition-colors 
                  ${currentPage === index + 1 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'}`}
              >
                {index + 1}
              </button>
            ))}

            <button 
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`flex items-center px-3 py-2 border rounded-md text-sm font-medium transition-colors 
                ${currentPage === totalPages 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'}`}
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;