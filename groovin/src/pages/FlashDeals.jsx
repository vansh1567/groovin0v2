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

const FlashDeals = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage] = useState(4); // Number of items to show per page

  const partyData = [
    {
      id: 1,
      name: 'Alice Johnson',
      propertyName: 'Sunset Villas',
      startDate: '2024-01-10',
      endDate: '2024-01-20',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Bob Smith',
      propertyName: 'Ocean Breeze',
      startDate: '2024-02-01',
      endDate: '2024-02-15',
      status: 'Inactive',
    },
    {
      id: 3,
      name: 'Carol Williams',
      propertyName: 'Mountain Retreat',
      startDate: '2024-03-05',
      endDate: '2024-03-12',
      status: 'Active',
    },
    {
      id: 4,
      name: 'David Brown',
      propertyName: 'Riverside Apartment',
      startDate: '2024-04-15',
      endDate: '2024-04-25',
      status: 'Active',
    },
    {
      id: 5,
      name: 'Eve Wilson',
      propertyName: 'Urban Loft',
      startDate: '2024-05-01',
      endDate: '2024-05-10',
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
    <div className="p-6 max-w-[1400px] mx-auto animate__animated animate__fadeInLeft">
      {/* Header and Filters Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Flash Deals</h1>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 text-blue-600 
                               hover:bg-blue-50 transition-colors duration-300 
                               focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-lg">
              <Plus className="h-4 w-4" />
              <span className="text-sm font-medium">Create Flash Deal</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg shadow-sm hover:bg-gray-50">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Search and Filter Controls */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Property Name Dropdown */}
          <div className="relative">
            <button className="w-full px-4 py-2.5 bg-white border rounded-lg shadow-sm hover:bg-gray-50 text-left flex items-center justify-between">
              <span className="text-gray-700">Property Name</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>
          </div>

          {/* Status Dropdown */}
          <div className="relative">
            <button className="w-full px-4 py-2.5 bg-white border rounded-lg shadow-sm hover:bg-gray-50 text-left flex items-center justify-between">
              <span className="text-gray-700">Status</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>
          </div>

          {/* Start Date and End Date */}
          <div className="relative">
            <input
              type="date"
              className="w-full px-4 py-2.5 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Start Date"
            />
          </div>
          <div className="relative">
            <input
              type="date"
              className="w-full px-4 py-2.5 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="End Date"
            />
          </div>
        </div>

        {/* Search Input */}
        <div className="mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search flash deals..."
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentItems.map((party) => (
                <tr key={party.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{party.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{party.propertyName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{party.startDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{party.endDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${party.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {party.status}
                    </span>
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
              {Math.min(indexOfLastItem, filteredDeals.length)}
            </span>{' '}
            of{' '}
            <span className="font-medium">
              {filteredDeals.length}
            </span>{' '}
            deals
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

export default FlashDeals;