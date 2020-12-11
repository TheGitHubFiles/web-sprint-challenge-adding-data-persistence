// build your server here
const express = require('express')
const projectRouter = require('../api/project/router')
const taskRouter = require('../api/task/router')
const resourceRouter = require('../api/resource/router')
const server = express()


server.use(express.json())

server.use('/api/projects', projectRouter)
server.use('/api/tasks', taskRouter)
server.use('/api/resources', resourceRouter)




module.exports = server