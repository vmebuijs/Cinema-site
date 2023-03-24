var open = document.getElementsByClassName("menu-open")[0];
var close = document.getElementsByClassName("menu-close")[0];

var wrapper = document.getElementsByClassName("menu-container")[0].classList;

open.addEventListener("click", () => {
  wrapper.toggle("opened");
  wrapper.toggle("closed");
});

close.addEventListener("click", () => {
  wrapper.toggle("opened");
  wrapper.toggle("closed");
});