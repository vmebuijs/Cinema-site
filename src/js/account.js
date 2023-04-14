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

    
    //console.log(sessionStorage.getItem('username'));

    // let nameN = document.getElementsByClassName("account-information__data")[0].childNodes[1].childNodes[5];
    // let username = document.getElementsByClassName("account-information__data")[0].childNodes[3].childNodes[5];
    // let email = document.getElementsByClassName("account-information__data")[0].childNodes[5].childNodes[5];
    // let password = document.getElementsByClassName("account-information__data")[0].childNodes[7].childNodes[5];
    // let address = document.getElementsByClassName("account-information__data")[0].childNodes[9].childNodes[5];
    // let card = document.getElementsByClassName("account-information__data")[0].childNodes[11].childNodes[5];
    

    fetch('user')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let nameN = document.getElementsByClassName("account-information__data")[0].childNodes[1].childNodes[5];
            let username = document.getElementsByClassName("account-information__data")[0].childNodes[3].childNodes[5];
            let email = document.getElementsByClassName("account-information__data")[0].childNodes[5].childNodes[5];
            let password = document.getElementsByClassName("account-information__data")[0].childNodes[7].childNodes[5];
            let address = document.getElementsByClassName("account-information__data")[0].childNodes[9].childNodes[5];
            let card = document.getElementsByClassName("account-information__data")[0].childNodes[11].childNodes[5];

            // console.log(data);
            nameN.textContent = data[0].name;
            username.textContent = data[0].username;
            email.textContent = data[0].email;
            password.textContent = data[0].password;
            address.textContent = data[0].adress;
            card.textContent = data[0].creditcard;

            // // let logIn = document.getElementsByClassName("nav_link")[1];
            // // console.log(logIn.childNodes[0]);
            // // if(nameN != null){
            // //     logIn.childNodes[0] = "log uit";
            // // }
            

        })
        .catch(err => console.log(err));

/**<section class="account-information__data">
                    <div class="user-data">
                        <p class="user-data__type">Name</p>
                        <hr>
                        <p>John Doe</p>
                    </div>
                    <div class="user-data">
                        <p class="user-data__type">Username</p>
                        <hr>
                        <p>johndoe123</p>
                    </div>
                    <div class="user-data">
                        <p class="user-data__type">E-mail</p>
                        <hr>
                        <p>johndoe@gmail.com</p>
                    </div>
                    <div class="user-data">
                        <p class="user-data__type">Password</p>
                        <hr>
                        <p>Test1234567890</p>
                    </div>
                    <div class="user-data">
                        <p class="user-data__type">Address</p>
                        <hr>
                        <p>Honeymoon St. 1, 3456AB, StarCity </p>
                    </div>
                    <div class="user-data">
                        <p class="user-data__type">Credit card</p>
                        <hr>
                        <p>AB 123 456 789</p>
                    </div>
                </section> */