import React, { useState, useMemo } from 'react';
import { 
  Filter, 
  Search, 
  ChevronDown, 
  Edit2, 
  Trash2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Administrator = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage] = useState(5); // Increased items per page

  const adminData = [
    {
      id: 1,
      name: "From Factory by Sutra",
      email: "factorybysutra@gmail.com",
      city: "Gurugram",
      createdDate: "31/7/2024",
      status: "Approved"
    },
    {
      id: 2,
      name: "The Red Lion",
      email: "deeps@yopmail.com",
      city: "Gurugram",
      createdDate: "19/11/2024",
      status: "Pending"
    },
    {
      id: 3,
      name: "The Millenium Centre",
      email: "dummy123@gmail.com",
      city: "Gurugram",
      createdDate: "11/11/2024",
      status: "Approved"
    },
    {
      id: 4,
      name: "Downtown Sector 29",
      email: "downtown29@yopmail.com",
      city: "Gurugram",
      createdDate: "13/4/2024",
      status: "Approved"
    },
    {
      id: 5,
      name: "Urban Heights",
      email: "urban@example.com",
      city: "Delhi",
      createdDate: "15/6/2024",
      status: "Pending"
    },
    {
      id: 6,
      name: "Green Valley",
      email: "green@example.com",
      city: "Noida",
      createdDate: "22/8/2024",
      status: "Approved"
    },
    {
      id: 7,
      name: "Sunrise Residences",
      email: "sunrise@example.com",
      city: "Gurugram",
      createdDate: "5/9/2024",
      status: "Pending"
    },
    {
      id: 8,
      name: "Lakeside Complex",
      email: "lakeside@example.com",
      city: "Delhi",
      createdDate: "18/10/2024",
      status: "Approved"
    }
  ];

  const filteredAdmins = useMemo(() => {
    return adminData.filter(admin => 
      admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, adminData]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAdmins.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredAdmins.length / itemsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-8 max-w-[1600px] mx-auto animate__animated animate__fadeInLeft"> {/* Increased max-width and padding */}
      {/* Header and Filters Section */}
      <div className="mb-10"> {/* Increased margin */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">Super Admin</h1> {/* Increased text size */}
          <button className="flex items-center gap-2 px-6 py-3 bg-white border rounded-lg shadow-sm hover:bg-gray-50">
            <Filter className="h-5 w-5" /> {/* Increased icon size */}
            <span className="text-base">Filter</span> {/* Increased text size */}
          </button>
        </div>

        {/* Search and Filter Controls */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6"> {/* Increased gap */}
          {/* Status Dropdown */}
          <div className="relative">
            <button className="w-full px-6 py-4 bg-white border rounded-lg shadow-sm hover:bg-gray-50 text-left flex items-center justify-between">
              <span className="text-base text-gray-700">Status</span> {/* Increased text size */}
              <ChevronDown className="h-5 w-5 text-gray-500" /> {/* Increased icon size */}
            </button>
          </div>

          {/* City Dropdown */}
          <div className="relative">
            <button className="w-full px-6 py-4 bg-white border rounded-lg shadow-sm hover:bg-gray-50 text-left flex items-center justify-between">
              <span className="text-base text-gray-700">City</span> {/* Increased text size */}
              <ChevronDown className="h-5 w-5 text-gray-500" /> {/* Increased icon size */}
            </button>
          </div>

          {/* Search Input */}
          <div className="md:col-span-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search administrators..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-6 py-4 bg-white border rounded-lg shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-12"
              />
              <Search className="h-5 w-5 text-gray-500 absolute left-4 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-8 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-8 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-8 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">City</th>
                <th className="px-8 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Created Date</th>
                <th className="px-8 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-8 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentItems.map((admin) => (
                <tr key={admin.id} className="hover:bg-gray-50">
                  <td className="px-8 py-6 whitespace-nowrap text-base font-medium text-gray-900">{admin.name}</td>
                  <td className="px-8 py-6 whitespace-nowrap text-base text-gray-500">{admin.email}</td>
                  <td className="px-8 py-6 whitespace-nowrap text-base text-gray-500">{admin.city}</td>
                  <td className="px-8 py-6 whitespace-nowrap text-base text-gray-500">{admin.createdDate}</td>
                  <td className="px-8 py-6 whitespace-nowrap">
                    <span className={`px-4 py-1 inline-flex text-sm leading-6 font-semibold rounded-full 
                      ${admin.status === 'Approved' ? 'bg-green-100 text-green-800' : 
                        admin.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-gray-100 text-gray-800'}`}>
                      {admin.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap text-base text-gray-500">
                    <div className="flex gap-4">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Edit2 className="h-5 w-5" />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Section */}
        <div className="flex items-center justify-between px-8 py-6 border-t border-gray-200">
          <div className="text-base text-gray-700">
            Showing{' '}
            <span className="font-medium">
              {indexOfFirstItem + 1}
            </span>{' '}
            to{' '}
            <span className="font-medium">
              {Math.min(indexOfLastItem, filteredAdmins.length)}
            </span>{' '}
            of{' '}
            <span className="font-medium">
              {filteredAdmins.length}
            </span>{' '}
            administrators
          </div>
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex items-center px-4 py-2 border rounded-md text-base font-medium transition-colors 
                ${currentPage === 1 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'}`}
            >
              <ChevronLeft className="h-5 w-5 mr-1" />
              Previous
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`px-4 py-2 border rounded-md text-base font-medium transition-colors 
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
              className={`flex items-center px-4 py-2 border rounded-md text-base font-medium transition-colors 
                ${currentPage === totalPages 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'}`}
            >
              Next
              <ChevronRight className="h-5 w-5 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Administrator;