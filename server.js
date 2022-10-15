require('dotenv').config()
// Require Modules
const express = require('express')
const methodOverride = require('method-override')
const db = require('./models/db')
// Create Express App
const app = express()

// Configure the App
app.use(express.urlencoded({ extended: true }))  //Gives us req.body
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx') //Register JSX view engine
db.once('open', () => {
    console.log('Connected to MongoDB Atlas')
})

// Middleware
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/logs', require('./controllers/routeController'))

// End Routes
app.listen(3000, () => {
    console.log('Listening on Port 3000')
})