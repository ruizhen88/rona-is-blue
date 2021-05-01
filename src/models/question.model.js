const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const questionSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    // answer: {
    //   type: Object,
    // },
    body: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    // email: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   trim: true,
    //   lowercase: true,
    //   validate(value) {
    //     if (!validator.isEmail(value)) {
    //       throw new Error('Invalid email');
    //     }
    //   },
    // },
    // password: {
    //   type: String,
    //   required: true,
    //   trim: true,
    //   minlength: 8,
    //   validate(value) {
    //     if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
    //       throw new Error('Password must contain at least one letter and one number');
    //     }
    //   },
    //   private: true, // used by the toJSON plugin
    // },
    // role: {
    //   type: String,
    //   enum: roles,
    //   default: 'question',
    // },
    // isEmailVerified: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
questionSchema.plugin(toJSON);
questionSchema.plugin(paginate);

/**
 * Check if email is taken
 * @param {string} email - The question's email
 * @param {ObjectId} [excludeQuestionId] - The id of the question to be excluded
 * @returns {Promise<boolean>}
 */
// questionSchema.statics.isEmailTaken = async function (email, excludeQuestionId) {
//   const question = await this.findOne({ email, _id: { $ne: excludeQuestionId } });
//   return !!question;
// };

/**
 * Check if password matches the question's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
// questionSchema.methods.isPasswordMatch = async function (password) {
//   const question = this;
//   return bcrypt.compare(password, question.password);
// };

// questionSchema.pre('save', async function (next) {
//   const question = this;
//   if (question.isModified('password')) {
//     question.password = await bcrypt.hash(question.password, 8);
//   }
//   next();
// });

/**
 * @typedef Question
 */
const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
