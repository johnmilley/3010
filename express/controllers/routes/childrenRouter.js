// all routes begining with /child are directed here

const express = require('express')
const childController = require('../controllers/childrenController')

const childRouter = express.Router()

childRouter.get('/', childController.getChildren)
childRouter.get('/:childId', childController.getChildById)

module.exports = childRouter