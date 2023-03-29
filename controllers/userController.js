const router = require('express').Router();
const { User } = require('../models');
const bcrypt = require('bcrypt');
const { checkAuthentication, checkNotAuthenticated } = require('../middleware/auth');

// Sign up route
router.post('/signup', checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await User.create({
      username: req.body.username,
      password: hashedPassword
    });
    req.session.user = newUser;
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Login route
router.post('/login', checkNotAuthenticated, async (req, res) => {
  try {
    const user = await User.findOne({ where: { username: req.body.username } });

    if (!user) {
      res.status(400).json({ message: 'Incorrect username or password' });
      return;
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect username or password' });
      return;
    }

    req.session.user = user;
    res.json({ user, message: 'You are now logged in!' });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Logout route
router.post('/logout', checkAuthentication, (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json({ message: 'You are now logged out!' });
    }
  });
});

module.exports = router;
