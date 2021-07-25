const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const questionRoute = require('./question.route');
const movieRoute = require('./movie.route');
const answerRoute = require('./answer.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  // {
  //   path: '/auth',
  //   route: authRoute,
  // },
  // {
  //   path: '/users',
  //   route: userRoute,
  // },
  {
    path: '/docs',
    route: docsRoute,
  },
  {
    path: '/questions',
    route: questionRoute,
  },
  {
    path: '/answers',
    route: answerRoute,
  },
  { path: '/movies', route: movieRoute },
];

const devRoutes = [
  {
    path: '/docs',
    route: docsRoute,
  },
  {
    path: '/questions',
    route: questionRoute,
  },
  {
    path: '/answers',
    route: answerRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
