const express = require('express');

const { chaptertControllers } = require('../../controllers');

const chaptertRoutes = express.Router();

chaptertRoutes.post('/add', chaptertControllers.addChapter);
chaptertRoutes.put('/:chapterId', chaptertControllers.updateChapter);
chaptertRoutes.get('/chapter', chaptertControllers.getChapter);
chaptertRoutes.delete('/delete/:chapterId', chaptertControllers.deleteChapterById);

module.exports = chaptertRoutes;
