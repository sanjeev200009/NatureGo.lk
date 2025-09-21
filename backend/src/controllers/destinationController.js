const Destination = require('../models/Destination');

// @desc    Get all destinations with filtering and pagination
// @route   GET /api/destinations
// @access  Public
const getDestinations = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Build filter object
    const filter = { status: 'active' };
    if (req.query.category) filter.category = req.query.category;
    if (req.query.province) filter['location.province'] = req.query.province;
    if (req.query.minRating) filter.sustainabilityRating = { $gte: parseInt(req.query.minRating) };

    const destinations = await Destination.find(filter)
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    const total = await Destination.countDocuments(filter);

    res.json({
      success: true,
      data: {
        destinations,
        pagination: {
          total,
          page,
          pages: Math.ceil(total / limit),
          limit
        }
      }
    });
  } catch (error) {
    console.error('Get destinations error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error fetching destinations'
    });
  }
};

// @desc    Get single destination by ID
// @route   GET /api/destinations/:id
// @access  Public
const getDestinationById = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    if (!destination) {
      return res.status(404).json({
        success: false,
        message: 'Destination not found'
      });
    }

    res.json({
      success: true,
      data: destination
    });
  } catch (error) {
    console.error('Get destination error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error fetching destination'
    });
  }
};

// @desc    Create new destination
// @route   POST /api/destinations
// @access  Private
const createDestination = async (req, res) => {
  try {
    const destination = new Destination({
      ...req.body,
      createdBy: req.user.userId
    });

    await destination.save();

    res.status(201).json({
      success: true,
      message: 'Destination created successfully',
      data: destination
    });
  } catch (error) {
    console.error('Create destination error:', error);
    res.status(400).json({
      success: false,
      message: 'Error creating destination',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Validation error'
    });
  }
};

// @desc    Update destination
// @route   PUT /api/destinations/:id
// @access  Private
const updateDestination = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    
    if (!destination) {
      return res.status(404).json({
        success: false,
        message: 'Destination not found'
      });
    }

    // Check if user owns the destination or is admin
    if (destination.createdBy.toString() !== req.user.userId && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this destination'
      });
    }

    const updatedDestination = await Destination.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      message: 'Destination updated successfully',
      data: updatedDestination
    });
  } catch (error) {
    console.error('Update destination error:', error);
    res.status(400).json({
      success: false,
      message: 'Error updating destination',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Validation error'
    });
  }
};

// @desc    Delete destination
// @route   DELETE /api/destinations/:id
// @access  Private
const deleteDestination = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    
    if (!destination) {
      return res.status(404).json({
        success: false,
        message: 'Destination not found'
      });
    }

    // Check if user owns the destination or is admin
    if (destination.createdBy.toString() !== req.user.userId && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to delete this destination'
      });
    }

    await Destination.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: 'Destination deleted successfully'
    });
  } catch (error) {
    console.error('Delete destination error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error deleting destination'
    });
  }
};

module.exports = {
  getDestinations,
  getDestinationById,
  createDestination,
  updateDestination,
  deleteDestination
};