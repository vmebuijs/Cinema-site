
Group ID: 26

Names:
Valérie Buijs (0850179)
Lisanne Boer (9529314)
Hanna Mock (0610399)

Link:
http://webtech.science.uu.nl/group26/

Brief explanation:
We have created a website for a cinema. In the top nav bar you can navigate to the ticket buying page and login page. On the login page you can go to the register page incase you don't have an account yet.
The structure: we have our main folder called "public" in this folder we have stored two things: the sources and the html files. In the sources we have stored all css, db, img and js files in their correct folder.


const moviesSql = 'CREATE TABLE Movies(movie_ID INTEGER AUTO_INCREMENT NOT NULL, title varchar(50) NOT NULL,genre varchar(50) NOT NULL,year INTEGER NOT NULL,director char(50) NOT NULL,writers varchar(50) NOT NULL,stars varchar(50) NOT NULL,poster varchar(50) NOT NULL,trailer varchar(50) NOT NULL,plot varchar(50) NOT NULL,available_dates varchar(50) NOT NULL,available_times varchar(5) NOT NULL,CONSTRAINT Movies_pk PRIMARY KEY(movie_ID))';
db.run(moviesSql);

const ordersSql = 'CREATE TABLE Orders(order_ID INTEGER AUTO_INCREMENT NOT NULL, username varchar(100) NOT NULL, movie_ID INTEGER NOT NULL, title varchar(100) NOT NULL, date varchar(100) NOT NULL, timeslot varchar(100) NOT NULL, price varchar(100) NOT NULL), CONSTRAINT Orders_pk PRIMARY KEY(order_ID)';
db.run(ordersSql);

const userSql = 'CREATE TABLE Users(username varchar(100) NOT NULL, email varchar(50) NOT NULL, creditcard INTEGER NOT NULL,adrress varchar(100) NOT NULL,password char(50) NOT NULL, CONSTRAINT Users_pk PRIMARY KEY(username))';
db.run(userSql);