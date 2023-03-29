const sqlite3 = require('sqlite3').verbose();
let sql;

//connect db
const db = new sqlite3.Database('./movie.db', sqlite3.OPEN_READWRITE, (err) => {
    if(err) return console.error(err.message);
});


// create table
// const moviesSql = 'CREATE TABLE Movies(movie_ID INTEGER AUTO_INCREMENT NOT NULL, title varchar(50) NOT NULL,genre varchar(50) NOT NULL,year INTEGER NOT NULL,director char(50) NOT NULL,writers varchar(50) NOT NULL,stars varchar(50) NOT NULL,poster varchar(50) NOT NULL,trailer varchar(50) NOT NULL,plot varchar(50) NOT NULL,available_dates varchar(50) NOT NULL,available_times varchar(5) NOT NULL,CONSTRAINT Movies_pk PRIMARY KEY(movie_ID))';
// db.run(moviesSql);

// //drop table
// db.run('DROP TABLE Movies');

// insert data into table
// sql = 'INSERT INTO Movies(movie_ID, title, genre, year, director, writers, stars, poster, trailer, plot, available_dates, available_times) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)';
// db.run(sql, ['23132','Harry Potter and the Half-Blood Prince', 'Fantasy/Adventure', '2009', 'David Yates', 'Steve Kloves, J.K. Rowling', 'Daniel Radcliffe, Emma Watson, Rupert Grint', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pathe-thuis.nl%2F15302_450x640.jpg&tbnid=0Y2OErRe5JcOVM&vet=12ahUKEwjrqaq394D-AhXfiv0HHYVZDUQQMygAegUIARC7AQ..i&imgrefurl=https%3A%2F%2Fwww.pathe-thuis.nl%2Ffilm%2F7471%2Fharry-potter-and-the-half-blood-prince&docid=lp_9pgtfNjtXXM&w=450&h=640&q=harry%20potter%20and%20the%20half%20blood%20prince&ved=2ahUKEwjrqaq394D-AhXfiv0HHYVZDUQQMygAegUIARC7AQ', 'https://www.youtube.com/watch?v=tAiy66Xrsz4 ', 'Harry Potter krijgt te horen dat Voldemort terug is. Hogwarts is nu geen veilige plek meer. Dumbledore bereidt Harry voor op zijn confrontatie met Voldemort.', '29 feb', '16:00'], (err) => {
//     if(err) return console.error(err.message);
// })

// delete data
// sql = 'DELETE FROM Movies WHERE movie_ID = ?';
// db.run(sql, [''], (err) => {
//         if(err) return console.error(err.message); 
// });

// update data
// sql = 'UPDATE Movies SET poster = ? WHERE movie_ID = ?';
// db.run(sql, ['./img/poster.png', 11111], (err) => {
//         if(err) return console.error(err.message); 
// });

// query the database
sql = 'SELECT poster FROM Movies';
db.all(sql, [], (err, rows) => {
    if(err) return console.error(err.message);
        rows.forEach(row => {
            console.log(row);
        });
});


/*INSERT INTO Movies VALUES
('81118','12 Monkeys', 'Sci-fi/Mystery', '1995', 'Terry Gilliam', 'Chris Marker, Terry Gilliam', 'Bruce Willis, Brad Pitt, Madeleine Stowe', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BN2Y2OWU4MWMtNmIyMy00YzMyLWI0Y2ItMTcyZDc3MTdmZDU4XkEyXkFqcGdeQXVyMTQxNzMzNDI%40._V1_.jpg&tbnid=BBKMEusbvOje8M&vet=12ahUKEwiY0eXG7oD-AhUah_0HHdmfAuwQMygAegUIARC9AQ..i&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0114746%2F&docid=QHDGC0izDsfBDM&w=1007&h=1500&q=12%20monkeys&ved=2ahUKEwiY0eXG7oD-AhUah_0HHdmfAuwQMygAegUIARC9AQ', 'https://www.imdb.com/title/tt0114746/ ', 'In 1996 wordt 99% van de wereldbevolking uitgeroeid door een dodelijke pandemie. In 2035 leiden zij die het overleefden een ondergronds bestaan, terwijl de aarde overheerst wordt door wilde dieren.', '29 feb', '16:00');

INSERT INTO Movies VALUES
('91119','Raiders of the Lost Ark', 'Adventure/Action', '1981', 'Steven Spielberg', 'George Lucas, Philip Kaufman', 'Harrison Ford, Karen Allen, Paul Freeman', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BNTU2ODkyY2MtMjU1NC00NjE1LWEzYjgtMWQ3MzRhMTE0NDc0XkEyXkFqcGdeQXVyMjM4MzQ4OTQ%40._V1_.jpg&tbnid=sIFLb6OSKIFx_M&vet=12ahUKEwiR1JyP8ID-AhXFi_0HHfG7B9wQMygAegUIARC8AQ..i&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0082971%2F&docid=ZxVopiuN2zv-BM&w=942&h=1386&q=indiana%20jones%3A%20raiders%20of%20the%20lost%20ark&ved=2ahUKEwiR1JyP8ID-AhXFi_0HHfG7B9wQMygAegUIARC8AQ', 'https://www.imdb.com/title/tt0082971/ ', 'Wereldreiziger en archeoloog Indiana Jones wordt net voor de Tweede Wereldoorlog door de Amerikaanse overheid ingehuurd om een religieus relikwie op te sporen, voordat dit artefact in de handen van de Nazi valt.', '29 feb', '16:00');

INSERT INTO Movies VALUES
('12121','Tenet', 'Action/Sci-Fi', '2020', 'Christopher Nolan', 'Christopher Nolan', 'John David Washington, Robert Pattinson, Elizabeth Debicki', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmusicart.xboxlive.com%2F7%2F14815100-0000-0000-0000-000000000002%2F504%2Fimage.jpg%3Fw%3D1920%26h%3D1080&tbnid=uvOprdRwN1XxeM&vet=12ahUKEwiRo7vP8ID-AhW4hv0HHcOSAn0QMygBegUIARDCAQ..i&imgrefurl=https%3A%2F%2Fwww.microsoft.com%2Fnl-nl%2Fp%2Ftenet%2F8d6kgwxn7d46&docid=lqx7-4jZU5s3FM&w=788&h=1080&q=tenet&ved=2ahUKEwiRo7vP8ID-AhW4hv0HHcOSAn0QMygBegUIARDCAQ', 'https://www.youtube.com/watch?v=LdOM0x0XDMo ', 'Een geheim agent krijgt één enkel woord als wapen en wordt op pad gestuurd om het begin van de Derde Wereldoorlog te voorkomen. Hij moet door de tijd reizen en de natuurwetten ombuigen om zijn missie tot een goed einde te brengen.', '29 feb', '16:00');

INSERT INTO Movies VALUES
('22122','se7en', 'Mystery/Crime/Thriller', '1995', 'David Fincher', 'Andrew Kevin Walker', 'Brad Pitt, Morgan Freeman, Kevin Spacey', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BZDgyZmY5MmItY2I3Ny00NjA4LWFhNmItMGQ4ZGJhZDk5YjU3XkEyXkFqcGdeQXVyMTAzMDM4MjM0._V1_.jpg&tbnid=Xl5bicdJeVa6yM&vet=12ahUKEwi2mJHq8YD-AhUQhv0HHROkAVsQMygBegUIARC8AQ..i&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0114369%2F&docid=nuuBFmmJF-pgnM&w=746&h=1060&itg=1&q=seven&ved=2ahUKEwi2mJHq8YD-AhUQhv0HHROkAVsQMygBegUIARC8AQ', 'https://www.youtube.com/watch?v=znmZoVkCjpI ', 'Rechercheur William Somerset heeft nog zeven dagen te gaan voor hij met pensioen mag. Hij en de enthousiaste David Mills achtervolgen een moordenaar die geobsedeerd is met de zeven zonden.', '29 feb', '16:00');


INSERT INTO Movies VALUES
('32123','The Silence of the Lambs', 'Thriller/Horror', '1991', 'Jonathan Demme', 'Thomas Harris', 'Anthony Hopkins, Jodie Foster, Ted Levine', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY%40._V1_.jpg&tbnid=GSHXvg3bmrVY8M&vet=12ahUKEwjZvuyz8oD-AhUxiP0HHb80BroQMygAegUIARDCAQ..i&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0102926%2F&docid=eqiiMXytArunjM&w=2011&h=2968&q=silence%20of%20the%20lambs&ved=2ahUKEwjZvuyz8oD-AhUxiP0HHb80BroQMygAegUIARDCAQ', 'https://www.youtube.com/watch?v=W6Mm8Sbe__o ', 'Thriller over een vrouwelijke FBI-agente die op jacht is naar een verschrikkelijke seriemoordenaar. Om inzicht te krijgen in zijn denken, wendt ze zich tot psychopaat en kannibaal dr Hannibal Lecter, met wie ze een gevaarlijke samenwerking vormt.', '29 feb', '16:00');

INSERT INTO Movies VALUES
('42124','Star Wars: Episode 4: A new Hope', 'Sci-fi', '1977', 'George Lucas', 'George Lucas', 'Mark Hamill, Harrison Ford, Carrie Fisher', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_.jpg&tbnid=vMKHS7nkSvDJnM&vet=12ahUKEwinpZT78oD-AhXGhP0HHQOjAIwQMygAegUIARDCAQ..i&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0076759%2F&docid=8wMBjcaWe19ORM&w=1920&h=2937&itg=1&q=starwars%20a%20new%20hope&ved=2ahUKEwinpZT78oD-AhXGhP0HHQOjAIwQMygAegUIARDCAQ', 'https://www.youtube.com/watch?v=vZ734NWnAHA ', 'De zoon van een vochtboer slaat de handen ineen met een rebelse ruimtevaarder en zijn harige metgezel om een prinses te redden uit de klauwen van een kwaadaardig keizerrijk dat zint op intergalactische overheersing.', '29 feb', '16:00');

INSERT INTO Movies VALUES
('52125','The Dark Knight', 'Action/Adventure', '2008', 'Christopher Nolan', 'Christopher Nolan, Jonathan Nolan', 'Christian Bale, Michael Caine, Heath Ledger', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0468569%2F&psig=AOvVaw3t4QgEZMsUf4SAnAfld3LX&ust=1680171218157000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOjM9dbzgP4CFQAAAAAdAAAAABAE', 'https://www.youtube.com/watch?v=EXeTwQWrcwY ', 'Batman bestrijdt de criminelen van Gotham, maar komt oog in oog te staan met een ongekende vijand. De psychotische Joker is onvoorspelbaar en is - in tegenstelling tot de gemiddelde bendes - niet geïnteresseerd in geld.', '29 feb', '16:00');

INSERT INTO Movies VALUES
('62126','Shutter Island', 'Thriller/Mystery', '2010', 'Martin Scorsese', 'Dennis Lehane, Laeta Kalogridis', 'Leonardo DiCaprio, Mark Ruffalo, Ben Kingsley', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU%40._V1_.jpg&tbnid=mCXLyslslGsP6M&vet=12ahUKEwiWsZyl9ID-AhWETOUKHYs6DfMQMygAegUIARC2AQ..i&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt1130884%2F&docid=Ei3QIfj-EUoquM&w=2026&h=3000&q=shutter%20island&ved=2ahUKEwiWsZyl9ID-AhWETOUKHYs6DfMQMygAegUIARC2AQ', 'https://www.youtube.com/watch?v=YDGldPitxic ', 'U.S. Marshall Chuck Aule en zijn nieuwe partner Teddy Daniels gaan op zoek naar een moordenares, die ontsnapt is uit TBS-kliniek "Ashecliffe Hospital" voor langgestraften op Shutter Island.', '29 feb', '16:00');

INSERT INTO Movies VALUES
('72127','50 First Dates', 'Romance/Comedy', '2004', 'Peter Segal', 'George Wing', 'Adam Sandler, Drew Barrymore, Rob Schneider', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMjAwMzc4MDgxNF5BMl5BanBnXkFtZTYwNjUwMzE3._V1_FMjpg_UX1000_.jpg&tbnid=hRf_X1OEJzoP9M&vet=12ahUKEwjF4rP09ID-AhUB8rsIHe8CCbcQMygAegUIARDAAQ..i&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0343660%2F&docid=MgzYgfy7SPpfzM&w=1000&h=1487&q=50%20first%20dates&ved=2ahUKEwjF4rP09ID-AhUB8rsIHe8CCbcQMygAegUIARDAAQ', 'https://www.youtube.com/watch?v=Q_2AbjYeSMI ', 'Henry Roth is een verstokte vrijgezel, maar wanneer hij Lucy leert kennen, verandert zijn leven drastisch en wil hij met haar verder. Het enige probleem is dat Lucy geen kortetermijngeheugen heeft.', '29 feb', '16:00');

INSERT INTO Movies VALUES
('82128','Men in Black', 'Sci-fi', '1997', 'Barry Sonnenfeld', 'Ed Solomon, Marvel Comics', 'Tommy Lee Jones, Will Smith, Tony Shalhoub', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BOTlhYTVkMDktYzIyNC00NzlkLTlmN2ItOGEyMWQ4OTA2NDdmXkEyXkFqcGdeQXVyNTAyODkwOQ%40%40._V1_.jpg&tbnid=Ixaqa4q8d551XM&vet=12ahUKEwi2s4nB9YD-AhXXi_0HHZBeB14QMygCegUIARCyAQ..i&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0119654%2F&docid=zO3SDnHS1Pa6xM&w=1000&h=1500&q=men%20in%20black&ved=2ahUKEwi2s4nB9YD-AhXXi_0HHZBeB14QMygCegUIARCyAQ', 'https://www.youtube.com/watch?v=UxUTTrU6PA4 ', 'Agenten K en J werken voor een speciale eenheid die de buitenaardse wezens op aarde controleert en monitort. Telkens wanneer er paniek dreigt uit te breken, komen zij in actie.', '29 feb', '16:00');

INSERT INTO Movies VALUES
('92129','Johnny English', 'Comedy/Action', '2003', 'Peter Howitt', 'Neal Purvis, Robert Wade', 'Rowan Atkinson, Natalie Imbruglia, Ben Miller', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BNDkxODhlNmItYjhiMC00ZjNmLWE2YmMtOTQ3NmQxM2YzOGFiXkEyXkFqcGdeQXVyNTIzOTk5ODM%40._V1_.jpg&tbnid=R7cXGDWroVvFXM&vet=12ahUKEwjwjJuZ9oD-AhVygv0HHZ7ACncQMygAegUIARCzAQ..i&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0274166%2F&docid=LZu8q3S_J-TDaM&w=800&h=1189&q=johnny%20english&ved=2ahUKEwjwjJuZ9oD-AhVygv0HHZ7ACncQMygAegUIARCzAQ', 'https://www.youtube.com/watch?v=bbi0A2EUQUs ', 'Stuntelige Britse agent Johnny English zoekt Pascal Sauvage die de kroonjuwelen wil stelen. Met zijn partner Bough belandt hij echter in allerlei benarde situaties.', '29 feb', '16:00');

INSERT INTO Movies VALUES
('13131','Ocean’s Eight', 'Crime/Comedy', '2001', 'Steven Soderbergh', 'Ted Griffin, Harry Brown', 'George Clooney, Matt Damon, Brad Pitt', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BYzVmYzVkMmUtOGRhMi00MTNmLThlMmUtZTljYjlkMjNkMjJkXkEyXkFqcGdeQXVyNDk3NzU2MTQ%40._V1_.jpg&tbnid=oygnbJkcaOR0vM&vet=12ahUKEwixhZjv9oD-AhVfgP0HHVqQBrsQMygAegUIARDDAQ..i&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0240772%2F&docid=4_3ygkievcXlJM&w=936&h=1386&q=oceans%2011&ved=2ahUKEwixhZjv9oD-AhVfgP0HHVqQBrsQMygAegUIARDDAQ', 'https://www.youtube.com/watch?v=imm6OR605UI ', 'Dief Danny Ocean stelt een team samen om drie casinos in Las Vegas te beroven. De eigenaar heeft namelijk een relatie met Dannys ex-vrouw.', '29 feb', '16:00');

INSERT INTO Movies VALUES
('23132','Harry Potter and the Half-Blood Prince', 'Fantasy/Adventure', '2009', 'David Yates', 'Steve Kloves, J.K. Rowling', 'Daniel Radcliffe, Emma Watson, Rupert Grint', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pathe-thuis.nl%2F15302_450x640.jpg&tbnid=0Y2OErRe5JcOVM&vet=12ahUKEwjrqaq394D-AhXfiv0HHYVZDUQQMygAegUIARC7AQ..i&imgrefurl=https%3A%2F%2Fwww.pathe-thuis.nl%2Ffilm%2F7471%2Fharry-potter-and-the-half-blood-prince&docid=lp_9pgtfNjtXXM&w=450&h=640&q=harry%20potter%20and%20the%20half%20blood%20prince&ved=2ahUKEwjrqaq394D-AhXfiv0HHYVZDUQQMygAegUIARC7AQ', 'https://www.youtube.com/watch?v=tAiy66Xrsz4 ', 'Harry Potter krijgt te horen dat Voldemort terug is. Hogwarts is nu geen veilige plek meer. Dumbledore bereidt Harry voor op zijn confrontatie met Voldemort.', '29 feb', '16:00');
*/