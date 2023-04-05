
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

var bodyParser = require("body-parser");
const { json } = require('express');
const sqlite3 = require('sqlite3').verbose();
// var path = require('path');
// var apiRouter = require('./router/secret_routing')
// var staticPath = path.resolve(__dirname, 'static');
// app.set('view-engine', 'ejs');

// app.get('/loginInfo', (req, res)=>{
//   res.render('index.ejs');
// })
//connect db

// sql = 'UPDATE Movies SET poster = ? WHERE movie_ID = ?';
// db.run(sql, ['src/img/harryPotterIMG.jpg', 23132], (err) => {
//         if(err) return console.error(err.message); 
// }); 

//app.use(express.static('src'));
//app.use(express.static('html'));

const db = new sqlite3.Database('./movie.sqlite', sqlite3.OPEN_READWRITE, (err) => {
  if(err) return console.error(err.message);
});

const udb = new sqlite3.Database('./users.sqlite', sqlite3.OPEN_READWRITE, (err) => {
  if(err) return console.error(err.message);
});

// const userSql = 'CREATE TABLE Account(account_ID INTEGER NOT NULL, name varchar(50) NOT NULL,email varchar(50) NOT NULL, adress varchar(50) NOT NULL, creditcard char(50) NOT NULL, username varchar(50) NOT NULL, password varchar(50) NOT NULL, CONSTRAINT Account_pk PRIMARY KEY(account_ID))';
// udb.run(userSql);



     


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  // res.setHeader("Access-Control-Allow-Origin", "http://webtech.science.uu.nl/group26/");
  // res.setHeader("Access-Control-Allow-Origin", "http://webtech.science.uu.nl");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/tp", (req, res) => {
  sql = 'SELECT title, poster FROM Movies';
  db.all(sql, [], (err, rows) => {
      if(err) return console.error(err.message);
      rows.forEach(row => {
          console.log(row);
      });    
      res.status(200).json(rows);  
  });
})

app.get("/m", (req, res) => {
  sql = 'SELECT * FROM Movies';
  db.all(sql, [], (err, rows) => {
      if(err) return console.error(err.message);
      rows.forEach(row => {
          console.log(row);
      });    
      res.status(200).json(rows);  
  });
})
app.get("/index", (req, res) => {
  res.status(200).send('index.html')
});

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/loginInfo", (req, res) => {
  let username = req.body.uname;
  let password = req.body.psd;
  res.status(200).send(username + password);
  isql = `SELECT password FROM Account WHERE username = ?`
  udb.all(isql, [username], (err, row) => {
    if(err) return console.error(err.message);
    console.log(row);
  if(row == password){
    console.log('success');
  }else{
    console.log('fail');
  }
});

// udb.run("INSERT INTO Account VALUES ('1001','Valérie','Valerie3@gmail.com', 'lasseslaan 45', '2203', 'ilovetayler_34', 'ebdiuefj!#')", (err) => {
//   if(err) return console.error(err.message);
// })

app.post("/register", (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let address = req.body.address;
  let creditcard = req.body.credit;
  let username = req.body.uname;
  let password = req.body.psw;
  usql = 'INSERT INTO Account(account_ID ,name , email, adress, creditcard, username, password) VALUES (?,?,?,?,?,?,?)';
  udb.run(usql, ['8240', name, email, address, creditcard, username, password], (err) => {
    if(err) return console.error(err.message);
  });
  
})

// app.post("/login", (req, res) =>{
//   let username = req.body.uname;
//   let password = req.body.psw;
//   // usql = `SELECT account_ID FROM Account WHERE username = ?`
//   // udb.run(sql, [username], (err) => {
//   //   if(err) return console.error(err.message);
//   // });
//   isql = `SELECT password FROM Account WHERE username = ?`
//   udb.run(isql, [username], (err) => {
//     if(err) return console.error(err.message);
//     //error data password or username incorrect is
//   });

  //username id vinden 
  // bestaat die niet dan error message
  //password bij dat id vinden 
  // die twee passwords vergelijken 
  // als ze niet matchen dan 
});
// id moet nu elke keer aangepast worden
//ww niet meer in plain text
//                                      
// 1. ophalen gegevens                   
// 2. store die gegevens in een database 
// 3. kijk of ingevoerde gegevens overeenkomen met die in de database
// console.log(sql);
// npm run dev
// node script.js
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


