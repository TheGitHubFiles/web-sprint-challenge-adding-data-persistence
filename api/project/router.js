// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')
const router = express.Router()



router.get('/', (req, res) => {
    Project.getProject()
        .then(proj => {
            proj.forEach(project => {
                const bool = project.completed
                const newbool = bool ? true : false
                project.completed = newbool
            })
            res.status(200).json(proj)

            console.log(proj)

        })
        .catch(err => res.status(500).json({ message: err.message }))
})
router.post('/', (req, res) => {
    Project.createProject(req.body)
        .then(proj => {
            if (proj) {
                const bool = req.body.completed
                const newBool = bool ? true : false
                req.body.completed = newBool
                res.status(201).json(req.body)

            } else {
                res.status(400).json({ message: 'something went wrong' })
            }
        })
        .catch(err => res.status(500).json({ message: err.message }))
})

module.exports = router