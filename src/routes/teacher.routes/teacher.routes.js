const express = require('express');

const { teacherControllers } = require('../../controllers');

const teacherRoutes = express.Router();
teacherRoutes.post('/create', teacherControllers.createTeacher);
teacherRoutes.put('/:teacherId', teacherControllers.updateTeacher);
teacherRoutes.get('/getAll', teacherControllers.getTeacher);
teacherRoutes.delete('/:teacherId', teacherControllers.deleteTeacherById);
teacherRoutes.get('/:teacherId', teacherControllers.getTeacher);


module.exports = teacherRoutes;