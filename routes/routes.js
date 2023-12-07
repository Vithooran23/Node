const express = require('express');

const router = express.Router()

module.exports = router;


const Model = require('../models/model');

// We have five methods that use the REST Methods 
// of Post, Get, Patch, and Delete.

//Post Method
router.post('/getone/:id', (req, res) => {
    res.send('post id')
})

//Get all Method
// router.get('/getAlll', (req, res) => {
//     res.send('Get Alll API')
// })

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send('req.params.id')
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

// How to Post Data to the Database
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})


// How to Get All the Data
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

