/* eslint-disable indent */
const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    requirements: {
        type: String,
        required: true,
    },
    statuss: {
        type: String,
        enum: ['Pending', 'Assigned', 'Submitted'],
        default: 'Pending',
    },
    category: {
        type: Array,
        required: true,
    },
    topics: [{
        type: Array,
        required: true,
    }],
    createdBy: {
        type: String,
        required: true,
    },
    difficultyLevel: {
        type: String,
        enum: ['Begineer', 'Intermediate', 'Advance'],
        required: true,
    },
    deadline: {
        type: Date,
        required: true,
    },
    marks: {
        type: Number,
        required: true,
    },
});

const AssignmentsModel = mongoose.model('assignments', AssignmentSchema);

module.exports = AssignmentsModel;
