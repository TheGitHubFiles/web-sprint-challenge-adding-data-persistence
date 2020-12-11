// build your `Resource` model here
const db = require('../../data/dbConfig')


function getResource() {
    return db('resources')
}
function createResource(resource) {
    return db('resources')
        .insert(resource)

}

module.exports = {
    getResource,
    createResource
}