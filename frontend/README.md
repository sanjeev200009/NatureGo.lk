# 🌱 NatureGo.lk - Sri Lanka's Premier Eco-Tourism Platform

> Discover sustainable travel experiences across Sri Lanka with our full-stack eco-tourism platform.

[![React](https://img.shields.io/badge/React-18.0-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Latest-green.svg)](https://mongodb.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)

## 🌍 **Live Demo**

- **Frontend**: [https://sanjeev200009.github.io/NatureGo.lk/](https://sanjeev200009.github.io/NatureGo.lk/)
- **API Documentation**: Available in development mode

## ✨ **Features**

### 🔐 **Authentication System**
- User registration and login with JWT tokens
- Secure password hashing with bcrypt
- Persistent session management
- Profile management with eco-tourism preferences

### 🏞️ **Destinations Management**
- Browse Sri Lankan eco-destinations by province
- Detailed destination information with sustainability ratings
- Filter by categories (wildlife, nature, cultural, adventure)
- User bookmarks and favorites

### 📱 **Modern UI/UX**
- Responsive design with Tailwind CSS  
- Dark/light theme support
- Interactive maps and image galleries
- Mobile-first responsive design

### 🚀 **Technical Excellence**
- Full TypeScript support
- RESTful API with Express.js
- MongoDB with Mongoose ODM
- Modern React with hooks and context
- Production-ready deployment configuration

## 🏗️ **Project Structure**

```
eco-trail-explorer-lk/
├── 🎯 Frontend (React + Vite + TypeScript)
│   ├── src/components/     # Reusable UI components
│   ├── src/pages/         # Page components  
│   ├── src/services/      # API integration layer
│   ├── src/contexts/      # React contexts (Auth, etc.)
│   └── src/hooks/         # Custom React hooks
│
├── 🚀 Backend (Express.js + MongoDB)
│   ├── src/controllers/   # Business logic
│   ├── src/models/       # Database schemas
│   ├── src/routes/       # API endpoints
│   ├── src/middleware/   # Authentication & security
│   └── src/config/       # Database configuration
│
└── 📄 Documentation & Configuration
    ├── docs/            # Project documentation
    ├── .github/         # GitHub Actions workflows
    └── deployment configs
```

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js 18+ and npm
- MongoDB (local or cloud)
- Git

### **Installation**

1. **Clone the repository**
```bash
git clone https://github.com/sanjeev200009/NatureGo.lk.git
cd eco-trail-explorer-lk
```

2. **Install dependencies**
```bash
npm run setup
```

3. **Configure environment variables**
```bash
# Copy environment templates
cp backend/.env.example backend/.env
cp .env.example .env

# Edit backend/.env with your MongoDB URI and secrets
# Edit .env with your API URL
```

4. **Start development servers**
```bash
npm run full:dev
```

This starts:
- Frontend: http://localhost:5173/NatureGo.lk/
- Backend API: http://localhost:5000/api/

## 🛠️ **Available Scripts**

### **Development**
```bash
npm run full:dev        # Run frontend + backend together
npm run dev            # Frontend only (Vite)  
npm run backend:dev    # Backend only (Express + nodemon)
```

### **Installation**
```bash
npm run setup          # Install all dependencies
npm run full:install   # Install frontend + backend deps
npm run backend:install # Install backend dependencies only
```

### **Production**
```bash
npm run build          # Build frontend for production
npm run preview        # Preview production build
npm run backend:start  # Start backend in production mode
```

## 🔧 **Environment Variables**

### **Frontend (.env)**
```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=NatureGo.lk
```

### **Backend (backend/.env)**
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/naturego-lk
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:5173
```

## 📡 **API Endpoints**

### **Authentication**
```
POST   /api/auth/register    # User registration
POST   /api/auth/login       # User login
GET    /api/auth/profile     # Get user profile (protected)
POST   /api/auth/logout      # User logout
```

### **Destinations**
```
GET    /api/destinations     # Get all destinations (with filters)
GET    /api/destinations/:id # Get single destination
POST   /api/destinations     # Create destination (protected)
PUT    /api/destinations/:id # Update destination (protected)
DELETE /api/destinations/:id # Delete destination (protected)
```

### **Health Check**
```
GET    /api/health          # Server health status
```

## 🗄️ **Database Models**

### **User Model**
- Authentication credentials
- Eco-tourism preferences (budget, activities)
- Bookmarks and travel history
- Profile information

### **Destination Model**
- Sri Lankan provinces and districts
- Sustainability ratings (1-10)
- Activities and facilities
- Location coordinates
- Entry fees and best visiting times

### **Booking Model** (Future Enhancement)
- Comprehensive booking system
- Payment integration ready
- Eco-impact calculations

## 🚀 **Deployment**

### **Vercel (Frontend) + Railway (Backend)**
```bash
# Deploy frontend to Vercel
vercel --prod

# Deploy backend to Railway
railway login
railway init
railway deploy
```

### **Environment Setup for Production**
1. Update `VITE_API_URL` to production backend URL
2. Set production MongoDB URI (MongoDB Atlas recommended)
3. Configure CORS for production domains
4. Set secure JWT secrets

## 🔒 **Security Features**

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt with configurable rounds
- **Rate Limiting**: API request throttling (100 req/15min)
- **CORS Protection**: Configured for allowed origins
- **Input Validation**: Comprehensive data validation
- **Environment Security**: All secrets in environment variables

## 🧪 **Testing**

```bash
# API Testing with the built-in tools
npm run backend:dev    # Start backend
# Use Postman or curl to test endpoints

# Frontend testing
npm run dev           # Start frontend  
# Test user registration, login, and navigation
```

## 📚 **Documentation**

- **Backend API**: See `/backend/README.md` for detailed API documentation
- **Frontend Components**: TypeScript interfaces provide inline documentation
- **Database Schema**: Check model files in `/backend/src/models/`

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 **Support**

- **Issues**: [GitHub Issues](https://github.com/sanjeev200009/NatureGo.lk/issues)
- **Documentation**: Check `/docs` folder for detailed guides
- **API Health**: Visit `/api/health` for backend status

## 🌟 **Acknowledgments**

- Built for Sri Lanka's eco-tourism industry
- Inspired by sustainable travel practices
- Designed for modern web development standards

---

🌍 **Building sustainable tourism for Sri Lanka, one destination at a time!** 🇱🇰