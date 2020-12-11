// build your `Task` model here
const db = require('../../data/dbConfig')


function getTask() {
    return db('tasks as t')
        .join('projects as p', 'p.id', '=', 't.project_id')
        .select('p.name as project_name', 'p.description as project_description', 't.completed', 't.description', 't.notes')


}
function createTask(task) {
    return db('tasks')
        .insert(task)


}

module.exports = {
    getTask,
    createTask
}