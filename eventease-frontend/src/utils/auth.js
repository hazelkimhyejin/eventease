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
  return 'guest'; // Replace with actual backend logic (e.g., JWT parsing)
};

export const isAuthenticated = () => {
  // Simulated authentication check
  return false; // Replace with actual backend logic (e.g., checking JWT)
};

export const logoutUser = () => {
  // Simulated logout
  console.log('User logged out');
  // Replace with actual backend logic (e.g., clear JWT)
};