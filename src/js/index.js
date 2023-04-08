fetch('http://localhost:8026/tp') //http://localhost:8026/tp
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const nextButton = document.getElementsByClassName('films-slideshow__button')[1];
        const previousButton = document.getElementsByClassName('films-slideshow__button')[0];
        const slide = document.getElementsByClassName('films-slideshow__poster')[0];
        const slideTwo = document.getElementsByClassName('films-slideshow__poster')[1];
        const slideThree = document.getElementsByClassName('films-slideshow__poster')[2];
        const slideFour = document.getElementsByClassName('films-slideshow__poster')[3];

        let n = 0;
        let m = 1;
        let p = 2;
        let k = 3;
        slide.src = data[n].poster;
        slideTwo.src = data[m].poster;
        slideThree.src = data[p].poster;
        slideFour.src = data[k].poster;
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
                }else{
                    slideFour.src = none;
                }
                
            }catch{

            }
        });

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
            }catch{

            }
            
        });
        
        
        

        console.log(data);
        var bla = document.getElementsByClassName('film__title');
        var pic = document.getElementsByClassName('film__poster');
        for(var i = 0; i < bla.length; i++){
           
                // console.log(data);
                // output += `
                // <ul>
                //     <li>${data[j].title}</li>
                // </ul>
                // `;
            bla[i].textContent = data[i].title;
            pic[i].src = data[i].poster;
        }
        

        
        //buttons for pagination
        var overview = document.getElementsByClassName('films-overview__films')[0];
        let currentPage = 0;
        let films = 10;

        function displayFilms(overview, page){

            let start = films * page;
            let end = start + films;

            for (var i = start; i < end; i++){
                let itemElement = document.createElement('figure');
                itemElement.classList.add('film');
                
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

        const buttonNow = document.getElementsByClassName('film-schedule')[0];
        const buttonSoon = document.getElementsByClassName('film-schedule')[1];

        function changePage(clickedButton, otherButton){
            var buttons = document.getElementsByClassName('film-schedule');
            currentPage = clickedButton;
            
            while(overview.firstChild){
                overview.removeChild(overview.lastChild);
            }

            displayFilms(overview, currentPage);
            buttons[otherButton].classList.remove('active');
            buttons[clickedButton].classList.add('active');
            if(clickedButton == 0){
                loadData(0);
            }
            if(clickedButton == 1){
                loadData(10);
            }
        }

        buttonNow.addEventListener('click', () => {changePage(0, 1);}, false);
        buttonSoon.addEventListener('click', () => {changePage(1, 0);}, false);

        function loadData(startingPoint){
            //loads the posters and titles from the database
            var bla = document.getElementsByClassName('film__title');
            var pic = document.getElementsByClassName('film__poster');

            for(let i = 0; i < bla.length; i++){
                var j = startingPoint + i;
                bla[i].textContent = data[j].title;
                pic[i].src = data[j].poster;
            }
        }
        
        // function registerEvent(){
        //     // displayFilms(overview, currentPage);
        //     // loadData(0);
        //     // buttonNow.addEventListener('click', () => {changePage(0, 1);}, false);
        //     // buttonSoon.addEventListener('click', () => {changePage(1, 0);}, false);
        //     x.addEventListener(myFunction) // Attach listener function on state changes
        // }
        
        displayFilms(overview, currentPage);
        loadData(0);
              
        //To restructure the page
        function responsiveOverview(screenWidth){
            var x = document.getElementsByClassName('films-overview')[0];
            if(screenWidth.matches){
                x.style.backgroundColor = "yellow";
            }
            else{
                x.style.backgroundColor = "pink";
            }
        }

        //Registering events for the images and the director's and writers names
        function registerEvents(){
            //Structures the overview differently to make it easier to read
            var screenWidth = window.matchMedia("(max-width: 850px)");
            screenWidth.addEventListener('change', responsiveOverview, false);

        }

        window.addEventListener('load', registerEvents, false);
    })
    .catch(err => console.log(err));
    fetch('http://localhost:8026/m')//http://localhost:8026/m
    .then(res => res.json())
    .then(data => {
        console.log(data)
        // var ki = document.getElementsByTagName('h1');
        // for(let dat of data){
        //     ki.textContent = dat.title;
        //     console.log(ki.textContent);
        // }
        // bla[i].textContent = data[i].title;
        // pic[i].src = data[i].poster;
    }
)
    .catch(err => console.log(err));

    // on click picture index + 1, id van de foreach is de picture index

