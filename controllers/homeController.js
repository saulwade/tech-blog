const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    // Render the homepage view
    res.render('home');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
    res.render('login'); // Ensure you have a 'login' view in your views directory
  });

module.exports = router;
