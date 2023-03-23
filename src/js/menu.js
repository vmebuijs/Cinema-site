const open = document.querySelector(".menu-open");
const close = document.querySelector(".menu-close");

const wrapper = document.querySelector(".menu-container").classList;

open.addEventListener("click", () => {
  wrapper.toggle("opened");
  wrapper.toggle("closed");
});

close.addEventListener("click", () => {
  wrapper.toggle("opened");
  wrapper.toggle("closed");
});