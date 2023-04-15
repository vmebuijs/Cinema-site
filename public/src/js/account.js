/*
    This file influences the account page. 
    Firstly, we get the two sections on the page and enable the functionality that when a button is clicked in the control panel, 
    a specific section is shown. 

    ......
*/

//The sections on the account page
const accInfo = document.getElementsByClassName('account-information')[0];
const ordHistory = document.getElementsByClassName('order-history')[0];

//The buttons on the account page to change what section you see
const accButton = document.getElementsByClassName('account-controls__button')[0];
const ordButton = document.getElementsByClassName('account-controls__button')[1];

//Eventlisteners are added to the buttons to display one of the sections when clicked
accButton.addEventListener('click', () => {
    accInfo.style.display = 'block';
    ordHistory.style.display = 'none';
});

ordButton.addEventListener('click', () => {
    ordHistory.style.display = 'block';
    accInfo.style.display = 'none';
});
    
let nameN = document.getElementsByClassName("account-information__data")[0].childNodes[1].childNodes[5];
let username = document.getElementsByClassName("account-information__data")[0].childNodes[3].childNodes[5];
let email = document.getElementsByClassName("account-information__data")[0].childNodes[5].childNodes[5];
let password = document.getElementsByClassName("account-information__data")[0].childNodes[7].childNodes[5];
let address = document.getElementsByClassName("account-information__data")[0].childNodes[9].childNodes[5];
let card = document.getElementsByClassName("account-information__data")[0].childNodes[11].childNodes[5];
let poster = document.getElementsByClassName("order__film-poster")[0];
let title = document.getElementsByClassName("order__data")[0].childNodes[1].childNodes[0];
let date = document.getElementsByClassName("order__data")[0].childNodes[3];
let time = document.getElementsByClassName("order__data")[0].childNodes[5];
let price = document.getElementsByClassName("order__data")[0].childNodes[7];
let orderID = document.getElementsByClassName("order__data")[0].childNodes[9];
console.log(date);
var logoutButton = document.getElementsByClassName('logout-button')[0];
var orderButton = document.getElementsByClassName('order-button')[0];
/**<article class="order">
                    <img class="order__film-poster" src="src/img/poster.png">
                    <section class="order__data">
                        <p>Film title: The Intruder</p>
                        <p>Date: 27/03/23</p>
                        <p>Price: €12.50</p>
                        <p>OrderID: 123465</p>
                    </section>
                </article> */
logoutButton.addEventListener('click', () => { 
    window.location.href = 'logout';
});

// orderButton.addEventListener('click', () => { 
//     window.location.href = 'orderHistory';
// });

fetch('orderHistory')
    .then(res => res.json())
    .then(data => {
        // console.log(data);

            for(let i = 0; i < data.length; i++){
                title[i].textContent = data[i].title;
                poster[i].src = data[i].poster;
                let user = data.userR;
                let movie = data.movieR;
                // console.log(user);
                poster[i].src = movie[i].poster;
                title[i].textContent = movie[i].title;
                date[i].textContent = user[i].date;
                time[i].textContent = user[i].timeslot;
                price[i].textContent = user[i].price;
                orderID[i].textContent = user[i].order_ID;
        }

    })
    .catch(err => console.log(err));

fetch('user')
    .then(res => res.json())
    .then(data => {
        nameN.textContent = data[0].name;
        username.textContent = data[0].username;
        email.textContent = data[0].email;
        password.textContent = data[0].password;
        address.textContent = data[0].adress;
        card.textContent = data[0].creditcard;       
    })
    .catch(err => console.log(err));

sessionStorage.setItem('username', username.textContent);