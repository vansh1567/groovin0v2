import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { Search, MapPin, Loader2 } from 'lucide-react';

const GOOGLE_MAPS_API_KEY = 'AIzaSyAdIl0NYUPTd-NcOPtHcsxRv03goxDNPd8';

const Map = () => {
  const [location, setLocation] = useState(null);
  const [locationDetails, setLocationDetails] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Initial geolocation fetch
  useEffect(() => {
    fetchCurrentLocation();
  }, []);

  const fetchCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          updateLocationDetails(latitude, longitude);
        },
        (error) => {
          setError('Unable to fetch current location');
        }
      );
    } else {
      setError('Geolocation not supported');
    }
  };

  const updateLocationDetails = async (lat, lng) => {
    try {
      const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`;
      const response = await fetch(geocodeUrl);
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        const addressComponents = data.results[0].address_components;
        const city = addressComponents.find(comp => comp.types.includes('locality'))?.long_name || 'N/A';
        const state = addressComponents.find(comp => comp.types.includes('administrative_area_level_1'))?.long_name || 'N/A';
        const country = addressComponents.find(comp => comp.types.includes('country'))?.long_name || 'N/A';
        const pincode = addressComponents.find(comp => comp.types.includes('postal_code'))?.long_name || 'N/A';
        const formattedAddress = data.results[0].formatted_address;

        setLocation({ lat, lng });
        setLocationDetails({
          city,
          state,
          country,
          pincode,
          formattedAddress,
          latitude: lat,
          longitude: lng
        });
        setSelectedLocation({ lat, lng });
      }
    } catch (err) {
      setError('Failed to fetch location details');
    }
  };

  const handleLocationSearch = async () => {
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(searchQuery)}&key=${GOOGLE_MAPS_API_KEY}`;
      const response = await fetch(geocodeUrl);
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        const result = data.results[0];
        const { lat, lng } = result.geometry.location;
        
        updateLocationDetails(lat, lng);
      } else {
        setError('Location not found');
      }
    } catch (err) {
      setError('Search failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 w-full py-8">
      <div className="container mx-auto px-4 max-w-6xl space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Map</h1>
        {/* Header and Search Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          {/* Search Input */}
          <div className="flex flex-col md:flex-row gap-3">
            <input 
              type="text"
              placeholder="Search for a location (city, address, landmark)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleLocationSearch()}
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              onClick={handleLocationSearch} 
              disabled={isLoading}
              className="w-full md:w-auto px-4 py-2 bg-blue-600 text-white rounded-md flex items-center justify-center hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Search className="mr-2 h-4 w-4" />
              )}
              Search
            </button>
          </div>

          {/* Error Handling */}
          {error && (
            <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md">
              {error}
            </div>
          )}
        </div>

        {/* Google Map */}
        <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
          {location ? (
            <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
              <GoogleMap
                id="map"
                mapContainerStyle={{ height: '100%', width: '100%' }}
                center={location}
                zoom={13}
              >
                <Marker 
                  position={location} 
                  onClick={() => setSelectedLocation(location)} 
                />
                {selectedLocation && (
                  <InfoWindow position={selectedLocation}>
                    <div className="text-center p-2">
                      <h2 className="font-bold mb-2">Selected Location</h2>
                      <p className="text-sm">{`Lat: ${selectedLocation.lat.toFixed(4)}, Lng: ${selectedLocation.lng.toFixed(4)}`}</p>
                    </div>
                  </InfoWindow>
                )}
              </GoogleMap>
            </LoadScript>
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-200 text-gray-600">
              <Loader2 className="animate-spin mr-2" /> 
              <span>Loading map...</span>
            </div>
          )}
        </div>

        {/* Location Details */}
        {locationDetails && (
          <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-3">
              Location Details
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <DetailRow label="City" value={locationDetails.city} />
                <DetailRow label="State" value={locationDetails.state} />
                <DetailRow label="Country" value={locationDetails.country} />
              </div>
              <div className="space-y-2">
                <DetailRow label="Pincode" value={locationDetails.pincode} />
                <DetailRow label="Latitude" value={locationDetails.latitude.toFixed(4)} />
                <DetailRow label="Longitude" value={locationDetails.longitude.toFixed(4)} />
              </div>
            </div>
            <div className="bg-gray-50 p-3 rounded-md">
              <h3 className="font-medium text-gray-700 mb-2">Full Address</h3>
              <p className="text-gray-600">{locationDetails.formattedAddress}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Helper component for consistent detail row rendering
const DetailRow = ({ label, value }) => (
  <div className="flex justify-between items-center">
    <span className="text-gray-600 font-medium">{label}:</span>
    <span className="text-gray-800 font-semibold">{value}</span>
  </div>
);

export default Map;