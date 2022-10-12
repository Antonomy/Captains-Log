require('dotenv').config()
// Require Modules
const fs = require('fs')
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const Log = require('./models/log.js')
const { GridFSBucketWriteStream } = require('mongodb')
// Create Express App
const app = express()

// Configure the App
app.use(express.urlencoded({ extended: true }))  //Gives us req.body
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx') //Register JSX view engine
mongoose.connect(process.env.MONGO_URI, { useNewURLParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB Atlas')
})

// Middleware
app.use(methodOverride('_method'))
app.use(express.static('public'))


//Index
app.get('/logs', (req, res) => {
    Log.find({}, (err, foundLogs) => {
        if (err) {
            console.error(err)
            res.status(400).send(err)
        } else {
            res.render('logs/Index', {
                logs: foundLogs
            })
        }
    })
})

// New
app.get('/logs/new', (req, res) => {
    res.render('logs/New')
})
// Delete
app.delete('/logs/:id', (req, res) => {
    Log.findByIdAndDelete(req.params.id, (err, deletedLog) => {
        if (err) {
            console.error(err)
            res.status(400).send(err)
        } else {
            res.redirect('/logs')
        }
    })
})

// Update
app.put('/logs/:id', (req, res) => {
    req.body.shipIsBroken === 'on' || req.body.shipIsBroken === true ? req.body.shipIsBroken = true : req.body.shipIsBroken = false
    Log.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedLog) => {
        if (err) {
            console.error(err)
            res.status(400).send(err)
        } else {
            res.redirect(`/logs/${updatedLog._id}`)
        }
    })
})


// Create
app.post('/logs', (req, res) => {
    req.body.shipIsBroken === 'on' ? req.body.shipIsBroken = true : req.body.shipIsBroken = false
    Log.create(req.body, (err, createdLog) => {
        if (err) {
            console.error(err)
            res.status(400).send(err)
        } else {
            res.redirect(`/logs/${createdLog._id}`)
        }
    })
})

// Edit
app.get('/logs/:id/edit', (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        if (err) {
            console.error(err)
            res.status(400).send(err)
        } else {
            res.render('logs/Edit', {
                log: foundLog
            })
        }
    })
})

// Show
app.get('/logs/:id', (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        if (err) {
            console.error(err)
            res.status(400).send(err)
        } else {
            res.render('logs/Show', {
                log: foundLog
            })
        }
    })
})





// End Routes
app.listen(3000, () => {
    console.log('Listening on Port 3000')
})