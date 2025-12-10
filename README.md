# System Health Reporter

## Project Description
System Health Reporter is a Node.js application that monitors and reports system health metrics such as CPU, memory, and disk usage. The application is built using Express and SystemInformation packages and can be run locally or in a Docker container.

## Prerequisites / Dependencies
- Node.js v20 or higher
- npm (comes with Node.js)
- Docker (for containerized deployment)

## Local Run Instructions
1. Open a terminal and navigate to your project folder.
cd System_health_reporter
2. Install dependencies:
npm install express systeminformation dotenv etc.
3. Start the application:
npm run dev
4. Open your browser and go to:
http://localhost:5000

## Docker run instructions
1. Build the Docker image
docker build -t system-health-reporter:1.0 .
2. Run the Docker container:
docker run -p 5000:5000 system-health-reporter:1.0
3. Access the app at:
http://localhost:5000

## Dependencies
express - Web framework for creating the HTTP server and endpoints
dotenv - Load environment variables from a .env file
systeminformation - Collects system metrics (CPU, memory, disk)
fs - Node.js built-in module for file system operations
os - Node.js built-in module to get OS-level info
nodemon - Development tool that auto-reloads the server on file changes