const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API DOCS FOR Course Project',
      version: '1.0.0',
      description: 'Course Project API ',
    },
  },
  apis: [
    path.join(__dirname, './routes/User.js'), 
    path.join(__dirname, './routes/Course.js'), 
    path.join(__dirname, './routes/Payments.js'), 
    path.join(__dirname, './routes/Profile.js'), 
    path.join(__dirname, './routes/ContactUs.js'), 
  ],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;