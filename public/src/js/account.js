/*
    This file influences the account page. 
    Firstly, we get the two sections on the page and enable the functionality that when a button is clicked in the control panel, 
    a specific section is shown. 
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
var orderButton = document.getElementsByClassName('order-button')[0];

logoutButton.addEventListener('click', () => { 
    window.location.href = 'logout';
});

fetch('user')
    .then(res => res.json())
    .then(data => {
        nameN.textContent = data[0].name;
        username.textContent = data[0].username;
        email.textContent = data[0].email;
        password.textContent = data[0].password;
        address.textContent = data[0].adress;
        card.textContent = data[0].creditcard;       
        document.cookie
    })
    .catch(err => console.log(err));

    fetch('orderHistory')
    .then(res => res.json())
    .then(data => {
                
        // Create x number of containers for the x number of orders
        for(var i = 0; i< data.length; i++){
            var order = document.createElement('article');
            order.classList.add('order');
    
            var orderData = document.createElement('section');
            orderData.classList.add('order__data');
            
            var orderDataTitle = document.createElement('p');
            orderDataTitle.classList.add('order__title');
            var titleT = document.createTextNode('');
            orderDataTitle.appendChild(titleT);
    
            var orderDataDate = document.createElement('p');
            orderDataDate.classList.add('order__date');
            var dateT = document.createTextNode('');
            orderDataDate.appendChild(dateT);
    
            var orderDataTime = document.createElement('p');
            orderDataTime.classList.add('order__time');
            var timeT = document.createTextNode('');
            orderDataTime.appendChild(timeT);
    
            var orderDataPrice = document.createElement('p');
            orderDataPrice.classList.add('order__price');
            var priceT = document.createTextNode('');
            orderDataPrice.appendChild(priceT);
    
            var orderDataID = document.createElement('p');
            orderDataID.classList.add('order__orderID');
            var id = document.createTextNode('');
            orderDataID.appendChild(id);
    
            orderData.append(orderDataTitle, orderDataDate, orderDataTime, orderDataPrice, orderDataID);
    
            order.appendChild(orderData);
            ordHistory.appendChild(order);
        }

        // Find the components of the orders
        let title = document.getElementsByClassName("order__title");
        let date = document.getElementsByClassName("order__date");
        let time = document.getElementsByClassName("order__time");
        let price = document.getElementsByClassName("order__price");
        let orderID = document.getElementsByClassName("order__orderID");

        // Load the correct data into the order container(s)
        for(let i = 0; i < data.length; i++){
            date[i].textContent = "Date: " + data[i].date;
            time[i].textContent = "Time: " + data[i].timeslot;
            price[i].textContent = "Price: €" + data[i].price;
            orderID[i].textContent = "Ticket: " + data[i].order_ID;
            title[i].textContent = "Title: " + data[i].title;
        }
    })
    .catch(err => console.log(err));

sessionStorage.setItem('username', username.textContent);