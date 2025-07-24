const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json())
app.use(cors({
    origin: '*', // Allow all origins
    methods: 'GET,POST,PUT,DELETE', // Allow specific methods
}));

// tasks routes
const tasksRouter = require('../app/tasks/tasks.routes')
app.use('/tasks' , tasksRouter)

module.exports = app;