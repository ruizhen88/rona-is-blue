const express = require('express');
// const authRoute = require('./auth.route');
// const userRoute = require('./user.route');
const postRoute = require('./post.route');
const movieRoute = require('./movie.route');
const commentRoute = require('./comment.route');
const docsRoute = require('./docs.route');
// const config = require('../../config/config');

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
    path: '/posts',
    route: postRoute,
  },
  {
    path: '/comments',
    route: commentRoute,
  },
  { path: '/movies', route: movieRoute },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
// if (config.env === 'development') {
//   devRoutes.forEach((route) => {
//     router.use(route.path, route.route);
//   });
// }

module.exports = router;
