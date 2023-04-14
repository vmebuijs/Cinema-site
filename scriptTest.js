const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();

const udb = new sqlite3.Database('src/db/users.sqlite', sqlite3.OPEN_READWRITE, (err) => {
    if(err) return console.error(err.message);
});

const initialPath = path.join(__dirname, 'public');

// app.use(bodyParser.json());
app.use(express.static(initialPath));
app.use(bodyParser.urlencoded({extended: 'false'}));
app.use(express.json());


//routing
app.get('/', (req, res) => {
    res.sendFile(path.join(initialPath, 'homeTest.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(initialPath, 'loginTest.html'));
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(initialPath, 'registerTest.html'));
})

// app.post('/login', (req, res) => {
//     let username = req.body.username;
//     let password = req.body.password;

//     // sql = 'SELECT username, password FROM Account Where'
//     // udb.get();
// })

// app.post("/register", (req, res) => {    
//     let name = req.body.name;
//     let email = req.body.email;
//     let address = req.body.address;
//     let creditcard = req.body.creditcard;
//     let username = req.body.username;
//     let password = req.body.password;

//     sql = 'INSERT INTO Account(name, email, adress, creditcard, username, password) VALUES(?,?,?,?,?,?)';
//     udb.run(sql, [name, email, address, creditcard, username, password], (err) => {
//         if(err) return console.error(err.message);
//     })
//     //res.send(`Name: ${name} email: ${email} address: ${address} creditcard: ${creditcard} Username: ${username} Password: ${password}`);
//     // const { name, email, address, creditcard, username, password } = req.body;
//     // console.log('yo');
//     res.redirect('/login');
    
// })

const port = 8000;


//listening to port
app.listen(port, () => {
    console.log(`hello you on port: ${port}`);
});


sql = 'DELETE FROM Account WHERE username = ?';
udb.run(sql, ['qwertyui'], (err) => {
        if(err) return console.error(err.message); 
});

udb.close();