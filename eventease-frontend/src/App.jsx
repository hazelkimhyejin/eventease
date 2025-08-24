import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import OTPVerify from './pages/OTPVerify';
import PurchaserDashboard from './pages/PurchaserDashboard';
import OrganiserDashboard from './pages/OrganiserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import EventDetails from './pages/EventDetails';
import SearchResults from './pages/SearchResults';
import PurchaserPage from './pages/PurchaserPage';
import OrganiserPage from './pages/OrganiserPage';
import AdminPage from './pages/AdminPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import { getUserRole, logoutUser } from './utils/auth';

function Logout() {
  logoutUser();
  return <Navigate to="/" />;
}

function DashboardRedirect() {
  const role = getUserRole();
  switch (role) {
    case 'purchaser':
      return <Navigate to="/purchaser/dashboard" />;
    case 'organiser':
      return <Navigate to="/organiser/dashboard" />;
    case 'admin':
      return <Navigate to="/admin/dashboard" />;
    default:
      return <Navigate to="/login/purchaser" />;
  }
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register/:role" element={<Register />} />
        <Route path="/login/:role" element={<Login />} />
        <Route path="/otp-verify/:role" element={<OTPVerify />} />
        <Route path="/purchaser" element={<PurchaserPage />} />
        <Route path="/purchaser/dashboard" element={<PurchaserDashboard />} />
        <Route path="/organiser" element={<OrganiserPage />} />
        <Route path="/organiser/dashboard" element={<OrganiserDashboard />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/dashboard" element={<DashboardRedirect />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;