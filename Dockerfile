# Use an official Node.js runtime as the base image
FROM cypress/base:18.16.0

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Install Cypress and its dependencies
RUN npm install

# Copy the entire e2e folder into the container
COPY e2e ./e2e

# Set the CI environment variable to prevent interactive mode in Cypress
ENV CI=true

# Run Cypress tests
CMD ["npm", "run", "cypress"]