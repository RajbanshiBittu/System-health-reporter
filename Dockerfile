# Step 1: Use an official Node.js runtime as a base image
FROM node:25

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application files into the container
COPY . .

# Step 6: Set the environment variable for the app port
ENV PORT=5000

# Step 7: Expose the port that the app will listen on
EXPOSE 5000


# Step 8: Define the command to run your app
CMD ["npm", "start"]
