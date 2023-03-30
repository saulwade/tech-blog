function checkAuthentication(req, res, next) {
  if (req.session && req.session.user_id) {
    next();
  } else {
    res.status(401).json({ message: 'You must be logged in to perform this action' });
  }
}

function checkNotAuthenticated(req, res, next) {
  if (!req.session || !req.session.user_id) {
    next();
  } else {
    res.status(401).json({ message: 'You are already logged in' });
  }
}

module.exports = {
  checkAuthentication,
  checkNotAuthenticated,
};
