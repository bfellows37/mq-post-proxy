'use strict';

require('dotenv-safe').load();
const port = process.env.SERVER_PORT;

require('express')()
  .use(require('body-parser').json())
  .use(require('./sendPostToQueue'))
  .use(require('./defaultErrorHandler'))
  .listen(port, ()=>{
    console.log(`listening on ${port}`);
  });