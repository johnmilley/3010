/* 1 */


// exports.customDateFormat = function() {
//     const options = {
//         weekday: 'long', month: 'long', day: 'numeric'
//     }⁄
//     const d = new Date();
//     return d.toLocaleDateString('en-US', options);
// }



/* 2  setting the exports property of the module object */

const customDateFormat = function() {
    const options = {
        weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'
    }
    const d = new Date();
    return d.toLocaleDateString('en-US', options);
}

module.exports = { customDateFormat }

console.log(module)
console.log(exports)


// sets the function as the default export from this module
// module.exports = { customDateFormat }

// exports.customDateFormate = customDateFormat

// console.log(module.id)