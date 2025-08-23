import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import PurchaserPage from './pages/PurchaserPage';
import OrganiserPage from './pages/OrganiserPage';
import AdminPage from './pages/AdminPage';
import EventDetails from './pages/EventDetails';
import SearchResults from './pages/SearchResults';
import UserDashboard from './pages/UserDashboard';
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purchaser" element={<PurchaserPage />} />
        <Route path="/organiser" element={<OrganiserPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;