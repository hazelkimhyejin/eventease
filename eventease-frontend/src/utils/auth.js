export const registerUser = async ({ name, email, password, role }) => {
  // Simulated API call to send OTP to email
  console.log(`Sending OTP to ${email} for ${role} registration`);
  return { success: true };
};

export const verifyOTP = async ({ email, otp, role }) => {
  // Simulated OTP verification
  return { success: otp === '123456' }; // Mock OTP check
};

export const loginUser = async ({ email, password }) => {
  // Simulated login
  return { success: email === 'test@example.com' && password === 'password' };
};

export const updateProfile = async (profileData) => {
  // Simulated profile update
  return { success: true };
};

export const getUserRole = () => {
  // Simulated role fetching
  return 'purchaser'; // Replace with actual backend logic
};