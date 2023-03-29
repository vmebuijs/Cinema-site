const express = require('express');
const app = express();
const port = 8026;

const indexRouter = require('./router');

app.use(express.static('src'));
app.use(express.static('html'));

app.use('/', indexRouter);

app.listen(port, () => {
  console.log('Example app listening on port ${port}')
});


//web dev simplified