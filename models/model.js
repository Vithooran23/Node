const mongoose = require('mongoose'); /*The mongoose library is required, which is a MongoDB object modeling (ODM) library for Node.js. */

const dataSchema = new mongoose.Schema({ /*  new Mongoose schema is created using the new mongoose.Schema() syntax. This schema defines the structure of the documents in the MongoDB collection that this model will be associated with. */
    name: {
        required: true,
        type: String         /* The schema includes two properties: name and age. 
                         Both are required and have specific data types (String and Number). */
    },
    age: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Data', dataSchema)
/* The mongoose.model('Data', dataSchema) function is called. This function is used to define a new model in your application. 
It takes two parameters: the name of the model ('Data' in this case) and the schema associated with the model (dataSchema). */

/* The result of the mongoose.model() function is exported using the module.exports syntax. 
This allows the model to be imported and used in other parts of your application. */