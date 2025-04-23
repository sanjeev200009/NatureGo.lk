FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --no-audit

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "dev"]