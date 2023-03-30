const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    // Render the homepage view
    res.render('home');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
