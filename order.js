//get account_ID

//available movies
var movies = document.getElementById("movielist");
var movielist = ["movie1","movie2","movie3","movie4"];
movieID = [1,2,3,4];

var movielist2 = [["movie1",1,["1 augustus"]],["movie2",2,["2 augustus"]],["movie3",3,["3 augustus"]],["movie4",4,["4 augustus"]]]

for(var i = 0; i < movielist2.length; i++){
    var option = document.createElement("option");
    option.text = movielist2[i][0];
    option.value = movielist2[i][1];
    movies.add(option);
}

// movies.addEventListener("click", function() {
//     var options = movies.querySelectorAll("option");
//     var count = options.length;
//     if(typeof(count) === "undefined" || count < 2)
//     {
//         addMovieItem();
//     }
// });

movies.addEventListener("change", function() {
        showMovieDates();
});

function showMovieDates() {

    var movies = document.getElementById("movielist");
    var selectedMovie = movies.options[movies.selectedIndex].value;
    console.log(selectedMovie);

    // als dropdown al bestaat: clear, anders:maak
    if(document.getElementById("datelist") == null){
        var location = document.getElementsByClassName("ordering-container")[0];
        var dates = document.createElement("div");
        var datess = document.createElement("select");
        //var option1 = document.createElement("option");
        
        dates.setAttribute("class","dates");
        datess.setAttribute("name","datelist");
        datess.setAttribute("id","datelist");
        addOptions(selectedMovie,datess);
        console.log("niet bestaand");
    }
    else{
        removeOptions(document.getElementById("datelist"));
        addOptions(selectedMovie,datess);
        console.log("bestaand");
    }


    dates.appendChild(datess);
    location.appendChild(dates);
    console.log("hallo");

}

function removeOptions(dropdownlist) {
    var i, list = dropdownlist.options.length - 1;
    for(i = list; i >= 0; i--){
        dropdownlist.remove(i);
    }
}

function addOptions(selectedMovie,datess) {
    for(var i = 0; i < movielist2[selectedMovie][2].length; i++){
        var option = document.createElement("option");
        option.text = movielist2[selectedMovie][2][i];
        option.value = movielist2[selectedMovie][1];
        datess.add(option);
    }
}

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