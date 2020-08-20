const httpStatus = require('http-status');

const register = async (req, res) => {
  res.status(httpStatus.CREATED).send({ message: 'created' });
};

module.exports = { register };
