const httpStatus = require('http-status');
const { catchAsync } = require('@libs');

const register = catchAsync(async (req, res) => {
  const user = {
    id: 1,
    name: req.body.name,
    email: req.body.email,
    role: 'user',
  };
  res.status(httpStatus.CREATED).send({ user });
});

module.exports = { register };
