# Stage 1: Build the application
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install --no-audit
COPY . .
RUN npm run build

# Stage 2: Serve the built application
FROM node:18-alpine

WORKDIR /app
COPY --from=builder /app /app

EXPOSE 3000
CMD ["npm", "run", "dev"]
