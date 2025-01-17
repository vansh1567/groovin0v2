import React, { useState, useMemo } from 'react';
import {
  Filter,
  Search,
  ChevronDown,
  Edit2,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Plus
} from 'lucide-react';

const Deals = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage] = useState(8); // Number of items to show per page

  const partyData = [
    {
      id: 1,
      name: 'Manifest Vibe',
      propertyName: 'From Factory by Sutra',
      startDate: '26/11/2024',
      endDate: '26/11/2024',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Winter Bees',
      propertyName: 'The Red Lion',
      startDate: '26/11/2024',
      endDate: '26/11/2024',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Summer Deal',
      propertyName: 'Sunrise Apartments',
      startDate: '15/06/2024',
      endDate: '15/06/2024',
      status: 'Inactive',
    },
    {
      id: 4,
      name: 'Winter Special',
      propertyName: 'Green Valley Homes',
      startDate: '25/12/2024',
      endDate: '25/12/2024',
      status: 'Active',
    },
    {
      id: 5,
      name: 'Spring Offer',
      propertyName: 'Lakeside Residency',
      startDate: '20/03/2024',
      endDate: '20/03/2024',
      status: 'Inactive',
    }
  ];

  // Filter deals based on search term
  const filteredDeals = useMemo(() => {
    return partyData.filter(deal => 
      deal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      deal.propertyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      deal.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, partyData]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredDeals.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Total pages calculation
  const totalPages = Math.ceil(filteredDeals.length / itemsPerPage);

  return (
    <div className="p-8 max-w-[1600px] mx-auto animate__animated animate__fadeInLeft">
      {/* Header and Filters Section */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">Deals</h1>
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 px-5 py-3 text-blue-600 
                               hover:bg-blue-50 transition-colors duration-300 
                               focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-lg">
              <Plus className="h-5 w-5" />
              <span className="text-base font-medium">Create Deals</span>
            </button>
            <button className="flex items-center gap-2 px-5 py-3 bg-white border rounded-lg shadow-sm hover:bg-gray-50">
              <Filter className="h-5 w-5" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Search and Filter Controls */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Property Name Dropdown */}
          <div className="relative">
            <button className="w-full px-5 py-3 bg-white border rounded-lg shadow-sm hover:bg-gray-50 text-left flex items-center justify-between">
              <span className="text-gray-700">Property Name</span>
              <ChevronDown className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          {/* Status Dropdown */}
          <div className="relative">
            <button className="w-full px-5 py-3 bg-white border rounded-lg shadow-sm hover:bg-gray-50 text-left flex items-center justify-between">
              <span className="text-gray-700">Status</span>
              <ChevronDown className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          {/* Start Date and End Date */}
          <div className="relative">
            <input
              type="date"
              className="w-full px-5 py-3 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Start Date"
            />
          </div>
          <div className="relative">
            <input
              type="date"
              className="w-full px-5 py-3 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="End Date"
            />
          </div>
        </div>

        {/* Search Input */}
        <div className="mt-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search deals..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // Reset to first page when searching
              }}
              className="w-full px-5 py-3 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-12"
            />
            <Search className="h-5 w-5 text-gray-500 absolute left-4 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-8 py-5 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-8 py-5 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Property Name</th>
                <th className="px-8 py-5 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
                <th className="px-8 py-5 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">End Date</th>
                <th className="px-8 py-5 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-8 py-5 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentItems.map((deal) => (
                <tr key={deal.id} className="hover:bg-gray-50">
                  <td className="px-8 py-5 whitespace-nowrap text-base font-medium text-gray-900">{deal.name}</td>
                  <td className="px-8 py-5 whitespace-nowrap text-base text-gray-500">{deal.propertyName}</td>
                  <td className="px-8 py-5 whitespace-nowrap text-base text-gray-500">{deal.startDate}</td>
                  <td className="px-8 py-5 whitespace-nowrap text-base text-gray-500">{deal.endDate}</td>
                  <td className="px-8 py-5 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-sm leading-5 font-semibold rounded-full 
                      ${deal.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {deal.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 whitespace-nowrap text-base text-gray-500">
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
              {Math.min(indexOfLastItem, filteredDeals.length)}
            </span>{' '}
            of{' '}
            <span className="font-medium">
              {filteredDeals.length}
            </span>{' '}
            deals
          </div>
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex items-center px-4 py-3 border rounded-md text-base font-medium transition-colors 
                ${currentPage === 1 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'}`}
            >
              <ChevronLeft className="h-5 w-5 mr-2" />
              Previous
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`px-4 py-3 border rounded-md text-base font-medium transition-colors 
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
              className={`flex items-center px-4 py-3 border rounded-md text-base font-medium transition-colors 
                ${currentPage === totalPages 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'}`}
            >
              Next
              <ChevronRight className="h-5 w-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
