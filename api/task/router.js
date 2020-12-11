// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model')
const router = express.Router()








router.get('/', (req, res) => {
    console.log(req.body)
    Task.getTask()
        .then(task => {
            task.forEach(project => {
                const bool = project.completed
                const newbool = bool ? true : false
                project.completed = newbool
            })
            res.status(200).json(task)
        })
        .catch(err => res.status(500).json({ message: err.message }))
})
router.post('/', (req, res) => {
    Task.createTask(req.body)
        .then(task => {
            if (task) {
                const bool = req.body.completed
                const newBool = bool ? true : false
                req.body.completed = newBool
                res.status(201).json(req.body)
            }
            else {
                res.status(404).json({ message: 'tets' })
            }
        })
        .catch(err => res.status(500).json({ message: err.message }))
})




module.exports = router