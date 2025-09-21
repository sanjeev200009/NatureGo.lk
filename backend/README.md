# NatureGo.lk Backend API 🌱

Backend API for NatureGo.lk - Sri Lanka's premier eco-tourism platform built with Express.js, Node.js, and MongoDB.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Installation

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` file with your configuration

4. **Start MongoDB**
   ```bash
   # If using local MongoDB
   mongod
   
   # Or use MongoDB Atlas connection string in .env
   ```

5. **Run the server**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode  
   npm start
   ```

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/          # Database and app configuration
│   ├── controllers/     # Request handlers (coming soon)
│   ├── middleware/      # Custom middleware (coming soon)
│   ├── models/         # MongoDB schemas
│   ├── routes/         # API route definitions
│   └── server.js       # Express app setup
├── .env               # Environment variables
├── .env.example       # Environment template
├── package.json       # Dependencies and scripts
└── README.md         # This file
```

## 🛠️ Available Scripts

From the root directory:
```bash
# Install backend dependencies
npm run backend:install

# Run backend in development mode
npm run backend:dev

# Run backend in production mode
npm run backend:start

# Run both frontend and backend
npm run full:dev

# Install both frontend and backend dependencies
npm run full:install
```

## 🌐 API Endpoints

### Health Check
- `GET /api/health` - Server health status

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login  
- `POST /api/auth/logout` - User logout
- `GET /api/auth/profile` - Get user profile
- `POST /api/auth/forgot-password` - Forgot password
- `POST /api/auth/reset-password` - Reset password

### Destinations
- `GET /api/destinations` - Get all destinations
- `GET /api/destinations/:slug` - Get destination by slug
- `POST /api/destinations` - Create destination (admin/guide)
- `PUT /api/destinations/:id` - Update destination
- `DELETE /api/destinations/:id` - Delete destination (admin)
- `POST /api/destinations/:id/reviews` - Add review
- `GET /api/destinations/:id/reviews` - Get reviews
- `GET /api/destinations/search/:query` - Search destinations

### Bookings
- `GET /api/bookings` - Get user bookings
- `GET /api/bookings/:bookingId` - Get booking details
- `POST /api/bookings` - Create new booking
- `PUT /api/bookings/:bookingId` - Update booking
- `POST /api/bookings/:bookingId/cancel` - Cancel booking
- `POST /api/bookings/:bookingId/confirm-payment` - Confirm payment
- `POST /api/bookings/:bookingId/feedback` - Add feedback

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update profile
- `GET /api/users/bookmarks` - Get bookmarks
- `POST /api/users/bookmarks/:destinationId` - Add bookmark
- `DELETE /api/users/bookmarks/:destinationId` - Remove bookmark
- `PUT /api/users/preferences` - Update preferences

### Resources
- `GET /api/resources` - Get all resources
- `GET /api/resources/:id` - Get resource by ID
- `POST /api/resources` - Create resource (admin)
- `PUT /api/resources/:id` - Update resource (admin)
- `DELETE /api/resources/:id` - Delete resource (admin)

## 🗄️ Database Models

### User Model
- User authentication and profile management
- Eco-tourism preferences and settings
- Bookmarks and travel history

### Destination Model
- Sri Lankan eco-destinations with detailed information
- Location data, activities, and sustainability features
- Reviews and ratings system

### Booking Model
- Comprehensive booking management
- Payment integration and status tracking
- Eco-impact calculations

### EcoStay Model
- Sustainable accommodation options
- Eco-certifications and green practices
- Room types and amenities

## 🔒 Security Features

- **Helmet.js** - Security headers
- **Rate Limiting** - API request throttling
- **CORS** - Cross-origin resource sharing
- **JWT Authentication** - Secure user sessions
- **Input Validation** - Data sanitization
- **Password Hashing** - bcrypt encryption

## 🌱 Environment Variables

Key environment variables (see `.env.example`):

- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port (default: 5000)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - JWT signing secret
- `FRONTEND_URL` - Frontend application URL

## 📊 Development Status

### ✅ Completed
- [x] Project structure setup
- [x] Express server configuration
- [x] MongoDB connection setup
- [x] Database models (User, Destination, Booking, EcoStay)
- [x] Basic API route structure
- [x] Security middleware setup
- [x] Environment configuration

### 🚧 In Progress
- [ ] Authentication controllers
- [ ] CRUD operations for destinations
- [ ] Booking management system
- [ ] File upload handling
- [ ] Payment integration
- [ ] Email notifications

### 📋 Planned Features
- [ ] Advanced search and filtering
- [ ] Real-time notifications
- [ ] Analytics and reporting
- [ ] Multi-language support
- [ ] Mobile app API endpoints
- [ ] Third-party integrations

## 🤝 Contributing

1. Follow the existing code structure
2. Add proper error handling
3. Include input validation
4. Write meaningful commit messages
5. Test your changes locally

## 📝 Notes

- This backend is designed specifically for Sri Lankan eco-tourism
- All models include sustainability and eco-impact tracking
- Built with scalability and performance in mind
- Follows RESTful API design principles

---

🌍 **Building sustainable tourism for Sri Lanka!** 🇱🇰