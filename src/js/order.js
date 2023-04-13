
fetch('http://localhost:8026/m')
    .then(res => res.json())
    .then(data => {
        
        let movielist2 = [];
        
        //makes array in correct format from the data retrieved from the database
        data.forEach(dat => {
            //array format: [[movie_titel,movie_ID,[dates],[times]],etc]
            let movieID = dat.movie_ID;
            let title = dat.title;
            let dates = dat.available_dates;
            let times = dat.available_times;

            let dates2 = dates.split(",");
            let times2 = times.split(",");

            let movielist = [title, movieID,dates2, times2];
            movielist2.push(movielist);
        });
        
        var location = document.getElementsByClassName("ordering-container")[0];
        
        //creates the textlabel
        var movieLabel = document.createElement("label");
        movieLabel.setAttribute("id","label1");
        movieLabel.appendChild(document.createTextNode("Choose your movie: "));
        location.appendChild(movieLabel);

        //creates the first dropdownmenu
        var movies = document.createElement("select");
        movies.setAttribute("name","movielist");
        movies.setAttribute("id","movielist");
        location.appendChild(movies);

        //adds standard option to dropdownmenu
        var firstOption = document.createElement("option");
        firstOption.setAttribute("value","");
        movies.add(firstOption);

        //adds all the movies to the first dropdownmenu
        for(var i = 0; i < movielist2.length; i++){
            var option = document.createElement("option");
            option.text = movielist2[i][0];
            option.value = movielist2[i][1];
            movies.add(option);
        }

        //adds evenlistener for changes in dropdownmenu
        movies.addEventListener("change", showMovieDates);

        function showMovieDates() {
            //gets the selected movie
            var movies = document.getElementById("movielist");
            var selectedMovie = movies.selectedIndex;

            var location = document.getElementsByClassName("ordering-container")[0];
            createLabel(location,"Choose your date: ");

            //if there is no datelist dropdown it will be created and the dates will be added, 
            //else the datelist will be cleared and the correct dates will be added 
            if(document.getElementById("datelist") == null){
            // //if there is no datelist dropdown it will be created and the dates will be added, 
            // //else the datelist will be cleared and the correct dates will be added 
            // if(document.getElementById("datelist") == null){
            //     var location = document.getElementsByClassName("ordering-container")[0];

                var dates = document.createElement("div");
                var datess = document.createElement("select");

                dates.setAttribute("class","dates");
                datess.setAttribute("name","datelist");
                datess.setAttribute("id","datelist");

                addOptions(selectedMovie,datess,2);
            }
            else{
                // var location = document.getElementsByClassName("ordering-container")[0];

                var dates = document.getElementsByClassName("dates")[0];
                var datess = document.getElementById("datelist");

                if(document.getElementById("timelist") != null){
                    removeOptions(document.getElementById("timelist"),document.getElementById("submitButton"),document.getElementById("numberOfTickets"));
                    document.getElementById("timelist").remove();
                }
                removeOptions(document.getElementById("datelist"),document.getElementById("submitButton"),document.getElementById("numberOfTickets"));
                addOptions(selectedMovie,datess,2);
            }

            //adds evenlistener to the datelist dropdownmenu
            datess.addEventListener("change", showMovieTimes);

            dates.appendChild(datess);
            location.appendChild(dates);
        }

        function showMovieTimes() {

            //gets the selected movie
            var movies = document.getElementById("movielist");
            var selectedMovie = movies.selectedIndex; 


            var location = document.getElementsByClassName("ordering-container")[0];
            createLabel(location,"Choose your time: ");

            //if there is no timelist dropdown it will be created and the times will be added, 
            //else the timelist will be cleared and the correct times will be added 
            if(document.getElementById("timelist") == null){

            //if there is no timelist dropdown it will be created and the times will be added, 
            //else the timelist will be cleared and the correct times will be added 
            // if(document.getElementById("timelist") == null){
            //     var location = document.getElementsByClassName("ordering-container")[0];

                var times = document.createElement("div");
                var timess = document.createElement("select");

                times.setAttribute("class","times");
                timess.setAttribute("name","timelist");
                timess.setAttribute("id","timelist");

                addOptions(selectedMovie,timess,3);

            }
            else{

//                var location = document.getElementsByClassName("ordering-container")[0];
                var times = document.getElementsByClassName("times")[0];
                var timess = document.getElementById("timelist");

                removeOptions(timess,document.getElementById("submitButton"),document.getElementById("numberOfTickets"));
                addOptions(selectedMovie,timess,3);

            }

            //adds evenlistener to the timelist dropdownmenu
            timess.addEventListener("change", showSubmitButton);//numberOfTickets);

            times.appendChild(timess);
            location.appendChild(times);

        }

        // function numberOfTickets() {
        //     //gets the selected movie
        //     var movies = document.getElementById("movielist");
        //     var selectedMovie = movies.selectedIndex; 

        //     //check number of tickets available

        //     //
        //     if(document.getElementById("numberOfTickets") == null){
        //         var location = document.getElementsByClassName("ordering-container")[0];
        //         var tickets = document.createElement("select");

        //         tickets.setAttribute("name","numberOfTickets");
        //         tickets.setAttribute("id","numberOfTickets");

        //         for(var i=1;i<=10;i++){
        //             var option = document.createElement("option");
        //             option.text = i;
        //             option.value = i;
        //             tickets.add(option);
        //         }

        //     }
        //     else{
        //         var numberOfTickets = document.getElementById("numberOfTickets");
        //         numberOfTickets.style.visibility="visible";
        //     }

        //     tickets.addEventListener("change", showSubmitButton);
        //     location.appendChild(tickets);

        // }

        function showSubmitButton() {
            var location = document.getElementsByClassName("ordering-container")[0];
            
            //creates submit button if it doesn't exist
            //else it will make the submit button visible
            if (document.getElementById("submitButton") == null){
                var submitButton = document.createElement("input");
                submitButton.setAttribute("type","submit");
                submitButton.setAttribute("id","submitButton");

                location.appendChild(submitButton);

                //var location2 = document.getElementsByClassName("ordering-container");
                //location.addEventListener("submit",submitAction);
            }
            else{
                var submitButton = document.getElementById("submitButton");
                submitButton.style.visibility = "visible";
            }

            // //gets selected movie, date and time
            // var movies = document.getElementById("movielist");
            // var selectedMovie = movies.options[movies.selectedIndex].value; // id of selected movie

            // var dates = document.getElementById("datelist");
            // var selectedDate = dates.options[dates.selectedIndex].text; //selected date

            // var times = document.getElementById("timelist");
            // var selectedTime = times.options[times.selectedIndex].text; //selected time




            // xhttp.onreadystatechange = function() {
            //     if(this.readyState == 4 && this.status == 200){
            //         console.log("Progress saved");
            //     }
            // };
            // xhttp.open("POST","iets.txt", true);
            // xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            // xhttp.send(`movie=${selectedMovie}&date=${selectedDate}&time=${selectedTime}`);
            
        }

        // showSubmitButton();
        
        // console.log(submitButton);
        // submitButton.addEventListener('click', post);
        var location = document.getElementsByClassName("ordering-container")[0].addEventListener('submit', postt);
        // document.getElementById('button1').addEventListener('click', post);
       

        function postt(){
            var xhtml = new XMLHttpRequest();
            xhtml.open("POST","/order",true);
            xhtml.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            console.log(xhtml.readyState);
            console.log(xhtml.status);
            xhtml.onreadystatechange = function() {
                if(this.readyState === XMLHttpRequest.DONE && this.status ===200){
                    alert(this.responseText);
                }
            };
            // var data = new FormData(document.getElementsByClassName('ordering-container')[0]);
            // var movie = data.get("movie");
            // var date = data.get("date")

            // var movie = document.getElementById("movielist").value;
            // var date = document.getElementById("datelist").value;
            // var time = document.getElementById("timelist").value;

            // var data = "movie=" + encodeURIComponent(movie) + "&date=" + encodeURIComponent(date) + "&time=" + encodeURIComponent(time);

            // console.log("test");
            // console.log(movie);
            // console.log(date);
            // console.log(time);
            // xhtml.send(data);

            var data = new FormData();
            data.append("movie", document.getElementById("movielist").value);
            data.append("date", document.getElementById("datelist").value);
            data.append("time", document.getElementById("timelist").value);
          
            console.log("test");
            console.log(data.get("movie"));
            console.log(data.get("date"));
            console.log(data.get("time"));
          
            xhtml.send(data);

            // e.preventDefault();

            // gets selected movie, date and time
            // var movies = document.getElementById("movielist");
            // var selectedMovie = movies.options[movies.selectedIndex].value; // id of selected movie

            // // var dates = document.getElementById("datelist");
            // // var selectedDate = dates.options[dates.selectedIndex].text; //selected date

            // // var times = document.getElementById("timelist");
            // // var selectedTime = times.options[times.selectedIndex].text; //selected time

            // var xhr = new XMLHttpRequest();
            // xhr.open('POST', 'test.php');
            // xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

            // xhr.onload = function(){
            //     console.log(this.responseText);
            // }

            // xhr.send('selectedMovie=' + encodeURIComponent(selectedMovie));
            // xhr.open('GET', 'test.php', true);
            // xhr.onload = function(){
            //     console.log(this.responseText);
            // }

            // xhr.send();

            //moet account id opvragen, als de gebruiker niet is ingelogd moet deze geen tickets kunnen kopen
            //bij submit is movieID en datum al opgeslagen dus alleen tijdslot en accountID moeten worden toegevoegd.
        }

        function removeOptions(dropdownlist,submit,tickets) {
            //removes all items from given dropdownlist
            if(dropdownlist!=null && dropdownlist.options!=null){
                var i, list = dropdownlist.options.length - 1;
                for(i = list; i >= 0; i--){
                    dropdownlist.remove(i);
                }
            }
            if(tickets!=null && tickets.options!=null){
                var i, list = tickets.options.length-1;
                for(i=list; i>=0; i--){
                    tickets.remove(i);
                }
            }

            //removes all labels excepts the first one
            var labels = document.getElementsByClassName("labels");
            for(var i=0;i<labels.length;i++){
                labels[i].remove();
            }

            //hides the submit button if it exists
            if (submit!=null){
                submit.style.visibility="hidden";
            }
            // if(tickets!=null){
            //     tickets.style.visibility="hidden";
            // }
        }

        function addOptions(selectedMovie,datess,nr) {
            //creates the empty option
            var firstOption = document.createElement("option");
            firstOption.setAttribute("value","");
            datess.add(firstOption);

            //creates a option for each element in the movielist2 array
            for(var i = 0; i < movielist2[selectedMovie-1][nr].length; i++){
                var option = document.createElement("option");
                option.text = movielist2[selectedMovie-1][nr][i];
                option.value = movielist2[selectedMovie-1][nr][i];
                
                if(datess!==null){
                    datess.add(option);
                }
            }
        }

        function createLabel(location, text) {
            var movieLabel = document.createElement("label");
            movieLabel.setAttribute("class","labels");
            movieLabel.appendChild(document.createTextNode(text));
            location.appendChild(movieLabel);
        }

        function submitAction(event){
            
            //wat moet worden gebeurd bij submission

        }

        // function myLogin(e){
        //     var movies = document.getElementById("movielist");
        //     var selectedMovie = movies.options[movies.selectedIndex].value; // id of selected movie

        //     // var dates = document.getElementById("datelist");
        //     // var selectedDate = dates.options[dates.selectedIndex].text; //selected date

        //     // var times = document.getElementById("timelist");
        //     // var selectedTime = times.options[times.selectedIndex].text; //selected time
        //     //+ "&dates=" + selectedDate + "&times=" + selectedTime

        //     var url = "order.js?movies=" + selectedMovie;

        //     get(url);
        //     e.preventDefault();
        // }
        // myLogin();
        // var con = document.getElementById('ordering');
        // con.addEventListener('submit', myLogin);
        // console.log(url);

        // function get(url){
        //     console.log(url);
        //     var xhr = new XMLHttpRequest();
        //     xhr.open('POST', url, true);
        //     xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

        //     xhr.onload = function(){
        //         console.log(this.responseText);
        //     }

        //     xhr.send();
        // }
        
    })
    .catch(err => console.log(err));

// var movies = document.getElementById("movielist");
// var selectedMovie = movies.options[movies.selectedIndex].value; // id of selected movie

// var dates = document.getElementById("datelist");
// var selectedDate = dates.options[dates.selectedIndex].text; //selected date

// var times = document.getElementById("timelist");
// var selectedTime = times.options[times.selectedIndex].text; //selected time


