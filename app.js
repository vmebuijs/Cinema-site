const sqlite3 = require('sqlite3').verbose();
let sql;

//connect db
const db = new sqlite3.Database('./test.db', sqlite3.OPEN_READWRITE, (err) => {
    if(err) return console.error(err.message);
});

// create table
// sql = 'CREATE TABLE users(id INTEGER PRIMARY KEY, first_name, last_name, username, password, email)';
// db.run(sql);

// //drop table
// db.run('DROP TABLE users');

// insert data into table
// sql = 'INSERT INTO users(first_name, last_name, username, password, email) VALUES(?,?,?,?,?)';
// db.run(sql, ["hanna", "M", "Han1", "haha", "Hanna@gmail.com"], (err) => {
//     if(err) return console.error(err.message);
// })

// update data
// sql = 'UPDATE users SET first_name = ? WHERE id = ?';
// db.run(sql, ['mol', 1], (err) => {
//         if(err) return console.error(err.message); 
// });

// delete data
// sql = 'DELETE FROM users WHERE id = ?';
// db.run(sql, [1], (err) => {
//         if(err) return console.error(err.message); 
// });

// query the database
// sql = 'SELECT * FROM users';
// db.all(sql, [], (err, rows) => {
//     if(err) return console.error(err.message);
//         rows.forEach(row => {
//             console.log(row);
//         });
// });