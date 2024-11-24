import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { 
  Users, Store, MessageSquare, CheckSquare, 
  DollarSign, Package, Zap, Table, 
  ShoppingBag, CreditCard, Wallet
} from 'lucide-react';

const Dashboard = () => {
  const revenueData = [
    { name: 'Entry Purchased', value: 89568, color: '#4c1d95' },
    { name: 'Table Reservation', value: 9636, color: '#5b21b6' },
    { name: 'Deals', value: 60000, color: '#6d28d9' },
    { name: 'Flash Deals', value: 8000, color: '#7c3aed' }
  ];

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Users Card */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-blue-100 rounded-full">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Monitor Users</p>
              <h3 className="text-2xl font-bold">350</h3>
            </div>
          </div>
        </div>

        {/* Venues Card */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-purple-100 rounded-full">
              <Store className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Monitor Venues</p>
              <h3 className="text-2xl font-bold">153</h3>
            </div>
          </div>
        </div>

        {/* Inquiries Received */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-emerald-100 rounded-full">
              <MessageSquare className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Inquiries Received</p>
              <h3 className="text-2xl font-bold">45</h3>
            </div>
          </div>
        </div>

        {/* Inquiries Accepted */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-green-100 rounded-full">
              <CheckSquare className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Inquiries Accepted</p>
              <h3 className="text-2xl font-bold">39</h3>
            </div>
          </div>
        </div>

        {/* Revenue from Inquiries */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-yellow-100 rounded-full">
              <DollarSign className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Revenue from Inquiries</p>
              <h3 className="text-2xl font-bold">{formatCurrency(89568)}</h3>
            </div>
          </div>
        </div>

        {/* Total Deals */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-indigo-100 rounded-full">
              <Package className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Total Deals</p>
              <h3 className="text-2xl font-bold">73</h3>
            </div>
          </div>
        </div>

        {/* Deals Purchased */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-pink-100 rounded-full">
              <ShoppingBag className="w-6 h-6 text-pink-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Deals Purchased</p>
              <h3 className="text-2xl font-bold">59</h3>
            </div>
          </div>
        </div>

        {/* Revenue from Deals */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-orange-100 rounded-full">
              <Wallet className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Revenue from Deals</p>
              <h3 className="text-2xl font-bold">{formatCurrency(60000)}</h3>
            </div>
          </div>
        </div>

        {/* Flash Deals Created */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-red-100 rounded-full">
              <Zap className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Flash Deals Created</p>
              <h3 className="text-2xl font-bold">103</h3>
            </div>
          </div>
        </div>

        {/* Flash Deals Purchased */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-cyan-100 rounded-full">
              <CreditCard className="w-6 h-6 text-cyan-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Flash Deals Purchased</p>
              <h3 className="text-2xl font-bold">85</h3>
            </div>
          </div>
        </div>

        {/* Revenue from Flash Deals */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-teal-100 rounded-full">
              <DollarSign className="w-6 h-6 text-teal-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Revenue from Flash Deals</p>
              <h3 className="text-2xl font-bold">{formatCurrency(8000)}</h3>
            </div>
          </div>
        </div>

        {/* Table Inquiries */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-violet-100 rounded-full">
              <Table className="w-6 h-6 text-violet-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Table Inquiries</p>
              <h3 className="text-2xl font-bold">150</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Breakdown Section */}
      <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-6">Revenue Breakdown</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={revenueData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {revenueData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {revenueData.map((item, index) => (
              <div key={index} className="flex items-center gap-1 p-10">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm text-gray-600">{item.name}</span>
              </div>
            ))}
          </div>
          </ResponsiveContainer>
        
        </div>
      </div>
    </div>
  );
};

export default Dashboard;