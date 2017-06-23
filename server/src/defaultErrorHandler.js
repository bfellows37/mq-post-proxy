'use strict';

const defaultErrorHandler = (error, req, res, next) => {
  console.log(error.message || error.msg);
  res.status(500);
  res.send('An error occurred.');
};

module.exports = exports = defaultErrorHandler;