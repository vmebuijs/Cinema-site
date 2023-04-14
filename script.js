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

function logger(req, res, next) {
  console.log('%s %s', req.method, req.url);
  next();
}
app.use(logger);
app.use(cors());
app.use(express.static('html'));
app.use(express.static('src'));
// Initialization
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(flash());
app.use(session({
  secret: "secret",
  saveUninitialized: false,
  resave: false
}));


//connect to database
const db = new sqlite3.Database('html/src/db/movie.sqlite', sqlite3.OPEN_READWRITE, (err) => {
  if(err) return console.error(err.message); // html/ ervoor
});

const udb = new sqlite3.Database('html/src/db/users.sqlite', sqlite3.OPEN_READWRITE, (err) => {
  if(err) return console.error(err.message);
});


// routes
router.get('/login.html', (req, res) => res.send('login.html'));
router.get('/register.html', (req, res) => res.send('register.html'));
router.get('/account.html', (req, res) => res.send('account.html'));
router.get('/order.html', (req, res) => res.send('order.html'));
router.get('/index.html', (req, res) => res.send('index.html'));
router.get('/film.html', (req, res) => res.send('film.html'));


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

app.post("/register.html", async (req, res) => {  //group26/register.html
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
        res.redirect('/register.html')
      } 
      else { // if not then an row is added to the database
        usql = 'INSERT INTO Account(name, email, adress, creditcard, username, password) VALUES (?,?,?,?,?,?)';
        udb.run(usql, [name, email, address, creditcard, username, req.body.psw], (err, rij) => {
          if(err) return console.error(err.message);
          console.log(rij);
        });
        res.redirect('login.html') //group26/login.html
        
      }
    });
    });
  }catch(err){
    console.log(err);
    res.redirect('register.html') //group26/register.html
  }
});

/*
  als de data goed is
  rij met data 
  sessionStorage.username = rij[0].username;

  if(!sessionStorage.username){ //niet ingelogd

  }
  else{ //wel ingelogd

  }
  "hallo ${sessionStorage.name}"
*/


app.post("/login.html", (req, res) =>{
  try{
    let user = req.body.uname;
    let pwd = req.body.psw;
    isql = `SELECT * FROM Account WHERE username = ? AND password = ?`
    udb.all(isql, [user, pwd], (err, rij) => {
      if(err) return console.error(err.message);
      if(rij[0] != null){
        console.log("succes");
        res.redirect('account.html'); //group26/login.html
      }
      else{
        console.log('password or username is incorrect');
        res.redirect('login.html');
      }

      
    //   if(err) return console.error(err.message);
      // psql = `SELECT password FROM Account WHERE username = ?`
      // udb.all(psql, [user], (err, rij) => {
      //   if(err) return console.error(err.message);
      //     console.log(rij[0].password);
      //     let pas = JSON.stringify(rij[0].password);
      //     console.log(pwd);
      //     bcrypt
      //       .compare(pwd, pas)
      //       .then(res => {
      //         console.log(res) // return true
      //     })
      //       .catch(err => console.error(err.message)) 
      //     if(bcrypt.compare(pwd, pas)){
      //       console.log("succes");
      //       res.redirect('account.html') //group26/login.html
      //     } else{
      //       console.log('password or username is incorrect');
      //       res.redirect('login.html') //group26/login.html
      //       loggedIN = false;
      //     }
              
        });
          
  }catch{
    res.redirect('login.html') //group26/login.html
  }
})


// console.log('correct');
//                   // let b = req.session.user;
//                   var b = rij;
//                   let c = true;
//                   // req.session.save();
//                   let sessionuser = b;
//                   console.log(sessionuser); 
                  
//               }

var join = require('path').join;
var staticPath = join(__dirname, "public/html");

app.use(express.static(staticPath));
app.get('order.js', function (req, res) {
  res.send(req.body.value);
  console.log(staticPath);
})


app.listen(port, () => {
  console.log('Example app listening on port ${port}')
});

