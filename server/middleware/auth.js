const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  // Look for token in header and cookies
  const token = req.header('x-auth-token');

  if (!token)
    return res
      .status(401)
      .send(`Access Denied. No Token Provided. Token: ${token}`);

  try {
    const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send('Invalid Token');
  }
};
