import React from 'react';
import { LogOut, ArrowLeft } from 'lucide-react';

const LogoutPage = () => {
  const handleLogout = () => {
    // Add your logout logic here
    console.log('User logged out');
  };

  const handleCancel = () => {
    // Add navigation logic here
    console.log('Logout cancelled');
  };

  return (
    <div className="fixed inset-0 overflow-hidden bg-gray-50 flex items-center justify-center p-4 animate__animated animate__fadeIn">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-center space-x-2">
            <LogOut className="h-6 w-6 text-gray-600" />
            <h1 className="text-2xl font-semibold text-gray-800">Sign Out</h1>
          </div>
        </div>
        
        {/* Content */}
        <div className="mb-8">
          <div className="text-center">
            <p className="text-gray-600">
              Are you sure you want to sign out? You'll need to sign in again to access your account.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="space-y-3">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          >
            <LogOut className="h-4 w-4" />
            <span>Sign Out</span>
          </button>
          
          <button 
            onClick={handleCancel}
            className="w-full flex items-center justify-center space-x-2 border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;