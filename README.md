**_Task Manager Backend - Documentation_**

**Project Overview**

A Task Manager backend application built using Node.js, Express.js, and MongoDB. It allows users to register, log in, Password reset, verify OTP and perform CRUD operations on tasks. The application uses JWT (JSON Web Token) for authentication and authorization.

**Features**

User Registration and Login
Email-based JWT Authentication
Create, Read, Update, Delete (CRUD) for Tasks
Middleware for route protection

**Technologies Used**

Node.js
Express.js
MongoDB with Mongoose
JSON Web Token (JWT)
Nodemailer (optional for email OTP verification)
Postman (for API testing)

**How to Run**

Install dependencies:
npm install
"cors": "^2.8.5",
"dotenv": "^16.5.0",
"express": "^5.1.0",
"express-rate-limit": "^7.5.0",
"helmet": "^8.1.0",
"hpp": "^0.2.3",
"jsonwebtoken": "^9.0.2",
"mongoose": "^8.13.2",
"nodemailer": "^6.10.0",
"nodemon": "^3.1.9"
Start MongoDB server (locally or use MongoDB Atlas)

**Run the app**
npm start
Environment Variables

**Create a .env file to store:**

PORT=3000
DB_URI

**Testing with Postman**

Use Postman to test all endpoints. Make sure to:
Set token header after login for protected routes
Provide correct JSON body for POST requests

**Author**
This project was built to practice and demonstrate backend skills including authentication, middleware, and MongoDB CRUD operations.

**License**
Open source for learning and personal use.
