var open = document.querySelector(".menu-open");
var close = document.querySelector(".menu-close");

var wrapper = document.querySelector(".menu-container").classList;

var open2 = document.getElementsByClassName(".menu-open")[0];
var close2 = document.getElementsByClassName(".menu-close")[0];

open.addEventListener("click", () => {
  wrapper.toggle("opened");
  wrapper.toggle("closed");
});

close.addEventListener("click", () => {
  wrapper.toggle("opened");
  wrapper.toggle("closed");
});