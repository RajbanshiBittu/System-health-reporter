# System Health Reporter

## Project Description
System Health Reporter is a Node.js application that monitors and reports system health metrics such as CPU, memory, and disk usage. The application exposes a small REST API (/api/v1/system-health) and serves a lightweight frontend (HTML + CSS + JS) that fetches and displays the metrics. The app can be run locally for development or packaged in Docker for portability.

## Prerequisites
1. Node.js v20 (recommended) or higher
2. npm (comes with Node.js)
3. Docker (optional — for containerized deployment)

## Dependencies
1. express - Web framework for creating the HTTP server and endpoints
2. dotenv - Load environment variables from a .env file
3. systeminformation - Collects system metrics (CPU, memory, disk)
4. fs - Node.js built-in module for file system operations
5. os - Node.js built-in module to get OS-level info
6. nodemon - Development tool that auto-reloads the server on file changes
7. cors - Cross-Origin Resource Sharing is a security rule in browsers that controls which websites are       allowed to request data from a server.
8. querystring - A Node.js built-in module for parsing and formatting URL query parameters.

## Local Run Instructions
1. Clone the repo from github
    Open terminal & run " git clone https://github.com/RajbanshiBittu/System-health-reporter.git"
2. Then enter the project folder
    cd System_health_reporter
3. Install all the dependencies
    npm install node express systeminformation fs os cors querystring dotenv nodemon 
4. Create a .env file if it is not already exists in the repo
    PORT = 5000
5. Start your application
    npm run dev / npm start
6. Open the application in browser
    http://localhost:5000


## Docker run instructions
1. Build the Docker image
    docker build -t system-health-reporter:1.0 .
2. Run the Docker container:
    docker run -p 5000:5000 system-health-reporter:1.0
3. Access the app at:
    http://localhost:5000