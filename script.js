
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
const cors = require('cors');
const bcrypt = require('bcrypt');

// function logger(req, res, next) {
//   console.log('%s %s', req.method, req.url);
//   next();
// }
// app.use(logger);
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



//app.use(express.static('src'));
//app.use(express.static('html'));

function logger(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
}

app.use(logger);




const db = new sqlite3.Database('src/db/movie.sqlite', sqlite3.OPEN_READWRITE, (err) => {
  if(err) return console.error(err.message); // html/ ervoor
});

const udb = new sqlite3.Database('src/db/users.sqlite', sqlite3.OPEN_READWRITE, (err) => {
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


//drop table
// udb.run('DROP TABLE Account');


// const userSql = 'CREATE TABLE test(name varchar(50) NOT NULL,email varchar(50) NOT NULL, adress varchar(50) NOT NULL, creditcard char(50) NOT NULL, username varchar(50) NOT NULL, password varchar(50) NOT NULL, CONSTRAINT Account_pk PRIMARY KEY(username))';
// udb.run(userSql);




// udb.run(`DELETE FROM  Account  WHERE email = 'h@n.nl'`, (err) => {
//         if(err) return console.error(err.message); 
// });

app.use(cors());
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
//   // res.setHeader("Access-Control-Allow-Origin", "http://webtech.science.uu.nl/group26/");
//   // res.setHeader("Access-Control-Allow-Origin", "http://webtech.science.uu.nl");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.get("/tp", (req, res) => {
  sql = 'SELECT title, poster FROM Movies';
  db.all(sql, [], (err, rows) => {
      if(err) return console.error(err.message);
      rows.forEach(row => {
          // console.log(row);
      });    
      res.status(200).json(rows);  
  });
})

app.get("/m", (req, res) => {
  sql = 'SELECT * FROM Movies';
  db.all(sql, [], (err, rows) => {
      if(err) return console.error(err.message);
      rows.forEach(row => {
          // console.log(row);
      });    
      res.status(200).json(rows);  
  });
})
// app.get('/films.html', (req, res)=>{
//   res.render('http://127.0.0.1:5500/films.html');
// })

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/login", async (req, res) => {  //group26/login
  try{
    let user = req.body.uname;
    let pass = req.body.psw;
    isql = `SELECT * FROM Account WHERE username = ? AND password = ?`
    udb.all(isql, [user, pass], (err, rij) => {
      if(err) return console.error(err.message);
      console.log(rij); 
      if(rij[0] == null){
        console.log('password or username is incorrect');
        res.redirect('http://127.0.0.1:5500/login.html') //group26/login.html
      } else{
        console.log('correct');
        res.redirect('http://127.0.0.1:5500/account.html') //group26/login.html
      }
      
      app.get("/log", (req, res) => {
        res.json(rij);
      })
      });
  }catch{
    // res.redirect('/login') //group26/login.html
  }
  
});

// udb.run("INSERT INTO Account VALUES ('1001','Valérie','Valerie3@gmail.com', 'lasseslaan 45', '2203', 'ilovetayler_34', 'ebdiuefj!#')", (err) => {
//   if(err) return console.error(err.message);
// })

app.post("/register", async (req, res) => {  //group26/register.html
  try{
    let hashedPassword = req.body.psw;
    let name = req.body.name;
    let email = req.body.email;
    let address = req.body.address;
    let creditcard = req.body.credit;
    let username = req.body.uname;
    ansql = 'SELECT * FROM Account WHERE username = ?' // checks if the username already excists in the database
    udb.all(ansql, [username], (err, names) => {
      if(err) return console.error(err.message);
      if(names[0] != null){
        console.log('username already exists');
        res.redirect('http://127.0.0.1:5500/register.html')
      } else{ // if not then an row is added to the database
        usql = 'INSERT INTO Account(name, email, adress, creditcard, username, password) VALUES (?,?,?,?,?,?)';
        udb.run(usql, [name, email, address, creditcard, username, hashedPassword], (err) => {
          if(err) return console.error(err.message);
          console.log("hoi");
    });
    res.redirect('http://127.0.0.1:5500/login.html') //group26/login.html
      }
    });
  }catch(err){
    console.log(err);
    res.redirect('http://127.0.0.1:5500/register.html') //group26/register.html
    
  }
  
  });


  var join = require('path').join;
  var staticPath = join(__dirname, "public/html");

  app.use(express.static(staticPath));
  app.get('order.js', function (req, res) {
    res.send(req.body.value);
    console.log(staticPath);
  })



  app.post('/order', (req, res) => {
    console.log("hi");
    const username = "bangtan#2"
    const movie_ID = req.body.movie;
    const date = req.body.date;
    const time =  req.body.time;

    sql = 'INSERT INTO Orders (username, movie_ID, datum, timeslot) VALUES (?, ?, ?, ?)'
    db.run(sql, [username, movie_ID, date, time], (error) => {
      if(error) {
        console.error(error);
        res.status(500).send('Error processing your order');
      } else {
        res.send('Your order for ${movie_ID} on ${date} at ${time} has been processed');
      }

    });
  });

  
// });
// app.get("/", (req, res) => {
//   res.send("<p>halloo</p>");
// });
//username id vinden 
  // bestaat die niet dan error message
  //password bij dat id vinden 
  // die twee passwords vergelijken 
  // als ze niet matchen dan 


// id moet nu elke keer aangepast worden
//ww niet meer in plain text
//                                      
// 1. ophalen gegevens                   
// 2. store die gegevens in een database 
// 3. kijk of ingevoerde gegevens overeenkomen met die in de database

// console.log(sql);
// npm run dev
// node script.js

// app.use((req, res) => {
//   express.response.status(404).send("page not found");
// })


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
// })
