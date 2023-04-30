const { SECRET_KEY } = require('../config/env');

/**
 * Todo: Need to attach the Slack Auths here
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
exports.authenticateUser = (req, res, next) => {
  try {
    next();
  } catch (error) {
    res.status(401).json({ message: 'Authorization failed: Invalid token' });
  }
};
