const { Comment } = require('../models');

const commentData = [
  {
    content: 'This is a sample comment.',
    user_id: 1, 
    post_id: 1, 
  },
  {
    content: 'This is another sample comment.',
    user_id: 2, 
    post_id: 1, 
  },
];

const seedComments = async () => {
  await Comment.bulkCreate(commentData);
};

module.exports = seedComments;
