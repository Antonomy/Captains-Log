require('dotenv').config()
// Require Modules
const fs = require('fs')
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const Log = require ('./models/log.js')
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

// New
app.get('captains_log/new', (req, res) => {
    res.render('new')
})
// Delete

// Update

// Create

// Edit

// Show


// End Routes
app.listen(3000, () => {
    console.log('Listening on Port 3000')
})