const router = require('express').Router();
const { Comment, User, Post } = require('../models');
const { checkAuthentication } = require('../middleware/auth');

// Create a new comment on a post
router.post('/', checkAuthentication, async (req, res) => {
  try {
    const newComment = await Comment.create({
      content: req.body.content,
      user_id: req.session.user_id,
      post_id: req.body.post_id,
    });
    res.json(newComment);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update a comment by ID
router.put('/:id', checkAuthentication, async (req, res) => {
  try {
    const updatedComment = await Comment.update(
      { content: req.body.content },
      { where: { id: req.params.id, user_id: req.session.user_id } }
    );

    if (!updatedComment) {
      res.status(404).json({ message: 'Comment not found or not authorized to update' });
      return;
    }

    res.json(updatedComment);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete a comment by ID
router.delete('/:id', checkAuthentication, async (req, res) => {
  try {
    const commentToDelete = await Comment.destroy({
      where: { id: req.params.id, user_id: req.session.user_id },
    });

    if (!commentToDelete) {
      res.status(404).json({ message: 'Comment not found or not authorized to delete' });
      return;
    }

    res.json({ message: 'Comment deleted' });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
