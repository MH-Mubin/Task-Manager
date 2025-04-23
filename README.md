**_Task Manager Backend - Documentation_**

**Project Overview**

A Task Manager backend application built using Node.js, Express.js, and MongoDB. It allows users to register, log in, Password reset, verify OTP and perform CRUD operations on tasks. The application uses JWT (JSON Web Token) for authentication and authorization.

**Features**

User Registration and Login </br>
Email-based JWT Authentication</br>
Create, Read, Update, Delete (CRUD) for Tasks</br>
Middleware for route protection</br>

**Technologies Used**

Node.js</br>
Express.js</br>
MongoDB with Mongoose</br>
JSON Web Token (JWT)</br>
Nodemailer (optional for email OTP verification)</br>
Postman (for API testing)</br>

**How to Run**

Install dependencies:
npm install</br>
"cors": "^2.8.5",</br>
"dotenv": "^16.5.0",</br>
"express": "^5.1.0",</br>
"express-rate-limit": "^7.5.0",</br>
"helmet": "^8.1.0",</br>
"hpp": "^0.2.3",</br>
"jsonwebtoken": "^9.0.2",</br>
"mongoose": "^8.13.2",</br>
"nodemailer": "^6.10.0",</br>
"nodemon": "^3.1.9"</br>
Start MongoDB server (locally or use MongoDB Atlas)</br>

**Run the app**
npm start</br>
Environment Variables</br>

**Create a .env file to store:**

PORT=3000</br>
DB_URI</br>

**Testing with Postman**

Use Postman to test all endpoints. Make sure to:</br>
Set token header after login for protected routes</br>
Provide correct JSON body for POST requests</br>

**Author**
This project was built to practice and demonstrate backend skills including authentication, middleware, and MongoDB CRUD operations.

**License**
Open source for learning and personal use.
