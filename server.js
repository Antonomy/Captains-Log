require('dotenv').config()
// Require Modules
const fs = require('fs')
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const Log = require ('./models/log.js')
const { GridFSBucketWriteStream } = require('mongodb')
// Create Express App
const app = express()

// Configure the App
app.use(express.urlencoded({extended:true}))  //Gives us req.body
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx') //Register JSX view engine
mongoose.connect(process.env.MONGO_URI, { useNewURLParser: true, useUnifiedTopology: true})
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB Atlas')
})

// Middleware
app.use(methodOverride('_method'))
app.use(express.static('public'))


//Index
app.get('/captains_log', (req,res) => {
    if (err) {
        console.error(err)
        res.status(400).send(err)
    }else {
        res.render('captains_log/Index', {
            logs: foundLogs
        })
    }
})

// New
app.get('/captains_log/new', (req, res) => {
    res.render('captains_log/New')
})
// Delete
app.delete('/captains_log/:id', (req,res) => {
    Log.findByIdAndDelete(req.params.id, (err, deletedLog) => {
        if(err) {
            console.error(err)
            res.status(400).send(err)
        } else {
            res.redirect('/captains_log')
        }
    })
})

// Update

// Create
app.post('/captains_log', (req, res) => {
    req.body.shipIsBroken === 'on' ? req.body.shipIsBroken = true : req.body.shipIsBroken = false
    Log.create(req.body, (err, createdLog) => {
        if(err) {
            console.error(err)
            res.status(400).send(err)
        } else {
            res.redirect(`/captains_log/${createdLog._id}`)
        }
    })
})

// Edit
app.get('/captains_log/:id/edit', (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        if(err) {
            console.error(err)
            res.status(400).send(err)
        } else {
            res.render('captains_log/Edit', {
                log: foundLog
            })
        }
    })
})

// Show
app.get('/captains_log/:id', (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        if(err) {
            console.error(err)
            res.status(400).send(err)
        } else {
            res.render('captains_log/Show', {
                log: foundLog
            })
        }
    })
})





// End Routes
app.listen(3000, () => {
    console.log('Listening on Port 3000')
})