require('seneca')()
.use('seneca-amqp-transport')
.add('cmd:proxy', (req, done) => {
  console.log(req.message);
  return done(null, {
    ok: true,
    when: Date.now()
  });
})
.listen({
  type: 'amqp',
  pin: 'cmd:proxy',
  url: 'amqo://localhost:5672'
});