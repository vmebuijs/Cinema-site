
//web dev simplified
// const express = require('express');
// const router = express.Router();

// router.get('/', (req, res) => {
//     res.send("helloo");
// });

// var http = require("http");
// http.createServer(function (request, response) {
// // Send the HTTP header
// // HTTP Status: 200 : OK
// // Content Type: text/plain
// response.writeHead(200, {'Content-Type': 'text/plain'});
// // Send the response body as "Hello World"
// response.end('Hello booo!\n');
// }).listen(8026);
// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');


const express = require('express');
const app = express();
const port = 8026;


const { json } = require('express');
const sqlite3 = require('sqlite3').verbose();
// var path = require('path');
// var apiRouter = require('./router/secret_routing')
// var staticPath = path.resolve(__dirname, 'static');

//connect db



//app.use(express.static('src'));
//app.use(express.static('html'));

const db = new sqlite3.Database('./movie.sqlite', sqlite3.OPEN_READWRITE, (err) => {
  if(err) return console.error(err.message);
});

// sql = 'UPDATE Movies SET available_dates = ?  WHERE movie_ID = ?';
// db.run(sql, ['3 november,4 november,10 november,13 november,25 november', 23132], (err) => {
//         if(err) return console.error(err.message); 
// }); 

// sql = 'UPDATE Movies SET available_times = ?  WHERE movie_ID = ?';
// db.run(sql, ['8:00,16:00,23:00', 23132], (err) => {
//         if(err) return console.error(err.message); 
// }); 


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  // res.setHeader("Access-Control-Allow-Origin", "http://localhost:5500/");
  // res.setHeader("Access-Control-Allow-Origin", "http://webtech.science.uu.nl");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/tp", function(req, res){
  sql = 'SELECT title, poster FROM Movies';
  db.all(sql, [], (err, rows) => {
      if(err) return console.error(err.message);
      rows.forEach(row => {
          // console.log(row);
      });    
      res.status(200).json(rows);  
  });
})

app.get("/m", function(req, res){
  sql = 'SELECT * FROM Movies';
  db.all(sql, [], (err, rows) => {
      if(err) return console.error(err.message);
      rows.forEach(row => {
          // console.log(row);
      });    
      res.status(200).json(rows);  
  });
})


// console.log(sql);

app.use(express.static('html'));
app.use(express.static('src'));

app.listen(port, () => {
  console.log('Example app listening on port ${port}')
});

// const indexRouter = require('./router');
// app.use(express.static(staticPath));
// app.use('/secret/', apiRouter);



// app.use('/', indexRouter);

// app.listen(port, () => {
//   console.log('Example app listening on port ${port}')
// });


