const { ChapterModel } = require('../../models');


// Fetching projects
const getChapter = async({ chapterId, moduleId }) => {
        let q = {};
        if (chapterId) {
            q._id = chapterId;
        }
        if (moduleId) {
            q.moduleId = moduleId;
        }

        return ChapterModel.find(q);
    }
    // Deleting chapter by chapterId
const deleteChapterById = async({ id }) => ChapterModel.findAndDeleteOne({ id });

// creating chapter
const createChapter = async({
    chapter_name,
    module_id,
    chapter_description,
    video_src,
    duration,
    comments,
}) => ChapterModel.create({
    chapter_name,
    module_id,
    chapter_description,
    video_src,
    duration,
    comments
});

// updating chapter by chapterId
const updateTheChapter = async({
    chapter_name,
    module_id,
    chapter_description,
    video_src,
    duration
}) => ChapterModel.findByIdAndUpdate(
    chapterId, {
        chapter_name,
        module_id,
        chapter_description,
        video_src,
        duration,
    }, { returnedDocument: 'after' },
);

module.exports = {
    createChapter,
    updateTheChapter,
    getChapter,
    deleteChapterById,
};