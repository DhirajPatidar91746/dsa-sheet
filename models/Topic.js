const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  level: { type: String, enum: ['Easy', 'Medium', 'Hard'], default: 'Easy' },
  problems: [
    {
      name: String,
      youtubeLink: String,
      leetcodeLink: String,
      articleLink: String,
      id: String // custom ID or name for client checkbox tracking
    }
  ]
});

TopicSchema.index({ title: 1 });

module.exports = mongoose.model('Topic', TopicSchema);
