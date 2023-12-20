## Đồ án cuối kỳ - MSIS207.O12.CTTT - Backend

Table member:
| Name      | Student'ID |
| --------- | --- | 
| Võ Hưng Khang  | 20521440  |
| Vương Thị Yến Nhi | 20521721  | 

### Library using in Backend
| Library           | Version | Description           |
|-------------------|---------|-----------------------|
| bcrypt            | ^5.1.0  | Password hashing      |
| bcryptjs          | ^2.4.3  | Password hashing      |
| cloudinary        | ^1.36.4 | Cloud-based media management |
| cookie-parser     | ^1.4.6  | Parses Cookie header and handles cookie parsing |
| cors              | ^2.8.5  | Cross-Origin Resource Sharing middleware |
| dotenv            | ^16.0.3 | Loads environment variables from a .env file |
| express           | ^4.18.2 | Web application framework |
| express-fileupload| ^1.4.0  | Middleware for handling file uploads |
| jsonwebtoken      | ^9.0.0  | JSON Web Token implementation |
| mongoose          | ^7.1.0  | MongoDB object modeling for Node.js |
| nodemailer        | ^6.9.1  | Email sending library   |
| nodemon           | ^2.0.22 | Monitor for changes and restart server |
| otp-generator     | ^4.0.1  | OTP generation library  |
| razorpay          | ^2.8.6  | Payment gateway        |
| swagger-jsdoc     | ^6.2.8  | Swagger/OpenAPI spec documentation |
| swagger-ui-express| ^5.0.0  | Swagger UI for Express |

# Backend Server Setup Guide

This guide will walk you through setting up the backend server for your project.

## Step 1: Install Node Modules

To install the necessary Node.js modules, open a terminal and run:

`npm install`

## Step 2: Set Up Environment Variables
Create a .env file in the root directory of your project. Add the following environment variables with their respective values:

`MAIL_HOST =
MAIL_USER =
MAIL_PASS =
CORS_ORIGIN = [""]
JWT_SECRET =
FOLDER_NAME = images # cloudinary folder name where you want to save images
FOLDER_VIDEO = videos # cloudinary folder name where you want to save videos
RAZORPAY_KEY = # your razorpay key from Razorpay website (Mandatory to run server)
RAZORPAY_SECRET = # your razorpay secret from Razorpay website (Mandatory to run server)
CLOUD_NAME =
API_KEY =
API_SECRET =
CONTACT_MAIL = # Enter your mail; user enquiries will be sent to this mail
PORT = # server port number
MONGODB_URL = `

## Step 3: Run the Server
Start the server in development mode using the command:
`npm run dev`



  
