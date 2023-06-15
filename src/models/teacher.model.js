const mongoose = require('mongoose');
// Define a schema
const { Schema } = mongoose;

const teacherSchema = new Schema({
    teacherName: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true,
        maxlength: 50,
    },
    contactNo: {
        type: Number,
    },
    addressId: { type: Schema.Types.ObjectId, ref: 'address' },
    profilePic: {
        type: String,
    },
    description: {
        type: String,
    },
    qualification: {
        type: Array,
    },
    document_certificates: {
        type: Array,
    },
    experience: {
        type: Array,
    },
    designation: {
        type: String,
    },
    expertise: {
        type: String,
    },
    is_active: {
        type: Boolean,
    },
    last_login: {
        type: String,
    },
    social_media: {
        type: Array,
    },
}, {
    timestamps: true,
});

const TeacherModel = mongoose.model('teacher', teacherSchema);
module.exports = TeacherModel;