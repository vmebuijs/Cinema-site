//get account_ID

//available movies
var movies = document.getElementById("movielist");
var movielist = ["movie1","movie2","movie3","movie4"];
movieID = [1,2,3,4];

var movielist2 = [["movie1",1,"1 augustus"],["movie2",2,"2 augustus"],["movie3",3,"3 augustus"],["movie4",4,"4 augustus"]]

for(var i = 0; i < movielist.length; i++){
    var option = document.createElement("option");
    option.text = movielist2[i][0];
    option.value = movielist2[i][1];
    movies.add(option);
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