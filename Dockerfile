# Use an official node runtime as a parent image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use an official nginx image to serve the application
FROM nginx:1.19.0-alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Expose the port the application runs on
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]

