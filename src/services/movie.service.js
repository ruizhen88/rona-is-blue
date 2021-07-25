const httpStatus = require('http-status');
const { Movie } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a movie
 * @param {Object} movieBody
 * @returns {Promise<Movie>}
 */
const createMovie = async (movieBody) => {
  // if (await Movie.isEmailTaken(movieBody.email)) {
  //   throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  // }
  const movie = await Movie.create(movieBody);
  return movie;
};

/**
 * Query for movies
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryMovies = async (filter, options) => {
  const movies = await Movie.paginate(filter, options);
  return movies;
};

/**
 * Get movie by id
 * @param {ObjectId} id
 * @returns {Promise<Movie>}
 */
const getMovieById = async (id) => {
  return Movie.findById(id);
};

/**
 * Update movie by id
 * @param {ObjectId} movieId
 * @param {Object} updateBody
 * @returns {Promise<Movie>}
 */
const updateMovieById = async (movieId, updateBody) => {
  const movie = await getMovieById(movieId);
  if (!movie) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Movie not found');
  }
  // if (updateBody.email && (await Movie.isEmailTaken(updateBody.email, movieId))) {
  //   throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  // }
  Object.assign(movie, updateBody);
  await movie.save();
  return movie;
};

/**
 * Delete movie by id
 * @param {ObjectId} movieId
 * @returns {Promise<Movie>}
 */
const deleteMovieById = async (movieId) => {
  const movie = await getMovieById(movieId);
  if (!movie) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Movie not found');
  }
  await movie.remove();
  return movie;
};

module.exports = {
  createMovie,
  queryMovies,
  getMovieById,
  // getMovieByEmail,
  updateMovieById,
  deleteMovieById,
};
