const { Post } = require('../models');

const postData = [
  {
    title: 'Sample Post 1',
    content: 'This is a sample blog post.',
    user_id: 1, 
  },
  {
    title: 'Sample Post 2',
    content: 'This is another sample blog post.',
    user_id: 2, 
  },
];

const seedPosts = async () => {
  await Post.bulkCreate(postData);
};

module.exports = seedPosts;
