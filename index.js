require('dotenv').config(); /* require is used to import external modules or code from other files in JavaScript.config():
 This is a method provided by the dotenv package. When called, it reads the .env file in your project's root directory and loads the environment variables defined within it into the Node.js process.env object.
  dotnotation is access the property or method* 
  environment variables === provide a way to store and access configuration settings and other data in your code.*/


const express = require('express'); /* Actually it instantiates Express and assigns app variable to it.developers to create web applications by providing
ready-made tools and structures. */

const mongoose = require('mongoose'); /*  developers to store and retrieve data in databases  by providing a simple way to interact with them*/

const mongoString = process.env.DATABASE_URL; /* CONST MEAN ====The code declares a constant variable called mongoString. 
The const keyword is used to declare constants, meaning that the value of the variable cannot be changed. The process.env.
DATABASE_URL === is used to access the environment variable named DATABASE_URL.
When you run your Node.js application, Node.js will automatically load the environment variables from a file named .env in your project root directory. 
This line of code is essentially grabbing the value of the DATABASE_URL variable from that file.*/

/* Environment variables === are essentially a set of key-value pairs that are stored in your system's environment.  
ANS committing sensitive data like database passwords to your version control system.*/ 

 mongoose.connect(mongoString) /* MOGGOSE === we're using Mongoose to establish a connection to a MongoDB database:
 mongoose.connect() === is a method provided by Mongoose that establishes a connection to a MongoDB database. It takes two parameters: a MongoDB connection string and an optional configuration object.
 This code ensures that the connection string is loaded from the environment variable when the application is running. This is useful because the connection string might vary depending on the environment, such as development, testing, or production.*/

 const database = mongoose.connection; /*this line of code allows us to access and manipulate the connection object throughout our application.
 The code provided is using Node.js with the Mongoose library to connect to a MongoDB database. Mongoose provides a straight-forward, schema-based solution to model your application data.*/

database.on('error', (error) => {
    console.log(error)
})/* This line of code is used to establish a connection to the MongoDB database. If there's an error in this process, we can catch it using the on method with the event type as 'error'.*/ 

database.once('connected', () => {
    console.log('Database Connected');
}) /* is used to listen for the 'connected' event. This event is emitted when the Mongoose connection instance successfully connects to the MongoDB server. 
It's important to note that once is used instead of on here. This is because the 'connected' event is only emitted once per connection instance. Once the connection is established, 
the 'connected' event will not be emitted again, even if the connection is closed and reopened. Therefore, we use once to ensure that the provided function is only executed once, even if the 'connected' event is emitted multiple times.*/

const app = express();/* Express is a web application framework for Node.js that provides a robust set of features for building web applications and APIs. 
It simplifies the process of setting up and running web applications on the Node.js platform. */

app.use(express.json());/* This line tells your app to use the built-in JSON middleware provided by Express.This middleware is responsible for parsing the incoming request bodies in JSON format. 
This allows your application to easily handle JSON payloads sent by the client. */ 

app.listen(3001, () => {
    console.log(`Server Started at ${3001}`)
 }) /* app.listen() === function starts the server on the specified port, making it accessible to incoming requests from clients.
The second argument is a callback function that is executed when the server has successfully started listening on the specified port. In this case, the callback function logs a message to the console indicating that the server has started*/

const routes = require('./routes/EmployeeRoutes');
app.use('/api', routes) /* const routes = require('./routes/EmployeeRoutes'): This line of code imports the routes defined in the EmployeeRoutes file located in the routes directory. These routes will handle incoming requests for the /api endpoint.
app.use('/api', routes): This line of code tells the Express server to use the imported routes middleware for all routes that start with /api.
 */


