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
// Change POST to PATCH here for progress update
router.patch('/progress', authMiddleware, updateProgress);

module.exports = router;
