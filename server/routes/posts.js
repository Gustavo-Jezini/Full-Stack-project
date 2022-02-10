const { getPosts } = require('../controllers/postsController');

const router = require('express').Router()

router.get('/', getPosts)

module.exports = router;