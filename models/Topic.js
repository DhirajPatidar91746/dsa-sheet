const mongoose = require('mongoose');

const ProblemSchema = new mongoose.Schema({
  name: String,
  youtubeLink: String,
  leetcodeLink: String,
  articleLink: String,
  // We can use default _id for problems or keep a custom id (optional)
}, { _id: true });

const TopicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  level: { type: String, enum: ['Easy', 'Medium', 'Hard'], default: 'Easy' },
  problems: [ProblemSchema]
});

TopicSchema.index({ title: 1 });

module.exports = mongoose.model('Topic', TopicSchema);
