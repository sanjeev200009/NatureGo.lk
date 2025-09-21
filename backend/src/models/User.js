const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxLength: [50, 'Name cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minLength: [6, 'Password must be at least 6 characters'],
    select: false // Don't include password in queries by default
  },
  avatar: {
    public_id: String,
    url: String
  },
  role: {
    type: String,
    enum: ['user', 'guide', 'admin'],
    default: 'user'
  },
  phone: {
    type: String,
    trim: true
  },
  preferences: {
    ecoFriendly: {
      type: Boolean,
      default: true
    },
    activities: [{
      type: String,
      enum: ['hiking', 'wildlife', 'birdwatching', 'photography', 'cultural', 'adventure', 'wellness']
    }],
    budget: {
      type: String,
      enum: ['budget', 'mid-range', 'luxury'],
      default: 'mid-range'
    }
  },
  bookmarks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Destination'
  }],
  isActive: {
    type: Boolean,
    default: true
  },
  emailVerified: {
    type: Boolean,
    default: false
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  verificationToken: String,
  verificationTokenExpire: Date
}, {
  timestamps: true
});

// Index for better performance
userSchema.index({ email: 1 });
userSchema.index({ role: 1 });

module.exports = mongoose.model('User', userSchema);