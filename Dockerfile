FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Expose the correct port
EXPOSE 3000

RUN npm run build

# Use Next.js's start script to serve the app
CMD ["npm", "start"]
