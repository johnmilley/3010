// a sample model

const authors = [
    { id: 1, name: "Theodore" },
    { id: 2, name: "Marianne" },
    { id: 3, name: "Lawrence" }
]

async function getAuthorById(authorId) {
    return authors.find(author => author.id === authorId)
}

module.exports = { getAuthorById }