const express = require('express');
const app = express();

app.use((req,res)=>{
  res.send('werd');
});

const port = process.env.SERVER_PORT;
app.listen(port, ()=>{
  console.log(`listening on ${port}`);
});