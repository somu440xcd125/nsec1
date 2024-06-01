// Import required modules
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
// import session from 'express-session';
// import mongoose from 'mongoose';
// import MongoStore from 'connect-mongo';
// import jwt from "jwt"

// Import routes and database connection
import Routes from './routes/route.js';
import Connection from './database/db.js';

// Load environment variables
dotenv.config();

// Create an Express app
const app = express();
const PORT = process.env.PORT || 8000;

// Initialize MongoDB connection
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username, password);

// Create a new instance of MongoStore
// const store = MongoStore.create({
//   mongoUrl: process.env.MONGODB_URI, // Replace with your MongoDB URI
//   mongooseConnection: mongoose.connection,
// });

// Configure Express middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// // Create payload for the JWT token
// const payload = {
//     scope: 'client:outgoing?clientName=matt',
//     iss: 'APP_SID',
//     expires: Math.round((new Date().getTime() / 1000)) + 3600
// };

// // Create a new JWT token
// const token = new jwt.WebToken(JSON.stringify(payload), JSON.stringify({ typ: 'JWT', alg: 'HS256' }));

// // Serialize the token with a HMAC key
// const serializedToken = token.serialize('hmackey');

// // Output the serialized token
// console.log(serializedToken);




// Configure session middleware
// app.use(
//   session({
//     secret: token,// Change this to a secure random string
//     resave: false,
//     saveUninitialized: false,
//     store: store,
//     cookie: { secure: false } // Set secure: true in production if using HTTPS
//   })
// );

// Configure routes
app.use('/', Routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running successfully on PORT ${PORT}`);
});
