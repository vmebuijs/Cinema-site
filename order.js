//get account_ID

//available movies
var movies = document.getElementById("movielist");
var movielist2 = [
    ["movie1",1,["1 augustus","1 september"],["11:00","21:00"]],
    ["movie2",2,["2 augustus","2 september"],["12:00","22:00"]],
    ["movie3",3,["3 augustus","3 september"],["13:00","23:00"]],
    ["movie4",4,["4 augustus","4 september"],["14:00","00:00"]]
]

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
    var selectedMovie = movies.options[movies.selectedIndex].value;

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

        removeOptions(document.getElementById("datelist"));
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
    var selectedMovie = movies.options[movies.selectedIndex].value;

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

        removeOptions(timess);
        addOptions(selectedMovie,timess,3);

    }

    times.appendChild(timess);
    location.appendChild(times);

}

function removeOptions(dropdownlist) {
    if(dropdownlist!=null && dropdownlist.options!=null){
        var i, list = dropdownlist.options.length - 1;
        for(i = list; i >= 0; i--){
            dropdownlist.remove(i);
        }
    }
}

function addOptions(selectedMovie,datess,nr) {
    for(var i = 0; i < movielist2[selectedMovie-1][nr].length; i++){
        var option = document.createElement("option");
        option.text = movielist2[selectedMovie-1][nr][i];
        option.value = movielist2[selectedMovie-1][1];
        
        if(datess!==null){
            datess.add(option);
        }
        //datess.add(option);
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