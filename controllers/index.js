const router = require('express').Router();


const userRoutes = require('./userController');
const postRoutes = require('./postController');
const commentRoutes = require('./commentController');
const homeRoutes = require('./homeController');


router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/', homeRoutes);


module.exports = router;
