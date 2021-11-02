const express = require('express');
// const auth = require('../../middlewares/auth');
// const validate = require('../../middlewares/validate');
// const postValidation = require('../../validations/post.validation');
const postController = require('../../controllers/post.controller');

const router = express.Router();

router.route('/').post(postController.createPost).get(postController.getPosts);
router.route('/:postId').get(postController.getPost).patch(postController.updatePost).delete(postController.deletePost);

module.exports = router;

// /**
//  * @swagger
//  * tags:
//  *   name: Posts
//  */

// /**
//  * @swagger
//  * /posts:
//  *   post:
//  *     summary: Create a post
//  *     description:
//  *     tags: [Posts]
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
//  *                $ref: '#/components/schemas/Post'
//  *
//  *   get:
//  *     summary: Get all posts
//  *     description:
//  *     tags: [Posts]
//  *     security:
//  *       - bearerAuth: []
//  *     parameters:
//  *       - in: query
//  *         name: title
//  *         schema:
//  *           type: string
//  *         description: Post title
//  *       - in: query
//  *         name: body
//  *         schema:
//  *           type: string
//  *         description: Post body
//  *       - in: query
//  *         name: category
//  *         schema:
//  *           type: string
//  *         description: Post category
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
//  *         description: Maximum number of posts
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
//  *                     $ref: '#/components/schemas/Post'
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
//  * /posts/{id}:
//  *   get:
//  *     summary: Get a post
//  *     description:
//  *     tags: [Posts]
//  *     security:
//  *       - bearerAuth: []
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: string
//  *         description: Post id
//  *     responses:
//  *       "200":
//  *         description: OK
//  *         content:
//  *           application/json:
//  *             schema:
//  *                $ref: '#/components/schemas/Post'
//  *
//  *   patch:
//  *     summary: Update a post
//  *     description:
//  *     tags: [Posts]
//  *     security:
//  *       - bearerAuth: []
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: string
//  *         description: Post id
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
//  *                $ref: '#/components/schemas/Post'
//  *       "404":
//  *         $ref: '#/components/responses/NotFound'
//  *
//  *   delete:
//  *     summary: Delete a post
//  *     description:
//  *     tags: [Posts]
//  *     security:
//  *       - bearerAuth: []
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: string
//  *         description: Post id
//  *     responses:
//  *       "200":
//  *         description: No content
//  *       "404":
//  *         $ref: '#/components/responses/NotFound'
//  */
