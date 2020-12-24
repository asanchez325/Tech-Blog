const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');
const commentRoutes = require('./comment-routes.js');
const dashboardRoutes = require('.dashboard-routes.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('comments', commentRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;