const express = require('express');
const router = express.Router();
const {
  getTopics,
  addTopic,
  updateProgress
} = require('../controllers/topicController');

const authMiddleware = require('../middleware/authMiddleware');

router.get('/', getTopics);
router.post('/', authMiddleware, addTopic);
router.post('/progress', authMiddleware, updateProgress);

module.exports = router;
