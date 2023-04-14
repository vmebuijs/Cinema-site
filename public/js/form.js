//form validation

const Pname = document.getElementsByClassName('name')[0] || null;
const email = document.getElementsByClassName('email')[0] || null;
const creditcard = document.getElementsByClassName('creditcard')[0] || null;
const address = document.getElementsByClassName('address')[0] || null;
const password = document.getElementsByClassName('password')[0];
const username = document.getElementsByClassName('username')[0];

const submitBtn = document.getElementsByClassName('submitBtn')[0];
console.log(submitBtn);

//login page open
// if (Pname == null){ 
//     submitBtn.addEventListener('click', () => {
//         //
//     });
// }
// //register page open
// else{
//     submitBtn.addEventListener('click', () => {
//         let user = { 
//             // name: Pname.value,
//             // email: email.value,
//             // address: address.value,
//             // creditcard: creditcard.value,
//             // username: username.value,
//             // password: password.value
//             "name": "Geeks for Geeks", 
//             "age": "23" 
//         }

//         var xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function() {
//             if (this.readyState == 4 && this.status == 200) {
//               alert(this.responseText);
//             }
//           };
//         xhttp.open("POST", "scriptTest.js", true);
//         xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//         xhttp.send("fname=John&lname=Doe");

//         // let options = {
//         //     method: 'POST',
//         //     headers: {'Content-Type': 'application/json;charset=utf-8'},
//         //     body: JSON.stringify(user)
//         // }

//         // let fetchRes = fetch("/register", options);
//         // fetchRes.then(res =>res.json()).then(d => {console.log(d)})
//         // fetch('/register', options)
//         // .then(res => res.json())
//         // .then(data => {
//         //     // if(data.name){
//         //     //     alert('register successfull');
//         //     // }
//         //     // else{
//         //     //     alert(data);
//         //     // }
//         // })
//         // .catch(err => console.log(err));
//     });
// }


// // user = { 
// //     "name": "Geeks for Geeks", 
// //     "age": "23" 
// // }

// // let options = {
// //     method: 'POST',
// //     headers: {'Content-Type': 'application/json;charset=utf-8'},
// //     body: JSON.stringify(user)
// // }
// // // Fake api for making post requests
// // let fetchRes = fetch(
// // "http://dummy.restapiexample.com/api/v1/create", 
// //                                 options);
// // fetchRes.then(res =>
// //     res.json()).then(d => {
// //         console.log(d)
// //     })