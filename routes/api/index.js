const router = require('express').Router();
// const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');

// router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes); // exposes localhost/api/users

module.exports = router;