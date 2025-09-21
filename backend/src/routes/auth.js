const express = require('express');
const auth = require('../middleware/auth');
const { 
  registerUser, 
  loginUser, 
  getProfile, 
  logoutUser 
} = require('../controllers/authController');

const router = express.Router();

// Register route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

// Get user profile (protected route)
router.get('/profile', auth, getProfile);

// Logout route (client-side should remove token)
router.post('/logout', auth, logoutUser);

// Forgot password (placeholder for future implementation)
router.post('/forgot-password', (req, res) => {
  res.status(501).json({
    success: false,
    message: 'Forgot password endpoint - Coming soon'
  });
});

// Reset password (placeholder for future implementation)
router.post('/reset-password', (req, res) => {
  res.status(501).json({
    success: false,
    message: 'Reset password endpoint - Coming soon'
  });
});

module.exports = router;