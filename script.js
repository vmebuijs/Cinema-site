const { json } = require('express');
const express = require('express');
// var path = require('path');
// var apiRouter = require('./router/secret_routing')
// var staticPath = path.resolve(__dirname, 'static');
const app = express();
const port = 8026;
const sqlite3 = require('sqlite3').verbose();


//connect db
const db = new sqlite3.Database('./movie.sqlite', sqlite3.OPEN_READWRITE, (err) => {
    if(err) return console.error(err.message);
});

app.use(express.static('src'));
app.use(express.static('html'));

app.get("/tp", function(req, res){
  sql = 'SELECT title, poster FROM Movies';
  db.all(sql, [], (err, rows) => {
      if(err) return console.error(err.message);
      rows.forEach(row => {
          console.log(row);
      });    
      res.status(200).json(rows);  
  });
})

app.get("/m", function(req, res){
  sql = 'SELECT * FROM Movies';
  db.all(sql, [], (err, rows) => {
      if(err) return console.error(err.message);
      rows.forEach(row => {
          console.log(row);
      });    
      res.status(200).json(rows);  
  });
})

// console.log(sql);


// const indexRouter = require('./router');
// app.use(express.static(staticPath));
// app.use('/secret/', apiRouter);



// app.use('/', indexRouter);

app.listen(port, () => {
  console.log('Example app listening on port ${port}')
});


//web dev simplified