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
 *               rating
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
 *               imageUrl: https://w.namu.la/s/2df291471786eddab777fc94d47fe4dcb6aea61b1a9004bc3298936f43e701be09bd688c61a0d38a3a177f3c15b21a560725b6b33bb5232409a38d0b9de5f33ac28457681837ec59ae83bec5c00311d9151f5fcdd00b45089d600b2cd126cc96c84635baa0be1d046d9df5aa1db81516
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
 *         name: title
 *         schema:
 *           type: string
 *         description: Movie title
 *       - in: query
 *         name: body
 *         schema:
 *           type: string
 *         description: Movie body
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Movie category
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. title:asc)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of movies
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
//  *   patch:
//  *     summary: Update a movie
//  *     description:
//  *     tags: [Movies]
//  *     security:
//  *       - bearerAuth: []
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: string
//  *         description: Movie id
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
//  *                $ref: '#/components/schemas/Movie'
//  *       "404":
//  *         $ref: '#/components/responses/NotFound'
//  *
//  *   delete:
//  *     summary: Delete a movie
//  *     description:
//  *     tags: [Movies]
//  *     security:
//  *       - bearerAuth: []
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: string
//  *         description: Movie id
//  *     responses:
//  *       "200":
//  *         description: No content
//  *       "404":
//  *         $ref: '#/components/responses/NotFound'
//  */
