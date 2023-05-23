const { success, error } = require('@Enseedling/enseedling-lib-handler');
const { Transaction } = require('../../utils');
const { projectValidation } = require('../../validations');
const { projectServices } = require('../../services');

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

// fetching by project id
const fetchOneProjectById = async(req, res, next) => {
    const transaction = await Transaction.startSession();
    try {
        await transaction.startTransaction();
        const id = await projectValidation.projectIdValidation.validateAsync(req.params.id);
        // check user exits or not
        const project = await projectServices.getProjectById({ id });
        if (!project) {
            throw error.throwNotFound({ message: 'Project' });
        }
        return success.handler({ project: project }, req, res, next);
    } catch (err) {
        await transaction.abortTransaction();
        return error.handler(err, req, res, next);
    } finally {
        await transaction.endSession();
    }
};

// fetching by project id
const fetchProjectsByStatus = async(req, res, next) => {
    const transaction = await Transaction.startSession();
    try {
        await transaction.startTransaction();
        const status = await projectValidation.projectStatusValidation.validateAsync(req.params.status);
        // check user exits or not
        const project = await projectServices.getProjectsByStatus({ status });
        if (!project) {
            throw error.throwNotFound({ message: 'Project' });
        }
        return success.handler({ project: project }, req, res, next);
    } catch (err) {
        await transaction.abortTransaction();
        return error.handler(err, req, res, next);
    } finally {
        await transaction.endSession();
    }
};

// fetching by project title
const fetchOneProjectByTitle = async(req, res, next) => {
    const transaction = await Transaction.startSession();
    try {
        await transaction.startTransaction();
        const title = await projectValidation.projectTitleValidation.validateAsync(req.params.title);
        // check user exits or not
        const project = await projectServices.getProjectByTitle({ title });
        if (!project) {
            throw error.throwNotFound({ message: 'Project' });
        }
        return success.handler({ project: project }, req, res, next);
    } catch (err) {
        await transaction.abortTransaction();
        return error.handler(err, req, res, next);
    } finally {
        await transaction.endSession();
    }
};

// fetching projects by userid
const fetchProjectsByUserId = async(req, res, next) => {
    const transaction = await Transaction.startSession();
    try {
        await transaction.startTransaction();
        const userId = await projectValidation.userIdValidation.validateAsync(req.params.userid);
        // check user exits or not
        const projects = await projectServices.getProjectsByUserId({ userId });
        if (!projects) {
            throw error.throwNotFound({ message: 'Project' });
        }
        return success.handler({ projects: projects }, req, res, next);
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
        return WriteResult({ 'nRemoved': 1 })
        return success.handler({ message: 'Project has been successfully deleted.' }, req, res, next);
    } catch (err) {
        await transaction.abortTransaction();
        return error.handler(err, req, res, next);
    } finally {
        await transaction.endSession();
    }
};


module.exports = {
    fetchAllProjects,
    fetchOneProjectById,
    fetchOneProjectByTitle,
    fetchProjectsByUserId,
    fetchProjectsByStatus,
    deleteProjectById,
};