const { Comment } = require('../models');

const commentData = [
  {
    text: 'This is a comment from user 1',
    user_id: 1,
    post_id: 1,
  },
  {
    text: 'This is a comment from user 2',
    user_id: 2,
    post_id: 1,
  },
];

const seedComments = async () => {
  await Comment.bulkCreate(commentData);
};

module.exports = seedComments;
