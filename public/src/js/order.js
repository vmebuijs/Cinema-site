// if(sessionStorage.getItem('username') == ""){
//     window.location.href = 'login.html';
// }

//in the assigment was noted in the technical requirements that we could use AJAX or Fetch, we chose fetch.

fetch('m')
    .then(res => res.json())
    .then(data => {
        
        let filmList = [];
        var allSelections = [];
        
        //Makes array in correct format from the data retrieved from the database
        data.forEach(dat => {
            let movieID = dat.movie_ID;
            let title = dat.title;
            let dates = dat.available_dates;
            let times = dat.available_times;

            let allDates = dates.split(",");
            let allTimes = times.split(",");

            let movielist = [title, movieID, allDates, allTimes];
            filmList.push(movielist);
        });
        
        var location = document.getElementsByClassName("ordering-container")[0];
        
        // //Creates the textlabel
        // var movieLabel = document.createElement("label");
        // movieLabel.setAttribute("id","label1");
        // movieLabel.appendChild(document.createTextNode("Choose your movie: "));
        // location.appendChild(movieLabel);

        //Creates the first dropdownmenu
        // var movies = document.createElement("select");
        // movies.setAttribute("name","movielist");
        // movies.setAttribute("id","movielist");
        // location.appendChild(movies);

        // var filmList = [   
        //     ["movie1",1,["1 augustus","1 september"],["11:00","21:00"]],
        //     ["movie2",2,["2 augustus","2 september"],["12:00","22:00"]],
        //     ["movie3",3,["3 augustus","3 september"],["13:00","23:00"]],
        //     ["movie4",4,["4 augustus","4 september"],["14:00","00:00"]]
        // ]

        var filmSelection = document.getElementsByClassName('film-selection')[0];

        //Adds standard option to dropdownmenu
        var firstOption = document.createElement("option");
        firstOption.setAttribute("value","");
        filmSelection.add(firstOption);

        //Adds all the movies to the first dropdownmenu
        for(var i = 0; i < filmList.length; i++){
            var option = document.createElement("option");
            option.text = filmList[i][0];
            option.value = filmList[i][1];
            filmSelection.add(option);
        }

        //Adds evenlistener for changes in dropdownmenu
        filmSelection.addEventListener("change", showMovieDates);

        function showMovieDates() {
            //var location = document.getElementsByClassName("ordering-container")[0];
            createLabel(location,"Choose your date: ");

            //Gets the selected movie
           // var movies = document.getElementById("movielist");
            var selectedMovie = filmSelection.selectedIndex;

            //Put the title and id of the selected movie in the session storage
            var selectedMovieTitle = filmList[filmSelection.selectedIndex-1][0];
            sessionStorage.setItem("movie_title",selectedMovieTitle);
            var selectedMovieID = filmList[filmSelection.selectedIndex-1][1];
            sessionStorage.setItem("movie_ID",selectedMovieID);

            //If there is no datelist dropdown it will be created and the dates will be added, 
            //Else the datelist will be cleared and the correct dates will be added 
            if(document.getElementById("datelist") == null){
            //     var location = document.getElementsByClassName("ordering-container")[0];

                var dates = document.createElement("select");

                dates.setAttribute("name","datelist");
                dates.setAttribute("id","datelist");

                addOptions(selectedMovie,dates,2);
            }
            else{
                // var location = document.getElementsByClassName("ordering-container")[0];

                var dates = document.getElementById("datelist");

                if(document.getElementById("timelist") != null){
                    removeOptions(document.getElementById("timelist"),document.getElementById("submitButton"),document.getElementById("numberOfTickets"));
                    document.getElementById("timelist").remove();
                }
                removeOptions(document.getElementById("datelist"),document.getElementById("submitButton"),document.getElementById("numberOfTickets"));
                addOptions(selectedMovie,dates,2);
            }

            //Adds evenlistener to the datelist dropdownmenu
            dates.addEventListener("change", showMovieTimes);

            location.appendChild(dates);
        }

        function showMovieTimes() {
            //Gets the selected movie
            //var movies = document.getElementById("movielist");
            var selectedMovie = filmSelection.selectedIndex; 

            //Gets the selected date
            var chosendate = document.getElementById("datelist");
            var selectedDate = chosendate.selectedIndex;

            //Put the selected date in the session storage
            var selectedMovieDate = filmList[filmSelection.selectedIndex-1][2][selectedDate-1];
            sessionStorage.setItem("movie_date",selectedMovieDate);

            //var location = document.getElementsByClassName("ordering-container")[0];
            createLabel(location,"Choose your time: ");

            //If there is no timelist dropdown it will be created and the times will be added, 
            //Else the timelist will be cleared and the correct times will be added 
            if(document.getElementById("timelist") == null){

            //If there is no timelist dropdown it will be created and the times will be added, 
            //Else the timelist will be cleared and the correct times will be added 
            //if(document.getElementById("timelist") == null){
            //     var location = document.getElementsByClassName("ordering-container")[0];

                var times = document.createElement("select");

                times.setAttribute("name","timelist");
                times.setAttribute("id","timelist");

                addOptions(selectedMovie,times,3);
            }
            else{
                // var location = document.getElementsByClassName("ordering-container")[0];

                var times = document.getElementById("timelist");

                removeOptions(times,document.getElementById("submitButton"),document.getElementById("numberOfTickets"));
                addOptions(selectedMovie,times,3);
            }
            //Adds evenlistener to the timelist dropdownmenu
            times.addEventListener("change", showSubmitButton);//numberOfTickets);

            location.appendChild(times);
        }

        function showSubmitButton() {
            //var location = document.getElementsByClassName("ordering-container")[0];

            //Gets the selected time
            var chosentime = document.getElementById("timelist");
            var selectedTime = chosentime.selectedIndex;

            // Put the selected time in the session storage
            var selectedMovieTime = filmList[filmSelection.selectedIndex-1][3][selectedTime-1];
            sessionStorage.setItem("movie_time",selectedMovieTime);

            // Create an object with the selected values
            var completeSelection = {
                "movie_title": sessionStorage.getItem('movie_title'),
                "movie_ID": sessionStorage.getItem('movie_ID'),
                "movie_date": sessionStorage.getItem('movie_date'),
                "movie_time": sessionStorage.getItem('movie_time')
            }

            sessionStorage.setItem('movie_title','');
            sessionStorage.setItem('movie_ID', '');
            sessionStorage.setItem('movie_date', '');
            sessionStorage.setItem('movie_time', '');
            
            allSelections.push(completeSelection);
            
            sessionStorage.setItem('complete_orders', JSON.stringify(allSelections));
            console.log(JSON.parse(sessionStorage.getItem('complete_orders')));

            //creates submit button if it doesn't exist
            //else it will make the submit button visible
            if (document.getElementById("submitButton") == null){
                var submitButton = document.createElement("button");
                submitButton.setAttribute("id","submitButton");
                submitButton.textContent = 'Add to cart';
                location.appendChild(submitButton);
                submitButton.addEventListener('click', postt, false);

                //var location2 = document.getElementsByClassName("ordering-container");
                //location.addEventListener("submit",submitAction);
            }
            else{
                var submitButton = document.getElementById("submitButton");
                submitButton.style.visibility = "visible";
            }            
        }

        // showSubmitButton();
        
        // console.log(submitButton);
        // submitButton.addEventListener('click', post);
        //var location = document.getElementsByClassName("ordering-container")[0].addEventListener('submit', postt);
        // document.getElementById('button1').addEventListener('click', post);
       

        function postt(e){

            var cart = document.getElementsByClassName("ordering-container")[1];
            var div = document.createElement("div");
            
            var i = allSelections.length - 1;
            console.log("helloooo");
            var id = i.toString();
            div.setAttribute("id",id);
            cart.appendChild(div);

            var location2 = document.getElementById(`${i}`);
            console.log(location2);

            var text = `Movie: ${allSelections[i].movie_title}, Date: ${allSelections[i].movie_date}, Time: ${allSelections[i].movie_time} \n`;
            location2.innerHTML = text;
            //createLabel(location2, text);
            createButton(location2,deleteData);
            createButton(location2,changeData);

            e.preventDefault();
        }

        function removeOptions(dropdownlist,submit,tickets) {
            //Removes all items from given dropdownlist
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

            //Removes all labels excepts the first one
            var labels = document.getElementsByClassName("labels");
            for(var i=0;i<labels.length;i++){
                labels[i].remove();
            }

            //Hides the submit button if it exists
            if (submit!=null){
                submit.style.visibility="hidden";
            }
            // if(tickets!=null){
            //     tickets.style.visibility="hidden";
            // }
        }

        function addOptions(selectedMovie,datess,nr) {
            //Creates the empty option
            var firstOption = document.createElement("option");
            firstOption.setAttribute("value","");
            datess.add(firstOption);

            //Creates a option for each element in the filmList array
            for(var i = 0; i < filmList[selectedMovie-1][nr].length; i++){
                var option = document.createElement("option");
                option.text = filmList[selectedMovie-1][nr][i];
                option.value = filmList[selectedMovie-1][nr][i];
                
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

        function createButton(location,deleteOrChange){
            var deleteButton = document.createElement("button");
            deleteButton.addEventListener("click", deleteOrChange);
            location.appendChild(deleteButton);
        }

        function deleteData(e){
            var id = e.target.parentElement.id;
            var element = document.getElementById(id);
            allSelections.splice(id,1);
            element.remove();
        }

        function changeData(e){
            var id = e.target.parentElement.id;

            var movie_ID = allSelections[id].movie_ID;
            var movie_date = allSelections[id].movie_date;
            var movie_time = allSelections[id].movie_time;

            console.log(movie_ID);
            console.log(movie_date);
            console.log(movie_time);

            // var indexID = 0;
            // var indexDate = 0;
            // var indexTime = 0;

            var indexID, indexDate, indexTime;

            for(var i = 0; i<filmList.length; i++){
                if(filmList[i][1] == movie_ID){
                    indexID = i+1;
                    var movielist = document.getElementById("movielist");
                    movielist.selectedIndex = indexID;
                    showMovieDates();

                    for(var j = 0; j<filmList[i][2].length; j++){
                        if(filmList[i][2][j] == movie_date){
                            indexDate = j+1;
                            var datelist = document.getElementById("datelist");
                            datelist.selectedIndex = indexDate;
                            showMovieTimes();
                        }
                    }
                    for(var k = 0; k<filmList[i][3].length; k++){
                        if(filmList[i][3][k] == movie_time){
                            indexTime = k+1;
                        }
                    }
                }
            }

            var timelist = document.getElementById("timelist");
            timelist.selectedIndex = indexTime;

            deleteData(e);
        }

        //when placing adding to cart the server is alerted
        function submitAction(event){
            // fetch('order-add', {     
            //     method: 'POST',     
            //     headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            //     body: JSON.stringify({username: username, password: password})})
            // .then(response => response.json())
            // .then(data => console.log(data))
            
        }       
    })
    .catch(err => console.log(err));