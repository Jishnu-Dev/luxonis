FROM node:18

# Create a working directory
WORKDIR /app

# Install PostgreSQL client
RUN apt-get update && apt-get install -y postgresql-client

# Copy the SQL initialization script
COPY init-db.sql /docker-entrypoint-initdb.d/init-db.sql

# Copy package.json and package-lock.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy your Node.js application files
COPY . .

# Expose the correct port
EXPOSE 3000

# Build your Next.js app
RUN npm run build

# Use Next.js's start script to serve the app
CMD ["npm", "start"]
