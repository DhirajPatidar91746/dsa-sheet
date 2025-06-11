const User = require('../models/User');

exports.getUserProgress = async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('progress');
      // Format progress as { topicId: [problemId1, problemId2] }
      const progressMap = {};
      user.progress.forEach(({ topicId, completedProblems }) => {
        progressMap[topicId] = completedProblems;
      });
      res.json(progressMap);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  