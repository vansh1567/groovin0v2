import React, { useState } from 'react';
import { Pencil, Trash } from 'lucide-react';

const Menu = () => {
  const [selectedProperty, setSelectedProperty] = useState('From Factory by Sutra');
  const [activeTab, setActiveTab] = useState('STARTERS');

  const properties = [
    'Select',
    'From Factory by Sutra',
    'The Red Lion',
    'Downtown Sector 29'
  ];

  const locationMenus = {
    'From Factory by Sutra': {
      STARTERS: [
        { id: 1, name: 'Soup', price: 150, image: '/images/soup.jpg' },
        { id: 2, name: 'Fruit Salad', price: 100, image: '/images/salad.jpg' },
        { id: 3, name: 'Sweet Corn Chat', price: 120, image: '/images/chat.jpg' },
        { id: 4, name: 'Paneer Tikka', price: 220, image: '/images/tikka.jpg' }
      ],
      BREAKFAST: [
        { id: 5, name: 'Idli', price: 120, image: '/images/idli.jpg' },
        { id: 6, name: 'Baked French Toast', price: 220, image: '/images/toast.jpg' },
        { id: 7, name: 'Breakfast Sandwich', price: 150, image: '/images/sandwich.jpg' }
      ],
      'MAIN MENU': [
        { id: 8, name: 'Thali', price: 250, image: '/images/thali.jpg' },
        { id: 9, name: 'Paneer Kathi Roll', price: 180, image: '/images/roll.jpg' }
      ]
    },
    'Downtown Sector 29': {
      STARTERS: [
        { id: 10, name: 'Fruit Salad', price: 100, image: '/images/salad.jpg' },
        { id: 11, name: 'Soup', price: 150, image: '/images/soup.jpg' },
        { id: 12, name: 'Pasta', price: 180, image: '/images/pasta.jpg' },
        { id: 13, name: 'Sweet Corn Chat', price: 120, image: '/images/chat.jpg' }
      ],
      BREAKFAST: [
        { id: 14, name: 'Idli', price: 120, image: '/images/idli.jpg' },
        { id: 15, name: 'Breakfast Sandwich', price: 150, image: '/images/sandwich.jpg' }
      ],
      'MAIN MENU': [
        { id: 16, name: 'Thali', price: 250, image: '/images/thali.jpg' },
        { id: 17, name: 'Paneer Kathi Roll', price: 180, image: '/images/roll.jpg' },
        { id: 18, name: 'Biryani', price: 300, image: '/images/biryani.jpg' }
      ]
    },
    'The Red Lion': {
      STARTERS: [],
      BREAKFAST: [],
      'MAIN MENU': []
    },
    'Select': {
      STARTERS: [],
      BREAKFAST: [],
      'MAIN MENU': []
    }
  };

  const handlePropertyChange = (e) => {
    setSelectedProperty(e.target.value);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleEdit = (id) => {
    console.log('Edit item:', id);
  };

  const handleDelete = (id) => {
    console.log('Delete item:', id);
  };

  const menuTabs = {
    'STARTERS': 'APPETIZERS/STARTERS',
    'BREAKFAST': 'BREAKFAST',
    'MAIN MENU': 'MAIN MENU (LUNCH/DINNER)'
  };

  return (
    <div className="container mx-auto p-4 md:p-6 max-w-7xl animate__animated animate__fadeInLeft">
      {/* Property Selector */}
      <div className="mb-6 md:mb-8">
        <h2 className="text-sm text-gray-600 mb-2">Select Property *</h2>
        <select
          value={selectedProperty}
          onChange={handlePropertyChange}
          className="w-full max-w-md p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
        >
          {properties.map((property) => (
            <option key={property} value={property}>
              {property}
            </option>
          ))}
        </select>
      </div>

      {/* Tabs */}
      {selectedProperty !== 'Select' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 mb-6 md:mb-8">
            {Object.entries(menuTabs).map(([key, label]) => (
              <button
                key={key}
                onClick={() => handleTabChange(key)}
                className={`h-12 md:h-14 rounded-md font-medium text-sm md:text-base transition-all duration-300 ease-in-out ${
                  activeTab === key
                    ? 'bg-indigo-950 text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <button className="text-indigo-600 hover:text-indigo-700 mb-6 md:mb-8">
            Add Item
          </button>

          {/* Menu Items */}
          <div className="space-y-4 md:space-y-6">
            {locationMenus[selectedProperty][activeTab].map((item) => (
              <div
                key={item.id}
                className="bg-white border rounded-lg overflow-hidden shadow-sm transition-transform duration-300 ease-in-out"
              >
                <div className="flex flex-col md:flex-row">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full md:w-64 h-48 object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="flex-1 flex flex-col md:flex-row justify-between items-start md:items-center p-4 md:p-6 space-y-3 md:space-y-0">
                    <h3 className="text-lg md:text-xl font-semibold">{item.name}</h3>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 w-full md:w-auto">
                      <span className="text-base md:text-lg">₹{item.price}</span>
                      <div className="flex gap-2 w-full md:w-auto justify-end">
                        <button
                          onClick={() => handleEdit(item.id)}
                          className="p-2 text-teal-500 hover:text-teal-600 hover:bg-teal-50 rounded-full transition-all duration-200"
                        >
                          <Pencil className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-2 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-all duration-200"
                        >
                          <Trash className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Menu;
