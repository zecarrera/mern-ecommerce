# Use official Node.js 14 as base image
FROM node:22.1.0-slim

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the server code
COPY . .

# Expose port 3000 for the server
EXPOSE 3000

# Default command to start the application
CMD ["sh", "-c", "npm run dev && echo 'Client service has started successfully on http://localhost:8080'"]
