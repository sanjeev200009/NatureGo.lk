const express = require('express');
const auth = require('../middleware/auth');
const { 
  getDestinations,
  getDestinationById,
  createDestination,
  updateDestination,
  deleteDestination
} = require('../controllers/destinationController');

const router = express.Router();

// Get all destinations with filtering and pagination
router.get('/', getDestinations);

// Get single destination by ID
router.get('/:id', getDestinationById);

// Create new destination (authenticated users)
router.post('/', auth, createDestination);

// Update destination (authenticated users)
router.put('/:id', auth, updateDestination);

// Delete destination (authenticated users)  
router.delete('/:id', auth, deleteDestination);

// Add review to destination
router.post('/:id/reviews', (req, res) => {
  res.status(501).json({
    success: false,
    message: 'Add destination review endpoint - Coming soon'
  });
});

// Get destination reviews
router.get('/:id/reviews', (req, res) => {
  res.json({
    success: true,
    message: 'Destination reviews',
    data: {
      reviews: [],
      total: 0,
      averageRating: 0
    }
  });
});

// Search destinations
router.get('/search/:query', (req, res) => {
  res.json({
    success: true,
    message: `Search results for: ${req.params.query}`,
    data: {
      destinations: [],
      total: 0
    }
  });
});

module.exports = router;