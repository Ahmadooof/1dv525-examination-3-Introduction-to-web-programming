# Use an official Node.js runtime as the base image
FROM node:14-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the application
RUN npm run build

# Use Nginx for serving the built application
FROM nginx:alpine

# Copy the built application from the previous stage
COPY --from=build /dist /usr/share/nginx/html

# Copy the Nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d
# Expose the port that the application will run on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]