'use strict';
const client = require('seneca')()
  .use(require('seneca-amqp-transport'))
  .client({
    type: 'amqp',
    pin: 'cmd:proxy',
    url: 'amqp://localhost:5672'
  });

const sendPostToQueue = (req, res, next) => {
  client.act('cmd:proxy', {
    message: req.body
  }, (err, mqResponse) => {
    if(err) next(err);
    req.queueResponse = mqResponse;
    next();
  });

};

const responseHandler = (req, res) => {
  res.status(200).send(req.queueResponse);
};

module.exports = exports = [sendPostToQueue, responseHandler];