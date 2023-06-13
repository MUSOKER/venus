const express = require('express');

const { chapterControllers } = require('../../controllers');

const chaptertRoutes = express.Router();

chaptertRoutes.post('/add', chapterControllers.addChapter);
chaptertRoutes.put('/:chapterId', chapterControllers.updateChapter);
chaptertRoutes.get('/chapter', chapterControllers.getChapter);
chaptertRoutes.delete('/:chapterId', chapterControllers.deleteChapterById);

module.exports = chaptertRoutes;