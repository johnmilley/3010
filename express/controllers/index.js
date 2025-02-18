const express = require('express')
const path = require('node:path')
const ejs = require('ejs')

const childRouter = require('./routes/childrenRouter')

const app = express()

// set up STATIC assests
const assetsPath = path.join(__dirname, "public")
app.use(express.static(assetsPath))

// set up VIEW engine
app.set("views", path.join(__dirname, "views"))
app.set('view engine', 'ejs')

// ROUTERS
app.use('/children', childRouter)


// ROUTING for homepage (we could move this to a separate router as well)
app.get('/', (req, res) => {
    res.render("index")
})

// get environment variable from .env or use 3000 if that doesn't exist
const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}...`))