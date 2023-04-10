//get account_ID



// connect database

// create table
fetch('http://localhost:8026/m')
    .then(res => res.json())
    .then(data => {
        
        let movielist2 = [];
        
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


        for(var i = 0; i < movielist2.length; i++){
            var option = document.createElement("option");
            option.text = movielist2[i][0];
            option.value = movielist2[i][1];
            movies.add(option);
        }


        movies.addEventListener("change", function() {
            showMovieDates();
        });

        function showMovieDates() {

            var movies = document.getElementById("movielist");
            var selectedMovie = movies.selectedIndex;

            if(document.getElementById("datelist") == null){
                var location = document.getElementsByClassName("ordering-container")[0];
                var dates = document.createElement("div");
                var datess = document.createElement("select");

                dates.setAttribute("class","dates");
                datess.setAttribute("name","datelist");
                datess.setAttribute("id","datelist");

                //toevoegen lege optie
                // var firstOption = document.createElement("option");
                // firstOption.setAttribute("value","");

                addOptions(selectedMovie,datess,2);

            }
            else{
                var location = document.getElementsByClassName("ordering-container")[0];
                var dates = document.getElementsByClassName("dates")[0];
                var datess = document.getElementById("datelist");

                if(document.getElementById("timelist") != null){
                    removeOptions(document.getElementById("timelist"),document.getElementById("submitButton"));
                    document.getElementById("timelist").remove();
                }
                removeOptions(document.getElementById("datelist"),document.getElementById("submitButton"));
                addOptions(selectedMovie,datess,2);

            }

            datess.addEventListener("change", function() {
                showMovieTimes();
            });

            dates.appendChild(datess);
            location.appendChild(dates);


        }

        function showMovieTimes() {

            var movies = document.getElementById("movielist");
            var selectedMovie = movies.selectedIndex; 

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

                removeOptions(timess,document.getElementById("submitButton"));
                addOptions(selectedMovie,timess,3);

            }

            timess.addEventListener("change", function() {
                showSubmitButton();
            });

            times.appendChild(timess);
            location.appendChild(times);

        }

        function showSubmitButton() {
            var location = document.getElementsByClassName("movie")[0];
            
            if (document.getElementById("submitButton") == null){
                var submitButton = document.createElement("INPUT");
                submitButton.setAttribute("type","submit");
                submitButton.setAttribute("id","submitButton");
                location.appendChild(submitButton);
            }
            else{
                var submitButton = document.getElementById("submitButton");
                submitButton.style.visibility = "visible";
            }

            
        }

        function removeOptions(dropdownlist,submit) {
            if(dropdownlist!=null && dropdownlist.options!=null){
                var i, list = dropdownlist.options.length - 1;
                for(i = list; i >= 0; i--){
                    dropdownlist.remove(i);
                }
            }
            if (submit!=null){
                submit.style.visibility="hidden";
            }
        }

        function addOptions(selectedMovie,datess,nr) {
            var firstOption = document.createElement("option");
            firstOption.setAttribute("value","");
            datess.add(firstOption);

            for(var i = 0; i < movielist2[selectedMovie-1][nr].length; i++){
                var option = document.createElement("option");
                option.text = movielist2[selectedMovie-1][nr][i];
                option.value = movielist2[selectedMovie-1][1];
                
                if(datess!==null){
                    datess.add(option);
                }
            }
        }

        
    })
    .catch(err => console.log(err));
//available movies


// var movies = document.getElementById("movielist");
// var selectedMovie = movies.options[movies.selectedIndex].value; // id of selected movie

// var dates = document.getElementById("datelist");
// var selectedDate = dates.options[dates.selectedIndex].text; //selected date

// var times = document.getElementById("timelist");
// var selectedTime = times.options[times.selectedIndex].text; //selected time


// function onChange(args) {
//     var plekje = document.getElementsByClassName("ordering-container");
//     var text = document.createElement("p");
//     if (args.isInteracted){
//         text.innerText = "ja"
//     }
//     else {
//         text.innerText = "nee"
//     }
//     plekje.add(text);
// };


// fetch('http://localhost:8026/m')
//     .then(res => res.json())
//     .then(data => {
//          var movies = document.getElementById("movielist");
//          var option = document.createElement("option");
//          option.text ="kiwi";
//          movies.add(option);

//          test = data[0].movie_ID;
//     })
//     .catch(err => console.log(err));

// function showCustomer(str) {
//     if (str == "") {
//       document.getElementById("txtHint").innerHTML = "";
//       return;
//     }
//     const xhttp = new XMLHttpRequest();
//     xhttp.onload = function() {
//       document.getElementById("txtHint").innerHTML = this.responseText;
//     }
//     xhttp.open("GET", "getcustomer.php?q="+str);
//     xhttp.send();
//   }