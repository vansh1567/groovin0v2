import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Properties from './pages/Properties';
import DashboardLayout from './pages/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Administrator from './pages/Administrator';
import AdminRole from './pages/AdminRole';
import AdminManager from './pages/AdminManager';
import Party from './pages/Party';
import FlashDeals from './pages/FlashDeals';
import Deals from './pages/Deals';
import Enquiry from './pages/Enquiry';
import Menu from './pages/Menu';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="properties" element={<Properties />} />
          <Route path="administrator" element={<Administrator/>} />
          <Route path="admin-role" element={<AdminRole/>} />          
          <Route path="party-events" element={<Party/>} />
          <Route path="admin-manager" element={<AdminManager/>} />
          <Route path="deal" element={<Deals/>} />
          <Route path="flash-deals" element={<FlashDeals/>} />
          <Route path="enquiry" element={<Enquiry/>} />
          <Route path="menu-management" element={<Menu/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;