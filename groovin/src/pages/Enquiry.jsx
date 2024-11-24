import React, { useState } from 'react';
import {
  Filter,
  Search,
  ChevronDown,
  Eye,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const Enquiry = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const enquiryData = [
    {
      id: 1,
      name: 'John Doe',
      propertyName: 'From Factory by Sutra',
      eventStartDate: '2024-11-12',
      eventEndDate: '2024-11-13',
      enquiryDate: '2024-11-10',
      noOfGuests: 100,
      tableEnquiry: 'Yes',
      status: 'Active',
      quotation: '$5000',
    },
  ];

  return (
    <div className="p-6 max-w-[1400px] mx-auto">
      {/* Header and Filters Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Enquiries</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg shadow-sm hover:bg-gray-50">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>
        </div>

        {/* Search and Filter Controls */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search enquiries..."
              className="w-full px-4 py-2.5 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Search className="h-4 w-4 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2 px-2" />
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event Start Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event End Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enquiry Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No of Guest</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Table Enquiry</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quotation</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {enquiryData.map((enquiry) => (
                <tr key={enquiry.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{enquiry.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{enquiry.propertyName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{enquiry.eventStartDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{enquiry.eventEndDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{enquiry.enquiryDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{enquiry.noOfGuests}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{enquiry.tableEnquiry}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${enquiry.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {enquiry.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{enquiry.quotation}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button onClick={handleOpenModal} className="text-blue-600 hover:text-blue-800">
                      <Eye className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-gray-200">
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">1</span> of <span className="font-medium">1</span> results
          </p>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>
            <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6">
            <h2 className="text-xl font-semibold mb-4">Enquiry Details</h2>
            <div className="space-y-3">
              <p><strong>Property Name:</strong> From Factory by Sutra</p>
              <p><strong>Name:</strong> demo12 null</p>
              <p><strong>Mobile:</strong> 8700682075</p>
              <p><strong>Status:</strong> Active</p>
              <p><strong>Date:</strong> Friday, 15-Nov-2024</p>
              <p><strong>No of Guest:</strong> 0 Guest</p>
              <p><strong>Table Book:</strong> Yes</p>
              <p><strong>Drink Preference:</strong> Non-Alcoholic</p>
              <p><strong>Meal Preference:</strong> Vegetarian</p>
              <p><strong>Music Preference:</strong> Live DJ</p>
            </div>
            <div className="mt-4 space-y-3">
              <input type="text" placeholder="Quotation" className="w-full px-4 py-2 border rounded-lg" />
              <input type="text" placeholder="Remarks" className="w-full px-4 py-2 border rounded-lg" />
              <input type="text" placeholder="Token Amount" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-zinc-950"
              >
                Reject
              </button>
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-zinc-950"
              >
                Send Quotation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Enquiry;
