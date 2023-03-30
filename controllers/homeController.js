const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.render('home');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
    res.render('login'); 
  });

  router.get('/signup', (req, res) => {
    res.render('signup'); 
  });
  

module.exports = router;
