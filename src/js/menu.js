var open = document.getElementsByClassName("menu-open")[0];
var close = document.getElementsByClassName("menu-close")[0];

var container = document.getElementsByClassName("menu-container")[0].classList;

open.addEventListener("click", () => {
  container.toggle("opened");
  container.toggle("closed");
});

close.addEventListener("click", () => {
  container.toggle("opened");
  container.toggle("closed");
});