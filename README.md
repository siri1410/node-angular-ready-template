# Full-Stack Web Application

This project is a full-stack web application built with an Angular frontend and a Node.js backend. It demonstrates how to create a simple data fetching and display system with proper error handling and CORS configuration.

## Purpose

The main purpose of this application is to:

1. Showcase a full-stack architecture using Angular and Node.js.
2. Demonstrate how to fetch data from a REST API and display it in a tabular format.
3. Implement proper error handling and CORS configuration.
4. Provide a starting point for developers to build more complex applications.


   

## Project Structure

my-fullstack-app/
├── frontend/
│ ├── src/
│ │ ├── app/
│ │ │ ├── components/
│ │ │ │ └── data-table/
│ │ │ │ ├── data-table.component.ts
│ │ │ │ ├── data-table.component.html
│ │ │ │ ��── data-table.component.scss
│ │ │ ├── services/
│ │ │ │ └── data.service.ts
│ │ │ ├── app.component.ts
│ │ │ ├── app.component.html
│ │ │ ├── app.component.scss
│ │ │ └── app.module.ts
│ │ ├── environments/
│ │ │ ├── environment.ts
│ │ │ └── environment.prod.ts
│ │ ├── index.html
│ │ └── main.ts
│ ├── angular.json
│ ├── package.json
│ └── tsconfig.json
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ │ └── dataController.js
│ │ ├── routes/
│ │ │ └── dataRoutes.js
│ │ ├── services/
│ │ │ └── dataService.js
│ │ └── app.js
│ ├── package.json
│ └── .env
├── .gitignore
└── README.md
Apply

]
This project structure provides a clear overview of both the frontend and backend components of your application. It shows:
The frontend Angular application structure, including components, services, and configuration files.
The backend Node.js application structure, with controllers, routes, and services.
Important configuration files like package.json, .env, and angular.json.
This structure should help developers understand the organization of your project and easily locate specific files or components. You can add this updated section to your README.md file to provide a more comprehensive guide to your project's structure.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- Angular CLI (v12 or later)

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the backend directory and add the following:
   ```
   PORT=3000
   ```

4. Start the development server:
   ```
   npm run dev
   ```

The backend server will start running on `http://localhost:3000`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   ng serve
   ```

The frontend application will start running on `http://localhost:4200`.

## Running the Application

1. Ensure both the backend and frontend servers are running.
2. Open your web browser and navigate to `http://localhost:4200`.
3. You should see a table displaying data fetched from the backend API.

## API Endpoints

- `GET /api/data`: Fetches sample data from an external API.

## Deployment

### Backend Deployment

1. Create a Procfile in the backend directory:
   ```
   web: node src/app.js
   ```

2. Deploy to Heroku: (Optional)
   ```
   heroku create
   git subtree push --prefix backend heroku main
   ```

### Frontend Deployment

1. Build the Angular app:
   ```
   ng build --prod
   ```

2. Deploy the contents of the `dist/frontend` directory to a static hosting service like Netlify, Firebase Hosting, or GitHub Pages.

3. Update the `environment.prod.ts` file with the URL of your deployed backend API.


```For Proxy - Change dataService.js

const axios = require('axios');
const { HttpsProxyAgent } = require('https-proxy-agent');

class DataService {
  constructor() {
    // Proxy configuration
    this.proxyConfig = {
      protocol: 'http',
      host: 'your.org.com',
      port: 8000
    };

    // Create a proxy agent
    this.httpsAgent = new HttpsProxyAgent(`${this.proxyConfig.protocol}://${this.proxyConfig.host}:${this.proxyConfig.port}`);

    // Create an Axios instance with the custom configuration
    this.axiosInstance = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com/posts', // Replace with your API base URL
      httpsAgent: this.httpsAgent,
      proxy: false, // This is important to prevent axios from using the proxy directly
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'User-Agent': 'axios/0.21.4'
      }
    });
  }

  async fetchData(endpoint) {
    try {
      const response = await this.axiosInstance.get(endpoint);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Re-throw the error for the caller to handle
    }
  }
}

module.exports = new DataService();

```
## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your fork.
5. Create a pull request to the main repository.

## License

This project is licensed under the MIT License.
