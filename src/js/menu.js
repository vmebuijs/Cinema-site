var open = document.getElementsByClassName('open-menu')[0];
var close = document.getElementsByClassName('close-menu')[0];

var container = document.getElementsByClassName('menu-container')[0].classList;

open.addEventListener('click', () => {
  container.toggle('opened');
  container.toggle('closed');
});

close.addEventListener('click', () => {
  container.toggle('opened');
  container.toggle('closed');
});


// const btn = document.getElementsByClassName('films-slideshow__button');
// const baseURL = 'http://localhost:8026/m'

// btn.addEventListener('click', getInfo);
// async function getInfo(e){
//   e.preventDefault();
//   const res = await fetch(baseURL, {
//     method:'GET'
//   });
//   console.log(res);
// }
