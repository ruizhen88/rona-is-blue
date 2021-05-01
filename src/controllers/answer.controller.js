const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { answerService } = require('../services');

const createAnswer = catchAsync(async (req, res) => {
  const answer = await answerService.createAnswer(req.body);
  res.status(httpStatus.CREATED).send(answer);
});

const getAnswers = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['questionId']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await answerService.queryAnswers(filter, options);
  res.send(result);
});

const getAnswer = catchAsync(async (req, res) => {
  const answer = await answerService.getAnswerById(req.params.answerId);
  if (!answer) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Answer not found');
  }
  res.send(answer);
});

const updateAnswer = catchAsync(async (req, res) => {
  const answer = await answerService.updateAnswerById(req.params.answerId, req.body);
  res.send(answer);
});

const deleteAnswer = catchAsync(async (req, res) => {
  await answerService.deleteAnswerById(req.params.answerId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createAnswer,
  getAnswers,
  getAnswer,
  updateAnswer,
  deleteAnswer,
};
