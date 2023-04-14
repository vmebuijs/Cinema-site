/*
    This file creates the contents of the film page, which is only generated/ visible when a poster or title on the index page is clicked.
    First the database is fetched. Then the headers and the footer are created in such a manner that they are identical to those on other pages. 
    After that, the film page specific elements are created and everything is added to the body of the film html page.
    Lastly, the contents of the film page elements are set based on which film was clicked.
*/

fetch('m')
    .then(res => res.json())
    .then(data => {
        //Getting the body of the film html file
        var body = document.getElementsByClassName('film-body')[0];

        //Creation of the desktop header
        var desktopHeader = document.createElement('header');
        desktopHeader.classList.add('header--desktop');

        //The cinema logo on the top-left side
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
        navLink1.setAttribute('href', 'order.html');
        navLink1.textContent = 'Tickets';
        var navLink2 = document.createElement('a');
        navLink2.classList.add('nav__link');
        navLink2.setAttribute('href', 'login.html');
        navLink2.textContent = 'Log in';
        nav.appendChild(navLink1);
        nav.appendChild(navLink2);
        
        //The account button on the top-right
        var account = document.createElement('a');
        account.setAttribute('href', 'account.html');
        var userImage = document.createElement('img');
        userImage.classList.add('user-image');
        userImage.setAttribute('src', 'src/img/account.png');
        userImage.setAttribute('alt', 'A white icon consisting of a circle and the outline of a portrait of a person')
        userImage.setAttribute('width', '50px');
        account.appendChild(userImage);

        //The elements are appended to the desktop header
        desktopHeader.append(logo, nav, account);


        //Creation of the mobile header
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

        //The eventlisteners are added to be able to open and close the menu
        var menuClasses = menu.classList;
        openMenu.addEventListener('click', () => {
            menuClasses.toggle('opened');
            menuClasses.toggle('closed');
        });
        closeMenu.addEventListener('click', () => {
            menuClasses.toggle('opened');
            menuClasses.toggle('closed');
        });
        
        //The (hidden) menu on the side
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
        menuLink2.setAttribute('href', 'order.html');
        menuLink2.textContent = 'Tickets';
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

        //Everything is appended to the mobile header in a hierarchical manner
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
        var footerLink4 = document.createElement('a');
        footerLink4.classList.add('footer__link');
        footerLink4.setAttribute('href', 'order.html');
        footerLink4.textContent = 'Order';

        //The elements are appended to the footer
        footer.append(footerLink1, footerLink2, footerLink3, footerLink4);


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

        //The headers, footer, and film overview are appended to the body of the html film page
        body.append(desktopHeader, mobileHeader, filmInfo, footer);

        //Getting the film-id from the url
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
        
        //Changes the title of the page 
        document.title = 'An overview of: ' + data[id].title;
    })    
    .catch(err => console.log(err));