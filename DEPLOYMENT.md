# 🚀 **Deployment Guide for NatureGo.lk**

## 🎯 **Overview**
This guide covers deploying both frontend (GitHub Pages) and backend (Railway/Render) for production use.

## 📱 **Frontend Deployment (GitHub Pages)**

### **Current Status**: ✅ **Already Configured & Working**
- **Live URL**: https://sanjeev200009.github.io/NatureGo.lk/
- **Auto-deployment**: Enabled via GitHub Actions

### **Manual Deployment Steps** (if needed):
```bash
# 1. Build for production
npm run build

# 2. Deploy to GitHub Pages (automated via Actions)
git add .
git commit -m "Deploy latest changes"
git push origin main
```

### **GitHub Pages Configuration**:
- **Source**: GitHub Actions
- **Base Path**: `/NatureGo.lk/`
- **Custom Domain**: Available for setup if needed

---

## 🌐 **Backend Deployment Options**

### **Option 1: Railway (Recommended)**
```bash
# 1. Install Railway CLI
npm install -g @railway/cli

# 2. Login to Railway
railway login

# 3. Deploy backend
cd backend
railway init
railway up
```

**Environment Variables** (Set in Railway Dashboard):
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=your-production-mongodb-uri
JWT_SECRET=your-secure-jwt-secret
JWT_EXPIRE=7d
FRONTEND_URL=https://sanjeev200009.github.io
```

### **Option 2: Render**
1. Connect your GitHub repo to Render
2. Create a new Web Service
3. Configure:
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && npm start`
   - **Root Directory**: Leave empty

### **Option 3: Vercel (Functions)**
```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Deploy
vercel --prod

# 3. Set environment variables
vercel env add NODE_ENV production
vercel env add MONGODB_URI your-mongodb-uri
vercel env add JWT_SECRET your-jwt-secret
```

---

## 🗄️ **Database Setup (MongoDB)**

### **MongoDB Atlas (Recommended)**
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/naturego-lk`
4. Add to your deployment environment variables

### **Local MongoDB** (Development only)
```bash
# Windows
# Download and install MongoDB from official site

# macOS
brew install mongodb/brew/mongodb-community

# Linux
sudo apt-get install mongodb
```

---

## ⚙️ **Environment Configuration**

### **Production Frontend (.env)**
```env
VITE_API_URL=https://your-backend-url.railway.app/api
VITE_APP_NAME=NatureGo.lk
```

### **Production Backend (.env)**
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/naturego-lk
JWT_SECRET=super-secure-random-string-min-32-chars
JWT_EXPIRE=7d
FRONTEND_URL=https://sanjeev200009.github.io
```

---

## 🔧 **Build & Deploy Commands**

### **Frontend Build**
```bash
npm run build          # Build for production
npm run preview        # Preview production build locally
```

### **Backend Production**
```bash
cd backend
npm install --production
npm start              # Start in production mode
```

### **Full Stack Deployment**
```bash
# 1. Update API URL in frontend
echo 'VITE_API_URL=https://your-backend-url/api' > .env

# 2. Build frontend
npm run build

# 3. Deploy frontend (GitHub Pages via Actions)
git add .
git commit -m "Production deployment"
git push origin main

# 4. Deploy backend (Railway/Render)
cd backend
railway up  # or your chosen platform
```

---

## 🔒 **Security Checklist**

### **Production Security Requirements**
- [ ] Strong JWT secret (min 32 characters)
- [ ] MongoDB Atlas with authentication
- [ ] HTTPS for all endpoints
- [ ] Rate limiting enabled
- [ ] CORS properly configured
- [ ] Environment variables secured
- [ ] No sensitive data in repository

### **Recommended JWT Secret Generation**
```bash
# Generate secure JWT secret
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

## 📊 **Monitoring & Health Checks**

### **Health Check Endpoints**
- **Backend Health**: `https://your-backend-url/api/health`
- **Database Status**: Included in health check response

### **Testing Deployment**
```bash
# Test backend API
curl https://your-backend-url/api/health

# Test frontend
curl https://sanjeev200009.github.io/NatureGo.lk/
```

---

## 🐛 **Common Deployment Issues**

### **CORS Errors**
```javascript
// backend/src/server.js - Update CORS configuration
const corsOptions = {
  origin: [
    'https://sanjeev200009.github.io',
    'http://localhost:5173'
  ],
  credentials: true
};
```

### **MongoDB Connection Issues**
- Ensure IP whitelist includes `0.0.0.0/0` for cloud deployment
- Check connection string format
- Verify database name matches your application

### **GitHub Pages 404 Errors**
- Ensure `base: '/NatureGo.lk/'` in `vite.config.ts`
- Check `index.html` paths are relative
- Verify GitHub Pages source is set to GitHub Actions

---

## 🚀 **Deployment Automation**

### **GitHub Actions** (Already configured)
- Automatic builds on `main` branch push
- Deployment to GitHub Pages
- Environment-specific configurations

### **Backend Auto-Deploy**
Most platforms (Railway, Render, Vercel) support:
- Automatic deployment on git push
- Environment variable management
- Health monitoring
- SSL certificates

---

## 📈 **Performance Optimization**

### **Frontend**
- Static asset optimization (images, CSS, JS)
- Code splitting and lazy loading
- CDN usage for static assets

### **Backend**
- Database indexing
- Response caching
- Connection pooling
- Rate limiting

---

## 🆘 **Support & Troubleshooting**

### **Logs & Debugging**
```bash
# Railway logs
railway logs

# Render logs
# Available in dashboard

# Vercel logs
vercel logs
```

### **Health Monitoring**
- Set up uptime monitoring (UptimeRobot, Pingdom)
- Configure error tracking (Sentry)
- Monitor database performance

---

## ✅ **Deployment Checklist**

- [ ] Frontend builds successfully (`npm run build`)
- [ ] Backend starts without errors (`npm start`)
- [ ] Database connection works
- [ ] Environment variables set correctly
- [ ] CORS configured for production domain
- [ ] Health checks respond correctly
- [ ] GitHub Pages deployment active
- [ ] Backend deployed and accessible
- [ ] Frontend-backend integration working
- [ ] Security configurations applied

---

🌟 **Your NatureGo.lk platform is now ready for production!** 🇱🇰