//get account_ID



// connect database

// create table
fetch('http://localhost:8026/m')
    .then(res => res.json())
    .then(data => {
        
        let movielist2 = [];
        
        //makes array in correct format from the data retrieved from the database
        data.forEach(dat => {
            let movieID = dat.movie_ID;
            let title = dat.title;
            let dates = dat.available_dates;
            let times = dat.available_times;

            let dates2 = dates.split(",");
            let times2 = times.split(",");

            let movielist = [title, movieID,dates2, times2];
            movielist2.push(movielist);
        });
        

        var movies = document.getElementById("movielist");
        // var movielist2 = [
            
        //     ["movie1",1,["1 augustus","1 september"],["11:00","21:00"]],
        //     ["movie2",2,["2 augustus","2 september"],["12:00","22:00"]],
        //     ["movie3",3,["3 augustus","3 september"],["13:00","23:00"]],
        //     ["movie4",4,["4 augustus","4 september"],["14:00","00:00"]]
        // ]

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

            //Ajax
            // xhttp = new XMLHttpRequest();
            // xhttp.onload = function() {
                
            // }
            // xhttp.open("POST","");
            // xhttp.send();

            //gets the selected movie
            var movies = document.getElementById("movielist");
            var selectedMovie = movies.selectedIndex;

            //if there is no datelist dropdown it will be created and the dates will be added, 
            //else the datelist will be cleared and the correct dates will be added 
            if(document.getElementById("datelist") == null){
                var location = document.getElementsByClassName("ordering-container")[0];
                var dates = document.createElement("div");
                var datess = document.createElement("select");

                dates.setAttribute("class","dates");
                datess.setAttribute("name","datelist");
                datess.setAttribute("id","datelist");

                addOptions(selectedMovie,datess,2);
            }
            else{
                var location = document.getElementsByClassName("ordering-container")[0];
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

            //if there is no timelist dropdown it will be created and the times will be added, 
            //else the timelist will be cleared and the correct times will be added 
            if(document.getElementById("timelist") == null){
                var location = document.getElementsByClassName("ordering-container")[0];
                var times = document.createElement("div");
                var timess = document.createElement("select");

                times.setAttribute("class","times");
                timess.setAttribute("name","timelist");
                timess.setAttribute("id","timelist");

                addOptions(selectedMovie,timess,3);

            }
            else{
                var location = document.getElementsByClassName("ordering-container")[0];
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

        document.getElementById('ordering-container').addEventListener('submit', post);

        function post(e){
            e.preventDefault();

            //gets selected movie, date and time
            var movies = document.getElementById("movielist");
            var selectedMovie = movies.options[movies.selectedIndex].value; // id of selected movie

            var dates = document.getElementById("datelist");
            var selectedDate = dates.options[dates.selectedIndex].text; //selected date

            var times = document.getElementById("timelist");
            var selectedTime = times.options[times.selectedIndex].text; //selected time

            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'test.php',true);
            xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

            xhr.onload = function(){
                console.log(this.responseText);
            }

            xhr.send(selectedMovie);
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
                option.value = movielist2[selectedMovie-1][1];
                
                if(datess!==null){
                    datess.add(option);
                }
            }
        }

        function submitAction(event){
            
            //wat moet worden gebeurd bij submission

        }

        
    })
    .catch(err => console.log(err));


// var movies = document.getElementById("movielist");
// var selectedMovie = movies.options[movies.selectedIndex].value; // id of selected movie

// var dates = document.getElementById("datelist");
// var selectedDate = dates.options[dates.selectedIndex].text; //selected date

// var times = document.getElementById("timelist");
// var selectedTime = times.options[times.selectedIndex].text; //selected time

