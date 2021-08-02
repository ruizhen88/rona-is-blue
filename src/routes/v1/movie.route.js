const express = require('express');
// const auth = require('../../middlewares/auth');
// const validate = require('../../middlewares/validate');
// const movieValidation = require('../../validations/movie.validation');
const movieController = require('../../controllers/movie.controller');

const router = express.Router();

router.route('/').post(movieController.createMovie).get(movieController.getMovies);
router
  .route('/:movieId')
  .get(movieController.getMovie)
  .patch(movieController.updateMovie)
  .delete(movieController.deleteMovie);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Movies
 */

/**
 * @swagger
 * /movies:
 *   post:
 *     summary: Create a movie
 *     description:
 *     tags: [Movies]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - year
 *               - summary
 *               - director
 *               - categories
 *               - rating
 *               - imageUrl
 *             properties:
 *               title:
 *                 type: string
 *               year:
 *                 type: number
 *               summary:
 *                 type: string
 *               director:
 *                 type: string
 *               categories:
 *                 type: array
 *                 items:
 *                    type: string
 *               rating:
 *                 type: number
 *               imageUrl:
 *                 type: string
 *             example:
 *               title: 랑종
 *               year: 2021
 *               summary: 태국 북동부 ‘이산’ 지역 낯선 시골 마을
 *               director: 반종 피산다나쿤
 *               categories: ['공포']
 *               rating: 7.6
 *               imageUrl: https://i.stack.imgur.com/y9DpT.jpg
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Movie'
 *
 *   get:
 *     summary: Get all movies
 *     description:
 *     tags: [Movies]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: categories
 *         schema:
 *           type: string
 *         description: Movie category
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of movies per page
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Movie'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 */

/**
 * @swagger
 * /movies/{id}:
 *   get:
 *     summary: Get a movie
 *     description:
 *     tags: [Movies]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Movie id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Movie'
 *
 *   patch:
 *     summary: Update a movie
 *     description:
 *     tags: [Movies]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Movie id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               year:
 *                 type: number
 *               summary:
 *                 type: string
 *               director:
 *                 type: string
 *               categories:
 *                 type: array
 *                 items:
 *                    type: string
 *               rating:
 *                 type: number
 *               imageUrl:
 *                 type: string
 *             example:
 *               title: 랑종
 *               year: 2021
 *               summary: 태국 북동부 ‘이산’ 지역 낯선 시골 마을
 *               director: 반종 피산다나쿤
 *               categories: ['공포']
 *               rating: 7.6
 *               imageUrl: https://i.stack.imgur.com/y9DpT.jpg
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Movie'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a movie
 *     description:
 *     tags: [Movies]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Movie id
 *     responses:
 *       "200":
 *         description: No content
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
