const express = require('express');
const router = express.Router();
const taskControler = require('./tasks.controller');


router.get('/list' , taskControler.getAllTasks)
router.post('/create' , taskControler.createTask)
router.get('/byId/:id'  , taskControler.getTaskById)
router.delete('/delete/:id' , taskControler.deletedTask)
router.put('/update' , taskControler.updateTask)

module.exports = router;