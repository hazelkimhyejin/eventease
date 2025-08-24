import { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { verifyOTP } from '../../utils/auth';

function OTPVerification() {
  const { role } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const email = query.get('email');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await verifyOTP({ email, otp, role });
      if (response.success) {
        navigate(`/login/${role}`);
      } else {
        setError('Invalid OTP. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Verify OTP</h2>
      <p className="text-gray-600 mb-4">Enter the OTP sent to {email}</p>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600">OTP</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">Verify</button>
      </form>
    </div>
  );
}

export default OTPVerification;