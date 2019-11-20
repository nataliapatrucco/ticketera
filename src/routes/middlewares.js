isLoggedIn = function(req, res, next) {
  if (req.isAuthenticated() && req.user) {
    next();
  } else {
    res.sendStatus(403);
  }
};

isAdmin = function(req, res, next) {
  if (req.isAuthenticated() && req.user.isAdmin) {
    next();
  } else {
    res.sendStatus(403);
  }
};

module.exports = { isLoggedIn, isAdmin };
