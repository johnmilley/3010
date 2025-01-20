const fs = require('fs')

const rs = fs.createReadStream('./demofile.txt')

rs.close()

rs.on('open', function() {
    console.log('The file is open.')
})

rs.on('close', function() {
    console.log('The file is closed.')
})

