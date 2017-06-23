'use strict';

require('dotenv-safe').load();
const port = process.env.SERVER_PORT;

require('express')()
  .use(require('body-parser').json())
  .use(require('./src/sendPostToQueue'))
  .use(require('./src/defaultErrorHandler'))
  .listen(port, ()=>{
    console.log(`listening on ${port}`);
  });