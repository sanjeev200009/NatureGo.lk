const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  bookingId: {
    type: String,
    unique: true,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  destination: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Destination'
  },
  accommodation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'EcoStay'
  },
  bookingType: {
    type: String,
    enum: ['destination-visit', 'accommodation', 'tour-package'],
    required: true
  },
  guestDetails: {
    adults: {
      type: Number,
      required: true,
      min: 1
    },
    children: {
      type: Number,
      default: 0,
      min: 0
    },
    infants: {
      type: Number,
      default: 0,
      min: 0
    }
  },
  contactInfo: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    emergencyContact: {
      name: String,
      phone: String
    }
  },
  dates: {
    checkIn: {
      type: Date,
      required: true
    },
    checkOut: {
      type: Date,
      required: true
    },
    visitDate: Date // For single-day visits
  },
  services: [{
    name: String,
    description: String,
    price: Number,
    quantity: {
      type: Number,
      default: 1
    }
  }],
  specialRequests: {
    dietary: String,
    accessibility: String,
    other: String
  },
  pricing: {
    basePrice: {
      type: Number,
      required: true
    },
    taxes: {
      type: Number,
      default: 0
    },
    serviceFee: {
      type: Number,
      default: 0
    },
    discount: {
      amount: {
        type: Number,
        default: 0
      },
      couponCode: String,
      reason: String
    },
    totalAmount: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      default: 'LKR'
    }
  },
  payment: {
    status: {
      type: String,
      enum: ['pending', 'paid', 'partially-paid', 'refunded', 'failed'],
      default: 'pending'
    },
    method: {
      type: String,
      enum: ['credit-card', 'bank-transfer', 'mobile-payment', 'cash']
    },
    transactionId: String,
    paidAmount: {
      type: Number,
      default: 0
    },
    paymentDate: Date,
    stripePaymentIntentId: String
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'checked-in', 'checked-out', 'cancelled', 'completed'],
    default: 'pending'
  },
  cancellation: {
    isCancelled: {
      type: Boolean,
      default: false
    },
    reason: String,
    cancelledBy: {
      type: String,
      enum: ['user', 'admin', 'system']
    },
    cancelledAt: Date,
    refundAmount: Number,
    refundStatus: {
      type: String,
      enum: ['pending', 'processed', 'declined']
    }
  },
  ecoImpact: {
    carbonOffset: Number, // in kg CO2
    treesPlanted: {
      type: Number,
      default: 0
    },
    communityContribution: Number, // amount contributed to local community
    sustainabilityScore: {
      type: Number,
      min: 0,
      max: 100
    }
  },
  feedback: {
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    review: String,
    experienceHighlights: [String],
    improvementSuggestions: String,
    wouldRecommend: Boolean,
    submittedAt: Date
  },
  notifications: {
    confirmationSent: {
      type: Boolean,
      default: false
    },
    reminderSent: {
      type: Boolean,
      default: false
    },
    feedbackRequested: {
      type: Boolean,
      default: false
    }
  }
}, {
  timestamps: true
});

// Generate unique booking ID before saving
bookingSchema.pre('save', function(next) {
  if (!this.bookingId) {
    const timestamp = Date.now().toString(36);
    const randomStr = Math.random().toString(36).substring(2, 8);
    this.bookingId = `NG-${timestamp}-${randomStr}`.toUpperCase();
  }
  next();
});

// Indexes for better performance
bookingSchema.index({ bookingId: 1 });
bookingSchema.index({ user: 1 });
bookingSchema.index({ status: 1 });
bookingSchema.index({ 'dates.checkIn': 1 });
bookingSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Booking', bookingSchema);