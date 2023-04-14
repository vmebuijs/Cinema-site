// var body = document.getElementsByClassName('film-body')[0];
// var footer = document.getElementsByClassName('footer')[0];
// var texto = document.createElement('p');
// var textn = document.createTextNode('hgfdsa');


// texto.appendChild(textn);

// texto.style.fontSize = '50px';
// texto.style.marginTop = '200px';

// body.insertBefore(texto, footer);
var body = document.getElementsByClassName('film-body')[0];
var firstScript = document.getElementsByClassName('first-script')[0];


fetch('http://localhost:8026/m')
    .then(res => res.json())
    .then(data => {
        //Creating the headers
        //Desktop version
        var desktopHeader = document.createElement('header');
        desktopHeader.classList.add('header--desktop');

        //Logo on the left side
        var logo = document.createElement('div');
        logo.classList.add('logo-container');
        var logoLink = document.createElement('a');
        logoLink.setAttribute('href', 'index.html');
        var logoIMG = document.createElement('img');
        logoIMG.classList.add('logo-image');
        logoIMG.setAttribute('src', 'src/img/exploding-kittens.jpg');
        logoIMG.setAttribute('alt', 'The Starry Nights Cinemas logo');
        logoIMG.setAttribute('width', '100px');
        logoLink.appendChild(logoIMG);
        logo.appendChild(logoLink);

        //The nav elements
        var nav = document.createElement('nav');
        nav.classList.add('nav');
        var navLink1 = document.createElement('a');
        navLink1.classList.add('nav__link');
        navLink1.setAttribute('href', '#');
        navLink1.textContent = 'Films';
        var navLink2 = document.createElement('a');
        navLink2.classList.add('nav__link');
        navLink2.setAttribute('href', 'login.html');
        navLink2.textContent = 'Log in';
        nav.appendChild(navLink1);
        nav.appendChild(navLink2);
        
        //Account button
        var account = document.createElement('a');
        account.setAttribute('href', 'account.html');
        var userImage = document.createElement('img');
        userImage.classList.add('user-image');
        userImage.setAttribute('src', 'src/img/account.png');
        userImage.setAttribute('alt', 'A white icon consisting of a circle and the outline of a portrait of a person')
        userImage.setAttribute('width', '50px');
        account.appendChild(userImage);

        desktopHeader.append(logo, nav, account);


        //Mobile version
        var mobileHeader = document.createElement('header');
        mobileHeader.classList.add('header--mobile');

        //Logo at the top of the page
        var logo = document.createElement('div');
        logo.classList.add('logo-container');
        var logoLink = document.createElement('a');
        logoLink.setAttribute('href', '#');
        var logoIMG = document.createElement('img');
        logoIMG.classList.add('logo-image');
        logoIMG.setAttribute('src', 'src/img/exploding-kittens.jpg');
        logoIMG.setAttribute('alt', 'The Starry Nights Cinemas logo');
        logoIMG.setAttribute('width', '100px');
        logoLink.appendChild(logoIMG);
        logo.appendChild(logoLink);

        //Icons to open and close the menu
        var menu = document.createElement('div');
        menu.classList.add('menu-container');
        menu.classList.add('closed');
        var openMenu = document.createElement('img');
        openMenu.classList.add('open-menu');
        openMenu.setAttribute('src', 'src/svg/open.svg');
        var closeMenu = document.createElement('img');
        closeMenu.classList.add('close-menu');
        closeMenu.setAttribute('src', 'src/svg/close.svg');

        var menuClasses = menu.classList;
        openMenu.addEventListener('click', () => {
            menuClasses.toggle('opened');
            menuClasses.toggle('closed');
        });
        closeMenu.addEventListener('click', () => {
            menuClasses.toggle('opened');
            menuClasses.toggle('closed');
        });
        
        //The menu on the side
        var menuNav = document.createElement('nav');
        menuNav.classList.add('menu');
        var menuNavLogo = document.createElement('img');
        menuNavLogo.classList.add('menu__item');
        menuNavLogo.setAttribute('src', 'src/img/exploding-kittens.jpg');
        menuNavLogo.setAttribute('alt', 'The Starry Nights Cinemas logo');
        menuNavLogo.setAttribute('width', '100px');

        //The links within the menu
        var menuLink1 = document.createElement('a');
        menuLink1.classList.add('menu__item');
        menuLink1.setAttribute('href', 'index.html');
        menuLink1.textContent = 'Home';
        var menuLink2 = document.createElement('a');
        menuLink2.classList.add('menu__item');
        menuLink2.setAttribute('href', '#');
        menuLink2.textContent = 'Films';
        var menuLink3 = document.createElement('a');
        menuLink3.classList.add('menu__item');
        menuLink3.setAttribute('href', 'login.html');
        menuLink3.textContent = 'Log in';
        var menuLink4 = document.createElement('a');
        menuLink4.classList.add('menu__item');
        menuLink4.setAttribute('href', 'account.html');
        var menuAccount = document.createElement('img');
        menuAccount.classList.add('user-image');
        menuAccount.setAttribute('src', 'src/img/account.png');
        menuAccount.setAttribute('alt', 'The Starry Nights Cinemas logo');
        menuAccount.setAttribute('width', '50px');
        menuLink4.appendChild(menuAccount);

        menuNav.append(menuNavLogo, menuLink1, menuLink2, menuLink3, menuLink4);
        menu.append(closeMenu, menuNav);
        mobileHeader.append(logo, openMenu, menu);

        //The content regarding the clicked film
        var filmInfo = document.createElement('article');
        var filmInfoPoster = document.createElement('img');
        var filmInfoText = document.createElement('article');

        filmInfo.classList.add('general-film-info');
        filmInfoPoster.classList.add('general-film-info__poster');
        filmInfoText.classList.add('general-film-info__text');

        var filmTitle = document.createElement('h1');
        filmTitle.classList.add('info-element');
        filmInfoText.appendChild(filmTitle);
        for(var i = 0; i < 6; i++){
            var infoElement = document.createElement('p');
            infoElement.classList.add('info-element');
            filmInfoText.appendChild(infoElement);
        }
        var filmTrailer = document.createElement('iframe');
        filmTrailer.classList.add('info-element', 'film-trailer');
        filmTrailer.setAttribute('width', '50%');
        filmTrailer.setAttribute('height', '100%');
        filmInfoText.appendChild(filmTrailer);
        filmInfo.append(filmInfoPoster, filmInfoText);

        //The footer
        var footer = document.createElement('footer');
        footer.classList.add('footer');
        var footerLink1 = document.createElement('a');
        footerLink1.classList.add('footer__link');
        footerLink1.setAttribute('href', '#');
        footerLink1.textContent = 'Top of the page';
        var footerLink2 = document.createElement('a');
        footerLink2.classList.add('footer__link');
        footerLink2.setAttribute('href', 'index.html');
        footerLink2.textContent = 'Home';
        var footerLink3 = document.createElement('a');
        footerLink3.classList.add('footer__link');
        footerLink3.setAttribute('href', 'account.html');
        footerLink3.textContent = 'Account';

        footer.append(footerLink1, footerLink2, footerLink3);

        body.append(desktopHeader, mobileHeader, filmInfo, footer);

        //Creating the elements on the page

        //Getting the id from the url
        const querystring = window.location.search;
        const urlQuery = new URLSearchParams(querystring);
        const id = urlQuery.get('id');

        //Setting the content on the page based on the id of the clicked film
        filmInfoPoster.setAttribute('src', data[id].poster);
        filmInfoPoster.setAttribute('alt', 'A poster for the film ' + data[id].title);
        filmInfoText.children[0].textContent = data[id].title;
        filmInfoText.children[1].textContent = data[id].year;
        filmInfoText.children[2].textContent = data[id].genre;
        filmInfoText.children[3].textContent = data[id].director;
        filmInfoText.children[4].textContent = data[id].writers;
        filmInfoText.children[5].textContent = data[id].plot;
        filmInfoText.children[6].textContent = data[id].stars;
        filmInfoText.children[7].setAttribute('src', 'https://www.youtube.com/embed/Ur_DIHs92NM');       
    })    
    .catch(err => console.log(err));fetch('http://localhost:8026/m')
    .then(res => res.json())
    .then(data => {
        //Creating the headers
        var body = document.getElementsByClassName('film-body')[0];

        //Desktop version
        var desktopHeader = document.createElement('header');
        desktopHeader.classList.add('header--desktop');

        //Logo on the left side
        var logo = document.createElement('div');
        logo.classList.add('logo-container');
        var logoLink = document.createElement('a');
        logoLink.setAttribute('href', 'index.html');
        var logoIMG = document.createElement('img');
        logoIMG.classList.add('logo-image');
        logoIMG.setAttribute('src', 'src/img/exploding-kittens.jpg');
        logoIMG.setAttribute('alt', 'The Starry Nights Cinemas logo');
        logoIMG.setAttribute('width', '100px');
        logoLink.appendChild(logoIMG);
        logo.appendChild(logoLink);

        //The nav elements
        var nav = document.createElement('nav');
        nav.classList.add('nav');
        var navLink1 = document.createElement('a');
        navLink1.classList.add('nav__link');
        navLink1.setAttribute('href', '#');
        navLink1.textContent = 'Films';
        var navLink2 = document.createElement('a');
        navLink2.classList.add('nav__link');
        navLink2.setAttribute('href', 'login.html');
        navLink2.textContent = 'Log in';
        nav.appendChild(navLink1);
        nav.appendChild(navLink2);
        
        //Account button
        var account = document.createElement('a');
        account.setAttribute('href', 'account.html');
        var userImage = document.createElement('img');
        userImage.classList.add('user-image');
        userImage.setAttribute('src', 'src/img/account.png');
        userImage.setAttribute('alt', 'A white icon consisting of a circle and the outline of a portrait of a person')
        userImage.setAttribute('width', '50px');
        account.appendChild(userImage);

        desktopHeader.append(logo, nav, account);


        //Mobile version
        var mobileHeader = document.createElement('header');
        mobileHeader.classList.add('header--mobile');

        //Logo at the top of the page
        var logo = document.createElement('div');
        logo.classList.add('logo-container');
        var logoLink = document.createElement('a');
        logoLink.setAttribute('href', '#');
        var logoIMG = document.createElement('img');
        logoIMG.classList.add('logo-image');
        logoIMG.setAttribute('src', 'src/img/exploding-kittens.jpg');
        logoIMG.setAttribute('alt', 'The Starry Nights Cinemas logo');
        logoIMG.setAttribute('width', '100px');
        logoLink.appendChild(logoIMG);
        logo.appendChild(logoLink);

        //Icons to open and close the menu
        var menu = document.createElement('div');
        menu.classList.add('menu-container');
        menu.classList.add('closed');
        var openMenu = document.createElement('img');
        openMenu.classList.add('open-menu');
        openMenu.setAttribute('src', 'src/svg/open.svg');
        var closeMenu = document.createElement('img');
        closeMenu.classList.add('close-menu');
        closeMenu.setAttribute('src', 'src/svg/close.svg');

        var menuClasses = menu.classList;
        openMenu.addEventListener('click', () => {
            menuClasses.toggle('opened');
            menuClasses.toggle('closed');
        });
        closeMenu.addEventListener('click', () => {
            menuClasses.toggle('opened');
            menuClasses.toggle('closed');
        });
        
        //The menu on the side
        var menuNav = document.createElement('nav');
        menuNav.classList.add('menu');
        var menuNavLogo = document.createElement('img');
        menuNavLogo.classList.add('menu__item');
        menuNavLogo.setAttribute('src', 'src/img/exploding-kittens.jpg');
        menuNavLogo.setAttribute('alt', 'The Starry Nights Cinemas logo');
        menuNavLogo.setAttribute('width', '100px');

        //The links within the menu
        var menuLink1 = document.createElement('a');
        menuLink1.classList.add('menu__item');
        menuLink1.setAttribute('href', 'index.html');
        menuLink1.textContent = 'Home';
        var menuLink2 = document.createElement('a');
        menuLink2.classList.add('menu__item');
        menuLink2.setAttribute('href', '#');
        menuLink2.textContent = 'Films';
        var menuLink3 = document.createElement('a');
        menuLink3.classList.add('menu__item');
        menuLink3.setAttribute('href', 'login.html');
        menuLink3.textContent = 'Log in';
        var menuLink4 = document.createElement('a');
        menuLink4.classList.add('menu__item');
        menuLink4.setAttribute('href', 'account.html');
        var menuAccount = document.createElement('img');
        menuAccount.classList.add('user-image');
        menuAccount.setAttribute('src', 'src/img/account.png');
        menuAccount.setAttribute('alt', 'The Starry Nights Cinemas logo');
        menuAccount.setAttribute('width', '50px');
        menuLink4.appendChild(menuAccount);

        menuNav.append(menuNavLogo, menuLink1, menuLink2, menuLink3, menuLink4);
        menu.append(closeMenu, menuNav);
        mobileHeader.append(logo, openMenu, menu);


        //The footer
        var footer = document.createElement('footer');
        footer.classList.add('footer');
        var footerLink1 = document.createElement('a');
        footerLink1.classList.add('footer__link');
        footerLink1.setAttribute('href', '#');
        footerLink1.textContent = 'Top of the page';
        var footerLink2 = document.createElement('a');
        footerLink2.classList.add('footer__link');
        footerLink2.setAttribute('href', 'index.html');
        footerLink2.textContent = 'Home';
        var footerLink3 = document.createElement('a');
        footerLink3.classList.add('footer__link');
        footerLink3.setAttribute('href', 'account.html');
        footerLink3.textContent = 'Account';

        footer.append(footerLink1, footerLink2, footerLink3);


        //The content regarding the clicked film
        var filmInfo = document.createElement('article');
        var filmInfoPoster = document.createElement('img');
        var filmInfoText = document.createElement('article');

        filmInfo.classList.add('general-film-info');
        filmInfoPoster.classList.add('general-film-info__poster');
        filmInfoText.classList.add('general-film-info__text');

        var filmTitle = document.createElement('h1');
        filmTitle.classList.add('info-element');
        filmInfoText.appendChild(filmTitle);
        for(var i = 0; i < 6; i++){
            var infoElement = document.createElement('p');
            infoElement.classList.add('info-element');
            filmInfoText.appendChild(infoElement);
        }
        var filmTrailer = document.createElement('iframe');
        filmTrailer.classList.add('info-element', 'film-trailer');
        filmTrailer.setAttribute('width', '50%');
        filmTrailer.setAttribute('height', '100%');
        filmInfoText.appendChild(filmTrailer);
        filmInfo.append(filmInfoPoster, filmInfoText);

    
        body.append(desktopHeader, mobileHeader, filmInfo, footer);

        //Getting the id from the url
        const querystring = window.location.search;
        const urlQuery = new URLSearchParams(querystring);
        const id = urlQuery.get('id');

        //Setting the content on the page based on the id of the clicked film
        filmInfoPoster.setAttribute('src', data[id].poster);
        filmInfoPoster.setAttribute('alt', 'A poster for the film ' + data[id].title);
        filmInfoText.children[0].textContent = data[id].title;
        filmInfoText.children[1].textContent = data[id].year;
        filmInfoText.children[2].textContent = data[id].genre;
        filmInfoText.children[3].textContent = data[id].director;
        filmInfoText.children[4].textContent = data[id].writers;
        filmInfoText.children[5].textContent = data[id].plot;
        filmInfoText.children[6].textContent = data[id].stars;
        filmInfoText.children[7].setAttribute('src', data[id].trailer);       
    })    
    .catch(err => console.log(err));