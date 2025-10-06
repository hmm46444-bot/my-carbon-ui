# Use official Node.js image as base
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app source code
COPY . .

# Expose the port your app runs on
EXPOSE 5000

# Start the app
CMD ["npm", "start"]
