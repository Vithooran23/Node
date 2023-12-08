const express = require('express'); /* This line of code tells the Express server to use a specific middleware for all routes that start with /api.
const routes = require('./routes/EmployeeRoutes'): This line of code imports the routes defined in the EmployeeRoutes file located in the routes directory. These routes will handle incoming requests for the /api endpoint.
app.use('/api', routes): This line of code tells the Express server to use the imported routes middleware for all routes that start with /api.
*/

const router = express.Router() /*creates a new instance of the Router class from the express library.Routers in Express are responsible for handling client requests to server resources. */
module.exports = router; /* This allows us to import the router object into other files, */

const Model = require('../models/model'); /* it makes the object available for other modules to import and use */



// We have five methods that use the REST Methods of Post, Get, Patch, and Delete.
//Post Method
router.post('/getone/:id', (req, res) => {
    res.send('post id')
}) /*this is defining a new route for handling HTTP POST requests at the path /getone/:id. 
if a client sends a POST request to the path /getone/5, then req.params.id in the request handler function will be set to the string '5'.*/

//Get all Method
router.get('/getAll', (req, res) => {
    res.send('Get All API')
}) /* defines a new route for handling HTTP GET requests at the path /getAll.routes for handling different types of HTTP requests, 
this one is used to retrieve a list of all resources.*/

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send('req.params.id')
}) /** new route is defined for handling HTTP GET requests at the path /getOne/:id. Here :id is a dynamic segment in the path that can take any value.
this one used to retrieve a specific resource by its id,*/

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
}) /* The purpose of this route is to allow clients to update a specific resource on your server using an HTTP PATCH request. */

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
}) /* to allow clients to delete a specific resource on your server using an HTTP DELETE request. 
this function to remove data from your database based on the provided id. */

// How to Post Data to the Database
router.post('/post', async (req, res) => { /*creates a new route that handles HTTP POST requests at the path /post */
    const data = new Model({  
        name: req.body.name,
        age: req.body.age
    }) /* Inside the route handler function, we create a new instance of Model (a Mongoose model) using the data received from the client. */


    try {
        const dataToSave = await data.save(); /* this method saves the data to the database and returns a promise. */
        res.status(200).json(dataToSave) /* If the data is saved successfully, we send a JSON response with a status code of 200 (OK) and the saved data. */
    }
    catch (error) {
        res.status(400).json({message: error.message}) /* If there's an error while saving the data, we send a JSON response with a status code of 400 (Bad Request) and the error message. */
    }
})


// How to Get All the Data
router.get('/getAll', async (req, res) => { /* creates a new route that handles HTTP GET requests at the path /getAll. */
    try{
        const data = await Model.find(); /* Inside the route handler function, we call the find() method on the Model class (a Mongoose model). This method retrieves all the documents in the database collection associated with this model.*/
        res.json(data) /* We then send a JSON response with the retrieved data. */
    }
    catch(error){
        res.status(500).json({message: error.message}) /* If there's an error while retrieving the data, we send a JSON response with a status code of 500 (Internal Server Error) and the error message. */
    }
})

