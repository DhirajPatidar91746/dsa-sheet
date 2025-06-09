const Topic = require('../models/Topic');
const User = require('../models/User');

exports.getTopics = async (req, res) => {
  try {
    const topics = await Topic.find();
    res.json(topics);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addTopic = async (req, res) => {
  try {
    const topic = new Topic(req.body);
    await topic.save();
    res.status(201).json(topic);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProgress = async (req, res) => {
  const userId = req.user.id;
  const { topicId, problemId } = req.body;

  try {
    const user = await User.findById(userId);
    const topicProgress = user.progress.find(p => p.topicId.toString() === topicId);

    if (topicProgress) {
      if (!topicProgress.completedProblems.includes(problemId)) {
        topicProgress.completedProblems.push(problemId);
      }
    } else {
      user.progress.push({ topicId, completedProblems: [problemId] });
    }

    await user.save();
    res.json({ msg: 'Progress updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
