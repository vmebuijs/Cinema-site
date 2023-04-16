/*
  This is the server side script. Here we require our downloads and made our routes. We also added  a logger. The databse is connected in this file as well, and we send post and reqrest statements.    
*/

const express = require('express');
const router = express.Router();
const { authenticate } = require('passport');
const app = express();
const port = 8026;
const cors = require('cors');
const flash = require('express-flash');
const bcrypt = require('bcrypt');
const passport = require('passport');
const session = require("express-session");
const cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
const { json } = require('express');
const { request } = require('http');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

function logger(req, res, next) {
  console.log('%s %s', req.method, req.url);
  next();
}

app.use(logger);
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(flash());
app.use(session({
  secret: "secret",
  saveUninitialized: false,
  resave: false,
  cookie: {}
}));

var join = require('path').join;
var staticPath = join(__dirname, "public");
app.use(express.static(staticPath));

//Connect the databases
const db = new sqlite3.Database('public/src/db/movie.sqlite', sqlite3.OPEN_READWRITE, (err) => {
  if(err) return console.error(err.message); // html/ ervoor
});

const udb = new sqlite3.Database('public/src/db/users.sqlite', sqlite3.OPEN_READWRITE, (err) => {
  if(err) return console.error(err.message);
});

//Routing
router.get('/login.html', (req, res) => res.send('public/login.html'));
router.get('/register.html', (req, res) => res.send('public/register.html'));
router.get('/account.html', (req, res) => res.send('public/account.html'));
router.get('/order.html', (req, res) => res.send('public/order.html'));
router.get('/index.html', (req, res) => res.send('public/index.html'));
router.get('/film.html', (req, res) => res.send('public/film.html'));


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

app.get('/user', (req, res) =>{
  let sessionuser = req.session.row;
  res.json(sessionuser);
});
  // usql = 'SELECT * FROM Account WHERE username = ?'
  // udb.all(usql, [us.username], (err, sessionuser) =>{
   //  if(err) return console.error(err.message);
   //  res.json(sessionuser);
  // });

// Changing url and redirecting if not logged in
app.get('/index', (req, res) => {res.sendFile(join(staticPath, "index.html"));})
app.get('/film', (req, res) => {res.sendFile(join(staticPath, "film.html"));})
app.get('/login', (req, res) => {res.sendFile(join(staticPath, "login.html"));})
app.get('/register', (req, res) => {res.sendFile(join(staticPath, "register.html"));})
app.get('/order', (req, res) => {
  if (req.cookies.user != null){
    res.sendFile(join(staticPath, "order.html"));
  }
  else{
    res.sendFile(join(staticPath, "login.html"));
  }
})
app.get('/account', (req, res) => {
  if (req.cookies.user != null){
    res.sendFile(join(staticPath, "account.html"));
  }
  else{
    res.sendFile(join(staticPath, "login.html"));
  }
})


app.get('/logout', (req, res) =>{
  req.session.row = null;
  res.clearCookie('user');
  res.redirect('login');
});

app.get('/orderHistory', (req, res) =>{
  let username = req.cookies.user;
  osql = 'SELECT order_ID, movie_ID, date, timeslot, price, title FROM Orders WHERE username = ?'
  db.all(osql, [username], (err, userRow) =>{
    if(err) return console.error(err.message);
    userR = userRow;
  });
  res.json(userR);

  // let movieR = [];
  // for (let i = 0; i < 2; i++){
  //   bsql = 'SELECT poster, title FROM Movies WHERE movie_ID = ?' 
  //   db.all(bsql, [userR[i].movie_ID], (err, movieRow) =>{
  //     if(err) return console.error(err.message);
  //     movieR[0].movieRow;
  //   }); 
  // }
  // for (let i in movieID){
  //   bsql = 'SELECT poster, title FROM Movies WHERE movie_ID = ?' 
  //   db.all(bsql, [i], (err, movieRow) =>{
  //     if(err) return console.error(err.message);
  //     movieR = movieRow;
  //   });
    // films.push(movieR);
  //}
});

app.post("/register", async (req, res) => {  
  try{
    bcrypt.hash(req.body.psw, (err, hash) => {
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
          res.redirect('/register')
        } 
        else { // if not then an row is added to the database
          usql = 'INSERT INTO Account(name, email, adress, creditcard, username, password) VALUES (?,?,?,?,?,?)';
          udb.run(usql, [name, email, address, creditcard, username, req.body.psw], (err, rij) => {
            if(err) return console.error(err.message);
            console.log(rij);
          });
          res.redirect('login')
        }
      });
    });
  }catch(err){
    console.log(err);
    res.redirect('register') 
  }
});

app.post("/login", (req, res) =>{
  try{
    let user = req.body.uname;
    let pwd = req.body.psw;
    isql = `SELECT * FROM Account WHERE username = ? AND password = ?`
    udb.all(isql, [user, pwd], (err, rij) => {
      if(err) return console.error(err.message);
      // isql = `SELECT username FROM Account`
      // udb.all(isql, [user, pwd], (err, usern) => {
      // if(err) return console.error(err.message);
      //   let sesh2 = usern;
      //   req.session.user = usern;
      //   req.session.save();
      //   console.log(sesh2);
    // });  
      if(rij[0] != null){
        console.log("succes");
        let sesh = rij;
        req.session.row = sesh;
        req.session.save();
        console.log(sesh);
        res.cookie('user', sesh[0].username);
        res.redirect('account'); 
      }
      else{
        console.log('password or username is incorrect');
        res.redirect('login');
      }       
    });      
  }
  catch{
    res.redirect('login') 
  }
})


app.get('order.js', function (req, res) {
  res.send(req.body.value);
  console.log(staticPath);
})



app.post('/order', (req, res) => {
  const { movie_title, movie_ID, movie_date, movie_time} = req.body;

  let price = "7,50";
  let username = req.cookies.user;

  
  usql = 'SELECT MAX(order_ID) as max_id FROM Orders'
  db.all(usql, [], (err, names) => {
    if(err) {
      return console.error(err.message);
    }
    // let id = names[0].order_ID += 1
    sql= 'INSERT INTO Orders(order_ID, title, movie_ID, date, timeslot, username, price) VALUES (?, ?, ?, ?, ?, ?, ?)'
    db.run(sql,[120, movie_title, movie_ID, movie_date, movie_time, username, price], (err) => {
    if (err) {
      res.send(err.message);
      res.status(200).send('Order added NOT successfully.');
    } else {
      res.status(200).send('Order added successfully.');

    }
  });
  });
  

});


app.listen(port, () => {
  console.log('Example app listening on port ${port}')
});