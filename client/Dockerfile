# Use an official Node.js runtime as a parent image
FROM node:22.1.0

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that the app runs on
EXPOSE 8080

# Set environment variables
ENV NODE_ENV=development

# Run the application
CMD ["npm", "run", "dev"]