// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model')
const router = express.Router()








router.get('/', (req, res) => {
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
router.get('/:id', (req, res) => {
    Task.getTaskbyId(req.params.id)
        .then(resp => {

            const bool = resp[0].completed
            const newBool = bool ? true : false
            resp[0].completed = newBool
            console.log(resp)
            res.status(200).json(resp)


        })
        .catch(err => res.status(500).json({ message: err.message }))
})
router.post('/', (req, res) => {

   Task.createTask(req.body)
        .then(task => { 

            if (task) {
                const bool = task[0].completed
                const newBool = bool ? true : false
                task[0].completed = newBool
                res.status(201).json(task[0])
            }
            else {
                res.status(404).json({ message: 'sorry something went wrong' })
            } 
        })
        .catch(err => res.status(500).json({ message: err.message }))
})




module.exports = router