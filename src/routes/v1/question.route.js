const express = require('express');
// const auth = require('../../middlewares/auth');
// const validate = require('../../middlewares/validate');
// const questionValidation = require('../../validations/question.validation');
const questionController = require('../../controllers/question.controller');

const router = express.Router();

router.route('/').post(questionController.createQuestion).get(questionController.getQuestions);
router
  .route('/:questionId')
  .get(questionController.getQuestion)
  .patch(questionController.updateQuestion)
  .delete(questionController.deleteQuestion);

module.exports = router;

// /**
//  * @swagger
//  * tags:
//  *   name: Questions
//  */

// /**
//  * @swagger
//  * /questions:
//  *   post:
//  *     summary: Create a question
//  *     description:
//  *     tags: [Questions]
//  *     security:
//  *       - bearerAuth: []
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             required:
//  *               - title
//  *               - body
//  *               - category
//  *             properties:
//  *               title:
//  *                 type: string
//  *               body:
//  *                 type: string
//  *               category:
//  *                 type: string
//  *             example:
//  *               title: 알약 포장재
//  *               body: 알약 포장재는 어떻게 배출하나요?
//  *               category: 플라스틱
//  *     responses:
//  *       "201":
//  *         description: Created
//  *         content:
//  *           application/json:
//  *             schema:
//  *                $ref: '#/components/schemas/Question'
//  *
//  *   get:
//  *     summary: Get all questions
//  *     description:
//  *     tags: [Questions]
//  *     security:
//  *       - bearerAuth: []
//  *     parameters:
//  *       - in: query
//  *         name: title
//  *         schema:
//  *           type: string
//  *         description: Question title
//  *       - in: query
//  *         name: body
//  *         schema:
//  *           type: string
//  *         description: Question body
//  *       - in: query
//  *         name: category
//  *         schema:
//  *           type: string
//  *         description: Question category
//  *       - in: query
//  *         name: sortBy
//  *         schema:
//  *           type: string
//  *         description: sort by query in the form of field:desc/asc (ex. title:asc)
//  *       - in: query
//  *         name: limit
//  *         schema:
//  *           type: integer
//  *           minimum: 1
//  *         default: 10
//  *         description: Maximum number of questions
//  *       - in: query
//  *         name: page
//  *         schema:
//  *           type: integer
//  *           minimum: 1
//  *           default: 1
//  *         description: Page number
//  *     responses:
//  *       "200":
//  *         description: OK
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                 results:
//  *                   type: array
//  *                   items:
//  *                     $ref: '#/components/schemas/Question'
//  *                 page:
//  *                   type: integer
//  *                   example: 1
//  *                 limit:
//  *                   type: integer
//  *                   example: 10
//  *                 totalPages:
//  *                   type: integer
//  *                   example: 1
//  *                 totalResults:
//  *                   type: integer
//  *                   example: 1
//  */

// /**
//  * @swagger
//  * /questions/{id}:
//  *   get:
//  *     summary: Get a question
//  *     description:
//  *     tags: [Questions]
//  *     security:
//  *       - bearerAuth: []
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: string
//  *         description: Question id
//  *     responses:
//  *       "200":
//  *         description: OK
//  *         content:
//  *           application/json:
//  *             schema:
//  *                $ref: '#/components/schemas/Question'
//  *
//  *   patch:
//  *     summary: Update a question
//  *     description:
//  *     tags: [Questions]
//  *     security:
//  *       - bearerAuth: []
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: string
//  *         description: Question id
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               title:
//  *                 type: string
//  *               body:
//  *                 type: string
//  *               category:
//  *                 type: string
//  *             example:
//  *               title: 알약 포장재 (수정)
//  *               body: 알약 포장재는 어떻게 배출하나요? (수정)
//  *               category: 플라스틱 (수정)
//  *     responses:
//  *       "200":
//  *         description: OK
//  *         content:
//  *           application/json:
//  *             schema:
//  *                $ref: '#/components/schemas/Question'
//  *       "404":
//  *         $ref: '#/components/responses/NotFound'
//  *
//  *   delete:
//  *     summary: Delete a question
//  *     description:
//  *     tags: [Questions]
//  *     security:
//  *       - bearerAuth: []
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: string
//  *         description: Question id
//  *     responses:
//  *       "200":
//  *         description: No content
//  *       "404":
//  *         $ref: '#/components/responses/NotFound'
//  */
