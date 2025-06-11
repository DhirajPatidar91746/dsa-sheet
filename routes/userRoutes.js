const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { getUserProgress } = require('../controllers/userController');

router.get('/progress', authMiddleware, getUserProgress);

module.exports = router;
