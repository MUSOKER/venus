const mongoose = require('mongoose');

const { Schema } = mongoose;

const userIdentificationSchema = new Schema({
  id: {
    type: String,
    required: true,
    index: true,
  },
  password: {
    type: String,
  },
  OTP: {
    otp: Number,
    valid_till: Number,
  },
  is_user_verified: {
    type: Boolean,
  },
});

const UserIndentificationSchema = mongoose.model('user_identification', userIdentificationSchema);
module.exports = UserIndentificationSchema;
