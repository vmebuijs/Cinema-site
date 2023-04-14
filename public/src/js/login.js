/*
    This short file ensures that a user sees the register page when the create account button on the login page is clicked. 
    The button is first stored in a variable and then the eventlistener is added.
*/

//The create account button
const newAccButton = document.getElementsByClassName('new-user__button')[0];

//Changes the page when the register button is clicked
newAccButton.addEventListener('click', () => {
    window.location = 'register.html';
});