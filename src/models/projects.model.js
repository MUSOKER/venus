const mongoose = require('mongoose');

const { Schema } = mongoose;

const project = new Schema({
    projectId: {
        type: String,
        required: true,
    },
    projectName: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    projectLink: {
        type: String,
        required: true,

    },
    approveStatus: {
        type: String,
        required: true,
        defualt: "pending"
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    comments: [{
        commentId: {
            type: String,
            required: false

        },
        commentText: {
            type: String,
            required: false
        },
        commentedBy: {
            type: mongoose.Types.ObjectId,
            required: false
        },
        commentedAt: {
            type: Date,
            required: false
        }
    }, ]
}, {
    timestamps: true,
}, );

const projectModel = mongoose.model('projects', project);

module.exports = projectModel;