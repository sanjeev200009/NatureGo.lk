# 🌿 NatureGo.lk - Sri Lanka's Premier Eco-Tourism Platform

A comprehensive eco-tourism platform showcasing Sri Lanka's natural beauty while promoting sustainable travel practices.

## 📁 Project Structure

```
NatureGo.lk/
├── frontend/          # React + TypeScript frontend
│   ├── src/          # Source code
│   ├── public/       # Static assets
│   ├── package.json  # Frontend dependencies
│   └── ...
├── backend/          # Node.js + Express backend
│   ├── src/         # Source code
│   ├── package.json # Backend dependencies
│   └── .env         # Environment variables
├── package.json     # Root workspace configuration
├── .gitignore      # Git ignore rules
└── README.md       # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm 8+
- MongoDB (local or cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sanjeev200009/NatureGo.lk.git
   cd NatureGo.lk
   ```

2. **Install all dependencies**
   ```bash
   npm run setup
   ```

3. **Configure environment variables**
   ```bash
   # Copy backend environment template
   cp backend/.env.example backend/.env
   # Edit backend/.env with your configuration
   ```

4. **Start development servers**
   ```bash
   npm run dev
   ```

This will start:
- 🎨 Frontend: http://localhost:5173 (or next available port)
- 🔧 Backend: http://localhost:5000

## 📜 Available Scripts

### Root Level Scripts
- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build both frontend and backend
- `npm run start` - Start both in production mode
- `npm run setup` - Install all dependencies
- `npm run clean` - Clean all node_modules and build files

### Frontend Scripts
- `npm run frontend:dev` - Start frontend development server
- `npm run frontend:build` - Build frontend for production
- `npm run frontend:install` - Install frontend dependencies

### Backend Scripts
- `npm run backend:dev` - Start backend development server
- `npm run backend:start` - Start backend in production mode
- `npm run backend:install` - Install backend dependencies

## 🛠️ Technology Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Radix UI** - Component library
- **React Router** - Navigation
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Cloudinary** - Image management

## 🌍 Environment Variables

### Backend (.env)
```bash
# Database
MONGODB_URI=mongodb://localhost:27017/naturego-lk

# Authentication
JWT_SECRET=your-secret-key
JWT_EXPIRE=7d

# External Services
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Email (optional)
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## 🔧 Development

### Frontend Development
```bash
cd frontend
npm run dev
```

### Backend Development
```bash
cd backend
npm run dev
```

### Full Stack Development
```bash
# From root directory
npm run dev
```

## 📦 Deployment

### Frontend (Netlify/Vercel)
```bash
npm run frontend:build
# Deploy dist/ folder
```

### Backend (Railway/Render/Heroku)
```bash
npm run backend:build
# Deploy with start command: npm run backend:start
```

## 🧪 Testing

```bash
# Run backend tests
npm run test

# Run frontend linting
npm run lint
```

## 📖 Features

- 🏞️ **Destination Discovery** - Explore eco-friendly destinations
- 🏨 **Eco-Stay Bookings** - Book sustainable accommodations
- 👤 **User Authentication** - Secure login and registration
- 📱 **Responsive Design** - Mobile-first approach
- 🔍 **Advanced Search** - Filter by location, activities, budget
- 💚 **Sustainability Focus** - Eco-impact tracking
- 📧 **Newsletter** - Stay updated with eco-tourism news

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sanjeev**
- GitHub: [@sanjeev200009](https://github.com/sanjeev200009)

## 🙏 Acknowledgments

- Sri Lanka Tourism Board
- Local eco-tourism operators
- Environmental conservation organizations
- Open source community

---

**Made with 💚 for sustainable tourism in Sri Lanka**