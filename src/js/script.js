const express = require('express');
const app = express();
const port = 8026;


app.use(express.static('src'));
app.use(express.static('html'));


app.listen(port, () => {
  console.log('Example app listening on port ${port}')
});
