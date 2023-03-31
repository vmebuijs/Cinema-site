const express = require('express');
const app = express();
const port = 8026;


app.use(express.static('html'));
app.use(express.static('src'));

app.listen(port, () => {
  console.log('Example app listening on port ${port}')
});
