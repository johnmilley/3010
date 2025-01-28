
const express = require('express')
const router = express.Router()  // Router instance 'mini-app'

// middleware specific to the router c
const timeLog = (req, res, next) => {
    console.log(`Route: ${req.url}| Time: ${Date()}`)
    next()
}

router.use(timeLog)

// home page
router.get('/', (req, res) => {
    res.send('BIRDS!')
})

router.get('/about', (req, res) => {
    res.send('About BIRDS!')
})


module.exports = router