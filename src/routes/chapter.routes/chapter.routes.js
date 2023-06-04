const express = require('express');

const { chapterControllers } = require('../../controllers');

const chapterRoutes = express.Router();

chapterRoutes.post('/add', chapterControllers.addChapter);
chapterRoutes.put('/:chapterId', chapterControllers.updateChapter);
chapterRoutes.get('/chapter', chapterControllers.getChapter);
chapterRoutes.delete('/delete/:chapterId', chapterControllers.deleteChapterById);

module.exports = chapterRoutes;