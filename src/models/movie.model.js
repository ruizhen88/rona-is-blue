const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const movieSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
movieSchema.plugin(toJSON);
movieSchema.plugin(paginate);

/**
 * Check if email is taken
 * @param {string} email - The movie's email
 * @param {ObjectId} [excludeMovieId] - The id of the movie to be excluded
 * @returns {Promise<boolean>}
 */
// movieSchema.statics.isEmailTaken = async function (email, excludeMovieId) {
//   const movie = await this.findOne({ email, _id: { $ne: excludeMovieId } });
//   return !!movie;
// };

/**
 * Check if password matches the movie's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
// movieSchema.methods.isPasswordMatch = async function (password) {
//   const movie = this;
//   return bcrypt.compare(password, movie.password);
// };

// movieSchema.pre('save', async function (next) {
//   const movie = this;
//   if (movie.isModified('password')) {
//     movie.password = await bcrypt.hash(movie.password, 8);
//   }
//   next();
// });

/**
 * @typedef Movie
 */
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
