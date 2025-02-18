const db = require('../model/db')

// calls the MODEL's getChildren function
async function getChildren(req, res) {
    const children = await db.getChildren()
    console.log(children)
    res.render("children", { children })
}

// a controller function
// async is used here to mimic database calls, these are not actually async functions
async function getChildById(req, res) {
    console.log(req.params)
    const { childId } = req.params
 
    const child = await db.getChildById(Number(childId))

    if (!child) {
        res.status(404).send("Child not found")
        return
    }

    res.render("child", {child} )
}

module.exports = { getChildById, getChildren }