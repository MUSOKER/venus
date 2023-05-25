const { success, error } = require('@Enseedling/enseedling-lib-handler');
const { Transaction } = require('../../utils');
const { ProjectModel } = require('../../models');
// fetching all available projects
const fetchAllProjects = async(req, res, next) => {
    const transaction = await Transaction.startSession();
    try {
        await transaction.startTransaction();
        // check if any projects has been created and available
        const projects = await projectServices.getAllProjects();
        if (!projects) {
            throw error.throwNotFound({ message: 'Projects' });
        }
        return success.handler({ message: 'Projects has been successfully fetched', projects: projects }, req, res, next);
    } catch (err) {
        await transaction.abortTransaction();
        return error.handler(err, req, res, next);
    } finally {
        await transaction.endSession();
    }
};


const addProject = async(req, res, next) => {
    const transaction = await Transaction.startSession();
    try {
        await transaction.startTransaction();
        const {
            projectTitle,
            projectDescription,
            projectLink,
            startDate,
            endDate,
            projectImage,
            projectMilestone,
            status,
            visibility,
            categoryIds,
            comments,
            userId,
        } = await projectValidation.addProjectValidation.validateAsync(req.body);

        const project = await projectServices.createProject({
            projectTitle,
            projectDescription,
            projectLink,
            startDate,
            endDate,
            projectImage,
            projectMilestone,
            status,
            visibility,
            categoryIds,
            comments,
            userId,
        });
        return success.handler({ project }, req, res, next);
    } catch (err) {
        await transaction.abortTransaction();
        return error.handler(err, req, res, next);
    } finally {
        await transaction.endSession();
    }
};

const updateProject = async(req, res, next) => {
    const transaction = await Transaction.startSession();
    try {
        await transaction.startTransaction();
        const {
            projectTitle,
            projectDescription,
            projectLink,
            startDate,
            endDate,
            projectImage,
            projectMilestone,
            status,
            visibility,
            categoryIds,
            comments,
            userId,
        } = await projectValidation.updateProjectValidation.validateAsync(req.body);
        const { projectId } = await projectValidation.projectIdValidation.validateAsync(req.params);
        await projectServices.updateTheProject({
            projectId,
            projectTitle,
            projectDescription,
            projectLink,
            startDate,
            endDate,
            projectImage,
            projectMilestone,
            status,
            visibility,
            categoryIds,
            comments,
            userId,
        });
        return success.handler({ message: 'project updated' }, req, res, next);
    } catch (err) {
        await transaction.abortTransaction();
        return error.handler(err, req, res, next);
    } finally {
        await transaction.endSession();
    }
};


// Delete by project id
const deleteProjectById = async(req, res, next) => {
    const transaction = await Transaction.startSession();
    try {
        await transaction.startTransaction();
        const id = await projectValidation.projectIdValidation.validateAsync(req.params.id);
        // check user exits or not
        const project = await projectServices.deleteProjectById({ id });
        if (!project) {
            throw error.throwNotFound({ message: 'Project' });
        }
        return success.handler({ message: 'Project has been successfully deleted.' }, req, res, next);
        return WriteResult({ 'nRemoved': 1 })
    } catch (err) {
        await transaction.abortTransaction();
        return error.handler(err, req, res, next);
    } finally {
        await transaction.endSession();
    }
};
const filterProject = async(req, res, next) => {
    try {
        const { projectTitle, status, projectId, userId, categoryIds } = await projectValidation.getProjectValidation.validateAsync(req.query);
        const projects = await projectServices.filterProject({ projectId, projectTitle, category, userId, status });
        return success.handler({ projects },
            req, res, next);

    } catch (err) {
        return error.handler(err, req, res, next);
    }
}
module.exports = {
    addProject,
    updateProject,
    fetchAllProjects,
    deleteProjectById,
    filterProject
};