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

var logoutButton = document.getElementsByClassName('logout-button')[0];

logoutButton.addEventListener('click', () => { 
    window.location.href = 'logout';
})

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