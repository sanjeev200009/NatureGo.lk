# 📁 **NatureGo.lk Project Structure**

```
eco-trail-explorer-lk/                 # 🏠 Root Directory
├── 🎯 FRONTEND (React + TypeScript + Vite)
│   ├── src/                           # 📦 Source Code
│   │   ├── components/                # 🧩 Reusable UI Components
│   │   │   ├── ui/                   # 🎨 Base UI Components (shadcn/ui)
│   │   │   │   ├── button.tsx        # Button component
│   │   │   │   ├── card.tsx          # Card component
│   │   │   │   ├── input.tsx         # Input component
│   │   │   │   └── ...               # Other UI components
│   │   │   ├── BlogPreview.tsx       # Blog preview component
│   │   │   ├── DestinationCard.tsx   # Destination display card
│   │   │   ├── EcoImpactBadge.tsx    # Sustainability indicators
│   │   │   ├── FilterBar.tsx         # Filter functionality
│   │   │   ├── Footer.tsx            # Site footer
│   │   │   ├── Hero.tsx              # Landing hero section
│   │   │   ├── HeroCarousel.tsx      # Image carousel
│   │   │   ├── Navbar.tsx            # Navigation bar
│   │   │   ├── PopularDestinations.tsx # Featured destinations
│   │   │   └── SearchDestination.tsx # Search functionality
│   │   │
│   │   ├── pages/                    # 📄 Page Components
│   │   │   ├── Home.tsx              # Landing page
│   │   │   ├── About.tsx             # About page
│   │   │   ├── Blog.tsx              # Blog listing
│   │   │   ├── BlogPost.tsx          # Individual blog post
│   │   │   ├── Contact.tsx           # Contact page
│   │   │   ├── Dashboard.tsx         # User dashboard
│   │   │   ├── Destinations.tsx      # Destinations listing
│   │   │   ├── DestinationDetail.tsx # Single destination
│   │   │   ├── Login.tsx             # User login
│   │   │   ├── Register.tsx          # User registration
│   │   │   ├── Resources.tsx         # Resources page
│   │   │   └── NotFound.tsx          # 404 error page
│   │   │
│   │   ├── services/                 # 🌐 API Integration
│   │   │   └── api.ts                # API client & endpoints
│   │   │
│   │   ├── contexts/                 # 🔄 React Contexts
│   │   │   └── AuthContext.tsx       # Authentication state
│   │   │
│   │   ├── hooks/                    # 🪝 Custom React Hooks
│   │   │   ├── use-mobile.tsx        # Mobile detection
│   │   │   └── use-toast.ts          # Toast notifications
│   │   │
│   │   ├── data/                     # 📊 Static Data
│   │   │   ├── destinations.ts       # Destination data
│   │   │   ├── ecoStays.ts           # Accommodation data
│   │   │   └── resourcesData.ts      # Resources data
│   │   │
│   │   ├── types/                    # 📝 TypeScript Definitions
│   │   │   └── index.ts              # Type definitions
│   │   │
│   │   ├── lib/                      # 🛠️ Utilities
│   │   │   └── utils.ts              # Helper functions
│   │   │
│   │   ├── App.tsx                   # 🎯 Main App Component
│   │   ├── main.tsx                  # 🚀 App Entry Point
│   │   ├── index.css                 # 🎨 Global Styles
│   │   └── App.css                   # 🎨 App-specific Styles
│   │
│   ├── public/                       # 📁 Static Assets
│   │   ├── favicon.ico               # Site icon
│   │   ├── placeholder.svg           # Placeholder image
│   │   └── robots.txt                # SEO configuration
│   │
│   ├── dist/                         # 📦 Production Build (auto-generated)
│   ├── node_modules/                 # 📦 Dependencies (auto-generated)
│   │
│   ├── index.html                    # 📄 HTML Template
│   ├── package.json                  # 📋 Dependencies & Scripts
│   ├── vite.config.ts                # ⚙️ Vite Configuration
│   ├── tailwind.config.ts            # 🎨 Tailwind CSS Config
│   ├── tsconfig.json                 # 📝 TypeScript Config
│   ├── postcss.config.js             # 🎨 PostCSS Config
│   ├── components.json               # 🧩 shadcn/ui Config
│   └── .env                          # 🔐 Environment Variables (frontend)
│
├── 🚀 BACKEND (Express.js + Node.js + MongoDB)
│   └── backend/                      # Backend root directory
│       ├── src/                      # 📦 Source Code
│       │   ├── controllers/          # 🎮 Business Logic Controllers
│       │   │   ├── authController.js # Authentication logic
│       │   │   └── destinationController.js # Destination logic
│       │   │
│       │   ├── models/               # 🗄️ Database Models (Mongoose)
│       │   │   ├── User.js           # User schema & model
│       │   │   ├── Destination.js    # Destination schema
│       │   │   ├── Booking.js        # Booking schema
│       │   │   └── EcoStay.js        # Accommodation schema
│       │   │
│       │   ├── routes/               # 🛣️ API Routes
│       │   │   ├── auth.js           # Authentication endpoints
│       │   │   ├── destinations.js   # Destination endpoints
│       │   │   ├── bookings.js       # Booking endpoints
│       │   │   ├── users.js          # User management
│       │   │   └── resources.js      # Resources endpoints
│       │   │
│       │   ├── middleware/           # 🔒 Middleware Functions
│       │   │   ├── auth.js           # JWT authentication
│       │   │   └── validation.js     # Input validation
│       │   │
│       │   ├── config/               # ⚙️ Configuration
│       │   │   └── database.js       # MongoDB connection
│       │   │
│       │   └── server.js             # 🚀 Express Server Entry Point
│       │
│       ├── node_modules/             # 📦 Dependencies (auto-generated)
│       ├── package.json              # 📋 Backend Dependencies
│       ├── .env                      # 🔐 Environment Variables (backend)
│       ├── .env.example              # 📄 Environment Template
│       └── README.md                 # 📚 Backend Documentation
│
├── 📚 DOCUMENTATION
│   ├── docs/                         # 📖 Project Documentation
│   │   ├── adr/                      # Architecture Decision Records
│   │   ├── explanation/              # Concept explanations
│   │   ├── how-to/                   # How-to guides
│   │   ├── playbooks/                # Operational playbooks
│   │   ├── reference/                # API reference
│   │   └── tutorials/                # Step-by-step tutorials
│   │
│   ├── README.md                     # 📄 Main Project Documentation
│   └── DEPLOYMENT.md                 # 🚀 Deployment Instructions
│
├── 🔧 GITHUB & CI/CD
│   ├── .github/                      # GitHub configuration
│   │   ├── workflows/                # GitHub Actions
│   │   │   └── gh-pages.yml          # Auto-deployment workflow
│   │   ├── ISSUE_TEMPLATE/           # Issue templates
│   │   ├── pull_request_template/    # PR templates
│   │   ├── CONTRIBUTING.md           # Contributing guide
│   │   └── README.md                 # GitHub profile readme
│   │
│   └── .git/                         # Git repository (auto-generated)
│
├── ⚙️ CONFIGURATION FILES
│   ├── .gitignore                    # Git ignore rules
│   ├── .eslintrc.cjs                 # ESLint configuration
│   ├── commitlint.config.js          # Commit message linting
│   ├── vercel.json                   # Vercel deployment config
│   └── Dockerfile                    # Docker containerization
│
└── 📄 ROOT FILES
    ├── package.json                  # Main project configuration
    ├── package-lock.json             # Dependency lock file
    └── tsconfig.*.json               # TypeScript configurations
```

## 🎯 **Key Features of This Structure**

### ✅ **Clean Separation**
- **Frontend**: Modern React with TypeScript in `/src`
- **Backend**: Express.js API in `/backend/src`
- **Documentation**: Comprehensive guides in `/docs`

### ✅ **Scalable Architecture**
- **MVC Pattern**: Controllers, Models, Routes separated
- **Component Organization**: UI components, pages, services
- **Type Safety**: Full TypeScript support

### ✅ **Production Ready**
- **Environment Configuration**: Separate `.env` files
- **Build Pipeline**: Automated GitHub Actions
- **Security**: JWT auth, input validation, CORS

### ✅ **Developer Experience**
- **Hot Reload**: Both frontend and backend
- **Code Quality**: ESLint, Prettier, TypeScript
- **Documentation**: Comprehensive guides and API docs

## 🚀 **Quick Navigation**

| Component | Location | Purpose |
|-----------|----------|---------|
| **Main App** | `/src/App.tsx` | Root React component |
| **API Client** | `/src/services/api.ts` | Frontend-backend communication |
| **Authentication** | `/src/contexts/AuthContext.tsx` | User auth state management |
| **Backend Server** | `/backend/src/server.js` | Express.js API server |
| **Database Models** | `/backend/src/models/` | MongoDB schemas |
| **Deployment Config** | `/.github/workflows/` | GitHub Actions CI/CD |
| **Documentation** | `/docs/` & `/README.md` | Project guides |

## 🔧 **Development Commands**

```bash
# Full-stack development
npm run full:dev        # Start both frontend and backend
npm run setup           # Install all dependencies

# Frontend only
npm run dev             # Start Vite dev server
npm run build           # Build for production

# Backend only  
npm run backend:dev     # Start Express with nodemon
npm run backend:start   # Start in production mode
```

---

🌟 **This structure supports scalable, maintainable, and production-ready development!** 🚀