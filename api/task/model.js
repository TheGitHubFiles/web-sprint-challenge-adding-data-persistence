// build your `Task` model here
const db = require('../../data/dbConfig')


function getTask() {
    return db('tasks as t')
        .join('projects as p', 'p.id', 't.project_id')
        .select('p.name as project_name', 'p.description as project_description', 't.completed', 't.description', 't.notes')


}
function createTask(tas) {
    return db('tasks as t')
        .insert(tas)
        .then(ids => {
            const id = ids[0]
            return getTaskbyId(id)
        })




}
function getTaskbyId(id) {
    return db('tasks')
        .where({ id })
}


module.exports = {
    getTask,
    createTask,
    getTaskbyId
}