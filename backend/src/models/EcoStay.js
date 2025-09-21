const mongoose = require('mongoose');

const ecoStaySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Eco-stay name is required'],
    trim: true,
    maxLength: [100, 'Name cannot exceed 100 characters']
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
      required: true
    },
    coordinates: {
      latitude: Number,
      longitude: Number
    }
  },
  images: [{
    public_id: String,
    url: String,
    caption: String,
    isPrimary: {
      type: Boolean,
      default: false
    }
  }],
  accommodationType: {
    type: String,
    enum: ['eco-lodge', 'tree-house', 'glamping', 'homestay', 'resort', 'cabin', 'campsite'],
    required: true
  },
  rooms: [{
    type: {
      type: String,
      required: true
    },
    capacity: {
      adults: Number,
      children: Number
    },
    quantity: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    amenities: [String],
    images: [{
      public_id: String,
      url: String
    }]
  }],
  ecoFeatures: {
    sustainabilityRating: {
      type: Number,
      min: 1,
      max: 5,
      required: true
    },
    greenPractices: [{
      type: String,
      enum: ['solar-power', 'rainwater-harvesting', 'waste-recycling', 'organic-farming', 'local-sourcing', 'carbon-neutral', 'wildlife-conservation']
    }],
    certifications: [{
      name: String,
      issuedBy: String,
      validUntil: Date
    }]
  },
  amenities: [{
    type: String,
    enum: ['wifi', 'restaurant', 'pool', 'spa', 'gym', 'library', 'conference-room', 'parking', 'airport-shuttle', 'bicycle-rental', 'hiking-trails']
  }],
  activities: [{
    name: String,
    description: String,
    price: Number,
    duration: String,
    included: {
      type: Boolean,
      default: false
    }
  }],
  policies: {
    checkIn: String,
    checkOut: String,
    cancellation: String,
    petPolicy: String,
    smokingPolicy: String
  },
  pricing: {
    currency: {
      type: String,
      default: 'LKR'
    },
    seasonalRates: [{
      season: String,
      startDate: Date,
      endDate: Date,
      multiplier: {
        type: Number,
        default: 1
      }
    }]
  },
  ratings: {
    average: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 0
    },
    breakdown: {
      cleanliness: Number,
      location: Number,
      service: Number,
      sustainability: Number,
      value: Number
    }
  },
  reviews: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Booking'
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
    title: String,
    comment: String,
    pros: [String],
    cons: [String],
    images: [{
      public_id: String,
      url: String
    }],
    stayDuration: String,
    travelType: {
      type: String,
      enum: ['solo', 'couple', 'family', 'friends', 'business']
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  nearbyDestinations: [{
    destination: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Destination'
    },
    distance: Number, // in kilometers
    transportMode: String
  }],
  owner: {
    name: String,
    contact: {
      email: String,
      phone: String
    },
    isVerified: {
      type: Boolean,
      default: false
    }
  },
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
  }
}, {
  timestamps: true
});

// Create slug from name before saving
ecoStaySchema.pre('save', function(next) {
  if (this.isModified('name')) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-');
  }
  next();
});

// Indexes
ecoStaySchema.index({ slug: 1 });
ecoStaySchema.index({ 'location.province': 1 });
ecoStaySchema.index({ accommodationType: 1 });
ecoStaySchema.index({ 'ratings.average': -1 });
ecoStaySchema.index({ featured: 1 });

module.exports = mongoose.model('EcoStay', ecoStaySchema);