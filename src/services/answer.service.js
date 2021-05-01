const httpStatus = require('http-status');
const { Answer } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a answer
 * @param {Object} answerBody
 * @returns {Promise<Answer>}
 */
const createAnswer = async (answerBody) => {
  const answer = await Answer.create(answerBody);
  return answer;
};

/**
 * Query for answers
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryAnswers = async (filter, options) => {
  const answers = await Answer.paginate(filter, options);
  return answers;
};

/**
 * Get answer by id
 * @param {ObjectId} id
 * @returns {Promise<Answer>}
 */
const getAnswerById = async (id) => {
  return Answer.findById(id);
};

/**
 * Update answer by id
 * @param {ObjectId} answerId
 * @param {Object} updateBody
 * @returns {Promise<Answer>}
 */
const updateAnswerById = async (answerId, updateBody) => {
  const answer = await getAnswerById(answerId);
  if (!answer) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Answer not found');
  }
  Object.assign(answer, updateBody);
  await answer.save();
  return answer;
};

/**
 * Delete answer by id
 * @param {ObjectId} answerId
 * @returns {Promise<Answer>}
 */
const deleteAnswerById = async (answerId) => {
  const answer = await getAnswerById(answerId);
  if (!answer) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Answer not found');
  }
  await answer.remove();
  return answer;
};

module.exports = {
  createAnswer,
  queryAnswers,
  getAnswerById,
  updateAnswerById,
  deleteAnswerById,
};
