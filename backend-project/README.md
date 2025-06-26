# Backend Project

## Overview
This backend powers the Music School Platform, providing RESTful APIs for contact form submissions, user data persistence, and secure integration with the frontend. Built with Node.js, Express, and MongoDB (Mongoose).

## Features at a Glance
- RESTful API for seamless frontend integration
- Contact form endpoint: stores user messages in MongoDB
- Modular MVC structure for scalability
- Environment-based configuration for flexible deployment
- CORS and cookie support for secure cross-origin requests
- Error handling and validation for robust API responses
- Deployed on Render for production reliability

## Project Structure
```
backend-project
├── src
│   ├── app.js               # Express app setup
│   ├── config
│   │   └── db.js           # Database connection logic
│   ├── routes
│   │   └── contact.routes.js # Contact form API route
│   ├── controllers
│   │   └── contactController.js # Contact form logic
│   └── models
│       └── ContactMessage.js # Mongoose schema
├── .env                     # Environment variables
├── package.json             # NPM configuration
└── README.md                # Project documentation
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd backend-project
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=your-mongodb-uri
   PORT=3001
   CORS_ORIGIN=http://localhost:3000
   ```

## Usage

1. Start the application:
   ```bash
   npm run dev
   ```
2. The server will run on `http://localhost:3001` (or the port specified in your .env).

## API Endpoints

### POST `/api/contact`
- **Description:** Save a contact message from the frontend form.
- **Request Body:**
  ```json
  {
    "name": "User Name",
    "email": "user@example.com",
    "message": "Your message here."
  }
  ```
- **Response:**
  - `200 OK` on success
  - `400 Bad Request` if fields are missing
  - `500 Internal Server Error` on failure

## Deployment
- **Frontend:** Deployed on Vercel
- **Backend:** Deployed on Render (production-ready)

## Tech Stack
- Node.js
- Express
- MongoDB (Mongoose)
- dotenv, cors, cookie-parser

## Contributing
Feel free to submit issues or pull requests for improvements or bug fixes.

## License
This project is licensed under the MIT License.