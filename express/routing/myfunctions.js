// our callbacks can be put in a custom module and exported

const cb0 = (req, res, next) => {
    console.log('cb0')
    next()
}

const cb1 = (req, res, next) => {
    console.log('cb1')
    next()
}

const cb2 = (req, res) => {
    console.log('cb2')
    res.send('done')
}

module.exports = {cb0, cb1, cb2}