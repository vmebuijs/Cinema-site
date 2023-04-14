/*
    This javascript file renders the films on the index page. The first thing we do is fetch the film posters and titles from the database to even use the data.
    As the slideshow is shown first, we store the needed elements for the slideshow in variables. Then eventlisteners are added to the buttons, 
    to change the src of the elements on the page.
    Then the overview of films already playing and the ones coming soon is done with pagination. 
*/
fetch('http://localhost:8026/tp')
    .then(res => res.json())
    .then(data => {
        //The buttons and posterslots in the slideshow
        const nextButton = document.getElementsByClassName('films-slideshow__button')[1];
        const previousButton = document.getElementsByClassName('films-slideshow__button')[0];
        const slide = document.getElementsByClassName('films-slideshow__poster')[0];
        const slideTwo = document.getElementsByClassName('films-slideshow__poster')[1];
        const slideThree = document.getElementsByClassName('films-slideshow__poster')[2];
        const slideFour = document.getElementsByClassName('films-slideshow__poster')[3];

        //The first four films in our database are shown when the user loads the index page
        let n = 0;
        let m = 1;
        let p = 2;
        let k = 3;
        slide.src = data[n].poster;
        slideTwo.src = data[m].poster;
        slideThree.src = data[p].poster;
        slideFour.src = data[k].poster;

        //When the next button is clicked, the films are moved one place to their left 
        nextButton.addEventListener('click', () => {
            try{
                if(k < 19){
                    n += 1;
                    m += 1;
                    p += 1;
                    k += 1;
                    slide.src = data[n].poster;
                    slideTwo.src = data[m].poster;
                    slideThree.src = data[p].poster;
                    slideFour.src = data[k].poster;
                }
                else{
                    slideFour.src = none;
                }
            }
            catch{}
        });

        //When the previous button is clicked, the films are moved one place to their right 
        previousButton.addEventListener('click', () => {
            try{
                n -= 1;
                m -= 1;
                p -= 1;
                k -= 1;
                slide.src = data[n].poster;
                slideTwo.src = data[m].poster;
                slideThree.src = data[p].poster;
                slideFour.src = data[k].poster;
            }
            catch{}
        });
        
        //The container of the overview, the current page, and the number of films on a page
        var overview = document.getElementsByClassName('films-overview__films')[0];
        let currentPage = 0;
        let films = 10;

        //Creates and displays the film in a grid view
        function displayFilms(overview, page){
            let start = films * page;
            let end = start + films;

            //Creates the film posters and titles on the page
            for (var i = start; i < end; i++){
                let itemElement = document.createElement('figure');
                itemElement.classList.add('film');
                itemElement.addEventListener('click', filmPage, false);
                itemElement.setAttribute('id', i);
                
                let itemPoster = document.createElement('img');
                itemPoster.classList.add('film__poster');

                let itemTitle = document.createElement('figcaption');
                itemTitle.classList.add('film__title');
                let title = document.createTextNode('');
                itemTitle.appendChild(title);

                itemElement.appendChild(itemPoster);
                itemElement.appendChild(itemTitle);
                overview.appendChild(itemElement);
            }
        }

        //Changes the page to show a page with information about the clicked film
        function filmPage(e){
            var clickedFilm = e.target.parentElement;
            window.location.href = '/film.html?id=' + clickedFilm.id;
        }

        //The buttons for pagination
        const buttonNow = document.getElementsByClassName('film-schedule')[0];
        const buttonSoon = document.getElementsByClassName('film-schedule')[1];
        buttonNow.addEventListener('click', () => {changePage(0, 1);}, false);
        buttonSoon.addEventListener('click', () => {changePage(1, 0);}, false);

        //Changes the films displayed based on the whether the user has clicked 'now playing' or 'coming soon'
        function changePage(clickedButton, otherButton){
            var buttons = document.getElementsByClassName('film-schedule');
            currentPage = clickedButton;
            
            //Ensures the overview is empty before adding the new films
            while(overview.firstChild){
                overview.removeChild(overview.lastChild);
            }

            displayFilms(overview, currentPage);

            buttons[otherButton].classList.remove('active');
            buttons[clickedButton].classList.add('active');

            //Ensures that the correct films are loaded onto the page
            if(clickedButton == 0){
                loadData(0);
            }
            if(clickedButton == 1){
                loadData(10);
            }
        }

        //Loads the posters and titles from the database and places them on the page
        function loadData(startingPoint){
            var title = document.getElementsByClassName('film__title');
            var poster = document.getElementsByClassName('film__poster');

            for(let i = 0; i < title.length; i++){
                var j = startingPoint + i;
                title[i].textContent = data[j].title;
                poster[i].src = data[j].poster;
            }
        }
        
        //Ensures that the 'now playing' films are shown when first loading the page
        displayFilms(overview, currentPage);
        loadData(0);
    })
    .catch(err => console.log(err));