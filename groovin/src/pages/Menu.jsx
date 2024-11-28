import React, { useState } from 'react'

const Menu = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const locations = [
    'Factory by Sutra', 
    'The Red Lion', 
    'The Millenium Centre', 
    'Downtown Sector 29'
  ];

  return (
    <div className="relative w-64 animate__animated animate__fadeInLeft">
      <select 
        value={selectedLocation}
        onChange={(e) => setSelectedLocation(e.target.value)}
        className="w-full px-4 py-2 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 mt-[17px] ml-[17px]"
      >
        <option value="" disabled>Select Location</option>
        {locations.map((location, index) => (
          <option key={index} value={location}>
            {location}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  )
}

export default Menu