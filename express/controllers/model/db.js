// a sample model

const children = [
    { id: 1, name: "Theodore", age: 11},
    { id: 2, name: "Marianne", age: 9 },
    { id: 3, name: "Lawrence", age: 6 }
]

async function getChildren() {
    return children
}

async function getChildById(childId) {
    return children.find(child => child.id === childId)
}

module.exports = { getChildById, getChildren }