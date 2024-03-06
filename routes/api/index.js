const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtsRoutes = require('./thoughtsRoutes');
const reactionsRoutes = require('./reactionsRoutes');
const friendsRoutes = require('./friendsRoutes');

router.use('/user', userRoutes);
router.use('/thoughts', thoughtsRoutes);
router.use('/reactions', reactionsRoutes);
router.use('/friends', friendsRoutes);

module.exports = router;
