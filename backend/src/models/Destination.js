const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Destination name is required'],
    trim: true,
    maxLength: [100, 'Destination name cannot exceed 100 characters']
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    maxLength: [2000, 'Description cannot exceed 2000 characters']
  },
  shortDescription: {
    type: String,
    required: true,
    maxLength: [200, 'Short description cannot exceed 200 characters']
  },
  location: {
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    district: {
      type: String,
      required: true
    },
    province: {
      type: String,
      required: true,
      enum: ['Western', 'Central', 'Southern', 'Northern', 'Eastern', 'North Western', 'North Central', 'Uva', 'Sabaragamuwa']
    },
    coordinates: {
      latitude: {
        type: Number,
        required: true
      },
      longitude: {
        type: Number,
        required: true
      }
    }
  },
  images: [{
    public_id: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    caption: String,
    isPrimary: {
      type: Boolean,
      default: false
    }
  }],
  category: {
    type: String,
    required: true,
    enum: ['national-park', 'wildlife-sanctuary', 'beach', 'mountain', 'waterfall', 'cultural-site', 'eco-lodge', 'forest-reserve', 'marine-park']
  },
  activities: [{
    type: String,
    enum: ['hiking', 'wildlife-watching', 'bird-watching', 'photography', 'camping', 'cultural-tours', 'adventure-sports', 'meditation', 'research']
  }],
  ecoFeatures: {
    sustainabilityRating: {
      type: Number,
      min: 1,
      max: 5,
      default: 3
    },
    conservation: [{
      type: String,
      enum: ['wildlife-protection', 'reforestation', 'community-based', 'renewable-energy', 'waste-management', 'water-conservation']
    }],
    certifications: [{
      name: String,
      issuedBy: String,
      year: Number
    }]
  },
  pricing: {
    entryFee: {
      local: {
        adult: Number,
        child: Number
      },
      foreign: {
        adult: Number,
        child: Number
      }
    },
    currency: {
      type: String,
      default: 'LKR'
    }
  },
  timing: {
    bestTimeToVisit: [{
      month: {
        type: String,
        enum: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      }
    }],
    operatingHours: {
      open: String,
      close: String
    },
    seasonality: {
      type: String,
      enum: ['year-round', 'seasonal', 'monsoon-dependent']
    }
  },
  facilities: [{
    type: String,
    enum: ['parking', 'restrooms', 'restaurant', 'gift-shop', 'guided-tours', 'accommodation', 'camping', 'first-aid', 'wifi', 'accessibility']
  }],
  difficulty: {
    type: String,
    enum: ['easy', 'moderate', 'difficult', 'expert'],
    default: 'easy'
  },
  duration: {
    recommended: String, // e.g., "2-3 hours", "Full day", "2 days"
    minimum: String
  },
  ratings: {
    average: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 0
    }
  },
  reviews: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
    title: String,
    comment: String,
    images: [{
      public_id: String,
      url: String
    }],
    createdAt: {
      type: Date,
      default: Date.now
    },
    helpful: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }]
  }],
  nearbyDestinations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Destination'
  }],
  accommodations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'EcoStay'
  }],
  isActive: {
    type: Boolean,
    default: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  views: {
    type: Number,
    default: 0
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

// Indexes for better performance
destinationSchema.index({ slug: 1 });
destinationSchema.index({ 'location.province': 1 });
destinationSchema.index({ category: 1 });
destinationSchema.index({ featured: 1 });
destinationSchema.index({ 'ratings.average': -1 });
destinationSchema.index({ 'location.coordinates.latitude': 1, 'location.coordinates.longitude': 1 });

// Create slug from name before saving
destinationSchema.pre('save', function(next) {
  if (this.isModified('name')) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
      .trim('-'); // Remove leading/trailing hyphens
  }
  next();
});

module.exports = mongoose.model('Destination', destinationSchema);