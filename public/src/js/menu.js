/*
  This javascript file enables the opening and closing of the menu shown on mobile devices.
  The elements responsible for opening and closing are first stored in a variable, and then eventlisteners are added to give them the correct functionality. 
*/

//The images to click to open or close the menu
var open = document.getElementsByClassName('open-menu')[0];
var close = document.getElementsByClassName('close-menu')[0];

//The container of the menu
var container = document.getElementsByClassName('menu-container')[0].classList;

//When the images are clicked, change the class to show or hide the menu
open.addEventListener('click', () => {
  container.toggle('opened');
  container.toggle('closed');
});

close.addEventListener('click', () => {
  container.toggle('opened');
  container.toggle('closed');
});